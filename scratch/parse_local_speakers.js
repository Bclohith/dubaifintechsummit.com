const fs = require('fs');
const cheerio = require('cheerio');

async function run() {
  try {
    const html = fs.readFileSync('scratch/user_html.html', 'utf8');
    const $ = cheerio.load(html);
    
    const speakers = [];
    
    $('.speaker-card-wrapper').each((i, el) => {
      const card = $(el).find('.speaker-card');
      const name = card.find('.speaker-name').text().trim();
      const title = card.find('.speaker-title').text().trim();
      const org = card.find('.speaker-org').text().trim();
      const country = card.find('.speaker-country').text().trim();
      
      let image = card.find('.speaker-photo img').attr('src');
      if (!image || image.includes('data:image')) {
        image = card.find('.speaker-photo img').attr('data-src') || image;
      }
      
      const popupId = card.attr('data-popup-id');
      
      const modal = $(`#${popupId}`);
      let bio = modal.find('.speaker-bio').html() || '';
      bio = bio.trim();
      
      if (name) {
        speakers.push({
          id: popupId,
          name,
          title,
          org,
          country,
          image,
          bio
        });
      }
    });
    
    fs.writeFileSync('scratch/speakers_data.json', JSON.stringify(speakers, null, 2));
    console.log(`Successfully extracted ${speakers.length} speakers from local HTML.`);
  } catch (error) {
    console.error("Error parsing speakers:", error);
  }
}

run();
