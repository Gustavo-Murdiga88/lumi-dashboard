import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filePath = fileURLToPath(import.meta.url);

const __dirname = resolve(dirname(__filePath), "..", "..");

export const dir = __dirname;
