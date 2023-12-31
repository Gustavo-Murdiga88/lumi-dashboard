import { DashboardInMemoryRepository } from "test/repositories/dashboard-in-memory-repository";
import { PDF } from "../../enterprise/entities/pdf";
import { ListRecentInvoicesUseCase } from "./dashboard-list-recent-invoices";

let repository: DashboardInMemoryRepository;
let sut: ListRecentInvoicesUseCase;

describe("list recent invoices", () => {
	beforeEach(() => {
		repository = new DashboardInMemoryRepository();
		sut = new ListRecentInvoicesUseCase(repository);
	});

	it("should be able get a recent invoices", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 20,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({ limit: 10, page: 0 });

		expect(recents.invoices).toStrictEqual(expect.any(Array));
		expect(recents.invoices).toHaveLength(2);
		expect(recents.invoices).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ contribuiIlum: 13 }),
				expect.objectContaining({ contribuiIlum: 13 }),
			]),
		);
	});
});
