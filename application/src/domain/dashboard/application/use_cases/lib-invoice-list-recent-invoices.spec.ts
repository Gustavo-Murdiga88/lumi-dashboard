import { LibInvoicesMemoryRepository } from "test/domain/dashboard/application/repositories/lib-invoices-in-memory-repository";
import { PDF } from "../../enterprise/entities/pdf";
import { LibListInvoicesRecentUseCase } from "./lib-invoice-list-recent-invoices";

let repository: LibInvoicesMemoryRepository;
let sut: LibListInvoicesRecentUseCase;

describe("lib invoices suit", () => {
	beforeEach(() => {
		repository = new LibInvoicesMemoryRepository();
		sut = new LibListInvoicesRecentUseCase(repository);
	});

	it("should be able get a recent lib invoices", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 10,
				energiaSiICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 20,
				energiaGd: 10,
				energiaSiICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute();

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(2);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ contribuiIlum: 13 }),
				}),
				expect.objectContaining({
					props: expect.objectContaining({ contribuiIlum: 13 }),
				}),
			]),
		);
	});
});
