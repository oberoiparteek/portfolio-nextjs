const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

// Fix header
css = css.replace(/header \{\n        width: 30%;\n        float: left;\n        position: fixed;/, 'header {\n        width: 25%;\n        position: sticky;\n        top: 2em;\n        height: fit-content;');

// Fix .app flex
css = css.replace(/\.app \{\n    margin: 0 90px;\n    padding-top: 2em;\n/, '.app {\n    margin: 0 90px;\n    padding-top: 2em;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    .sections-container {\n        width: 70%;\n        display: flex;\n        flex-direction: column;\n    }\n');

// Fix section width and float
css = css.replace(/    section \{\n        width: 60%;\n        float: right;\n/, '    section {\n');

// Fix mobile .app block
css = css.replace(/    \.app \{\n        padding-top: 0.3em !important;\n    \}/, '    .app {\n        padding-top: 0.3em !important;\n        display: block;\n    }\n\n    .sections-container {\n        width: 100% !important;\n    }');

// Remove float: none !important;
css = css.replace(/float: none !important;/g, '');

// Fix .exp hover glassmorphism vs tilt
const expHover = `
                &:hover {
                    .title {
                        color: var(--color-marine);
                        text-decoration: underline;
                        text-decoration-color: var(--color-marine);
                        text-underline-offset: 4px;
                    }
                    .link-svg svg {
                        transform: none;
                    }
                    .badge-wrapper {
                        opacity: 1;
                    }
                }
            }
            .tilt-wrapper .exp:hover {
                    background: linear-gradient(135deg, var(--glass-bg-start) 0%, var(--glass-bg-end) 100%);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    transform: translateY(-4px);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    
                    .title { text-decoration: none; }
`;

css = css.replace(/                &:hover \{\n                    \/\* Apple Glassmorphism \*\/\n                    background: linear-gradient[\s\S]*?opacity: 1;\n                    \}\n                \}/, expHover);

fs.writeFileSync('src/app/globals.scss', css);
