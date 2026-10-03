const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

// Find the section that was after the deleted contact block
// Let's just find the first section { after header
let match = css.match(/header \{[\s\S]*?section \{/);
if (match) {
    // If header doesn't have a closing brace before section, we need to add one.
    // We can just append a `}` right before `section {`
    css = css.replace(/(\s*)(section \{)/, '$1}$1$2');
    fs.writeFileSync('src/app/globals.scss', css);
    console.log("Added missing brace before section {");
} else {
    console.log("Could not find section {");
}
