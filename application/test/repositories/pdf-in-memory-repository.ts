import { ErrorInvoiceIdIsNotValid } from "@/core/errors/error-invoice-id-is-not-valid";
import { ErrorInvoicesNotAvailable } from "@/core/errors/error-invoices-not-available";
import { ErrorWithPDFListPDF } from "@/core/errors/error-with-pdf";
import { IPDFRepository } from "@/domain/dashboard/application/repositories/pdf-repository";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";

export class PDFInMemoryRepository implements IPDFRepository {
	pdfs: PDF[] = [];

	async createMany(pdfs: PDF[]): Promise<void> {
		if (pdfs.length === 0) {
			throw new ErrorInvoicesNotAvailable();
		}

		this.pdfs = [...this.pdfs, ...pdfs];
	}

	async delete(pdf: PDF): Promise<void> {
		const pdfIndex = this.pdfs.findIndex((item) => pdf.id === item.id);

		if (pdfIndex === -1) {
			throw new ErrorWithPDFListPDF();
		}

		this.pdfs.splice(pdfIndex, 1);
	}

	async getStaticRouter(id: string): Promise<string> {
		const pdf = this.pdfs.find((item) => item.id === id);

		if (!pdf || !pdf.props.pathAttach) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		return pdf.props.pathAttach;
	}
}
