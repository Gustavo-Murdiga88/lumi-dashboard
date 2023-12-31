import { PDFInMemoryRepository } from "test/repositories/pdf-in-memory-repository";
import { UploadInvoicesUseCase } from "./upload-invoices";
import { PDF } from "../../enterprise/entities/pdf";
import { ErrorInvoicesNotAvailable } from "@/core/errors/error-invoices-not-available";

let repository: PDFInMemoryRepository;
let sut: UploadInvoicesUseCase;

describe("invoices suit", () => {
	beforeEach(() => {
		repository = new PDFInMemoryRepository();
		sut = new UploadInvoicesUseCase(repository);
	});

	it("should be able add upload an pdf", async () => {
		const pdf = PDF.create({
			contribuiIlum: 10,
			energiaEletrica: 20,
			energiaGd: 10,
			energiaICMS: 10,
			nClient: "2333",
			referenteA: "nov10",
			pathAttach: "/temp",
		});

		await sut.execute([pdf]);

		expect(repository.pdfs).toHaveLength(1);
	});

	it("should be not able add an pdf with not in payload", async () => {
		expect(sut.execute([] as PDF[])).rejects.toBeInstanceOf(
			ErrorInvoicesNotAvailable,
		);
	});
});
