const fs = require('fs');
const path = require('path');

const resRoot = path.resolve(__dirname, 'src/main/res');
const sourceIcon = process.argv[2];

if (!sourceIcon) {
  console.error('Uso: node replace-icon.js <ruta-al-icono-nuevo>');
  process.exit(1);
}

const sourcePath = path.resolve(sourceIcon);
if (!fs.existsSync(sourcePath)) {
  console.error(`No se encuentra el archivo de icono: ${sourcePath}`);
  process.exit(1);
}

const targetFiles = [];

// agregar icon.png en res si existe
const rootIcon = path.join(resRoot, 'icon.png');
if (fs.existsSync(rootIcon)) {
  targetFiles.push(rootIcon);
}

// buscar en mipmap-* todos los archivos ic_launcher*
for (const entry of fs.readdirSync(resRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (!entry.name.startsWith('mipmap')) continue;

  const dirPath = path.join(resRoot, entry.name);
  for (const fileName of fs.readdirSync(dirPath)) {
    if (fileName.startsWith('ic_launcher')) {
      targetFiles.push(path.join(dirPath, fileName));
    }
  }
}

if (targetFiles.length === 0) {
  console.error('No se encontraron archivos de icono para reemplazar.');
  process.exit(1);
}

for (const targetPath of targetFiles) {
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Reemplazado: ${targetPath}`);
}

console.log(`Listo. Se reemplazaron ${targetFiles.length} archivo(s) con ${sourcePath}.`);
