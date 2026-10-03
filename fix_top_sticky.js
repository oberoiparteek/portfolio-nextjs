const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        position: relative;
        top: 0;`;

const replacement = `    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        position: sticky;
        top: 2em;
        z-index: 50;
        background: var(--color-background);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
