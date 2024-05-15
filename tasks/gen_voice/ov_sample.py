import os
import torch
from gen_voice_model.openvoice.api import ToneColorConverter
from gen_voice_model.openvoice.se_extractor import get_se

ckpt_converter = 'gen_voice_model/checkpoints_v2/converter'
base_speaker = 'gen_voice_model/checkpoints_v2/base_speakers/ses'
#device = "cuda:0" if torch.cuda.is_available() else "cpu"
#device = "cuda:0" if torch.cuda.is_available() else "mps" if torch.backends.mps.is_available() else "cpu"
device = "cpu"
output_dir = 'outputs'

tone_color_converter = ToneColorConverter(f'{ckpt_converter}/config.json', device=device)
tone_color_converter.load_ckpt(f'{ckpt_converter}/checkpoint.pth')

os.makedirs(output_dir, exist_ok=True)

reference_speakers = {
  'Billy': 'gen_voice_model/resources/billy.wav',
  'Lui': 'gen_voice_model/resources/lui.wav',
  'Meg': 'gen_voice_model/resources/meg.wav',
  'Kerry': 'gen_voice_model/resources/kerry.wav'
}
# build target_se dictionary from reference speakers
target_se = {}
for speaker, audio_path in reference_speakers.items():
  se, _ = get_se(audio_path, tone_color_converter, target_dir=output_dir)
  target_se[speaker] = se

from melo.api import TTS

texts = [
    { "Billy": "I couldn't believe what I just read! The government's treatment of those men was horrific." },
    { "Lui": "Indeed, Billy. It's appalling to think that such an experiment could have been conducted without consent or knowledge of the subjects involved." },
    { "Meg": "And it's not just the initial experiment itself, but also the fact that they were denied treatment and left to suffer for so long." },
    { "Kerry": "I know what you mean, Meg. It's like, how could they do that to people? And then cover it up for so many years?" },
    { "Billy": "It's even more disturbing when you think about the impact it had on their families and communities."},
    { "Lui": "Yes, the ripple effects of this experiment are still being felt today. We need to make sure that such atrocities never happen again."},
    { "Meg": "I agree with Lui. We should learn from this history and ensure that ethical standards are upheld in any future research or experimentation."},
    { "Kerry": "And we shouldn't just stop at apologizing for past wrongs, but also work towards creating a more just and equitable society for all."},
    { "Billy": "I think James' testimony really brought home the human cost of this experiment. His story is a powerful reminder of why ethics are so important in research."},
    { "Lui": "Absolutely, Billy. We can't forget the people who were affected by this study and ensure that their sacrifices are not forgotten."}
]

src_path = f'{output_dir}/tmp.wav'

# Speed is adjustable
speed = 1.0

model = TTS(language='EN', device=device)
speaker_ids = {
  'Billy': model.hps.data.spk2id['EN-US'],
  'Lui': model.hps.data.spk2id['EN-BR'],
  'Meg': model.hps.data.spk2id['EN-AU'],
  'Kerry': model.hps.data.spk2id['EN-BR']
}

for index,line in enumerate(texts):
  speaker, text = list(line.items())[0]
  source_se = torch.load(f'{base_speaker}/en-us.pth', map_location=device)
  model.tts_to_file(text, speaker_ids[speaker], src_path, speed=speed)
  save_path = f'{output_dir}/{str(index).zfill(2)}_{speaker}.wav'

  # Run the tone color converter
  encode_message = "AY.LLC"
  tone_color_converter.convert(
    audio_src_path=src_path, 
    src_se=source_se, 
    tgt_se=target_se[speaker], 
    output_path=save_path,
    message=encode_message)
