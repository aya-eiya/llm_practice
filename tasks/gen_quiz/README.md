# 英語学習問題ジェネレーター

## 必要ソフトウェア

* [ollama](https://ollama.com/)
* [jq](https://jqlang.github.io/jq/)
* [huggingface hub cli](https://huggingface.co/docs/huggingface_hub/en/guides/cli)

## モデルのダウンロード

```sh
ollama pull llava
ollama pull llama3
mkdir -r ~/.huggingface-hub/models

# 以下は日本語翻訳を作成する場合に必要
huggingface-cli download lightblue/suzume-llama-3-8B-japanese-gguf ggml-model-Q4_K_M.gguf --local-dir ~/.huggingface-hub/models
ollama create llama3:8B-japanese-instruct -f 8B-japanese-instruct.model
```

## 実行準備

ollama server を起動する

```sh
ollama start
```

## Macの場合は date コマンドには GNU date を使うようにエイリアス設定する

```sh
brew install coreutils
alias date='gdate'
# ~/.bashrc にも alias date='gdate' を設定
```

## 小説と問題の出力

```sh
./scripts/gen_novel.sh -d "2024-05-18" -e "May 18th" -t "VR" -f "mystic"
# usage
# -d,--fulldate= : date of generated content.
# -e,--event= : date of event to research.
# -t,--theme= : theme of the event in history. ex) technology, world, mathematics, ...
# -f,--flavor= : flavor of the novel. ex) SF, thriller, ninja
# -m,--model= : main model to use. default 'llama3'
# -n,--novelModel= : sub model to use in generate novel part. default 'llava' 
# -s,--steps= : steps to generate. default 'event,novel,conversation,quiz,make'
```


```txt
# theme example
1. Political History: Focuses on the study of political institutions, leaders, and events, examining the development of governmental systems, policies, and power dynamics over time.
2. Social History: Explores the everyday lives, customs, beliefs, and interactions of ordinary people throughout history, examining topics such as family structures, social classes, gender roles, and cultural practices.
3. Economic History: Examines the economic systems, trade networks, markets, and financial activities of past societies, analyzing factors such as production, consumption, labor, and wealth distribution.
4. Cultural History: Investigates the cultural practices, artistic expressions, intellectual movements, and symbolic meanings of past civilizations, exploring how culture shapes and is shaped by historical context.
5. Military History: Focuses on the study of armed conflicts, military strategies, weaponry, and the impact of warfare on societies and civilizations, examining battles, campaigns, and the evolution of military technologies.
6. Intellectual History: Explores the development of ideas, ideologies, philosophies, and intellectual movements throughout history, analyzing the contributions of thinkers, writers, and scholars to the shaping of human thought.
7. Diplomatic History: Examines the conduct of international relations, treaties, alliances, and diplomatic negotiations between states and civilizations, studying the causes and consequences of diplomatic actions and agreements.
8. Environmental History: Investigates the interaction between human societies and the natural environment throughout history, examining the impact of human activities on ecosystems, landscapes, and the climate, as well as the influence of environmental factors on human societies.
9. Technological History: Studies the development and impact of technologies, inventions, and innovations throughout history, examining how technological advancements have shaped economies, societies, and cultures.
10. Medical History: Explores the history of medicine, healthcare practices, disease outbreaks, and medical advancements throughout different historical periods and civilizations, examining the evolution of medical knowledge, treatments, and healthcare systems.
11. Legal History: Focuses on the evolution of legal systems, laws, judicial institutions, and legal practices throughout history, examining how legal frameworks have shaped societies and governed human behavior.
12. Urban History: Investigates the development, growth, and transformation of cities and urban spaces throughout history, examining issues such as urbanization, infrastructure, social organization, and urban planning.
13. Labor History: Studies the history of labor movements, working conditions, labor relations, and the experiences of workers throughout different historical periods, examining issues such as labor rights, industrialization, and class struggle.
14. Colonial History: Examines the processes of colonization, imperialism, and decolonization, exploring the impact of European colonialism on indigenous societies, cultures, economies, and political systems around the world.
15. Gender History: Explores the roles, experiences, and representations of gender in different historical contexts, examining issues such as gender identity, sexuality, family dynamics, and the struggle for gender equality.
16. Religious History: Studies the history of religious beliefs, practices, institutions, and movements, examining the role of religion in shaping societies, cultures, politics, and conflicts throughout history.
17. Maritime History: Investigates the history of maritime exploration, trade, navigation, and naval warfare, examining the impact of seafaring activities on global history, economies, and cultures.
18. Intellectual Property History: Examines the development of intellectual property laws, concepts, and practices throughout history, exploring issues such as copyright, patents, and trademarks, and their role in fostering innovation and creativity.
19. Migration History: Studies patterns of human migration, mobility, and diaspora throughout history, examining the causes and consequences of migration movements, as well as the experiences of migrants and the communities they have joined or left behind.
20. Environmental Justice History: Explores the intersection of environmental issues and social justice concerns throughout history, examining how environmental inequalities, resource exploitation, and environmental activism have shaped human societies and impacted marginalized communities.

# flavor example
1. Science Fiction: Stories that explore speculative or futuristic concepts, often involving advanced technology, space exploration, or alternative realities.
2. Fantasy: Works set in imaginary worlds, often featuring magic, mythical creatures, and epic quests.
3. Mystery: Plots centered around solving a crime or uncovering hidden truths, typically involving detectives or amateur sleuths.
4. Romance: Stories focusing on romantic relationships and love, often featuring themes of passion, longing, and emotional conflict.
5. Historical Fiction: Novels set in the past, often incorporating real historical events, figures, and settings into fictional narratives.
6. Thriller: Fast-paced stories characterized by suspense, danger, and high stakes, often involving espionage, crime, or political intrigue.
7. Horror: Works designed to evoke fear, dread, or unease in the reader, often featuring supernatural elements, monsters, or psychological terrors.
8. Adventure: Exciting tales of daring exploits, exploration, and discovery, often set in exotic locales or dangerous environments.
9. Dystopian: Speculative fiction that depicts a future society characterized by oppression, suffering, or societal collapse, often serving as a warning or commentary on contemporary issues.
10. Literary Fiction: Novels valued for their artistic merit, depth of characterization, and thematic complexity, often exploring the human condition in nuanced and thought-provoking ways.
11. Young Adult (YA): Books aimed at teenage readers, typically featuring protagonists in their teens and addressing themes relevant to adolescent experiences.
12. Historical Romance: Romance novels set in historical periods, often featuring elaborate costumes, societal norms, and cultural contexts of the time.
13. Satire: Works that use humor, irony, or exaggeration to criticize or ridicule aspects of society, politics, or human behavior.
14. Family Saga: Novels that span multiple generations of a family, often exploring themes of inheritance, tradition, conflict, and change within the familial context. These stories delve into the dynamics between family members, the passing of values and secrets through generations, and the impact of historical events on family fortunes and relationships.
15. Western: Stories set in the American Old West, often featuring cowboys, outlaws, and rugged landscapes, and exploring themes of frontier life and justice.
16. Contemporary Fiction: Novels set in the present day, addressing current social, cultural, and political issues, often with a focus on realistic characters and relationships.
17. Psychological Thriller: Suspenseful stories that delve into the complexities of the human mind, often featuring unreliable narrators, twists, and psychological tension.
18. Comic/Graphic Novel: Narrative works presented in a comic strip or graphic format, often combining visual art with storytelling to explore a wide range of genres and themes.
19. Experimental Literature: Avant-garde works that challenge traditional narrative conventions and explore innovative techniques or structures, often pushing the boundaries of language and form.
20. Biographical Fiction: Novels based on the lives of real people, blending fact with fiction to create compelling narratives that illuminate the experiences and motivations of historical figures.
```

### 出力確認

```sh
ls ./outputs/
cat ./outputs/2024-04-25.md
```

## 日本語に翻訳した問題の出力

※ モデルの日本語がまだまだ拙いので調整中

```sh
# ./outputs/2024-04-05.json は生成済み
# args {1:generate date}
./scripts/translate_ja.sh "2024-04-25"
```

### 出力確認(日本語)

```sh
ls ./outputs/
cat ./outputs/2024-04-25-ja.md
```
