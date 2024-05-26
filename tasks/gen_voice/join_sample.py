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
        # 音量を調整
        while len(audio) != 0 and audio.dBFS != -float('inf') and audio.dBFS < -30:
            audio += 2
        while len(audio) != 0 and audio.dBFS != -float('inf') and audio.dBFS > -20:
            audio -= 2
        # 音声を追加し、その後に無音区間を追加
        combined += audio + silence if len(audio) > 0 else audio
        chapter.append(len(combined))
    # 最後の無音区間を削除
    combined = combined[:-silence_duration_ms]
    chapter.pop()
    chapter.append(len(combined))

    effect_chanel=AudioSegment.empty()
    # chapter と text から字幕(.srt)ファイルを作成
    if len(file_paths) == len(text_paths):
        with open(output_path.replace(".wav", ".srt"), "w", encoding="utf-8") as f:
            merge = ""
            prev_speaker = ""
            speaker = ""
            step = 0
            for i, (start, end) in enumerate(zip(chapter[:-1], chapter[1:])):
                with open(text_paths[i], "r", encoding="utf-8") as t:
                    speaker = re.match(r"[^_]+_(\w+).txt", text_paths[i]).group(1)
                    line=t.read().strip()
                    if speaker == "Effect":
                        effect_chanel += AudioSegment.silent(duration=start-len(effect_chanel))
                        fade_cmd = line.split(",")
                        music_file, music_duration, music_start_time, fade_in_out_time = fade_cmd if len(fade_cmd) == 4 else (None,None,None,None)
                        if music_file is None:
                            continue
                        music = AudioSegment.from_wav(music_file) if music_file.endswith(".wav") else AudioSegment.from_mp3(music_file)
                        # 音量を調整
                        while len(music) != 0 and music.dBFS != -float('inf') and music.dBFS > -30:
                            music -= 2
                        d = int(music_duration) if re.match(r"\d+",music_duration) is not None else chapter[file_paths.index(music_duration)] - start
                        print(f"music_duration: {music_file} {d}")
                        segment = music[int(music_start_time):int(music_start_time) + d]
                        effect_chanel += segment.fade_in(int(fade_in_out_time)).fade_out(int(fade_in_out_time))
                        continue
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
                    step += 1
                    f.write(f"{step}\n")
                    line = line.replace("My-niq", "MyniQ[/ˈmaɪ-nɪk/]")
                    # hours:minutes:seconds,milliseconds (00:00:00,000) --> hours:minutes:seconds,milliseconds (00:00:00,000)
                    f.write(f"{start//1000//60//60:02}:{start//1000//60%60:02}:{start//1000%60:02},{start%1000:03} --> ")
                    f.write(f"{end//1000//60//60:02}:{end//1000//60%60:02}:{end//1000%60:02},{end%1000:03}\n")
                    # trim last newline character and append two newlines
                    f.write(line)
                    f.write("\n\n")
                    f.write("\n")
                    prev_speaker = speaker

    # 結合した音声を保存
    combined.overlay(effect_chanel - 6).export(output_path, format="wav")

    print(f"結合した音声ファイルを保存しました: {output_path} ({chapter})")


wav,text = __get_dialog_files("outputs")
__concatenate_wav_files_with_silence(
    wav, text, silence_duration_ms=300, output_path="outputs/dialog.wav"
)

# mp3に変換する場合
# ffmpeg -i "outputs/dialog.wav" -vn -ac 2 -ar 44100 -ab 256k -acodec libmp3lame -f mp3 "example.mp3"

# mp4に変換する場合
# ffmpeg -loop 1 -i "/tmp/.gen_voice_img.jpg" -i "outputs/dialog.wav" -vcodec libx264 -acodec aac -ab 160k -ac 2 -ar 48000 -pix_fmt yuv420p -shortest example.mp4
