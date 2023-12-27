import client from "supertest";
import { deleteSchema } from "test/e2e/setup";
import { app } from "../server";
import { Files } from "@/core/files/files";
import { dir } from "@/core/dir";

describe.sequential("Dashboard controller", async () => {
	const fastify = app();

	beforeAll(async () => {
		await fastify.ready();
	});

	afterAll(async () => {
		await deleteSchema();
		fastify.close();
	});

	it("[POST]/dashboard/invoices", async () => {
		const path = `${dir}/test/e2e/pdf/3000055479-06-2023.pdf`;

		const response = await client(fastify.server)
			.post("/dashboard/invoices")
			.attach("files", path);

		const attachPath = response.body.invoices[0].path;

		Files.deleteAttach(attachPath);

		expect(response.status).toBe(201);
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

	it("[GET]/dashboard/invoices/list", async () => {
		const response = await client(fastify.server).get(
			"/dashboard/invoices/list/",
		);

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

	it("[GET]/dashboard/invoices/list/filter", async () => {
		const response = await client(fastify.server)
			.get("/dashboard/invoices/list/filter/")
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
