export class ErrorWithPDFListPDF extends Error {
	constructor() {
		super("Não foi possível listar os arquivos");
	}
}
