# ショート動画のシナリオ生成

## シナリオタイプ

1. **Daily Vocabulary** - 毎日新しい単語を紹介し、その意味と使い方を説明。
2. **Idioms and Phrases** - よく使われるイディオムやフレーズの紹介とその使用例。
3. **Grammar Tips** - 英語の文法に関する簡単なアドバイスやルールの説明。
4. **Pronunciation Practice** - 英語の発音に焦点を当てた練習方法やコツ。
5. **Listening Practice** - 短いリスニング練習のセッション。
6. **Reading Aloud** - 短い文章やフレーズを読み上げ、その後に続いて練習。
7. **Conversation Starters** - 日常会話で使えるフレーズや質問例。
8. **Common Mistakes** - 英語学習者がよく犯す間違いとその修正方法。
9. **Quick Quizzes** - 簡単なクイズ形式で学習内容を確認。
10. **Cultural Insights** - 英語圏の文化に関する豆知識やエピソード。
11. **Study Tips** - 効率的な英語学習の方法や勉強のコツ。
12. **Motivational Quotes** - 英語の名言や格言の紹介とその意味。
13. **Word of the Day** - 毎日の新しい単語とその使い方。
14. **Mini Dialogues** - 短い会話例の紹介と練習。
15. **Q&A Sessions** - 視聴者からの質問に答えるセッション。
16. **News in Easy English** - 簡単な英語でのニュース解説。
17. **Tongue Twisters** - 発音練習に役立つ早口言葉の紹介。
18. **Phonics Practice** - 英語の音と文字の関係に焦点を当てた練習。
19. **Story Time** - 短い物語を読み聞かせ、その後に続いて練習。
20. **Fun Facts** - 英語に関する面白い事実やトリビア。

## prompt

### Daily Vocabulary

```
I will make short movie for ESL lesson course to upload youtube.

The movie title is "Daily Vocabulary".

Create the script for the movie by pickup 5 vocabularies as VOCABULARY_1 to VOCABULARY_5 from following novel text that be used in listening lesson of the day.

\`\`\`
$(jq '.body' "../gen_quiz/outputs/2024-06-02.json")
\`\`\`

The course level is for beginner.

the output script format is following. {xxxx} segment in the format is the command or hint to generate the script.

\`\`\`
Hi everyone! Welcome to Daily Vocabulary, where we explore everyday words and phrases that can help you communicate more effectively in English.
Let's pickup 5 important vocabularies from today's episode.

First Vocabulary is {VOCABULARY_1}.

"{the VOCABULARY_1 usage line from the novel}"

{VOCABULARY_1} means {VOCABULARY_1 description}

and other usage of {VOCABULARY_1}

{generate 3 example statements of VOCABULARY_1}


Next Vocabulary is {VOCABULARY_2}.

"{the VOCABULARY_2 usage line from the novel}"

{VOCABULARY_2} means {VOCABULARY_2 description}

and other usage of {VOCABULARY_2}

{generate 3 example statements of VOCABULARY_2}


Next Vocabulary is {VOCABULARY_3}.

"{the VOCABULARY_3 usage line from the novel}"

{VOCABULARY_3} means {VOCABULARY_3 description}

and other usage of {VOCABULARY_3}

{generate 3 example statements of VOCABULARY_3}


Next Vocabulary is {VOCABULARY_4}.

"{the VOCABULARY_4 usage line from the novel}"

{VOCABULARY_4} means {VOCABULARY_4 description}

and other usage of {VOCABULARY_4}

{generate 3 example statements of VOCABULARY_4}


The Last Vocabulary is {VOCABULARY_5}.

"{the VOCABULARY_5 usage line from the novel}"

{VOCABULARY_5} means {VOCABULARY_5 description}

and other usage of {VOCABULARY_5}

{generate 3 example statements of VOCABULARY_5}


Thank you to listening! Please send good and follow my channel.
\`\`\`

```
