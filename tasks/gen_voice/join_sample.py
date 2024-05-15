from pydub import AudioSegment
import os
import re

def get_dialog_files(directory):
    files = os.listdir(directory)
    wav_files = [f'{directory}/{f}' for f in files if re.match(r'^\d.*\.wav$', f)]
    wav_files.sort()
    return wav_files


def concatenate_wav_files_with_silence(file_paths, silence_duration_ms, output_path):
    # 空のAudioSegmentを作成
    combined = AudioSegment.empty()
    
    # 指定された無音区間を生成
    silence = AudioSegment.silent(duration=silence_duration_ms)

    for file_path in file_paths:
        # WAVファイルを読み込む
        audio = AudioSegment.from_wav(file_path)
        # 音声を追加し、その後に無音区間を追加
        combined += audio + silence
    
    # 最後の無音区間を削除
    combined = combined[:-silence_duration_ms]
    
    # 結合した音声を保存
    combined.export(output_path, format="wav")

directory = "outputs"
dialog_files = get_dialog_files(directory)

silence_duration_ms = 300  # 1秒の無音区間
output_path = f"{directory}/dialog.wav"

concatenate_wav_files_with_silence(dialog_files, silence_duration_ms, output_path)
