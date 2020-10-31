export function upperCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (firstLetter) => firstLetter.toUpperCase())
    .replace(/[-_]/g, '');
}
