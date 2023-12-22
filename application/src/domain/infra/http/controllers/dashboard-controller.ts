import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "crypto";
import { makeUploadPdf } from "@/domain/dashboard/application/factories/make-upload-pdf";
import { makeDashboardListRecentInvoices } from "@/domain/dashboard/application/factories/make-dashboard-list-recent-invoices";
import { makeDashboardListRecentInvoicesWithFilter } from "@/domain/dashboard/application/factories/make-dashboard-list-recent-invoices-with-filter";
import { Files } from "@/core/files/files";
import { ErrorWithPDFListPDF } from "@/core/errors/error-with-pdf";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";

const uploadUsecase = makeUploadPdf();
const listRecentUsecase = makeDashboardListRecentInvoices();
const listRecentWithFilterUsecase = makeDashboardListRecentInvoicesWithFilter();

export async function dashboardController(app: FastifyInstance) {
	app.post("/invoices", async (req, reply) => {
		const files = req.files();

		const pdfList: PDF[] = [];

		for await (const file of files) {
			const nameFile = `invoce-${randomUUID()}.${file?.type}`;

			await Files.existsDirectory();

			const path_complete = Files.completePath(nameFile);

			await Files.createFile(file.file, path_complete);

			const key = await Files.pdfExtrator(path_complete);

			pdfList.push(key);
		}

		if (pdfList.length === 0) {
			throw new ErrorWithPDFListPDF();
		}

		await uploadUsecase.execute(pdfList);

		return reply.send({});
	});

	app.get("/invoices/list", async (_, reply) => {
		await listRecentUsecase.execute();

		return reply.send({});
	});

	app.get("/invoices/list/filter", async (req, reply) => {
		const scheme = z.object({
			contribuiIlum: z.number().optional(),
			energiaGd: z.number().optional(),
			energiaEletrica: z.number().optional(),
			energiaSiICMS: z.number().optional(),
			nClient: z.string().optional(),
			referenteA: z.string().optional(),
		});

		const query = scheme.parse(req.query);

		await listRecentWithFilterUsecase.execute(query);

		return reply.send({});
	});
}
