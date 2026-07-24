const fs = require('fs');
const cheerio = require('cheerio');

async function scrapeTiered(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const tiers = [];
    let currentTier = { tier: 'General', logos: [] };
    
    // We iterate over the DOM elements that look like they could be headers or images
    // Usually these pages use <h2>, <h3>, or <h4> for categories.
    $('*').each((i, el) => {
      const tagName = el.tagName.toLowerCase();
      
      // If it's a heading, we assume it's a new tier
      if (['h2', 'h3', 'h4', 'h5'].includes(tagName)) {
        const text = $(el).text().trim();
        // Skip empty headers or site-wide nav headers
        if (text && text.length < 100 && !text.includes('Menu') && !text.includes('Subscribe')) {
          if (currentTier.logos.length > 0) {
            tiers.push(currentTier);
          }
          currentTier = { tier: text, logos: [] };
        }
      }
      
      // If it's an image, add it to the current tier
      if (tagName === 'img') {
        let src = $(el).attr('src') || $(el).attr('data-src');
        if (src && src.match(/\.(png|jpg|jpeg|svg|webp)/i)) {
          // Exclude social icons
          const l = src.toLowerCase();
          if (l.includes('partner') || l.includes('sponsor') || l.includes('logo') || l.includes('exhibit') || l.includes('association') || l.includes('media')) {
            if (!l.includes('facebook') && !l.includes('twitter') && !l.includes('linkedin') && !l.includes('youtube') && !l.includes('instagram')) {
              if (!currentTier.logos.includes(src)) {
                currentTier.logos.push(src);
              }
            }
          }
        }
      }
    });
    
    if (currentTier.logos.length > 0) {
      tiers.push(currentTier);
    }
    
    return tiers;
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return [];
  }
}

async function scrapeAllTiered() {
  const data = {};
  
  data.sponsors = await scrapeTiered('https://dubaifintechsummit.com/sponsors/');
  data.exhibitors = await scrapeTiered('https://dubaifintechsummit.com/exhibitors/');
  data.associations = await scrapeTiered('https://dubaifintechsummit.com/associations/');
  data.mediaPartners = await scrapeTiered('https://dubaifintechsummit.com/media-partners/');
  
  const content = `export const sponsorsData = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync('app/data/sponsors.js', content);
  
  console.log('Successfully generated hierarchical app/data/sponsors.js');
}

scrapeAllTiered();
