import { IPDFRepository } from "@/domain/dashboard/application/repositories/pdf-repository";
import { PDFInMemoryRepository } from "../repositories/pdf-in-memory-repository";
import { UploadInvoicesUseCase } from "@/domain/dashboard/application/use_cases/upload-invoices";

export function makeUploadPdf() {
	const repository: IPDFRepository = new PDFInMemoryRepository();
	const usecase = new UploadInvoicesUseCase(repository);

	return usecase;
}
