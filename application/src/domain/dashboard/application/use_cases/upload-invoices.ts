import { IPDFRepository } from "../repositories/pdf-repository";
import { PDF } from "../../enterprise/entities/pdf";

export class UploadInvoicesUseCase {
	private repository: IPDFRepository;

	constructor(repository: IPDFRepository) {
		this.repository = repository;
	}

	async execute(files: PDF[]) {
		await this.repository.createMany(files);

		const list = files.map((file) => file.toHTTP());

		return list;
	}
}
