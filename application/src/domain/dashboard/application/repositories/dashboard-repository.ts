import { PDF, PDFEntity } from "../../enterprise/entities/pdf";

export type QueryProps = Partial<PDFEntity & { id: string }>;
export interface IDashboardRepository {
	fetchRecent(
		page?: number,
		limit?: number,
	): Promise<{
		pdfs: PDF[];
		sum: {
			contIlumPub: number;
			energiaComp: number;
			energiaEletrica: number;
			energiaICMS: number;
		};
	}>;
	fetchRecentWithQuery(query: QueryProps): Promise<PDF[]>;
}
