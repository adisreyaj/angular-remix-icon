import * as del from 'del';
import * as fs from 'fs-extra';
import * as upperCamelCase from 'uppercamelcase';

const iconsSourceFolder = './node_modules/remixicon/icons';
const iconsDestinationFolder = './projects/angular-remix-icon/src/lib/icons';
const indexFile = './projects/angular-remix-icon/src/lib/icons.ts';
const indexTypeFile = './projects/angular-remix-icon/src/lib/icon-names.ts';
const iconTsTemplate = fs.readFileSync(
  `${__dirname}/template/icon.tpl`,
  'utf-8'
);
const iconNameTypeTsTemplate = fs.readFileSync(
  `${__dirname}/template/icon-name.tpl`,
  'utf-8'
);

(async () => {
  const readCategories = () => {
    return fs.readdirSync(iconsSourceFolder);
  };

  const readIconsInCategory = (category: string) => {
    const iconsFiles = fs.readdirSync(`${iconsSourceFolder}/${category}`);
    return iconsFiles;
  };

  const removeExtension = (str: string) => {
    return str.substr(0, str.lastIndexOf('.'));
  };

  const extractIconFileContent = (filePath: string) => {
    return fs.readFileSync(filePath);
  };

  await del(`${iconsDestinationFolder}`, {force: true});
  await del(`${iconsDestinationFolder}/**/*`, {force: true});
  await del(`${indexFile}`, {force: true});
  await del(`${indexTypeFile}`, {force: true});

  fs.mkdirSync(`${iconsDestinationFolder}`);
  const categories = readCategories();

  const iconNames: string[] = [];
  categories.forEach((category) => {
    fs.mkdirSync(`${iconsDestinationFolder}/${category}`);
    const iconsInCategory = readIconsInCategory(category);
    iconsInCategory.forEach((icon) => {
      const iconName = removeExtension(icon);
      const exportName = upperCamelCase(iconName);
      const content = extractIconFileContent(
        `${iconsSourceFolder}/${category}/${icon}`
      );

      // Extract the paths from between the svg tags
      const [_, payload] = String(content)
        .replace(/\n|\r/g, '')
        .match(/^<svg[^>]+?>(.+)<\/svg>$/);

      const output = iconTsTemplate
        .replace(/__EXPORT_NAME__/g, `Ri${exportName}`)
        .replace(/__PATHS__/, payload);
      console.log('WRITING...', `${category}/${iconName}`);
      fs.writeFileSync(
        `${iconsDestinationFolder}/${category}/${iconName}.ts`,
        output,
        'utf-8'
      );

      fs.appendFileSync(
        indexFile,
        `export { Ri${exportName} } from './icons/${category}/${iconName}';\n`
      );

      iconNames.push(iconName);
    });
  });

  const iconNamesForTSType = iconNames.reduce((result, next) => {
    if (!result) {
      return `\'${next}\'`;
    }
    return result + `\n | \'${next}\'`;
  }, '');

  const typeString = iconNameTypeTsTemplate
    .replace(/__ICON_NAMES__/g, iconNamesForTSType);

  console.log('WRITING...', `${indexTypeFile}`);

  fs.writeFileSync(indexTypeFile, typeString);
})();
