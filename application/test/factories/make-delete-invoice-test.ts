import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";
import { LibInvoicesMemoryRepository } from "../repositories/lib-invoices-in-memory-repository";
import { DeleteInvoiceUseCase } from "@/domain/dashboard/application/use_cases/delete-invoice";

export function makeDeleteInvoicedTest() {
	const repository: ILibInvoicesRepository = new LibInvoicesMemoryRepository();
	const usecase = new DeleteInvoiceUseCase(repository);

	return usecase;
}
