import fs from "fs";
import path from "path";

const STATIC_DIR = path.join(process.cwd(), "public");

const readStaticFile = (dir: string) => {
  try {
    const file = fs.readFileSync(path.join(STATIC_DIR, dir));
    return file;
  } catch {
    throw new Error("error when reading file");
  }
};

const writeStaticFile = (dir: string, data: string) => {
  try {
    fs.writeFileSync(path.join(STATIC_DIR, dir), data);
  } catch {
    throw new Error("error when writing file");
  }
};

export { readStaticFile, writeStaticFile };
