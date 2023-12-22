import { ListRecentInvoicesUseCase } from "@/domain/dashboard/application/use_cases/dashboard-list-recent-invoices";
import { LibInvoicesMemoryRepository } from "../repositories/lib-invoices-in-memory-repository";
import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";

export function makeLibListRecentInvoicesTest() {
	const repository: ILibInvoicesRepository = new LibInvoicesMemoryRepository();
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
