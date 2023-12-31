import { IDashboardRepository } from "@/domain/dashboard/application/repositories/dashboard-repository";
import { DashboardInMemoryRepository } from "../repositories/dashboard-in-memory-repository";
import { ListRecentInvoicesUseCase } from "@/domain/dashboard/application/use_cases/dashboard-list-recent-invoices";

export function makeDashboardListRecentInvoicesTest() {
	const repository: IDashboardRepository = new DashboardInMemoryRepository();
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
