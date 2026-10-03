const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

css = css.replace(/background: linear-gradient\(135deg, var\(--glass-bg-start\) 0%, var\(--glass-bg-end\) 100%\);/g, 'background: var(--color-nav-uiblur-stuck);');

fs.writeFileSync('src/app/globals.scss', css);
