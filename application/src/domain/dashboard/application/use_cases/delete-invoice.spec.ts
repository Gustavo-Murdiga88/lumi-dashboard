import { LibInvoicesMemoryRepository } from "test/repositories/lib-invoices-in-memory-repository";
import { PDF } from "../../enterprise/entities/pdf";
import { DeleteInvoiceUseCase } from "./delete-invoice";
import { ErrorInvoiceNotFound } from "@/core/errors/error-invoice-not-found";

let repository: LibInvoicesMemoryRepository;
let sut: DeleteInvoiceUseCase;

describe("invoices delete suit", () => {
	beforeEach(() => {
		repository = new LibInvoicesMemoryRepository();
		sut = new DeleteInvoiceUseCase(repository);
	});

	it("should be able remove an pdf", async () => {
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
				contribuiIlum: 10,
				energiaEletrica: 20,
				energiaGd: 10,
				energiaICMS: 10,
				nClient: "2333",
				referenteA: "nov10",
				pathAttach: "/temp",
			}),
		];

		repository.pdfs = pdf;

		const { id } = pdf[0];

		await sut.execute(id);

		expect(repository.pdfs).toHaveLength(1);
	});

	it("should be not able remove an pdf that not exist", async () => {
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
		];

		repository.pdfs = pdf;

		expect(sut.execute("test")).rejects.toBeInstanceOf(ErrorInvoiceNotFound);
	});
});
