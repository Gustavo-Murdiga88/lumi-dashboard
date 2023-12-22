import { PrismaPdfMapper } from "@/domain/infra/database/prisma/mappers/prisma-pdf-mapper";
import { IDashboardRepository } from "../repositories/dashboard-repository";

export class ListRecentInvoicesUseCase {
	private repository: IDashboardRepository;

	constructor(repository: IDashboardRepository) {
		this.repository = repository;
	}

	async execute() {
		const list = await this.repository.fetchRecent();

		const httpList = list.map((item) => item.toHTTP());

		return httpList;
	}
}
