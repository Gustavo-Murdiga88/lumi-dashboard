import { IPDFRepository } from "../repositories/pdf-repository";
import { UploadInvoicesUseCase } from "../use_cases/upload-invoices";

export function makeUploadPdf() {
	const repository: IPDFRepository = {} as IPDFRepository;
	const usecase = new UploadInvoicesUseCase(repository);

	return usecase;
}
