const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir(directoryPath);

files.forEach(file => {
    let originalContent = fs.readFileSync(file, 'utf8');
    let content = originalContent;

    // Make the design 'raika' - cleaner dropshadow, glassmorphic look
    content = content.replace(/from-\[#1a1f2e\] to-\[#151a25\]/g, 'from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md');
    content = content.replace(/border-\[#CBA135\]\/20/g, 'border-white/5');
    content = content.replace(/hover:border-\[#CBA135\]\/40/g, 'hover:border-[#CBA135]/30');
    content = content.replace(/shadow-xl border border-white\/5/g, 'shadow-xl shadow-black/40 border border-white/5');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated cards in ${file}`);
    }
});
