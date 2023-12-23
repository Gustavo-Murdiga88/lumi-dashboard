import fs from "node:fs";
import fsAsync from "node:fs/promises";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import type { MultipartFile } from "@fastify/multipart";
import { PDFExtract } from "pdf.js-extract";
import { Screpper } from "@/domain/dashboard/scrapper/screpper";
import { keysMapper } from "@/core/const/keys-mappers";
import { ScrepperFormat } from "@/domain/dashboard/scrapper/formater";

import { FilesMapper } from "../files/mapper";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";
import { CannotFindPath } from "../errors/cannot-find-path";
import { dir } from "../dir";

export const runtime = "nodejs";
const pdf = new PDFExtract();

const pump = promisify(pipeline);

export class Files {
	static path: string = `${dir}/temp`;

	static completePath(sufix: string) {
		return `${this.path}/${sufix}`;
	}

	static existsDirectory(path?: string) {
		return new Promise((resolve, reject) => {
			fs.stat(path || this.path, (err) => {
				if (err) {
					fs.mkdir(path || this.path, (err) => {
						if (!err) {
							reject(err);
							console.log("Directory created successfully!");
						}
						resolve(path);
					});
				}
				resolve(path);
			});
		});
	}

	static async createFile(file: MultipartFile["file"], path?: string) {
		await pump(file, fs.createWriteStream(path ?? this.path));
	}

	static async pdfExtrator(path: string) {
		return new Promise<PDF>((resolve, reject) => {
			pdf.extract(
				path,
				{
					normalizeWhitespace: true,
				},
				(err, data) => {
					if (err) {
						reject(err);
					}

					Screpper.Reader(data || null, keysMapper);
					const formatted = ScrepperFormat.Format(keysMapper);

					const pdf = PDF.create({
						...FilesMapper.fromScrepperToPDF(formatted),
						pathAttach: path,
					});

					resolve(pdf);
				},
			);
		});
	}

	static async deleteAttach(path?: string | null) {
		if (!path) {
			throw new CannotFindPath();
		}

		const attachExist = await fsAsync.stat(path);

		if (!attachExist) {
			throw new CannotFindPath();
		}

		await fsAsync.unlink(path);
	}
}
