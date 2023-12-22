import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { DeleteInvoiceUseCase } from "../use_cases/delete-invoice";

export function makeDeleteInvoice() {
	const repository: ILibInvoicesRepository = {} as ILibInvoicesRepository;
	const usecase = new DeleteInvoiceUseCase(repository);

	return usecase;
}
