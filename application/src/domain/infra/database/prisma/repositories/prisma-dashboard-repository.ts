import { IDashboardRepository } from "@/domain/dashboard/application/repositories/dashboard-repository";
import { PDF, PDFEntity } from "@/domain/dashboard/enterprise/entities/pdf";
import { PrismaService } from "../prisma-service";
import { PrismaPdfMapper } from "../mappers/prisma-pdf-mapper";

export class PrismaDashboardRepository implements IDashboardRepository {
	private client: PrismaService;

	constructor(client: PrismaService) {
		this.client = client;
	}

	async fetchRecent(page: number, limit: number): Promise<PDF[]> {
		const list = await this.client.invoices.findMany({
			take: limit ?? 10,
			skip: (page ?? 0) * (limit ?? 10),
		});

		const pdfs = list.map(PrismaPdfMapper.toDomain);

		return pdfs;
	}

	async fetchRecentWithQuery(
		query: Partial<PDFEntity & { id: string }>,
	): Promise<PDF[]> {
		const list = await this.client.invoices.findMany({
			where: {
				contIlumPub: {
					gte: query.contribuiIlum,
				},
				energiaComp: {
					gte: query.energiaGd,
				},
				energiaEletrica: {
					gte: query.energiaEletrica,
				},
				energiaICMS: {
					gte: query.energiaSiICMS,
				},
				numClient: {
					contains: query.nClient,
				},
			},
		});

		const pdfs = list.map(PrismaPdfMapper.toDomain);

		return pdfs;
	}
}
