import json
import os
import re

titles = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'Rev.', 'Sr.', 'Jr.', 'St.']

def _segment(paragraph):
    segments = []
    current_sentence = ''
    inside_quotes = False
    quote_char = ''

    i = 0
    while i < len(paragraph):
        char = paragraph[i]

        if len(current_sentence) == 0 and re.match(r'\s',char):
            i += 1
            continue

        # Handle the start or end of quotes
        if char in ['\'','\"'] and (i == 0 or paragraph[i - 1] in [' ', '.', ',']):
            if inside_quotes:
                if char == quote_char:
                    inside_quotes = False
                    current_sentence += char
                    segments.append(current_sentence.strip())
                    current_sentence = ''
                    quote_char = ''
                    i += 1
                    continue
            else:
                if current_sentence.strip():
                    segments.append(current_sentence.strip())
                    current_sentence = ''
                inside_quotes = True
                quote_char = char

        current_sentence += char

        if not inside_quotes and char in ['.', '?', '!']:
            if any(paragraph[i - len(title) + 1:i + 1] == title for title in titles):
                i += 1
                continue

            # Check if next character is end of string or a space followed by an uppercase letter (indicative of a new sentence)
            if i == len(paragraph) - 1 or (re.match(r'\s', paragraph[i + 1]) and (i + 2 < len(paragraph) and paragraph[i + 2].isupper())):
                segments.append(current_sentence.strip())
                current_sentence = ''

        i += 1

    # Add any remaining text as the last sentence
    if current_sentence.strip():
        segments.append(current_sentence.strip())

    return segments

print(json.dumps([seg for line in [_segment(line) for line in re.split('\n\n',os.sys.argv[1])] for seg in line]))
