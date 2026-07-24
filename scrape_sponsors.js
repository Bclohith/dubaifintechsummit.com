const fs = require('fs');

async function scrape() {
  try {
    const response = await fetch('https://dubaifintechsummit.com/');
    const html = await response.text();
    
    // We want to find images that look like sponsor logos
    const regex = /<img[^>]+src=["'](https?:\/\/[^"']+\.(?:png|jpg|jpeg|svg|webp))["']/gi;
    let m;
    const urls = new Set();
    
    while ((m = regex.exec(html)) !== null) {
      const url = m[1];
      if (url.toLowerCase().includes('sponsor') || url.toLowerCase().includes('logo') || url.toLowerCase().includes('partner') || url.toLowerCase().includes('upload')) {
        urls.add(url);
      }
    }
    
    fs.writeFileSync('scraped_logos.json', JSON.stringify([...urls], null, 2));
    console.log('Found', urls.size, 'logos');
  } catch (error) {
    console.error(error);
  }
}

scrape();
