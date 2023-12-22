import { PDF } from "../../enterprise/entities/pdf";

export interface IPDFRepository {
	createMany(pdfs: PDF[]): Promise<void>;
	delete(pdf: PDF): Promise<void>;
	getStaticRouter(id: string): Promise<string>;
}
