import os
import re
from pydub import AudioSegment

def __get_dialog_files(directory):
    fs = os.listdir(directory)
    wav_files = [f"{directory}/{f}" for f in fs if re.match(r"^\d.*\.wav$", f)]
    wav_files.sort()
    text_files = [f"{directory}/{f}" for f in fs if re.match(r"^\d.*\.txt$", f)]
    text_files.sort()
    return wav_files, text_files


def __concatenate_wav_files_with_silence(file_paths, text_paths, silence_duration_ms, output_path):
    chapter = [0]

    # 空のAudioSegmentを作成
    combined = AudioSegment.empty()

    # 指定された無音区間を生成
    silence = AudioSegment.silent(duration=silence_duration_ms)

    for file_path in file_paths:
        # WAVファイルを読み込む
        audio = AudioSegment.from_wav(file_path)
        # 音声を追加し、その後に無音区間を追加
        combined += audio + silence
        chapter.append(len(combined))
    # 最後の無音区間を削除
    combined = combined[:-silence_duration_ms]
    chapter.pop()
    chapter.append(len(combined))

    # 結合した音声を保存
    combined.export(output_path, format="wav")

    # chapter と text から字幕(.srt)ファイルを作成
    if len(file_paths) == len(text_paths):
        with open(output_path.replace(".wav", ".srt"), "w", encoding="utf-8") as f:
            merge = ""
            prev_speaker = ""
            speaker = ""
            for i, (start, end) in enumerate(zip(chapter[:-1], chapter[1:])):
                with open(text_paths[i], "r", encoding="utf-8") as t:
                    speaker = re.match(r"[^_]+_(\w+).txt", text_paths[i]).group(1)
                    line=t.read().strip()
                    if prev_speaker != speaker and speaker not in ("Narrator", "System"):
                        line = f"{speaker}) {line}"
                    if merge != "":
                        line = merge + line
                        merge = ""
                    # Question N. のばあいは、次の行も同じステップ（i）に追加する
                    if re.search(r"^Question \d+\.$",line):
                        merge = line + " "
                    # EY.は A) に変更する さらに 次の行も同じステップ（i）に追加する
                    if line in ("EY.", "EY!"):
                        merge = line = "A) "
                    # B. は B) に変更する さらに 次の行も同じステップ（i）に追加する
                    if line in ("B.", "B!"):
                        merge = line = "B) "
                    # C. は C) に変更する さらに 次の行も同じステップ（i）に追加する
                    if line in ("C.", "C!"):
                        merge = line = "C) "
                    # D. は D) に変更する さらに 次の行も同じステップ（i）に追加する
                    if line in ("D.", "D!"):
                        merge = line = "D) "
                    # E. は E) に変更する さらに 次の行も同じステップ（i）に追加する
                    if line in ("E.", "E!"):
                        merge = line = "E) "
                    f.write(f"{i+1}\n")
                    line = line.replace("My-niq", "MyniQ[/ˈmaɪ-nɪk/]")
                    # hours:minutes:seconds,milliseconds (00:00:00,000) --> hours:minutes:seconds,milliseconds (00:00:00,000)
                    f.write(f"{start//1000//60//60:02}:{start//1000//60%60:02}:{start//1000%60:02},{start%1000:03} --> ")
                    f.write(f"{end//1000//60//60:02}:{end//1000//60%60:02}:{end//1000%60:02},{end%1000:03}\n")
                    # trim last newline character and append two newlines
                    f.write(line)
                    f.write("\n\n")
                    f.write("\n")
                    prev_speaker = speaker


    print(f"結合した音声ファイルを保存しました: {output_path} ({chapter})")


wav,text = __get_dialog_files("outputs")
__concatenate_wav_files_with_silence(
    wav, text, silence_duration_ms=300, output_path="outputs/dialog.wav"
)

# mp3に変換する場合
# ffmpeg -i "outputs/dialog.wav" -vn -ac 2 -ar 44100 -ab 256k -acodec libmp3lame -f mp3 "example.mp3"

# mp4に変換する場合
# ffmpeg -loop 1 -i "sample_mp4_back.jpg" -i "outputs/dialog.wav" -vcodec libx264 -acodec aac -ab 160k -ac 2 -ar 48000 -pix_fmt yuv420p -shortest example.mp4 \
#   && ffmpeg -i example.mp4 -i outputs/dialog.srt -c copy -c:s mov_text -metadata:s:s:0 language=eng example.sub.mp4
