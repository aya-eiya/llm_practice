import os
import sys
import google.generativeai as genai

# read ENV
API_KEY = os.environ.get('GEMINI_API_KEY')
genai.configure(api_key=API_KEY)

prompt = sys.argv.pop(1)

model = genai.GenerativeModel('gemini-pro')
response = model.generate_content([prompt])

print(response.text)
