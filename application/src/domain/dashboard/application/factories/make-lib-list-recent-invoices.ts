import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { ListRecentInvoicesUseCase } from "../use_cases/dashboard-list-recent-invoices";

export function makeLibListRecentInvoices() {
	const repository: ILibInvoicesRepository = {} as ILibInvoicesRepository;
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
