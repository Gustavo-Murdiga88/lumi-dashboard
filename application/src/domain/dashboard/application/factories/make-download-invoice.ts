import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { DownloadInvoiceUseCase } from "../use_cases/download-invoice";

export function makeDownloadInvoice() {
	const repository: ILibInvoicesRepository = {} as ILibInvoicesRepository;
	const usecase = new DownloadInvoiceUseCase(repository);

	return usecase;
}
