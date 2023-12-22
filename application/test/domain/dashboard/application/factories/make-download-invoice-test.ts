import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";
import { LibInvoicesMemoryRepository } from "../repositories/lib-invoices-in-memory-repository";
import { DownloadInvoiceUseCase } from "@/domain/dashboard/application/use_cases/download-invoice";

export function makeDownloadInvoiceTest() {
	const repository: ILibInvoicesRepository = new LibInvoicesMemoryRepository();
	const usecase = new DownloadInvoiceUseCase(repository);

	return usecase;
}
