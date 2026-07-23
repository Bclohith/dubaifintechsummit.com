const fs = require('fs');

async function run() {
  const html = fs.readFileSync('scratch/live_about_page.html', 'utf8');
  // Strip all HTML tags roughly
  const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                   .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                   .replace(/<[^>]+>/g, '\n')
                   .replace(/\n\s*\n/g, '\n');
  
  fs.writeFileSync('scratch/live_about_text.txt', text);
  console.log("Extracted text from live about, length:", text.length);
}

run();
