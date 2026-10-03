const fs = require('fs');
let tsx = fs.readFileSync('src/components/Header.tsx', 'utf8');

const target = `        <header>
            <div>
                <div className="mb-12 flex justify-start pl-2">
                <SettingsDropdown />
            </div>
            <ul className="nav">`;

const replacement = `        <header className="relative">
            <div className="w-full">
                <div className="absolute top-2 right-4 z-50">
                    <SettingsDropdown />
                </div>
            <ul className="nav pt-12">`;

tsx = tsx.replace(target, replacement);
fs.writeFileSync('src/components/Header.tsx', tsx);
