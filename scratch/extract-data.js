const fs = require('fs');
const path = require('path');

const files = {
  agenda: 'C:\\Users\\Lohith BC\\.gemini\\antigravity\\brain\\eb14c921-cfd9-4a7b-bdbb-55de03f8fdd5\\.system_generated\\steps\\2263\\content.md',
  sponsors: 'C:\\Users\\Lohith BC\\.gemini\\antigravity\\brain\\eb14c921-cfd9-4a7b-bdbb-55de03f8fdd5\\.system_generated\\steps\\2427\\content.md',
  exhibitors: 'C:\\Users\\Lohith BC\\.gemini\\antigravity\\brain\\eb14c921-cfd9-4a7b-bdbb-55de03f8fdd5\\.system_generated\\steps\\2428\\content.md',
  associations: 'C:\\Users\\Lohith BC\\.gemini\\antigravity\\brain\\eb14c921-cfd9-4a7b-bdbb-55de03f8fdd5\\.system_generated\\steps\\2429\\content.md'
};

if (!fs.existsSync('public/data')) {
  fs.mkdirSync('public/data', { recursive: true });
}

for (const [name, filepath] of Object.entries(files)) {
  if (!fs.existsSync(filepath)) {
    console.log(`File not found: ${filepath}`);
    continue;
  }
  
  const content = fs.readFileSync(filepath, 'utf8');
  
  // The JSON data is usually a large array injected into the HTML. 
  // Let's find the large JSON arrays.
  
  const matches = content.match(/\[\{.*\}\]/gs);
  
  let bestMatch = null;
  if (matches) {
    for (const match of matches) {
       if (match.includes('session_id') || match.includes('entity_id') || match.includes('speaker_id')) {
           bestMatch = match;
           // If we have multiple lines, we might have matched too much, so we should narrow it down.
           const singleLineMatch = match.match(/\[\{.*?\}\]/g);
           if (singleLineMatch) {
             for(const inner of singleLineMatch) {
                if (inner.includes('session_id') || inner.includes('entity_id') || inner.includes('speaker_id')) {
                    if (inner.length > (bestMatch ? bestMatch.length : 0)) {
                        bestMatch = inner;
                    }
                }
             }
           }
       }
    }
  }

  // Backup regex for the specific script tag
  if (!bestMatch) {
     const regex = /<script.*?>.*?(\[\{.*?\}\]).*?<\/script>/gs;
     let matchArr;
     while ((matchArr = regex.exec(content)) !== null) {
         if (matchArr[1].includes('id":') || matchArr[1].includes('id":"')) {
             bestMatch = matchArr[1];
             break;
         }
     }
  }

  if (bestMatch) {
    fs.writeFileSync('public/data/' + name + '.json', bestMatch);
    console.log('Extracted ' + name);
  } else {
    console.log('Failed to extract ' + name);
  }
}
