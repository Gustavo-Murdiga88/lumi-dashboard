import { MultipartFile } from "@fastify/multipart";
import { randomUUID } from "crypto";
import { IPDFRepository } from "../repositories/pdf-repository";
import { Files } from "@/core/files/files";
import { PDF } from "../../enterprise/entities/pdf";
import { ErrorWithPDFListPDF } from "@/core/errors/error-with-pdf";

export class UploadInvoicesUseCase {
	private repository: IPDFRepository;

	constructor(repository: IPDFRepository) {
		this.repository = repository;
	}

	async execute(files: AsyncIterableIterator<MultipartFile>) {
		const pdfList: PDF[] = [];

		for await (const file of files) {
			const nameFile = `invoce-${randomUUID()}.${file?.type}`;

			await Files.existsDirectory();

			const path_complete = Files.completePath(nameFile);

			await Files.createFile(file.file, path_complete);

			const key = await Files.pdfExtrator(path_complete);

			pdfList.push(key);
		}

		if (pdfList.length === 0) {
			throw new ErrorWithPDFListPDF();
		}

		await this.repository.createMany(pdfList);
	}
}
