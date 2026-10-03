const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `[data-layout="top"] .app, [data-layout="bottom"] .app {
    flex-direction: column;
    align-items: center;
    
    header {
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
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        
        .nav {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-top: 0;`;

const replacement = `[data-layout="top"] .app, [data-layout="bottom"] .app {
    flex-direction: column;
    align-items: center;
    
    header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        position: sticky;
        top: 2em;
        z-index: 50;
        
        /* Glassmorphism UI */
        background: linear-gradient(135deg, var(--glass-bg-start) 0%, var(--glass-bg-end) 100%);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--glass-border);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        
        .nav {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 2rem;
            margin-top: 0;`;

css = css.replace(target, replacement);

// And do the same for bottom
const targetBottom = `[data-layout="bottom"] .app {
    flex-direction: column-reverse;
    
    header {
        margin-bottom: 0;
        margin-top: 40px;
        position: sticky;
        bottom: 2em;
        top: auto;
        align-items: flex-end;
        background: var(--color-background);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
        z-index: 50;
    }
}`;

const replacementBottom = `[data-layout="bottom"] .app {
    flex-direction: column-reverse;
    
    header {
        margin-bottom: 0;
        margin-top: 40px;
        position: sticky;
        bottom: 2em;
        top: auto;
        justify-content: center;
        
        /* Glassmorphism UI */
        background: linear-gradient(135deg, var(--glass-bg-start) 0%, var(--glass-bg-end) 100%);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--glass-border);
        padding: 20px 30px;
        border-radius: 24px;
        box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
        z-index: 50;
    }
}`;
css = css.replace(targetBottom, replacementBottom);

fs.writeFileSync('src/app/globals.scss', css);
