import { FastifyInstance } from "fastify";
import { z } from "zod";
import { makeLibListRecentInvoices } from "@/domain/dashboard/application/factories/make-lib-list-recent-invoices";
import { makeLibListRecentInvoicesWithFilter } from "@/domain/dashboard/application/factories/make-lib-list-recent-invoices-with-filter";
import { makeDeleteInvoice } from "@/domain/dashboard/application/factories/make-delete-invoice";
import { ErrorInvoiceIdIsNotValid } from "@/core/errors/error-invoice-id-is-not-valid";

const listRecentUsecase = makeLibListRecentInvoices();
const listRecentWithFilterUsecase = makeLibListRecentInvoicesWithFilter();
const deleteUsecase = makeDeleteInvoice();
export async function libController(app: FastifyInstance) {
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

		return reply;
	});

	app.delete("/invoice/:id", async (req, reply) => {
		const scheme = z.object({
			id: z.string(),
		});

		const validate = scheme.safeParse(req.params);

		if (!validate.success) {
			throw new ErrorInvoiceIdIsNotValid();
		}

		const { id } = validate.data;

		await deleteUsecase.execute(id);

		return reply;
	});
}