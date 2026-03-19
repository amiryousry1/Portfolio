const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const originalContent = content;

            // Replace colors
            content = content.replace(/#C1AA7E/gi, '#CBA135');
            // Replace #c1aa7e manually just in case
            content = content.replace(/#c1aa7e/g, '#CBA135');

            // Fix logos in Navigation and Footer
            content = content.replace(/import logoImage from 'figma:asset.*';/g, "import logoImage from '../assets/logo.svg';");

            // Make buttons casual (change rounded-xl or rounded-lg to rounded-full)
            // We will look for common button patterns
            content = content.replace(/(px-\d+\s+py-\d+(\.\d+)?\s+.*?)rounded-(xl|lg|2xl)/g, '$1rounded-full');
            content = content.replace(/(py-\d+\s+px-\d+\s+.*?)rounded-(xl|lg|2xl)/g, '$1rounded-full');

            // Also catch "px-6 py-2.5 rounded-xl"
            content = content.replace(/(px-6 py-2\.5 .*?)rounded-xl/g, '$1rounded-full');

            // Also catch any button with the primary gradient
            content = content.replace(/(bg-gradient-to-br from-\[#CBA135\] to-\[#a89363\].*?)rounded-xl/g, '$1rounded-full');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

try {
    replaceInDir('./src');
    console.log('Done!');
} catch (e) {
    console.error(e);
}
