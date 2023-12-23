import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";
import { PDF, PDFEntity } from "@/domain/dashboard/enterprise/entities/pdf";
import { PrismaService } from "../prisma-service";
import { PrismaPdfMapper } from "../mappers/prisma-pdf-mapper";
import { ErrorInvoiceIdIsNotValid } from "@/core/errors/error-invoice-id-is-not-valid";
import { Files } from "@/core/files/files";

export class PrismaLibInvoicesRepository implements ILibInvoicesRepository {
	private client: PrismaService;

	constructor(client: PrismaService) {
		this.client = client;
	}

	async fetchRecent(page?: number, limit?: number): Promise<PDF[]> {
		const list = await this.client.invoices.findMany({
			take: limit || 10,
			skip: (page || 0) * (limit || 0),
		});

		const pdfs = list.map(PrismaPdfMapper.toDomain);

		return pdfs;
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

	async downloadInvoice(id: string): Promise<string> {
		const filePath = await this.client.invoices.findUnique({
			where: {
				id,
			},
		});

		if (!filePath?.id) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		return filePath?.id;
	}

	async deleteInvoice(id: string): Promise<void> {
		const filePath = await this.client.invoices.delete({
			where: {
				id,
			},
		});

		if (!filePath?.id) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		await Files.deleteAttach(filePath.pathAttach);
	}
}
