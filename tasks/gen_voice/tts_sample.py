from TTS.api import TTS

# 各キャラクターの声色を持つ音声モデルの設定
narrator_tts = TTS(model_name="tts_models/en/jenny/jenny")
character_tts = TTS(model_name="tts_models/en/vctk/vits")

#
en_male_speakers = {
  'Midwest': 'p230',
}
en_female_speakers = {
  'American': 'p227',
}

# 文章を読み上げて保存
narrator_tts.tts_to_file(text="It was a dark and stormy night.", file_path="narrator.wav")
# character_tts.tts_to_file(text="What was that sound?", speaker=en_male_speakers["Midwest"], file_path="character1.wav")
# character_tts.tts_to_file(text="I think it came from the attic.", speaker=en_female_speakers["American"], file_path="character2.wav")
# character_tts.tts_to_file(text="Let's go check it out.", speaker=en_male_speakers["Midwest"], file_path="character3.wav")
# character_tts.tts_to_file(text="Are you sure it's safe?", speaker=en_female_speakers["American"], file_path="character4.wav")
