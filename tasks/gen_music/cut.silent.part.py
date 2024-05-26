from pydub import AudioSegment
from pydub.silence import detect_silence



def remove_silence(input_file, output_file, silence_thresh=-35, min_silence_len=1000, overlap_duration=1000):
    # 音声ファイルを読み込む
    audio = AudioSegment.from_file(input_file)
    
    # 無音区間を検出する
    silence_ranges = detect_silence(audio, min_silence_len=min_silence_len, silence_thresh=silence_thresh)
    
    # 無音区間を検出できない場合、元のファイルをそのまま保存
    if not silence_ranges:
        audio.export(output_file, format="wav")
        return
    
    # 無音区間を除去する
    chunks = []
    start_index = 0
    
    for start, end in silence_ranges:
        # 無音区間前の音声を追加
        if start > start_index:
            chunks.append(audio[start_index:start])
        start_index = end
    
    # 最後の無音区間後の音声を追加
    if start_index < len(audio):
        chunks.append(audio[start_index:])
    
    # 結合して保存
    combined = chunks[0]
    for i in range(1, len(chunks)):
        # 前のセグメントの最後の部分をフェードアウト
        prev_segment = combined[-overlap_duration:].fade_out(overlap_duration)
        # 現在のセグメントの最初の部分をフェードイン
        next_segment = chunks[i][:overlap_duration].fade_in(overlap_duration)
        
        # 前のセグメントを重ねた部分を除去して結合
        combined = combined[:-overlap_duration] + prev_segment.overlay(next_segment) + chunks[i][overlap_duration:]
    
    combined.export(output_file, format="wav")

remove_silence("0.wav", "0_no_silence.wav")
remove_silence("1.wav", "1_no_silence.wav")
remove_silence("2.wav", "2_no_silence.wav")
