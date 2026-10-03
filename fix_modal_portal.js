const fs = require('fs');
let tsx = fs.readFileSync('src/components/SettingsDropdown.tsx', 'utf8');

if (!tsx.includes('createPortal')) {
    tsx = tsx.replace('import React, { useState, useEffect } from "react";', 'import React, { useState, useEffect } from "react";\nimport { createPortal } from "react-dom";');
}

const target = `{isOpen && (
                <div 
                    style={{
                        position: 'fixed'`;

const replacement = `{isOpen && mounted && createPortal(
                <div 
                    style={{
                        position: 'fixed'`;

tsx = tsx.replace(target, replacement);

const targetEnd = `                        </div>
                    </div>
                </div>
            )}`;

const replacementEnd = `                        </div>
                    </div>
                </div>,
                document.body
            )}`;

tsx = tsx.replace(targetEnd, replacementEnd);
fs.writeFileSync('src/components/SettingsDropdown.tsx', tsx);
