import json
import os
import re
from melo.api import TTS
import torch
from pydub import AudioSegment
from gen_voice_model.openvoice.api import ToneColorConverter
from gen_voice_model.openvoice.se_extractor import get_se

CONVERTER = "gen_voice_model/checkpoints_v2/converter"
SPEAKER = "gen_voice_model/checkpoints_v2/base_speakers/ses"
# DEVICE = "cuda:0" if torch.cuda.is_available() else "cpu"
# DEVICE = "cuda:0" if torch.cuda.is_available() else "mps" if torch.backends.mps.is_available() else "cpu"
DEVICE = "cpu"
OUTPUT_DIR = "outputs"

# skip if files exists
skip = True

tone_color_converter = ToneColorConverter(f"{CONVERTER}/config.json", device=DEVICE)
tone_color_converter.load_ckpt(f"{CONVERTER}/checkpoint.pth")

os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE_SAMPLES = {
    "Narrator": "voice_sample/narrator.wav",
    "System": "voice_sample/system.wav",
    "Billy": "voice_sample/billy.wav",
    "Lui": "voice_sample/lui.wav",
    "Meg": "voice_sample/meg.wav",
    "Kerry": "voice_sample/kerry.wav",
}

target_se = {}
for speaker, audio_path in VOICE_SAMPLES.items():
    se, _ = get_se(audio_path, tone_color_converter, target_dir=OUTPUT_DIR)
    target_se[speaker] = se

texts=[]
with open('/tmp/gen_voice.json', encoding='utf-8') as f:
    texts = json.load(f)

src_path = f"{OUTPUT_DIR}/tmp.wav"

# Speed is adjustable
talk_speed = 1.0

model = TTS(language="EN", device=DEVICE)
speaker_data = model.hps.data.spk2id # pylint: disable=no-member
speaker_ids = {
    "Narrator": speaker_data["EN-US"],
    "System": speaker_data["EN-US"],
    "Billy": speaker_data["EN-US"],
    "Lui": speaker_data["EN-BR"],
    "Meg": speaker_data["EN-AU"],
    "Kerry": speaker_data["EN-BR"],
}

CORP = "AY.LLC"
effect_labels = {}
for index, line in enumerate(texts):
    speaker, text = list(line.items())[0]
    line_num = str(index + 10).zfill(3)
    save_path = f"{OUTPUT_DIR}/{line_num}_{speaker}.wav"
    text_path = f"{OUTPUT_DIR}/{line_num}_{speaker}.txt"
    # if files exists then skip
    if skip and os.path.exists(save_path) and os.path.exists(text_path):
        continue
    if speaker == "Effect":
        match_silence = re.search(r"silence=(\d+)", text)
        # fade_music=["music.wav",duration=1000,start=0,fade=1000] // filename, duration of music play or label name to stop, start time in the music file, fade in out time
        match_fade = re.search(r"fade_music=\[\"(.+\.(wav|mp3))\",duration=(\d+|:\w+),start=(\d+),fade=(\d+)\]", text)
        match_label = re.search(r"label=(:\w+)", text)
        match_talk_speed = re.search(r"talk_speed=(\d+(\.\d+)?)", text)
        duration = int(match_silence.group(1)) if match_silence is not None else 0
        print(f"create silent {duration}[ms]: {save_path}")
        AudioSegment.silent(duration=duration).export(save_path, format="wav")
        #save text
        (fade_music, music_duration, music_start_time, fade_in_out_time) = (match_fade.group(1), match_fade.group(3), match_fade.group(4), match_fade.group(5)) if match_fade is not None else ("", "", "", "")
        effect_text = f"{fade_music},{music_duration},{music_start_time},{fade_in_out_time}" if match_fade is not None else ""
        if re.match(r":\w+", music_duration) is not None:
            effect_labels[music_duration] = text_path
        if match_label is not None and effect_labels[match_label.group(1)]:
            with open(effect_labels[match_label.group(1)], "r+", encoding="utf-8") as f:
                label_replaced = f.read().strip().replace(match_label.group(1), save_path)
                f.seek(0)
                f.write(label_replaced)
                f.truncate()
        if match_talk_speed is not None:
            talk_speed = float(match_talk_speed.group(1))
        with open(text_path, "w", encoding="utf-8") as f:
            f.write(effect_text)
        continue
    sid = speaker_ids.get(speaker)
    if sid is None:
        print(f"Unknown speaker: {speaker}")
        continue
    source_se = torch.load(f"{SPEAKER}/en-us.pth", map_location=DEVICE)
    model.tts_to_file(text, sid, src_path, speed=talk_speed)
    save_path = f"{OUTPUT_DIR}/{line_num}_{speaker}.wav"
    text_path = f"{OUTPUT_DIR}/{line_num}_{speaker}.txt"

    # Run the tone color converter
    print(f"create: {save_path}")
    tone_color_converter.convert(
        audio_src_path=src_path,
        src_se=source_se,
        tgt_se=target_se[speaker],
        output_path=save_path,
        message=CORP,
    )
    #save text
    with open(text_path, "w", encoding="utf-8") as f:
        f.write(text)
