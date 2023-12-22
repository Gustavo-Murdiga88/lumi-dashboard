import { PrismaLibInvoicesRepository } from "@/domain/infra/database/prisma/repositories/prisma-lib-invoices-repository";
import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { DeleteInvoiceUseCase } from "../use_cases/delete-invoice";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeDeleteInvoice() {
	const repository: ILibInvoicesRepository = new PrismaLibInvoicesRepository(
		prismaClient,
	);
	const usecase = new DeleteInvoiceUseCase(repository);

	return usecase;
}
