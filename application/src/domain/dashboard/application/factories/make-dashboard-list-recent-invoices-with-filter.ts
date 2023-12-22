import { IDashboardRepository } from "../repositories/dashboard-repository";
import { ListRecentWithFilterInvoicesUseCase } from "../use_cases/dashboard-list-recent-with-filter";

export function makeDashboardListRecentInvoicesWithFilter() {
	const repository: IDashboardRepository = {} as IDashboardRepository;
	const usecase = new ListRecentWithFilterInvoicesUseCase(repository);

	return usecase;
}
