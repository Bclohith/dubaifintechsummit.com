const fs = require('fs');
const cheerio = require('cheerio');

async function run() {
  const html = fs.readFileSync('scratch/user_about_html.html', 'utf8');
  const $ = cheerio.load(html);
  
  let content = '';
  
  $('h1, h2, h3, h4, h5, h6, p').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 0) {
      content += `${el.tagName}: ${text}\n\n`;
    }
  });
  
  fs.writeFileSync('scratch/about_content_extracted.txt', content);
  console.log("Extracted tags length:", content.length);
}

run();
