export class ErrorFetchListInvoices extends Error {
	constructor() {
		super("Ocorreu um problema ao tentar buscar as faturas recentes");
	}
}
