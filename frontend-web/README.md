# Daily AI-Generated English Novels & Learning Test Questions

This project is a web application designed for English learners, offering daily
AI-generated short novels and accompanying test questions to enhance English
proficiency. The content is structured by difficulty level, allowing users to
learn step-by-step.

**Live Site:** https://daily-ai-generated-quiz.deno.dev/

## ✨ Features

- **Daily Content:** New stories and quizzes are provided every day.
- **Level-Based Learning:** Content is categorized into 8 difficulty levels,
  from beginner to master.
- **Comprehensive Learning:** In addition to reading comprehension, the app
  provides detailed explanations of grammar patterns and vocabulary.
- **Audio Support:** Listening materials are available to help improve listening
  skills.

## 🛠️ Tech Stack

- **Runtime:** [Deno](https://deno.com/)
- **Framework:** [Fresh](https://fresh.deno.dev/)
- **UI Library:** [Preact](https://preactjs.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have
[Deno](https://deno.com/manual@v1.x/getting_started/installation) installed on
your system.

### Running the Development Server

1. Clone the repository.
2. Navigate to the project directory.
3. Start the development server by running:

   ```sh
   deno task start
   ```

4. The application will be available at `http://localhost:8000`. The server will
   automatically reload when files in the `routes/` or `static/` directories are
   changed.

## 📜 Available Scripts

The following commands are available in the `deno.json` file:

- `deno task start`: Starts the development server.
- `deno task build`: Builds the application for production.
- `deno task check`: Runs the formatter, linter, and type-checker.
- `deno task gen:data`: A script to generate the daily novel and quiz data.
- `deno task update`: Updates the Fresh framework dependencies.
