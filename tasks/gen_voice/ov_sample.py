import os
import torch
from gen_voice_model.openvoice.api import ToneColorConverter
from gen_voice_model.openvoice.se_extractor import get_se

ckpt_converter = 'gen_voice_model/checkpoints_v2/converter'
base_speaker = 'gen_voice_model/checkpoints_v2/base_speakers/ses'
#device = "cuda:0" if torch.cuda.is_available(."}, {"System": "else "cpu"
#device = "cuda:0" if torch.cuda.is_available(."}, {"System": "else "mps" if torch.backends.mps.is_available(."}, {"System": "else "cpu"
device = "cpu"
output_dir = 'outputs'

tone_color_converter = ToneColorConverter(f'{ckpt_converter}/config.json', device=device)
tone_color_converter.load_ckpt(f'{ckpt_converter}/checkpoint.pth')

os.makedirs(output_dir, exist_ok=True)

reference_speakers = {
  'Narrator': 'gen_voice_model/resources/narrator.wav',
  'System': 'gen_voice_model/resources/system.wav',
  'Billy': 'gen_voice_model/resources/billy.wav',
  'Lui': 'gen_voice_model/resources/lui.wav',
  'Meg': 'gen_voice_model/resources/meg.wav',
  'Kerry': 'gen_voice_model/resources/kerry.wav'
}
# build target_se dictionary from reference speakers
target_se = {}
for speaker, audio_path in reference_speakers.items():
  se, _ = get_se(audio_path, tone_color_converter, target_dir=output_dir)
  target_se[speaker] = se

from melo.api import TTS

texts = [
    {"System": "Improve Your English Skills with Daily AI-Generated Novels and Learning Tests."},
    {"System": "Echoes of Versailles"},
    {"Narrator": "In a parallel universe, the Treaty of Versaille was not signed and World War One raged on for years."},
    {"Narrator": "The world had changed dramatically, with advanced technology and new forms of energy dominating the landscape."},
    {"Narrator": "However, amidst this new era, memories of the past lingered."},
    {"Narrator": "As a group of scientists and historians delved deeper into the archives of history, they discovered an alternative timeline where the Treaty of Versaille had been signed and World War One had ended."},
    {"Narrator": "They were fascinated by the potential consequences of this event and set out to explore it further."},
    {"Narrator": "Using advanced time-travel technology, they journeyed back in time to the signing of the Treaty of Versailles."},
    {"Narrator": "Upon arrival, they were greeted by a world vastly different from their own."},
    {"Narrator": "The harsh penalties imposed on Germany had left deep scars on the nation and its people."},
    {"Narrator": "As they explored this new timeline, they began to unravel the complex web of consequences that stemmed from the signing of the Treaty of Versailles."},
    {"Narrator": "They discovered a world where technology had advanced beyond their wildest dreams, but at what cost?"},
    {"Narrator": "And as they returned to their own time, they were left to wonder if the events of the past could ever truly be changed."},
    {"System": "Now, let's move on to the conversation between Billy, Meg, Kelly, and their teacher, Louis, after reading the novel."},
    {"Billy": "I loved how the novel explored the consequences of the Treaty of Versailles. It really made me think about how our actions can have far-reaching effects."},
    {"Meg": "Oh, I know what you mean, Billy! And I was blown away by the technology in this world. It's like a dream come true... but at what cost, right?"},
    {"Kerry": "Yeah, it's all about balance, folks. We can't just keep advancing without considering the impact on people and the environment."},
    {"Lui": "I agree with you both. The novel raises important questions about responsibility and the human condition. As educators, we need to consider these themes in our teaching."},
    {"Billy": "Exactly! And I think that's what makes this novel so powerful - it challenges us to think critically about the past and how it shapes our present."},
    {"Meg": "And it made me realize how important it is to appreciate the small things in life. In a world with advanced technology, we can get lost in the details..."},
    {"Kerry": "But what if that's exactly what's happening? What if our obsession with tech is distracting us from the bigger picture?"},
    {"Lui": "Well, Kerry, I think that's a valid concern. As educators, we need to ensure that our students are aware of these issues and can make informed decisions."},
    {"Billy": "I'm glad the novel didn't sugarcoat anything. It was refreshing to see characters grappling with real-world problems."},
    {"Meg": "Absolutely! And I loved how the novel wove together history, science, and imagination. It was a true adventure!"},

    {"System": "Now, let's test your understanding of the novel and the dialogue with 5 questions."},

    {"System": "Question.1"},
    {"System": "What was the main event that did not happen in the parallel universe described in the novel?"},
    {"System": "A."}, {"System": "The Treaty of Versailles was signed."},
    {"System": "B."}, {"System": "World War One ended."},
    {"System": "C."}, {"System": "A new form of energy emerged."},
    {"System": "D."}, {"System": "The scientists traveled back in time."},
    {"System": "E."}, {"System": "The world remained unchanged."},
    {"System": "The Answer is."},
    {"System": "A."}, {"System": "The Treaty of Versailles was signed."},

    {"System": "Question.2"},
    {"System": "According to the dialogue, what did Billy think about the novel?."},
    {"System": "A."}, {"System": "It was too complex."},
    {"System": "B."}, {"System": "It didn't explore consequences well."},
    {"System": "C."}, {"System": "It made him think critically."},
    {"System": "D."}, {"System": "It was boring."},
    {"System": "E."}, {"System": "It had too much technology."},
    {"System": "The Answer is."},
    {"System": "C."}, {"System": "It made him think critically."},

    {"System": "Question.3."},
    {"System": "What concern did Kerry raise in the dialogue?."},
    {"System": "A."}, {"System": "The novel didn't have enough science."},
    {"System": "B."}, {"System": "The characters were not relatable."},
    {"System": "C."}, {"System": "Our obsession with tech is distracting us from the bigger picture."},
    {"System": "D."}, {"System": "The world was too perfect."},
    {"System": "E."}, {"System": "There wasn't enough history."},
    {"System": "The Answer is."},
    {"System": "C."}, {"System": "Our obsession with tech is distracting us from the bigger picture."},

    {"System": "Question.4"},
    {"System": "What did Meg think about the technology in the novel?."},
    {"System": "A."}, {"System": "It was outdated."},
    {"System": "B."}, {"System": "It was a dream come true but at what cost."},
    {"System": "C."}, {"System": "It was irrelevant to the story."},
    {"System": "D."}, {"System": "It was too complex."},
    {"System": "E."}, {"System": "It wasn't described."},
    {"System": "The Answer is."},
    {"System": "B."}, {"System": "It was a dream come true but at what cost."},

    {"System": "Question.5"},
    {"System": "What did Lui think about the novel's themes?."},
    {"System": "A."}, {"System": "They were too simplistic."},
    {"System": "B."}, {"System": "They didn't relate to education."},
    {"System": "C."}, {"System": "They raised important questions about responsibility and the human condition."},
    {"System": "D."}, {"System": "They were too complex for students."},
    {"System": "E."}, {"System": "They weren't relevant."},
    {"System": "The Answer is."},
    {"System": "C."}, {"System": "They raised important questions about responsibility and the human condition."}
]

src_path = f'{output_dir}/tmp.wav'

# Speed is adjustable
speed = 1.0

model = TTS(language='EN', device=device)
speaker_ids = {
  'Narrator': model.hps.data.spk2id['EN-US'],
  'System': model.hps.data.spk2id['EN-US'],
  'Billy': model.hps.data.spk2id['EN-US'],
  'Lui': model.hps.data.spk2id['EN-BR'],
  'Meg': model.hps.data.spk2id['EN-AU'],
  'Kerry': model.hps.data.spk2id['EN-BR']
}

for index,line in enumerate(texts):
  speaker, text = list(line.items())[0]
  source_se = torch.load(f'{base_speaker}/en-us.pth', map_location=device)
  model.tts_to_file(text, speaker_ids[speaker], src_path, speed=speed)
  save_path = f'{output_dir}/{str(index).zfill(2)}_{speaker}.wav'

  # Run the tone color converter
  encode_message = "AY.LLC"
  tone_color_converter.convert(
    audio_src_path=src_path, 
    src_se=source_se, 
    tgt_se=target_se[speaker], 
    output_path=save_path,
    message=encode_message)
