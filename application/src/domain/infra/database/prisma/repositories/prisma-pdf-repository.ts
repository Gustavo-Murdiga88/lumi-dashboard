import { IPDFRepository } from "@/domain/dashboard/application/repositories/pdf-repository";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";
import { PrismaService } from "../prisma-service";
import { PrismaPdfMapper } from "../mappers/prisma-pdf-mapper";
import { ErrorInvoiceIdIsNotValid } from "@/core/errors/error-invoice-id-is-not-valid";
import { Files } from "@/core/files/files";

export class PrismaPdfRepository implements IPDFRepository {
	private client: PrismaService;

	constructor(client: PrismaService) {
		this.client = client;
	}

	async createMany(pdfs: PDF[]): Promise<void> {
		const list = pdfs.map(PrismaPdfMapper.toPrisma);

		await this.client.invoices.createMany({ data: list });
	}

	async delete(pdf: PDF): Promise<void> {
		const { id } = pdf;

		const pdfExists = await this.client.invoices.findUnique({
			where: {
				id,
			},
		});

		if (!pdfExists) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		await this.client.invoices.delete({
			where: {
				id,
			},
		});

		await Files.deleteAttach(pdf.props.pathAttach);
	}

	async getStaticRouter(id: string): Promise<string> {
		const path = await this.client.invoices.findUnique({
			where: {
				id,
			},
		});

		if (!path?.id) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		return path.id;
	}
}
