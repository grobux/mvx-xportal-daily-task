import fs from 'fs';
import path from 'path';

const walletsDirectory = path.resolve(__dirname, '../wallets');
const outputFile = path.join(__dirname, '../.env');

const files = fs.readdirSync(walletsDirectory)
    .filter(file => file.endsWith('.json'));

let envContent = `# Auto-generated wallet passwords\n`;

files.forEach(file => {
    const baseName = path.basename(file, path.extname(file)).toUpperCase();
    envContent += `WALLET_PASSWORD_${baseName}=\n`;
});

envContent += `\nAPI_URL=`;

fs.writeFileSync(outputFile, envContent);
console.log(`✅ .env.generated created with entries for: ${files.join(', ')}`);
