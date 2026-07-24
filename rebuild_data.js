const fs = require('fs');

const contentStr = fs.readFileSync('app/data/sponsors.js', 'utf8');
const jsonStr = contentStr.replace('export const sponsorsData = ', '').replace(/;$/, '');
const sponsorsData = JSON.parse(jsonStr);

// Helper to extract valid logos (ignoring the footer logos that sneaked in)
function extractLogos(categoryData) {
  let logos = [];
  categoryData.forEach(tier => {
    if (tier.tier !== 'General') {
      tier.logos.forEach(url => {
        if (!url.includes('Dubai-Fintech-Summit-Green-White-Logo') && 
            !url.includes('organized-difc') && 
            !url.includes('Dffw-New-Logo') && 
            !url.includes('trescon-logo') && 
            !url.includes('X-Logo-footer')) {
          logos.push(url);
        }
      });
    }
  });
  return logos;
}

const allSponsorsLogos = extractLogos(sponsorsData.sponsors);
const allExhibitorsLogos = extractLogos(sponsorsData.exhibitors);
const allAssociationsLogos = extractLogos(sponsorsData.associations);
const allMediaLogos = extractLogos(sponsorsData.mediaPartners);

const newData = {
  sponsors: [
    { tier: "Founding Partner & Premium Banking Partner", logos: allSponsorsLogos.slice(0, 1) },
    { tier: "Founding Partner & Strategic Banking Partner", logos: allSponsorsLogos.slice(1, 2) },
    { tier: "Strategic Partner", logos: allSponsorsLogos.slice(2, 3) },
    { tier: "Ecosystem Partner", logos: allSponsorsLogos.slice(3, 4) },
    { tier: "Strategic Payment Partner", logos: allSponsorsLogos.slice(4, 5) },
    { tier: "Diamond Sponsor", logos: allSponsorsLogos.slice(5, 6) },
    { tier: "Platinum Sponsor", logos: allSponsorsLogos.slice(6, 8) },
    { tier: "Gold Sponsors", logos: allSponsorsLogos.slice(8, 10) },
    { tier: "Silver Sponsor", logos: allSponsorsLogos.slice(10, 16) },
    { tier: "Premium Bronze Sponsors", logos: allSponsorsLogos.slice(16, 31) },
    { tier: "Bronze Sponsors", logos: allSponsorsLogos.slice(31, 38) }
  ],
  exhibitors: [
    { tier: "Exhibitors", logos: allExhibitorsLogos.slice(0, 10) },
    { tier: "Startup Exhibitor", logos: allExhibitorsLogos.slice(10, 14) },
    { tier: "Startup Pods", logos: allExhibitorsLogos.slice(14, 21) }
  ],
  associations: [
    { tier: "Knowledge Partner", logos: allAssociationsLogos.slice(0, 1) },
    { tier: "Association Partners", logos: allAssociationsLogos.slice(1, 11) }
  ],
  mediaPartners: [
    { tier: "Official Media Partner", logos: allMediaLogos.slice(0, 1) },
    { tier: "Strategic Media Partner", logos: allMediaLogos.slice(1, 2) },
    { tier: "Official PR & Media Intelligence Partner", logos: allMediaLogos.slice(2, 3) },
    { tier: "Strategic Magazine Partner", logos: allMediaLogos.slice(3, 4) },
    { tier: "Ecosystem Partner", logos: allMediaLogos.slice(4, 5) },
    { tier: "Finance Magazine Partner", logos: allMediaLogos.slice(5, 6) },
    { tier: "Technology Intelligence Partner", logos: allMediaLogos.slice(6, 7) },
    { tier: "Flagship Media Partner", logos: allMediaLogos.slice(7, 8) },
    { tier: "Innovation Media Partner", logos: allMediaLogos.slice(8, 9) },
    { tier: "Financial Intelligence Partner", logos: allMediaLogos.slice(9, 10) },
    { tier: "Digital PR Distribution Partner", logos: allMediaLogos.slice(10, 11) },
    { tier: "Global Ecosystem Partner", logos: allMediaLogos.slice(11, 12) },
    { tier: "Media Partners", logos: allMediaLogos.slice(12, 40) }
  ]
};

const contentOut = `export const sponsorsData = ${JSON.stringify(newData, null, 2)};`;
fs.writeFileSync('app/data/sponsors.js', contentOut);

console.log('Successfully remapped app/data/sponsors.js to exact screenshot chunks.');
