import { IDashboardRepository } from "@/domain/dashboard/application/repositories/dashboard-repository";
import { PDF, PDFEntity } from "@/domain/dashboard/enterprise/entities/pdf";

export class DashboardInMemoryRepository implements IDashboardRepository {
	pdfs: PDF[] = [];

	async fetchRecent(
		page?: number | undefined,
		limit?: number | undefined,
	): Promise<{
		pdfs: PDF[];
		sum: {
			contIlumPub: number;
			energiaComp: number;
			energiaEletrica: number;
			energiaICMS: number;
		};
	}> {
		const take = limit || 10;
		const skip = page || 0 * take;
		const pdfs = this.pdfs.slice(skip, take);

		const sum = this.pdfs.reduce<{
			contIlumPub: number;
			energiaComp: number;
			energiaEletrica: number;
			energiaICMS: number;
		}>(
			(acc, pdf) => ({
				contIlumPub: acc.contIlumPub + pdf.props.contribuiIlum,
				energiaComp: acc.energiaComp + pdf.props.energiaGd,
				energiaEletrica: acc.energiaEletrica + pdf.props.energiaEletrica,
				energiaICMS: acc.energiaICMS + pdf.props.energiaICMS,
			}),
			{
				contIlumPub: 0,
				energiaEletrica: 0,
				energiaICMS: 0,
				energiaComp: 0,
			},
		);

		return {
			pdfs,
			sum,
		};
	}

	async fetchRecentWithQuery(
		query: Partial<PDFEntity & { id: string }>,
	): Promise<PDF[]> {
		const list = this.pdfs
			.filter(
				(pdf) =>
					pdf.id === query.id ||
					pdf.props.contribuiIlum === query.contribuiIlum ||
					pdf.props.energiaICMS === query.energiaICMS ||
					pdf.props.energiaGd === query.energiaGd ||
					pdf.props.nClient === query.nClient ||
					pdf.props.energiaEletrica === query.energiaEletrica ||
					pdf.props.pathAttach === query.pathAttach ||
					pdf.props.referenteA === query.referenteA,
			)
			.slice(0, 10);
		return list;
	}
}
