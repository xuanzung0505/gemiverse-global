import fs from "fs";
import path from "path";

const STATIC_DIR = path.join(process.cwd(), "public");

const readStaticFile = (dir: string) => {
  return fs.readFileSync(path.join(STATIC_DIR, dir));
};

const writeStaticFile = (dir: string, data: string) => {
  fs.writeFileSync(path.join(STATIC_DIR, dir), data);
};

export { readStaticFile, writeStaticFile };
