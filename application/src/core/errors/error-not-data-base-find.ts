export class ErrorNotDatBaseFind extends Error {
	constructor() {
		super("Caminho para o banco de dados não foi especificado");
	}
}
