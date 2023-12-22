import {
	ILibInvoicesRepository,
	QueryProps,
} from "../repositories/lib-invoices-repository";

export class LibInvoicesListRecentWithFilterUseCase {
	private repository: ILibInvoicesRepository;

	constructor(repository: ILibInvoicesRepository) {
		this.repository = repository;
	}

	async execute(query: QueryProps) {
		const list = await this.repository.fetchRecentWithQuery(query);

		return list;
	}
}
