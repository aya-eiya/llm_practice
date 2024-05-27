from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write

model = MusicGen.get_pretrained("facebook/musicgen-small")
model.set_generation_params(duration=10) # seconds

descriptions = [",".join(["night club music", "sad", "piano", "trumpet", "moody", "jazz", "slow beat"])]

wav = model.generate(descriptions, progress=True)

for idx, one_wav in enumerate(wav):
    # Will save under {idx}.wav, with loudness normalization at -14 db LUFS.
    audio_write(f'{idx}', one_wav.cpu(), model.sample_rate, strategy="loudness")
