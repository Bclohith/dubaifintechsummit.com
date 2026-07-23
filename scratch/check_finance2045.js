const fs = require('fs');
const cheerio = require('cheerio');

async function checkFinance2045() {
  try {
    console.log("Fetching https://finance2045.com/ ...");
    const res = await fetch('https://finance2045.com/');
    const html = await res.text();
    fs.writeFileSync('scratch/finance2045.html', html);
    
    // Look for konfhub references
    const $ = cheerio.load(html);
    
    console.log("--- IFRAMES ---");
    $('iframe').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.toLowerCase().includes('konfhub')) {
        console.log(`Iframe found: ${src}`);
      }
    });

    console.log("--- SCRIPTS ---");
    $('script').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.toLowerCase().includes('konfhub')) {
        console.log(`Script src found: ${src}`);
      }
      
      const htmlContent = $(el).html();
      if (htmlContent && htmlContent.toLowerCase().includes('konfhub')) {
        console.log(`Inline script containing konfhub: ${htmlContent.substring(0, 150)}...`);
      }
    });
    
    console.log("--- LINKS ---");
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.toLowerCase().includes('konfhub')) {
        console.log(`Link found: ${href}`);
      }
    });
    
    // Check if speakers are hardcoded or fetched
    if (html.toLowerCase().includes('speaker')) {
       console.log("The word 'speaker' is present in the HTML.");
    }
    
  } catch (e) {
    console.log('ERROR:', e.message);
  }
}

checkFinance2045();
