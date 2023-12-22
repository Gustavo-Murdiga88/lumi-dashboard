import { IDashboardRepository } from "../repositories/dashboard-repository";

export class ListRecentInvoicesUseCase {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
	}

	async execute() {
		const list = await this.repository.fetchRecent();

		return list;
	}
}
