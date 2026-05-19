import * as fs from 'fs';
import * as path from 'path';

const root = process.cwd();
const iconsIndex = path.join(
  root,
  'projects/angular-remix-icon/src/lib/icons.ts',
);
const iconNamesFile = path.join(
  root,
  'projects/angular-remix-icon/src/lib/icon-names.ts',
);

const requiredExports = [
  'RiHome2Fill',
  'RiMailUnreadLine',
  'RiSendPlaneFill',
  'RiNotification2Fill',
  'RiChat3Fill',
  'RiSettings3Fill',
];

function main(): void {
  if (!fs.existsSync(iconsIndex)) {
    throw new Error(
      `Missing ${iconsIndex}. Run "npm run generate" before verifying icons.`,
    );
  }

  if (!fs.existsSync(iconNamesFile)) {
    throw new Error(`Missing ${iconNamesFile}.`);
  }

  const iconsSource = fs.readFileSync(iconsIndex, 'utf8');
  const missing = requiredExports.filter(
    (exportName) => !iconsSource.includes(`export { ${exportName} }`),
  );

  if (missing.length > 0) {
    throw new Error(
      `icons.ts is missing required exports: ${missing.join(', ')}`,
    );
  }

  const exportCount = (iconsSource.match(/^export \{/gm) ?? []).length;
  if (exportCount < 100) {
    throw new Error(
      `icons.ts looks incomplete (found ${exportCount} exports, expected many more).`,
    );
  }

  console.log(
    `Verified ${requiredExports.length} required exports and ${exportCount} total icon exports.`,
  );
}

main();
