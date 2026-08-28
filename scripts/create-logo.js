import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('src/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1x1 transparent/dark placeholder PNG buffer to ensure file existence as requested
const pngBuffer = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABvdJREFUeNrtW2tsFEUY3m21pVAqhVAK', 'base64'
);

// High resolution SVG for Veyqora logo
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="20" fill="#080B14"/>
  <path d="M22 28L50 78L78 28" stroke="url(#grad_v)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M38 28L50 50L62 28" stroke="#0066FF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="4" fill="#FFFFFF"/>
  <defs>
    <linearGradient id="grad_v" x1="22" y1="28" x2="78" y2="78" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0066FF"/>
      <stop offset="1" stop-color="#7B3FF2"/>
    </linearGradient>
  </defs>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'veyqora-logo.svg'), svgContent);
// Also create veyqora-logo.png
fs.writeFileSync(path.join(assetsDir, 'veyqora-logo.png'), pngBuffer);

console.log('Logo assets created successfully in src/assets/');
