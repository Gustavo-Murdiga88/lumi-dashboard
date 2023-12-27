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
	app.get("/invoice/download/:id", async (req, reply) => {
		const scheme = z.object({
			id: z.string().uuid(),
		});

		const { id } = scheme.parse(req.params);

		return reply.sendFile(`invoice-${id}.pdf`);
	});

	app.get("/invoices/list/", async (req, reply) => {
		const scheme = z.object({
			page: z.coerce.number().optional().default(0),
			limit: z.coerce.number().optional().default(10),
		});

		const query = scheme.parse(req.query);

		const invoices = await listRecentUsecase.execute(query);

		return reply.status(200).send({
			invoices,
		});
	});

	app.get("/invoices/list/filter/", async (req, reply) => {
		const scheme = z.object({
			contribuiIlum: z.number().optional(),
			energiaGd: z.number().optional(),
			energiaEletrica: z.number().optional(),
			energiaICMS: z.number().optional(),
			nClient: z.string().optional(),
			referenteA: z.string().optional(),
		});

		const query = scheme.parse(req.query);

		const list = await listRecentWithFilterUsecase.execute(query);

		return reply.status(200).send({
			invoices: list,
		});
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

		return reply.status(204).send();
	});
}
