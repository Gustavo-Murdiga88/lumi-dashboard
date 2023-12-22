import { ILibInvoicesRepository } from "../repositories/lib-invoices-repository";

export class LibListInvoicesRecentUseCase {
	private repository: ILibInvoicesRepository;

	constructor(repository: ILibInvoicesRepository) {
		this.repository = repository;
	}

	async execute() {
		const list = await this.repository.fetchRecent();

		return list;
	}
}
