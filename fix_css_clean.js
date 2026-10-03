const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const targetRegex = /\[data-layout="right"\] \.app \{[\s\S]*\}\s*\n\s*@media only screen/m;

const replacement = `/* DYNAMIC LAYOUT ENGINE */
[data-layout="right"] .app {
    flex-direction: row-reverse;
}

[data-layout="top"] .app, [data-layout="bottom"] .app {
    flex-direction: column;
    align-items: center;

    .sections-container {
        width: 100%;
        max-width: 800px;
    }
}

[data-layout="bottom"] .app {
    flex-direction: column-reverse;
}

@media only screen`;

css = css.replace(targetRegex, replacement);
fs.writeFileSync('src/app/globals.scss', css);
