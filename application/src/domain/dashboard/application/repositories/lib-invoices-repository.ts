import { PDF, PDFEntity } from "../../enterprise/entities/pdf";

export type QueryProps = Partial<PDFEntity & { id: string }>;
export interface ILibInvoicesRepository {
	fetchRecent(page?: number, limit?: number): Promise<PDF[]>;
	fetchRecentWithQuery(query: QueryProps): Promise<PDF[]>;
	downloadInvoice(id: string): Promise<string>;
	deleteInvoice(id: string): Promise<void>;
}
