import { FastifyInstance } from "fastify";
import { z } from "zod";
import { makeUploadPdf } from "@/domain/dashboard/application/factories/make-upload-pdf";
import { makeDashboardListRecentInvoices } from "@/domain/dashboard/application/factories/make-dashboard-list-recent-invoices";
import { makeDashboardListRecentInvoicesWithFilter } from "@/domain/dashboard/application/factories/make-dashboard-list-recent-invoices-with-filter";

const uploadUsecase = makeUploadPdf();
const listRecentUsecase = makeDashboardListRecentInvoices();
const listRecentWithFilterUsecase = makeDashboardListRecentInvoicesWithFilter();

export async function dashboardController(app: FastifyInstance) {
	app.post("/invoices", async (req, reply) => {
		const files = req.files();

		await uploadUsecase.execute(files);

		return reply.send({});
	});

	app.get("/invoices/list", async (req, reply) => {
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
