import os
import sys
from google import genai
from google.genai import types

# read ENV
API_KEY = os.environ.get('GEMINI_API_KEY')
client = genai.Client(
  api_key=API_KEY,
)

prompt = sys.argv.pop(1)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[prompt],
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=0) # Disables thinking
    ),
)

print(response.text)
