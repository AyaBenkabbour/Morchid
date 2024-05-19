## Morchid 🇲🇦 :

Morchid is an AI-powered travel companion that provides real-time guidance and culturally rich information as you explore the streets of morocco. Morchid takes advantage of advanced AI technology to leverage two main features:

- Real-Time location tracking : as you move through the city, Morchid detects your location and narrates stories and details about nearby landmarks, sourced directly from locals.

- Interactive Chat Bot : We chose not to bombard our users with information, and instead give them the liberty to ask our AI about any facts they might be interested in.

### Motivation:

Looking that our country is gearing up to host upcoming international events, we're looking to jump on the wave and make profit. Tourists in Morocco often find themselves needing a local guide to fully experience the hidden gems of our country. However, relying on human guides can be limiting, expensive, and sometimes even lead to encounters with scammers, which can significantly hinder the experience 🫠.

### Screenshots from the App:

![ScreenShot](/ressources/UI_Dark.png)

### Tech/Framework used:

- React Js
- Flask
- RAG
- LLM (google/Gemma-7b-it)
- whisperspeech (TTS)
- Leaflet js (to retrieve current Geo. data)
- Open Steet Map
- Google Geolocation API
![Archi1](/ressources/archi1.jpeg)
![Archi2](/ressources/archi2.jpeg)

### Evaluating our approach : 
* RAG :
  
| Feature             | distilbert-base-nli-stsb-quora-ranking | all-mpnet-base-v2  |
|---------------------|----------------------------------------|--------------------|
| Context Window      | 768 tokens                             | 384 tokens         |

we have used distilbert-base-nli-stsb-quora-ranking because it has a bigger number of input tokens (768). 

* LLM :
  
| Feature         | Gemma-7b-IT                                      | Llama3                                          |
|-----------------|--------------------------------------------------|-------------------------------------------------|
| Model Size      | 7 billion parameters                             | 3.5 billion parameters                          |
| Context Window  | 2048 tokens                                      | 1024 tokens                                     |
| Maximum Length  | 2048 tokens                                      | 1024 tokens                                     |
| Vocabulary Size | 50,257                                           | 50,257                                          |

we have used Gemma-7b-it because in my case, it gives more accurate responses in comparaison with Llama3. 



### Addictional features (comming 🔜 )

This model will provide exclusive, insider information that enriches the tourist experience. This data will be curated from the lived experiences of locals and tourists to ensure that every user gets the full authentic experience.

We plan to fund further development through 2 business schemes: tourist passes for a day a week or a month, so you only pay for your visit. We also plan to reach out to restaurants, hotels and businesses for advertising purpose

### Video Demo:


https://github.com/AyaBenkabbour/Morchid/assets/113483524/dcd86df5-da0f-457e-8db3-a14e70076098

### Presentation Slides 

[presentation_3BYTES.pdf](https://github.com/AyaBenkabbour/Morchid/files/15368177/presentation_3BYTES.pdf)

_Morchid isn't just an app, it's an experience_
