import { PrismaDashboardRepository } from "@/domain/infra/database/prisma/repositories/prisma-dashboard-repository";
import { IDashboardRepository } from "../repositories/dashboard-repository";
import { ListRecentInvoicesUseCase } from "../use_cases/dashboard-list-recent-invoices";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeDashboardListRecentInvoices() {
	const repository: IDashboardRepository = new PrismaDashboardRepository(
		prismaClient,
	);
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
