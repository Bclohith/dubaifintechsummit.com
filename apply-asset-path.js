const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.js')) {
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
    
    // Ignore the helper itself
    if (file.includes('assetPath.js')) return;

    let modified = false;

    // Fix <img src="/..." /> -> <img src={assetPath('/...')} />
    if (/src="\/[^"]+"/.test(content)) {
        content = content.replace(/src="(\/[^"]+)"/g, 'src={assetPath(\'$1\')}');
        modified = true;
    }

    // Fix bg: '/...' -> bg: assetPath('/...')
    if (/bg:\s*'\/[^']+'/.test(content)) {
        content = content.replace(/bg:\s*'(\/[^']+)'/g, 'bg: assetPath(\'$1\')');
        modified = true;
    }

    if (modified) {
        // Compute relative path to utils/assetPath
        const fileDepth = file.split(path.sep).length - 2; // app/page.js depth is 0
        let importPath = '';
        if (fileDepth === 0) {
            importPath = './utils/assetPath';
        } else if (fileDepth === 1) {
            importPath = '../utils/assetPath';
        } else if (fileDepth === 2) {
            importPath = '../../utils/assetPath';
        }

        const importStatement = `import { assetPath } from '${importPath.replace(/\\/g, '/')}';\n`;
        
        // Add import after "use client" if it exists, otherwise at top
        if (content.includes("'use client';")) {
            content = content.replace("'use client';", "'use client';\n" + importStatement);
        } else if (content.includes('"use client";')) {
            content = content.replace('"use client";', '"use client";\n' + importStatement);
        } else {
            content = importStatement + content;
        }

        fs.writeFileSync(file, content, 'utf8');
        console.log('Applied helper to:', file);
    }
});
