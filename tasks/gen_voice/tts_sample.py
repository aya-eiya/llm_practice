from melo.api import TTS
import torch
import os

from gen_voice_model.openvoice.api import ToneColorConverter
from gen_voice_model.openvoice.se_extractor import get_se

CONVERTER = "gen_voice_model/checkpoints_v2/converter"
SPEAKER = "gen_voice_model/checkpoints_v2/base_speakers/ses"
# DEVICE = "cuda:0" if torch.cuda.is_available() else "cpu"
DEVICE = "cuda:0" if torch.cuda.is_available() else "mps" if torch.backends.mps.is_available() else "cpu"
# DEVICE = "cpu"

languages = ["EN", "JP"]
texts = {
  "EN": "T-T-S is a text-to-speech system that can generate human-like speech from text input. It uses deep learning techniques to synthesize speech that sounds natural and expressive.",
  "JP": "ティーティーエスは、テキスト入力から人間のような音声を生成できるテキスト音声合成システムです。深層学習技術を使用して、自然で表現豊かな音声を合成します。"
}
tone_color_converter = ToneColorConverter(f"{CONVERTER}/config.json", device=DEVICE)
tone_color_converter.load_ckpt(f"{CONVERTER}/checkpoint.pth")
# list of ./voice_sample/{cv}.wav as voices using os module
voices = {}
for dirpath, dirnames, filenames in os.walk("./voice_sample"):
    for filename in filenames:
        if filename.endswith(".wav"):
            cv = filename.split("/")[-1].split(".")[0]
            voices[cv] = filename

target_se = {}
for cv, audio_path in voices.items():
    se, _ = get_se(audio_path, tone_color_converter, target_dir=".sample/")
    target_se[cv] = se

for language in languages:
    model = TTS(language=language, device=DEVICE)
    speaker_ids = model.hps.data.spk2id # pylint: disable=no-member
    speakers = list(speaker_ids.keys())
    for speaker in speakers:
        speaker_id = speaker_ids[speaker]
        print(f"Generating speech for speaker: {speaker} with ID: {speaker_id}")
        if not os.path.exists(f".sample/{speaker}.wav"):
            model.tts_to_file(text=texts[language], speaker_id=speaker_id, output_path=f".sample/{speaker}.wav")
        for cv, audio_path in voices.items():
          source_se = torch.load(f"{SPEAKER}/en-us.pth", map_location=DEVICE)
          tone_color_converter.convert(
            audio_src_path=f".sample/{speaker}.wav",
            src_se=source_se,
            tgt_se=target_se[cv],
            output_path=f".sample/{speaker}_{cv}.wav",
            message="sample",
          )
