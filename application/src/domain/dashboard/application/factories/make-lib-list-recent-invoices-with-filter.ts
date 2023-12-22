import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { ListRecentWithFilterInvoicesUseCase } from "../use_cases/dashboard-list-recent-with-filter";

export function makeLibListRecentInvoicesWithFilter() {
	const repository: ILibInvoicesRepository = {} as ILibInvoicesRepository;
	const usecase = new ListRecentWithFilterInvoicesUseCase(repository);

	return usecase;
}
