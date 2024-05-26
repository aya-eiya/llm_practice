from pydub import AudioSegment

def crossfade_audio(files, overlap_duration=3000, output_file="output.wav"):
    # 音声ファイルを読み込む
    segments = [AudioSegment.from_wav(file) for file in files]

    # フェードイン、フェードアウトを適用しながら結合
    combined = segments[0]
    for i in range(1, len(segments)):
        # 前のセグメントの最後の部分をフェードアウト
        prev_segment = combined[-overlap_duration:].fade_out(overlap_duration)
        # 現在のセグメントの最初の部分をフェードイン
        next_segment = segments[i][:overlap_duration].fade_in(overlap_duration)
        
        # 前のセグメントを重ねた部分を除去して結合
        combined = combined[:-overlap_duration] + prev_segment.overlay(next_segment) + segments[i][overlap_duration:]
    
    # 最終的なオーディオを保存
    combined.fade_out(overlap_duration * 2).export(output_file, format="wav")
  
# 使用例
files = [
  "0_no_silence.wav",
  "1_no_silence.wav",
  "2_no_silence.wav"
]
crossfade_audio(files, overlap_duration=3000, output_file="combined_output.wav")
