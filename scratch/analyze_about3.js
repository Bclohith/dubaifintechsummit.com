const fs = require('fs');
const cheerio = require('cheerio');

async function run() {
  const html = fs.readFileSync('scratch/user_about_html.html', 'utf8');
  const $ = cheerio.load(html);
  
  // Let's just find elements that have text that is not script or style
  $('body *').each((i, el) => {
      const tag = el.tagName;
      if (['script', 'style', 'noscript', 'meta', 'link'].includes(tag)) return;
      
      // Check if it has direct text children
      const text = $(el).contents().filter(function() {
          return this.nodeType === 3 && this.nodeValue.trim().length > 10;
      }).text().trim();
      
      if (text) {
          console.log(`[${tag}] ${text.substring(0, 100).replace(/\n/g, ' ')}...`);
      }
  });
}

run();
