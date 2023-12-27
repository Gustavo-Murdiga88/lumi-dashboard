import client from "supertest";
import { deleteSchema } from "test/e2e/setup";
import { app } from "../server";
import { Files } from "@/core/files/files";
import { dir } from "@/core/dir";

describe.sequential("Lib controller", async () => {
	const fastify = app();
	beforeAll(async () => {
		await fastify.ready();
	});

	afterAll(async () => {
		await deleteSchema();
		fastify.close();
	});

	it("[GET]/lib/invoices/list", async () => {
		const path = `${dir}/test/e2e/pdf/3000055479-06-2023.pdf`;

		const pathResponse = await client(fastify.server)
			.post("/dashboard/invoices")
			.attach("files", path);

		const attachPath = pathResponse.body.invoices[0].path;

		Files.deleteAttach(attachPath);
		const response = await client(fastify.server).get("/lib/invoices/list/");

		expect(response.status).toBe(200);
		expect(response.body).toStrictEqual(
			expect.objectContaining({
				invoices: expect.arrayContaining([
					expect.objectContaining({
						path: expect.any(String),
					}),
				]),
			}),
		);
	});

	it("[GET]/lib/invoices/list/filter", async () => {
		const path = `${dir}/test/e2e/pdf/3000055479-06-2023.pdf`;

		const pathResponse = await client(fastify.server)
			.post("/dashboard/invoices")
			.attach("files", path);

		const attachPath = pathResponse.body.invoices[0].path;

		Files.deleteAttach(attachPath);
		const response = await client(fastify.server)
			.get("/lib/invoices/list/filter/")
			.query({
				nClient: "7005",
			});

		expect(response.status).toBe(200);
		expect(response.body).toStrictEqual(
			expect.objectContaining({
				invoices: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(String),
					}),
				]),
			}),
		);
	});
});
