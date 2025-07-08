import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { WalletType } from "./types/wallet.types";

dotenv.config();

const walletsDir = path.resolve(__dirname, '../wallets');

const walletFiles = fs.readdirSync(walletsDir).filter(file => file.endsWith('.json'));

export const wallets: WalletType[] = walletFiles.map(file => {
    const baseName = path.basename(file, path.extname(file)).toUpperCase();
    const password = process.env[`WALLET_PASSWORD_${baseName}`] || '';

    return {
        file,
        password,
    };
});
