import { PrismaDashboardRepository } from "@/domain/infra/database/prisma/repositories/prisma-dashboard-repository";
import { IDashboardRepository } from "../repositories/dashboard-repository";
import { ListRecentWithFilterInvoicesUseCase } from "../use_cases/dashboard-list-recent-with-filter";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeDashboardListRecentInvoicesWithFilter() {
	const repository: IDashboardRepository = new PrismaDashboardRepository(
		prismaClient,
	);
	const usecase = new ListRecentWithFilterInvoicesUseCase(repository);

	return usecase;
}
