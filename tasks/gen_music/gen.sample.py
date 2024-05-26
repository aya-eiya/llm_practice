from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write

model = MusicGen.get_pretrained("facebook/musicgen-small")
model.set_generation_params(duration=30) # seconds

descriptions = ["japanese gagaku, insen scale, sakura pentatonic scale, diatonic chord, perfect fourths harmony"] * 3

wav = model.generate(descriptions, progress=True)

for idx, one_wav in enumerate(wav):
    # Will save under {idx}.wav, with loudness normalization at -14 db LUFS.
    audio_write(f'{idx}', one_wav.cpu(), model.sample_rate, strategy="loudness")
