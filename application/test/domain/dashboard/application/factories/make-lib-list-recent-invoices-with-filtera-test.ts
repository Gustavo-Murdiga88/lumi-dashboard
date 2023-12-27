import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";
import { LibInvoicesMemoryRepository } from "../repositories/lib-invoices-in-memory-repository";
import { LibInvoicesListRecentWithFilterUseCase } from "@/domain/dashboard/application/use_cases/lib-invoice-list-recent-with-filter";

export function makeLibListRecentInvoicesWithFilter() {
	const repository: ILibInvoicesRepository = new LibInvoicesMemoryRepository();
	const usecase = new LibInvoicesListRecentWithFilterUseCase(repository);

	return usecase;
}
