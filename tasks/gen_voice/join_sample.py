import os
import re
from pydub import AudioSegment

def __get_dialog_files(directory):
    fs = os.listdir(directory)
    wav_files = [f"{directory}/{f}" for f in fs if re.match(r"^\d.*\.wav$", f)]
    wav_files.sort()
    return wav_files


def __concatenate_wav_files_with_silence(file_paths, silence_duration_ms, output_path):
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


files = __get_dialog_files("outputs")
__concatenate_wav_files_with_silence(
    files, silence_duration_ms=300, output_path="outputs/dialog.wav"
)

# mp3に変換する場合
# ffmpeg -i "outputs/dialog.wav" -vn -ac 2 -ar 44100 -ab 256k -acodec libmp3lame -f mp3 "example.mp3"
