import fs from 'fs';
import path from 'path';

export default class {
  constructor() {}

  readFile(file) {
    return fs.readFileSync(path.resolve(file));
  }
}
