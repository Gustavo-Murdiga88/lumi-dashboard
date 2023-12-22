import { PDF, PDFEntity } from "../../enterprise/entities/pdf";

export type QueryProps = Partial<PDFEntity & { id: string }>;
export interface IDashboardRepository {
	fetchRecent(page?: number, limit?: number): Promise<PDF[]>;
	fetchRecentWithQuery(query: QueryProps): Promise<PDF[]>;
}
