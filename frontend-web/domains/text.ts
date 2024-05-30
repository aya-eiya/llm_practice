const titles = [
  "Mr.",
  "Mrs.",
  "Ms.",
  "Dr.",
  "Prof.",
  "Rev.",
  "Sr.",
  "Jr.",
  "St.",
];

export function segment(paragraph: string): string[] {
  const segments = [];
  let currentSentence = "";
  let insideQuotes = false;
  let quoteChar = "";

  for (let i = 0; i < paragraph.length; i++) {
    const char = paragraph[i];

    // Handle the start or end of quotes
    if (
      (char === "'" || char === '"') &&
      (i === 0 || paragraph[i - 1] === " " || paragraph[i - 1] === "." ||
        paragraph[i - 1] === ",")
    ) {
      if (insideQuotes) {
        if (char === quoteChar) {
          insideQuotes = false;
          currentSentence += char;
          segments.push(currentSentence.trim());
          currentSentence = "";
          quoteChar = "";
          continue;
        }
      } else {
        if (currentSentence.trim()) {
          segments.push(currentSentence.trim());
          currentSentence = "";
        }
        insideQuotes = true;
        quoteChar = char;
      }
    }

    currentSentence += char;

    if (!insideQuotes && char === ".") {
      if (
        titles.some((title) =>
          paragraph.slice(i - title.length + 1, i + 1) === title
        )
      ) {
        i++;
        continue;
      }

      // Check if next character is end of string or a space followed by an uppercase letter (indicative of a new sentence)
      if (
        i === paragraph.length - 1 ||
        (paragraph[i + 1] === " " && /[A-Z]/.test(paragraph[i + 2]))
      ) {
        segments.push(currentSentence.trim());
        currentSentence = "";
      }
    }
  }

  // Add any remaining text as the last sentence
  if (currentSentence.trim()) {
    segments.push(currentSentence.trim());
  }

  return segments;
}

const paragraph =
  '"Hello, Anya," said the swan. "I am the Swan Queen." The Swan Queen reached into the water.';
console.log(JSON.stringify(segment(paragraph)));

[
  '"Hello, Anya,"',
  "said the swan.",
  '"I am the Swan Queen."',
  "The Swan Queen reached into the water.",
];
