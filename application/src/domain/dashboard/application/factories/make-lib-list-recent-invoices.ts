import { PrismaLibInvoicesRepository } from "@/domain/infra/database/prisma/repositories/prisma-lib-invoices-repository";
import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { ListRecentInvoicesUseCase } from "../use_cases/dashboard-list-recent-invoices";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeLibListRecentInvoices() {
	const repository: ILibInvoicesRepository = new PrismaLibInvoicesRepository(
		prismaClient,
	);
	const usecase = new ListRecentInvoicesUseCase(repository);

	return usecase;
}
