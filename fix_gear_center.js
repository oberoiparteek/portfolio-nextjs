const fs = require('fs');
let tsx = fs.readFileSync('src/components/Header.tsx', 'utf8');

tsx = tsx.replace(/top: '24px', right: '24px'/g, "top: '50%', transform: 'translateY(-50%)', right: '24px'");

fs.writeFileSync('src/components/Header.tsx', tsx);
