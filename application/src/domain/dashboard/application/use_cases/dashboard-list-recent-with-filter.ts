import { PDFMapper } from "@/domain/infra/http/presenters/pdf-presenter";
import {
	IDashboardRepository,
	QueryProps,
} from "../repositories/dashboard-repository";

export class ListRecentWithFilterInvoicesUseCase {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
	}

	async execute(query: QueryProps) {
		const list = await this.repository.fetchRecentWithQuery(query);

		const http = list.map(PDFMapper.toHttp);

		return http;
	}
}
