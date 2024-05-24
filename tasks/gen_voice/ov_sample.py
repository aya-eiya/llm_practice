import json
import os
from melo.api import TTS
import torch
from gen_voice_model.openvoice.api import ToneColorConverter
from gen_voice_model.openvoice.se_extractor import get_se

CONVERTER = "gen_voice_model/checkpoints_v2/converter"
SPEAKER = "gen_voice_model/checkpoints_v2/base_speakers/ses"
# DEVICE = "cuda:0" if torch.cuda.is_available(."}, {"System": "else "cpu"
# DEVICE = "cuda:0" if torch.cuda.is_available(."}, {"System": "else "mps" if torch.backends.mps.is_available(."}, {"System": "else "cpu"
DEVICE = "cpu"
OUTPUT_DIR = "outputs"

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
SPEED = 1.0

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
for index, line in enumerate(texts):
    speaker, text = list(line.items())[0]
    source_se = torch.load(f"{SPEAKER}/en-us.pth", map_location=DEVICE)
    model.tts_to_file(text, speaker_ids[speaker], src_path, speed=SPEED)
    line_num = str(index + 10).zfill(3)
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
