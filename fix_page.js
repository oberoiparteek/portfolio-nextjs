const fs = require('fs');
let tsx = fs.readFileSync('src/app/page.tsx', 'utf8');
tsx = tsx.replace('import Header from "@/components/Header";', 'import Header from "@/components/Header";\nimport SocialSidebar from "@/components/SocialSidebar";');
tsx = tsx.replace('<Header />', '<Header />\n                <SocialSidebar />');
fs.writeFileSync('src/app/page.tsx', tsx);
