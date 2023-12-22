import { PrismaLibInvoicesRepository } from "@/domain/infra/database/prisma/repositories/prisma-lib-invoices-repository";
import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";
import { ListRecentWithFilterInvoicesUseCase } from "../use_cases/dashboard-list-recent-with-filter";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

export function makeLibListRecentInvoicesWithFilter() {
	const repository: ILibInvoicesRepository = new PrismaLibInvoicesRepository(
		prismaClient,
	);
	const usecase = new ListRecentWithFilterInvoicesUseCase(repository);

	return usecase;
}
