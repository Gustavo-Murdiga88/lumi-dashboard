import client from "supertest";
import { app } from "../server";

describe("Dashboard controller", async () => {
	const fastify = app();

	beforeAll(async () => {
		await fastify.ready();
	});

	afterAll(async () => {
		await fastify.close();
	});

	it("[POST]/dashboard/invoices", async () => {
		const response = await client(fastify.server).get(
			"/dashboard/invoices/list",
		);

		expect(response.status).toBe(200);
	});
});
