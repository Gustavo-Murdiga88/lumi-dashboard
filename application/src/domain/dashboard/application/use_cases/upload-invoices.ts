import { IPDFRepository } from "../repositories/pdf-repository";
import { PDF } from "../../enterprise/entities/pdf";
import { PDFMapper } from "@/domain/infra/http/presenters/pdf-presenter";

export class UploadInvoicesUseCase {
	private repository: IPDFRepository;

	constructor(repository: IPDFRepository) {
		this.repository = repository;
	}

	async execute(files: PDF[]) {
		await this.repository.createMany(files);

		const list = files.map(PDFMapper.toHttp);

		return list;
	}
}
