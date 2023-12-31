import { ListRecentInvoicesUseCase } from "@/domain/dashboard/application/use_cases/dashboard-list-recent-invoices";
import { DashboardInMemoryRepository } from "../repositories/dashboard-in-memory-repository";
import { IDashboardRepository } from "@/domain/dashboard/application/repositories/dashboard-repository";

export function makeLibListRecentInvoicesTest() {
	const repository: IDashboardRepository = new DashboardInMemoryRepository();
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
