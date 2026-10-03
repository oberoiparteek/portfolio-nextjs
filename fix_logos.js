const fs = require('fs');

let content = fs.readFileSync('src/components/sections/Experience.tsx', 'utf8');

// Replace Cvent
content = content.replace(
    /<span className="title link-svg" title="Job title">\s*Senior Frontend Engineer ・ Cvent/g,
    `<div className="flex items-start gap-4 mb-2">
                        <img src="https://logo.clearbit.com/cvent.com" alt="Cvent Logo" className="w-12 h-12 rounded-lg shadow-sm bg-white p-1 object-contain mt-1" />
                        <div>
                            <span className="title link-svg" title="Job title" style={{ display: 'flex', alignItems: 'center' }}>
                                Senior Frontend Engineer`
);
// We need to add the company name below the title. But wait, the SVG is part of the `title` span.
// Let's do it like this:
// Replace Cvent
content = content.replace(
    /Senior Frontend Engineer ・ Cvent/,
    `Senior Frontend Engineer`
);
// Wait, the above script is messy. Let me just rewrite the script using precise replacements.

