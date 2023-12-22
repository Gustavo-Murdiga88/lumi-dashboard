import { PrismaPdfRepository } from "@/domain/infra/database/prisma/repositories/prisma-pdf-repository";
import { IPDFRepository } from "../repositories/pdf-repository";
import { UploadInvoicesUseCase } from "../use_cases/upload-invoices";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeUploadPdf() {
	const repository: IPDFRepository = new PrismaPdfRepository(prismaClient);
	const usecase = new UploadInvoicesUseCase(repository);

	return usecase;
}
