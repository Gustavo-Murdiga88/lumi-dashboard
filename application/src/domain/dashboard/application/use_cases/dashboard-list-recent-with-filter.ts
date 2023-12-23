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

		const http = list.map((item) => item.toHTTP());

		return http;
	}
}
