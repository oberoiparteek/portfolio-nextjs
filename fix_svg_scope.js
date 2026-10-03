const fs = require('fs');
let css = fs.readFileSync('src/app/globals.scss', 'utf8');

// 1. Remove the misplaced one
css = css.replace(/                \.link-svg \{\n                    svg \{\n                        width: 14px;\n                        height: 14px;\n                        transform: translate\(-2px, 2px\);\n                        transition: transform 0\.3s ease;\n                    \}\n                \}/, '');

// 2. Insert it safely inside .exp before &:hover
css = css.replace(/            \.exp \{\n/, '            .exp {\n                .link-svg svg {\n                    width: 14px;\n                    height: 14px;\n                    transition: transform 0.3s ease;\n                }\n');

fs.writeFileSync('src/app/globals.scss', css);
