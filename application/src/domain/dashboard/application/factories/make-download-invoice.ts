import { PrismaLibInvoicesRepository } from "@/domain/infra/database/prisma/repositories/prisma-lib-invoices-repository";
import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { DownloadInvoiceUseCase } from "../use_cases/download-invoice";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeDownloadInvoice() {
	const repository: ILibInvoicesRepository = new PrismaLibInvoicesRepository(
		prismaClient,
	);
	const usecase = new DownloadInvoiceUseCase(repository);

	return usecase;
}
