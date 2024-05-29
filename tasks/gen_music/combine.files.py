from pydub import AudioSegment

def crossfade_audio(segments, overlap_duration=3000):
    if len(segments) == 0:
        return AudioSegment.silent(duration=0)
    # フェードイン、フェードアウトを適用しながら結合
    combined = segments[0]
    if overlap_duration > 0:
        for i in range(1, len(segments)):
            # 前のセグメントの最後の部分をフェードアウト
            prev_segment = combined[-overlap_duration:].fade_out(overlap_duration)
            # 現在のセグメントの最初の部分をフェードイン
            next_segment = segments[i][:overlap_duration].fade_in(overlap_duration)

            # 前のセグメントを重ねた部分を除去して結合
            combined = combined[:-overlap_duration] + prev_segment.overlay(next_segment) + segments[i][overlap_duration:]
    else:
        for i in range(1, len(segments)):
            combined += segments[i];
    return combined

# 使用例
ch1 = [
  "parts/11_bossa_bmp120_8beats.wav",
  "parts/11_bossa_bmp120_8beats.wav"
]
ch2 = [
]


ch1_sound = crossfade_audio(
  [
    crossfade_audio(
      [AudioSegment.from_wav(file) for file in ch1]
      , overlap_duration=0
    ),
    crossfade_audio(
      [AudioSegment.from_wav(file) for file in ch2]
      , overlap_duration=0
    ),
  ], overlap_duration=0
)

se_sound = crossfade_audio(
  [
    AudioSegment.from_wav("parts/SE_noise_record_01.wav"),
    AudioSegment.silent(duration=1000),
    AudioSegment.from_wav("parts/SE_noise_record_02.wav") - 6,
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_02.wav") - 6,
    AudioSegment.silent(duration=1000),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav") - 6,
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav") - 6,
    AudioSegment.silent(duration=1000),
    AudioSegment.from_wav("parts/SE_noise_record_02.wav") - 6,
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav") - 6,
    AudioSegment.silent(duration=1000),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav") - 6,
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_02.wav") - 6,
    AudioSegment.silent(duration=1000),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav") - 6,
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav"),
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav"),
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav"),
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav"),
    AudioSegment.silent(duration=900),
    AudioSegment.from_wav("parts/SE_noise_record_03.wav"),
  ], overlap_duration=300
) - 20

(AudioSegment.silent(duration=5000) + ch1_sound.fade_in(1000).fade_out(5000)).overlay(se_sound).export("ch1.wav", format="wav")
