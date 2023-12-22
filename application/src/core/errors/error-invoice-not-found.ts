export class ErrorInvoiceNotFound extends Error {
	constructor() {
		super("Fatura não encontrada");
	}
}
