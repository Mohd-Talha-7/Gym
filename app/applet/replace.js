const fs = require('fs');
let content = fs.readFileSync('./app/page.tsx', 'utf8');

// Replacements
content = content.replace(/bg-\[\#eaf3f9\]/g, 'bg-theme-bg-main');
content = content.replace(/bg-app-bg/g, 'bg-theme-bg-panel');
content = content.replace(/bg-app-sidebar/g, 'bg-theme-bg-panel');
content = content.replace(/bg-white/g, 'bg-theme-bg-card');
content = content.replace(/text-gray-900/g, 'text-theme-text-main');
content = content.replace(/text-gray-800/g, 'text-theme-text-main');
content = content.replace(/text-gray-700/g, 'text-theme-text-main');
content = content.replace(/text-gray-600/g, 'text-theme-text-muted');
content = content.replace(/text-gray-500/g, 'text-theme-text-muted');
content = content.replace(/text-gray-400/g, 'text-theme-text-muted');
content = content.replace(/border-gray-100/g, 'border-theme-border');
content = content.replace(/border-gray-200/g, 'border-theme-border');
content = content.replace(/border-gray-50/g, 'border-theme-border');
content = content.replace(/bg-gray-50/g, 'bg-theme-bg-main');
content = content.replace(/bg-gray-100/g, 'bg-theme-border');

content = content.replace(/bg-\[\#1ca1f1\]/g, 'bg-theme-primary-main');
content = content.replace(/hover:bg-sky-500/g, 'hover:bg-theme-primary-hover');
content = content.replace(/bg-sky-100/g, 'bg-theme-primary-light');
content = content.replace(/text-sky-600/g, 'text-theme-primary-text');
content = content.replace(/text-sky-500/g, 'text-theme-primary-text');
content = content.replace(/text-sky-800/g, 'text-theme-primary-text');
content = content.replace(/bg-sky-50/g, 'bg-theme-primary-light');
content = content.replace(/border-sky-100/g, 'border-theme-primary-light');
content = content.replace(/border-sky-300/g, 'border-theme-primary-main');
content = content.replace(/bg-sky-500/g, 'bg-theme-primary-main');
content = content.replace(/bg-sky-200/g, 'bg-theme-primary-light');

content = content.replace(/bg-gradient-to-br from-sky-400 to-sky-500/g, 'bg-gradient-to-br from-theme-card-grad-from to-theme-card-grad-to');
content = content.replace(/text-sky-50/g, 'text-theme-card-grad-text');
content = content.replace(/text-sky-100/g, 'text-theme-card-grad-text');
content = content.replace(/text-sky-200/g, 'text-theme-card-grad-text');
content = content.replace(/text-sky-400/g, 'text-theme-primary-main');

content = content.replace(/bg-cyan-400/g, 'bg-theme-alert-bg');

// Add useState
content = content.replace(/import \{/g, "import { useState, useEffect } from 'react';\nimport {");

// Add state to Dashboard
content = content.replace(/export default function Dashboard\(\) \{/g, `export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('default');`);

// Add Settings to sidebar
content = content.replace(/<h4 className="px-3 text-\[10px\] font-semibold text-theme-text-muted tracking-wider mb-1 uppercase">General<\/h4>/g, `<h4 className="px-3 text-[10px] font-semibold text-theme-text-muted tracking-wider mb-1 uppercase">General</h4>
              <ul className="space-y-1">
                <li>
                  <a className={\`flex items-center gap-3 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors \${activeTab === 'settings' ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text' : 'text-theme-text-muted hover:bg-theme-bg-main'}\`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab('settings'); }}>
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                </li>
              </ul>`);

// Update Dashboard link to be active conditionally
content = content.replace(/<a className="flex items-center gap-3 px-3 py-1.5 bg-theme-primary-light text-theme-primary-text rounded-xl text-sm font-medium" href="#">/g, `<a className={\`flex items-center gap-3 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors \${activeTab === 'dashboard' ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text' : 'text-theme-text-muted hover:bg-theme-bg-main'}\`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}>`);

// Add theme class to outer div
content = content.replace(/<div className="absolute inset-0 flex items-center justify-center p-0 sm:p-4 lg:p-8 overflow-hidden bg-theme-bg-main">/g, `<div className={\`absolute inset-0 flex items-center justify-center p-0 sm:p-4 lg:p-8 overflow-hidden bg-theme-bg-main \${theme === 'default' ? '' : \`theme-\${theme}\`}\`}>`);

// Add conditional rendering for Settings
const settingsContent = `
            {activeTab === 'dashboard' ? (
              <>
                <div className="flex items-end justify-between mb-4 mt-1">
`;
content = content.replace(/<div className="flex items-end justify-between mb-4 mt-1">/g, settingsContent);

const settingsEndContent = `
              </>
            ) : (
              <div className="mt-4">
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight mb-4">Settings</h1>
                <div className="bg-theme-bg-card rounded-[20px] p-6 shadow-sm border border-theme-border">
                  <h3 className="text-lg font-semibold text-theme-text-main mb-4">Theme Customization</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    <button onClick={() => setTheme('default')} className={\`p-4 rounded-xl border-2 flex flex-col items-center gap-2 \${theme === 'default' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}\`}>
                      <div className="w-8 h-8 rounded-full bg-[#0ea5e9]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Default Blue</span>
                    </button>
                    <button onClick={() => setTheme('purple')} className={\`p-4 rounded-xl border-2 flex flex-col items-center gap-2 \${theme === 'purple' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}\`}>
                      <div className="w-8 h-8 rounded-full bg-[#a855f7]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Purple Gradient</span>
                    </button>
                    <button onClick={() => setTheme('dark')} className={\`p-4 rounded-xl border-2 flex flex-col items-center gap-2 \${theme === 'dark' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}\`}>
                      <div className="w-8 h-8 rounded-full bg-[#1e293b]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Dark Mode</span>
                    </button>
                    <button onClick={() => setTheme('yellow')} className={\`p-4 rounded-xl border-2 flex flex-col items-center gap-2 \${theme === 'yellow' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}\`}>
                      <div className="w-8 h-8 rounded-full bg-[#eab308]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Yellow</span>
                    </button>
                    <button onClick={() => setTheme('darkblue')} className={\`p-4 rounded-xl border-2 flex flex-col items-center gap-2 \${theme === 'darkblue' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}\`}>
                      <div className="w-8 h-8 rounded-full bg-[#0c4a6e]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Dark Blue</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
`;
content = content.replace(/<\/main>/g, `  ${settingsEndContent}\n          </main>`);

fs.writeFileSync('./app/page.tsx', content);
