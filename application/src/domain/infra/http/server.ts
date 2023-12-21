import fastify from "fastify";
import fs from "node:fs";
import file from "@fastify/multipart";

import { pipeline } from "node:stream";

import { promisify } from "node:util";
import { randomUUID } from "node:crypto";
import { resolve } from "node:path";
import { pdfExtrator } from "../../../lib/pdf";

const pump = promisify(pipeline);

const server = fastify({
	logger: true,
});

server.register(file);

function existsDirectory(path: string) {
	return new Promise((resolve, reject) => {
		fs.stat(path, (err) => {
			if (err) {
				fs.mkdir(path, (err) => {
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

const path = resolve(__dirname, "temp");

server.post("/invoces", async (request, reply) => {
	const file = await request.file();

	const nameFile = `invoce-${randomUUID()}.${file?.type}`;

	await existsDirectory(path);
	const path_complete = `${path}/${nameFile}`;

	await pump(file!.file, fs.createWriteStream(path_complete));

	const keys = await pdfExtrator(path_complete);

	reply.send({
		path,
		keys,
	});
});

server.listen({ port: 3001, host: "0.0.0.0" }).then(() => {
	console.log(`Server listening on port 3001`);
});
