import { IDashboardRepository } from "@/domain/dashboard/application/repositories/dashboard-repository";
import { PDF, PDFEntity } from "@/domain/dashboard/enterprise/entities/pdf";
import { PrismaService } from "../prisma-service";
import { PrismaPdfMapper } from "../mappers/prisma-pdf-mapper";

export class PrismaDashboardRepository implements IDashboardRepository {
	private client: PrismaService;

	constructor(client: PrismaService) {
		this.client = client;
	}

	async fetchRecent(
		page: number,
		limit: number,
	): Promise<{
		pdfs: PDF[];
		sum: {
			contIlumPub: number;
			energiaComp: number;
			energiaEletrica: number;
			energiaICMS: number;
		};
	}> {
		const list = await this.client.invoices.findMany({
			take: limit ?? 10,
			skip: (page ?? 0) * (limit ?? 10),
		});

		const sum = await this.client.invoices.aggregate({
			_sum: {
				contIlumPub: true,
				energiaComp: true,
				energiaEletrica: true,
				energiaICMS: true,
			},
		});

		if (list.length === 0) {
			return {
				pdfs: [],
				sum: {
					contIlumPub: 0,
					energiaComp: 0,
					energiaEletrica: 0,
					energiaICMS: 0,
				},
			};
		}

		const pdfs = list.map(PrismaPdfMapper.toDomain);

		return {
			pdfs,
			sum: {
				contIlumPub: sum._sum.contIlumPub ?? 0,
				energiaComp: sum._sum.energiaComp ?? 0,
				energiaEletrica: sum._sum.energiaEletrica ?? 0,
				energiaICMS: sum._sum.energiaICMS ?? 0,
			},
		};
	}

	async fetchRecentWithQuery(
		query: Partial<PDFEntity & { id: string }>,
	): Promise<PDF[]> {
		const list = await this.client.invoices.findMany({
			take: 10,
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
					gte: query.energiaICMS,
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
