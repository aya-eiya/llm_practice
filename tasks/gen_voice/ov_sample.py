import os
from melo.api import TTS
import torch
from gen_voice_model.openvoice.api import ToneColorConverter
from gen_voice_model.openvoice.se_extractor import get_se

CONVERTER = "gen_voice_model/checkpoints_v2/converter"
SPEAKER = "gen_voice_model/checkpoints_v2/base_speakers/ses"
# DEVICE = "cuda:0" if torch.cuda.is_available(."}, {"System": "else "cpu"
# DEVICE = "cuda:0" if torch.cuda.is_available(."}, {"System": "else "mps" if torch.backends.mps.is_available(."}, {"System": "else "cpu"
DEVICE = "cpu"
OUTPUT_DIR = "outputs"

tone_color_converter = ToneColorConverter(f"{CONVERTER}/config.json", device=DEVICE)
tone_color_converter.load_ckpt(f"{CONVERTER}/checkpoint.pth")

os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE_SAMPLES = {
    "Narrator": "voice_sample/narrator.wav",
    "System": "voice_sample/system.wav",
    "Billy": "voice_sample/billy.wav",
    "Lui": "voice_sample/lui.wav",
    "Meg": "voice_sample/meg.wav",
    "Kerry": "voice_sample/kerry.wav",
}

target_se = {}
for speaker, audio_path in VOICE_SAMPLES.items():
    se, _ = get_se(audio_path, tone_color_converter, target_dir=OUTPUT_DIR)
    target_se[speaker] = se


texts = [
    {
        "System": "Improve Your English Skills with Daily AI-Generated Novels and Learning Tests."
    },
    {"System": "Echoes of Versailles"},
    {
        "Narrator": "In a parallel universe, the Treaty of Versaille was not signed and World War One raged on for years."
    },
    {
        "Narrator": "The world had changed dramatically, with advanced technology and new forms of energy dominating the landscape."
    },
    {"Narrator": "However, amidst this new era, memories of the past lingered."},
    {
        "Narrator": "As a group of scientists and historians delved deeper into the archives of history, they discovered an alternative timeline where the Treaty of Versaille had been signed and World War One had ended."
    },
    {
        "Narrator": "They were fascinated by the potential consequences of this event and set out to explore it further."
    },
    {
        "Narrator": "Using advanced time-travel technology, they journeyed back in time to the signing of the Treaty of Versailles."
    },
    {
        "Narrator": "Upon arrival, they were greeted by a world vastly different from their own."
    },
    {
        "Narrator": "The harsh penalties imposed on Germany had left deep scars on the nation and its people."
    },
    {
        "Narrator": "As they explored this new timeline, they began to unravel the complex web of consequences that stemmed from the signing of the Treaty of Versailles."
    },
    {
        "Narrator": "They discovered a world where technology had advanced beyond their wildest dreams, but at what cost?"
    },
    {
        "Narrator": "And as they returned to their own time, they were left to wonder if the events of the past could ever truly be changed."
    },
    {
        "System": "Now, let's move on to the conversation between Billy, Meg, Kelly, and their teacher, Louis, after reading the novel."
    },
    {
        "Billy": "I loved how the novel explored the consequences of the Treaty of Versailles. It really made me think about how our actions can have far-reaching effects."
    },
    {
        "Meg": "Oh, I know what you mean, Billy! And I was blown away by the technology in this world. It's like a dream come true... but at what cost, right?"
    },
    {
        "Kerry": "Yeah, it's all about balance, folks. We can't just keep advancing without considering the impact on people and the environment."
    },
    {
        "Lui": "I agree with you both. The novel raises important questions about responsibility and the human condition. As educators, we need to consider these themes in our teaching."
    },
    {
        "Billy": "Exactly! And I think that's what makes this novel so powerful - it challenges us to think critically about the past and how it shapes our present."
    },
    {
        "Meg": "And it made me realize how important it is to appreciate the small things in life. In a world with advanced technology, we can get lost in the details..."
    },
    {
        "Kerry": "But what if that's exactly what's happening? What if our obsession with tech is distracting us from the bigger picture?"
    },
    {
        "Lui": "Well, Kerry, I think that's a valid concern. As educators, we need to ensure that our students are aware of these issues and can make informed decisions."
    },
    {
        "Billy": "I'm glad the novel didn't sugarcoat anything. It was refreshing to see characters grappling with real-world problems."
    },
    {
        "Meg": "Absolutely! And I loved how the novel wove together history, science, and imagination. It was a true adventure!"
    },
    {
        "System": "Now, let's test your understanding of the novel and the dialogue with 5 questions."
    },
    {"System": "Question.1"},
    {
        "System": "What was the main event that did not happen in the parallel universe described in the novel?"
    },
    {"System": "Ay!"},
    {"System": "The Treaty of Versailles was signed."},
    {"System": "B."},
    {"System": "World War One ended."},
    {"System": "C."},
    {"System": "A new form of energy emerged."},
    {"System": "D."},
    {"System": "The scientists traveled back in time."},
    {"System": "E."},
    {"System": "The world remained unchanged."},
    {"System": "The Answer is."},
    {"System": "Ay!"},
    {"System": "The Treaty of Versailles was signed."},
    {"System": "Question.2"},
    {"System": "According to the dialogue, what did Billy think about the novel?."},
    {"System": "Ay!"},
    {"System": "It was too complex."},
    {"System": "B."},
    {"System": "It didn't explore consequences well."},
    {"System": "C."},
    {"System": "It made him think critically."},
    {"System": "D."},
    {"System": "It was boring."},
    {"System": "E."},
    {"System": "It had too much technology."},
    {"System": "The Answer is."},
    {"System": "C."},
    {"System": "It made him think critically."},
    {"System": "Question.3."},
    {"System": "What concern did Kerry raise in the dialogue?."},
    {"System": "Ay!"},
    {"System": "The novel didn't have enough science."},
    {"System": "B."},
    {"System": "The characters were not relatable."},
    {"System": "C."},
    {"System": "Our obsession with tech is distracting us from the bigger picture."},
    {"System": "D."},
    {"System": "The world was too perfect."},
    {"System": "E."},
    {"System": "There wasn't enough history."},
    {"System": "The Answer is."},
    {"System": "C."},
    {"System": "Our obsession with tech is distracting us from the bigger picture."},
    {"System": "Question.4"},
    {"System": "What did Meg think about the technology in the novel?."},
    {"System": "Ay!"},
    {"System": "It was outdated."},
    {"System": "B."},
    {"System": "It was a dream come true but at what cost."},
    {"System": "C."},
    {"System": "It was irrelevant to the story."},
    {"System": "D."},
    {"System": "It was too complex."},
    {"System": "E."},
    {"System": "It wasn't described."},
    {"System": "The Answer is."},
    {"System": "B."},
    {"System": "It was a dream come true but at what cost."},
    {"System": "Question.5"},
    {"System": "What did Lui think about the novel's themes?."},
    {"System": "Ay!"},
    {"System": "They were too simplistic."},
    {"System": "B."},
    {"System": "They didn't relate to education."},
    {"System": "C."},
    {
        "System": "They raised important questions about responsibility and the human condition."
    },
    {"System": "D."},
    {"System": "They were too complex for students."},
    {"System": "E."},
    {"System": "They weren't relevant."},
    {"System": "The Answer is."},
    {"System": "C."},
    {
        "System": "They raised important questions about responsibility and the human condition."
    },
]

src_path = f"{OUTPUT_DIR}/tmp.wav"

# Speed is adjustable
speed = 1.0

model = TTS(language="EN", device=DEVICE)
speaker_data = model.hps.items()
speaker_ids = {
    "Narrator": speaker_data["EN-US"],
    "System": speaker_data["EN-US"],
    "Billy": speaker_data["EN-US"],
    "Lui": speaker_data["EN-BR"],
    "Meg": speaker_data["EN-AU"],
    "Kerry": speaker_data["EN-BR"],
}

for index, line in enumerate(texts):
    speaker, text = list(line.items())[0]
    source_se = torch.load(f"{SPEAKER}/en-us.pth", map_location=DEVICE)
    model.tts_to_file(text, speaker_ids[speaker], src_path, speed=speed)
    save_path = f"{OUTPUT_DIR}/{str(index).zfill(2)}_{speaker}.wav"

    # Run the tone color converter
    encode_message = "AY.LLC"
    print(f"create: {save_path}")
    tone_color_converter.convert(
        audio_src_path=src_path,
        src_se=source_se,
        tgt_se=target_se[speaker],
        output_path=save_path,
        message=encode_message,
    )
