import { IDashboardRepository } from "../repositories/dashboard-repository";
import { ListRecentInvoicesUseCase } from "../use_cases/dashboard-list-recent-invoices";

export function makeDashboardListRecentInvoices() {
	const repository: IDashboardRepository = {} as IDashboardRepository;
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
