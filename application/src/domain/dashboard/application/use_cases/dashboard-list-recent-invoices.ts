import { IDashboardRepository } from "../repositories/dashboard-repository";
import { PDFMapper } from "@/domain/infra/http/presenters/pdf-presenter";

export class ListRecentInvoicesUseCase {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
	}

	async execute({ limit, page }: { page?: number; limit?: number }) {
		const list = await this.repository.fetchRecent(page, limit);

		const httpList = list.pdfs.map(PDFMapper.toHttp);

		return {
			invoices: httpList,
			sum: list.sum,
		};
	}
}
