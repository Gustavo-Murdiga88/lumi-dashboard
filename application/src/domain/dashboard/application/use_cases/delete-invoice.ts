import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";

export class DeleteInvoiceUseCase {
	private repository: ILibInvoicesRepository;

	constructor(repository: ILibInvoicesRepository) {
		this.repository = repository;
	}

	async execute(id: string) {
		const list = await this.repository.deleteInvoice(id);

		return list;
	}
}
