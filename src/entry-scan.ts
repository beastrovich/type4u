import fs from 'fs';
import path from 'path';

export function getEntryPointPaths(rootPath: string) {
  rootPath = path.resolve(rootPath);
  const pathStack = [rootPath];
  const entryPaths: string[] = [];

  while (pathStack.length > 0) {
    const top = pathStack.pop();
    if (top === undefined) throw new Error('Unexpected undefined');
    const files = fs.readdirSync(top, { withFileTypes: true });
    for (const file of files) {
      const filePath = `${top}/${file.name}`;
      if (file.isFile() && file.name.endsWith('.ts')) {
        entryPaths.push(path.relative(rootPath, filePath));
      } else if (file.isDirectory()) {
        pathStack.push(filePath);
      }
    }
  }

  return entryPaths;
}
