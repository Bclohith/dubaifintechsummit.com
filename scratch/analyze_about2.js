const fs = require('fs');
const cheerio = require('cheerio');

async function run() {
  const html = fs.readFileSync('scratch/user_about_html.html', 'utf8');
  const $ = cheerio.load(html);
  
  console.log("=== HEADINGS IN ABOUT PAGE ===");
  
  $('h1, h2, h3, h4').each((i, el) => {
    console.log(`${el.tagName}: ${$(el).text().trim().substring(0, 100)}`);
  });
  
  console.log("\n=== IMAGES IN ABOUT PAGE ===");
  $('img').each((i, el) => {
    console.log(`IMG: ${$(el).attr('src')} | alt: ${$(el).attr('alt')}`);
  });
}

run();
