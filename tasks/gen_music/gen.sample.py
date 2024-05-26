from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write

model = MusicGen.get_pretrained("facebook/musicgen-small")
model.set_generation_params(duration=30) # seconds

descriptions = ["metal rock, hard core, c major, 40 BMP"]

wav = model.generate(descriptions, progress=True)  # generates 2 samples.

for idx, one_wav in enumerate(wav):
    # Will save under {idx}.wav, with loudness normalization at -14 db LUFS.
    audio_write(f'{idx}', one_wav.cpu(), model.sample_rate, strategy="loudness")
