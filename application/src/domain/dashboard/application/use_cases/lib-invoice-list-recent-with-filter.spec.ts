import { LibInvoicesMemoryRepository } from "test/repositories/lib-invoices-in-memory-repository";
import { PDF } from "../../enterprise/entities/pdf";
import { LibInvoicesListRecentWithFilterUseCase } from "./lib-invoice-list-recent-with-filter";

let repository: LibInvoicesMemoryRepository;
let sut: LibInvoicesListRecentWithFilterUseCase;

describe("list recent invoices with filter", () => {
	beforeEach(() => {
		repository = new LibInvoicesMemoryRepository();
		sut = new LibInvoicesListRecentWithFilterUseCase(repository);
	});

	it("should be able get a recent invoices with filter contribuiIlum", async () => {
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

		const recents = await sut.execute({
			contribuiIlum: 10,
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ contribuiIlum: 10 }),
				}),
			]),
		);
	});

	it("should be able get a recent invoices with filter energia eletrica", async () => {
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
				energiaEletrica: 22,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({
			energiaEletrica: 20,
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ energiaEletrica: 20 }),
				}),
			]),
		);
	});

	it("should be able get a recent invoices with filter energia energiaGd", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 20,
				energiaICMS: 20,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),

			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 22,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({
			energiaGd: 20,
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ energiaGd: 20 }),
				}),
			]),
		);
	});

	it("should be able get a recent invoices with filter energia energiaICMS", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 20,
				energiaICMS: 20,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),

			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 22,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({
			energiaICMS: 20,
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ energiaICMS: 20 }),
				}),
			]),
		);
	});

	it("should be able get a recent invoices with filter energia energiaICMS", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 20,
				energiaICMS: 20,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),

			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 22,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2334",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({
			nClient: "2333",
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ nClient: "2333" }),
				}),
			]),
		);
	});

	it("should be able get a recent invoices with filter energia energiaICMS", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 20,
				energiaICMS: 20,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),

			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 22,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2334",
				referenteA: "nov10",
				pathAttach: "/temp2",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({
			pathAttach: "/temp",
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ pathAttach: "/temp" }),
				}),
			]),
		);
	});

	it("should be able get a recent invoices with filter energia 'referenteA'", async () => {
		const pdf = [
			PDF.create({
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 20,
				energiaICMS: 20,
				nClient: "2333",
				referenteA: "nov2021",
				pathAttach: "/temp",
			}),

			PDF.create({
				contribuiIlum: 13,
				energiaEletrica: 22,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2334",
				referenteA: "nov2023",
				pathAttach: "/temp2",
			}),
		];

		repository.pdfs = pdf;

		const recents = await sut.execute({
			referenteA: "nov2021",
		});

		expect(recents).toStrictEqual(expect.any(Array));
		expect(recents).toHaveLength(1);
		expect(recents).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					props: expect.objectContaining({ referenteA: "nov2021" }),
				}),
			]),
		);
	});
});
