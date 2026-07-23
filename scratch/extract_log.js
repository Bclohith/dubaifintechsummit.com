const fs = require('fs');

async function run() {
  const logPath = 'C:/Users/Lohith BC/.gemini/antigravity/brain/eb14c921-cfd9-4a7b-bdbb-55de03f8fdd5/.system_generated/logs/transcript_full.jsonl';
  const lines = fs.readFileSync(logPath, 'utf8').split('\n');
  
  for (let i = lines.length - 1; i >= 0; i--) {
    if (!lines[i]) continue;
    try {
      const entry = JSON.parse(lines[i]);
      if (entry.type === 'USER_INPUT' && entry.content && entry.content.includes('<div class="konfhub-speakers-grid">')) {
        // Extract the user request from the content
        fs.writeFileSync('scratch/user_html.html', entry.content);
        console.log('Saved user HTML snippet to scratch/user_html.html, size: ' + entry.content.length);
        break;
      }
    } catch (e) {
      // ignore parse errors for partial lines if any
    }
  }
}

run();
