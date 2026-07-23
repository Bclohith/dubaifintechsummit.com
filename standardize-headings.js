const fs = require('fs');
const path = require('path');

const standardTitleCSS = `.title {
  font-family: var(--font-primary);
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-text-white);
  letter-spacing: -0.02em;`;

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.module.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // This regex matches .title { ... } up to the closing brace, non-greedily, capturing everything inside
    // It's a bit tricky because some files might have multiple .title if nested, but standard CSS modules don't nest natively unless postcss
    // We will just replace font-size, font-weight, line-height, letter-spacing properties if they exist inside .title
    
    // Instead of parsing, let's just use a simple replace on the entire block if it looks like the standard component title
    const blockRegex = /\.title\s*{[^}]*}/g;
    
    content = content.replace(blockRegex, match => {
        // If it's a light section like NewsSection or PartnersSection, color is dark
        let colorLine = '  color: var(--color-text-white);';
        if (file.includes('NewsSection') || file.includes('PartnersSection')) {
            colorLine = '  color: #0b1d35;';
        }
        
        // Preserve margin-bottom if it exists
        let marginBottom = '';
        const mbMatch = match.match(/margin-bottom:\s*[^;]+;/);
        if (mbMatch) {
            marginBottom = `\n  ${mbMatch[0]}`;
        }
        
        return `.title {
  font-family: var(--font-primary);
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  ${colorLine}${marginBottom}
}`;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Standardized title in:', file);
    }
});
