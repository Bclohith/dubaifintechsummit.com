const fs = require('fs');
const cheerio = require('cheerio');

async function run() {
  const html = fs.readFileSync('scratch/user_about_html.html', 'utf8');
  const $ = cheerio.load(html);
  
  console.log("=== ABOUT PAGE STRUCTURE ===");
  
  // Find all major sections or rows
  $('.wpb_row, .vc_row, section').each((i, el) => {
    const id = $(el).attr('id') || '';
    const classes = $(el).attr('class') || '';
    
    // Look for headings or distinctive text in this section
    const headings = [];
    $(el).find('h1, h2, h3, h4, h5, h6').each((j, h) => {
      headings.push($(h).text().trim());
    });
    
    if (headings.length > 0 || id) {
      console.log(`\nSection ${i + 1}:`);
      if (id) console.log(`  ID: ${id}`);
      if (classes) console.log(`  Classes: ${classes}`);
      if (headings.length > 0) console.log(`  Headings: ${headings.join(' | ')}`);
    }
  });
}

run();
