import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";

export class DownloadInvoiceUseCase {
	private repository: ILibInvoicesRepository;

	constructor(repository: ILibInvoicesRepository) {
		this.repository = repository;
	}

	async execute(id: string) {
		const list = await this.repository.downloadInvoice(id);

		return list;
	}
}
