import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";
import { LibInvoicesMemoryRepository } from "../repositories/lib-invoices-in-memory-repository";
import { ListRecentWithFilterInvoicesUseCase } from "@/domain/dashboard/application/use_cases/dashboard-list-recent-with-filter";

export function makeLibListRecentInvoicesWithFilter() {
	const repository: ILibInvoicesRepository = new LibInvoicesMemoryRepository();
	const usecase = new ListRecentWithFilterInvoicesUseCase(repository);

	return usecase;
}
