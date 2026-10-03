const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

const target = `[data-layout="top"] .app, [data-layout="bottom"] .app {
    flex-direction: column;
    align-items: center;
    
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 40px;
        position: relative;
        top: 0;
        
        .contact {
            margin-top: 0;
            .wrapper ul {
                justify-content: flex-end;
            }
        }
    }`;

const replacement = `[data-layout="top"] .app, [data-layout="bottom"] .app {
    flex-direction: column;
    align-items: center;
    
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        position: relative;
        top: 0;
        
        .nav {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-top: 0;
            
            li { padding: 0; }
            a { 
                flex-direction: column; 
                span { display: none; }
                small { font-size: 0.85rem; }
            }
        }

        .contact {
            margin-top: 0;
            .wrapper ul {
                justify-content: flex-end;
            }
        }
    }`;

css = css.replace(target, replacement);
fs.writeFileSync('src/app/globals.scss', css);
