import { ListRecentWithFilterInvoicesUseCase } from "@/domain/dashboard/application/use_cases/dashboard-list-recent-with-filter";
import { DashboardInMemoryRepository } from "../repositories/dashboard-in-memory-repository";
import { IDashboardRepository } from "@/domain/dashboard/application/repositories/dashboard-repository";

export function makeDashboardListRecentInvoicesWithFilterTest() {
	const repository: IDashboardRepository = new DashboardInMemoryRepository();
	const usecase = new ListRecentWithFilterInvoicesUseCase(repository);

	return usecase;
}
