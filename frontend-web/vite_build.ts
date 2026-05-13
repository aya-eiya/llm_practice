// retry-build.ts
const MAX_ATTEMPTS = 5;

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  console.log(`[${attempt}/${MAX_ATTEMPTS}] Executing vite build...`);

  // Executes 'npx vite build' cross-platform
  const command = new Deno.Command("deno", {
    args: ["task", "build:try"],
    stdout: "inherit", // Forwards Vite's original build progress logs
    stderr: "inherit", // Forwards Vite's crash stacks
  });

  const { success } = await command.output();

  if (success) {
    console.log("✨ Vite build completed successfully!");
    Deno.exit(0);
  }

  console.warn(`⚠️ Attempt ${attempt} failed. Retrying...`);
}

console.error("❌ Vite build failed repeatedly across all allocated attempts.");
Deno.exit(1);
