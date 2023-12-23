import fastify from "fastify";
import file from "@fastify/multipart";

import { dashboardController } from "./controllers/dashboard-controller";
import { libController } from "./controllers/lib-invoces-controller";

export function app() {
	const server = fastify({
		logger: true,
	});

	server.register(file);
	server.register(dashboardController, { prefix: "/dashboard" });
	server.register(libController, { prefix: "/lib" });

	return server;
}
