import { ErrorInvoiceIdIsNotValid } from "@/core/errors/error-invoice-id-is-not-valid";
import { ErrorInvoiceNotFound } from "@/core/errors/error-invoice-not-found";
import { ErrorWithPDFListPDF } from "@/core/errors/error-with-pdf";
import { ILibInvoicesRepository } from "@/domain/dashboard/application/repositories/lib-invoices-repository";
import { PDF, PDFEntity } from "@/domain/dashboard/enterprise/entities/pdf";

export class LibInvoicesMemoryRepository implements ILibInvoicesRepository {
	pdfs: PDF[] = [];

	async fetchRecent(
		page?: number | undefined,
		limit?: number | undefined,
	): Promise<PDF[]> {
		const take = limit || 10;
		const skip = page || 0 * take;
		const list = this.pdfs.slice(skip, take);

		return list;
	}

	async fetchRecentWithQuery(
		query: Partial<PDFEntity & { id: string }>,
	): Promise<PDF[]> {
		const list = this.pdfs
			.filter(
				(pdf) =>
					pdf.id === query.id ||
					pdf.props.contribuiIlum === query.contribuiIlum ||
					pdf.props.energiaSiICMS === query.energiaSiICMS ||
					pdf.props.energiaGd === query.energiaGd ||
					pdf.props.nClient === query.nClient ||
					pdf.props.energiaEletrica === query.energiaEletrica ||
					pdf.props.pathAttach === query.pathAttach ||
					pdf.props.referenteA === query.referenteA,
			)
			.slice(0, 10);

		return list;
	}

	async downloadInvoice(id: string): Promise<string> {
		const invoice = this.pdfs.find((pdf) => pdf.id === id);

		if (!invoice) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		if (!invoice.props.pathAttach) {
			throw new ErrorWithPDFListPDF();
		}

		return invoice?.props.pathAttach;
	}

	async deleteInvoice(id: string): Promise<void> {
		const invoice = this.pdfs.findIndex((pdf) => pdf.id === id);

		if (invoice === -1) {
			throw new ErrorInvoiceNotFound();
		}

		this.pdfs.splice(invoice, 1);
	}
}
