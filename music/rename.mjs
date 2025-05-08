import { readdir, rename } from 'fs/promises';
import { extname, basename, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const files = await readdir(__dirname);

for (const file of files) {
  if (extname(file) === '.mp3') {
    const oldPath = join(__dirname, file);
    const newPath = join(__dirname, `${basename(file, '.mp3')}.lkmp3`);
    await rename(oldPath, newPath);
    console.log(`重命名: ${file} -> ${basename(newPath)}`);
  }
}
