const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target1 = `        /* Glassmorphism UI */
        background: var(--color-nav-uiblur-stuck);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--glass-border);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);`;

const replacement1 = `        /* Glassmorphism UI */
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(24px) saturate(150%);
        -webkit-backdrop-filter: blur(24px) saturate(150%);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);`;

const target2 = `        /* Glassmorphism UI */
        background: var(--color-nav-uiblur-stuck);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--glass-border);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 -10px 40px rgba(0,0,0,0.5);`;

const replacement2 = `        /* Glassmorphism UI */
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(24px) saturate(150%);
        -webkit-backdrop-filter: blur(24px) saturate(150%);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 -10px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);`;

css = css.replace(target1, replacement1).replace(target2, replacement2);
fs.writeFileSync('src/app/globals.scss', css);
