import { LibInvoicesMemoryRepository } from "test/domain/dashboard/application/repositories/lib-invoices-in-memory-repository";
import { PDF } from "../../enterprise/entities/pdf";
import { DownloadInvoiceUseCase } from "./download-invoice";
import { ErrorInvoiceIdIsNotValid } from "@/core/errors/error-invoice-id-is-not-valid";
import { ErrorWithPDFListPDF } from "@/core/errors/error-with-pdf";

let repository: LibInvoicesMemoryRepository;
let sut: DownloadInvoiceUseCase;

describe("download invoices suit", () => {
	beforeEach(() => {
		repository = new LibInvoicesMemoryRepository();
		sut = new DownloadInvoiceUseCase(repository);
	});

	it("should be able get a path to see an invoices", async () => {
		const pdf = PDF.create({
			contribuiIlum: 10,
			energiaEletrica: 20,
			energiaGd: 10,
			energiaICMS: 10,
			nClient: "2333",
			referenteA: "nov10",
			pathAttach: "/temp",
		});

		repository.pdfs = [pdf];

		const path = await sut.execute(pdf.id);

		expect(path).toBeTypeOf("string");
		expect(path).toEqual("/temp");
	});

	it("should be not able get a path to see an invoices if not exist", async () => {
		const pdf = PDF.create({
			contribuiIlum: 10,
			energiaEletrica: 20,
			energiaGd: 10,
			energiaICMS: 10,
			nClient: "2333",
			referenteA: "nov10",
			pathAttach: "/temp",
		});

		repository.pdfs = [pdf];

		expect(sut.execute("pdf")).rejects.toBeInstanceOf(ErrorInvoiceIdIsNotValid);
	});

	it("should be not able get a path to see an invoices if your path not exists", async () => {
		const pdf = PDF.create({
			contribuiIlum: 10,
			energiaEletrica: 20,
			energiaGd: 10,
			energiaICMS: 10,
			nClient: "2333",
			referenteA: "nov10",
		});

		repository.pdfs = [pdf];

		expect(sut.execute(pdf.id)).rejects.toBeInstanceOf(ErrorWithPDFListPDF);
	});
});
