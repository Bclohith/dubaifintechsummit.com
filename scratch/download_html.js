const fs = require('fs');

async function run() {
  const res = await fetch('https://dubaifintechsummit.com/speakers/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  });
  const html = await res.text();
  fs.writeFileSync('scratch/live_speakers.html', html);
  console.log("Saved to scratch/live_speakers.html, size: " + html.length);
}

run();
