const fs = require('fs');

async function scrapePage(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Find all images
    const regex = /<img[^>]+src=["'](https?:\/\/[^"']+\.(?:png|jpg|jpeg|svg|webp))["']/gi;
    let m;
    const urls = new Set();
    
    while ((m = regex.exec(html)) !== null) {
      const imgUrl = m[1];
      // Filter heuristically for logos/partners to avoid picking up UI icons or background images
      const l = imgUrl.toLowerCase();
      if (l.includes('partner') || l.includes('sponsor') || l.includes('logo') || l.includes('exhibit') || l.includes('association') || l.includes('media')) {
        // Exclude social icons or general site assets
        if (!l.includes('facebook') && !l.includes('twitter') && !l.includes('linkedin') && !l.includes('youtube') && !l.includes('instagram')) {
          urls.add(imgUrl);
        }
      }
    }
    
    return [...urls];
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return [];
  }
}

async function scrapeAll() {
  const data = {};
  
  data.sponsors = await scrapePage('https://dubaifintechsummit.com/sponsors/');
  console.log(`Found ${data.sponsors.length} sponsors`);
  
  data.exhibitors = await scrapePage('https://dubaifintechsummit.com/exhibitors/');
  console.log(`Found ${data.exhibitors.length} exhibitors`);
  
  data.associations = await scrapePage('https://dubaifintechsummit.com/associations/');
  console.log(`Found ${data.associations.length} associations`);
  
  data.mediaPartners = await scrapePage('https://dubaifintechsummit.com/media-partners/');
  console.log(`Found ${data.mediaPartners.length} media partners`);
  
  fs.writeFileSync('all_logos.json', JSON.stringify(data, null, 2));
}

scrapeAll();
