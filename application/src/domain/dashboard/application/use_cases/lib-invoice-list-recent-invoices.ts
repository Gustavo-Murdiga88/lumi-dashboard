import { PDFMapper } from "@/domain/infra/http/presenters/pdf-presenter";
import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";

export class LibListInvoicesRecentUseCase {
	private repository: ILibInvoicesRepository;

	constructor(repository: ILibInvoicesRepository) {
		this.repository = repository;
	}

	async execute({ limit, page }: { page?: number; limit?: number }) {
		const list = await this.repository.fetchRecent(page, limit);

		const pdfs = list.map(PDFMapper.toHttp);

		return pdfs;
	}
}
