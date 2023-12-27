import fastify from "fastify";
import file from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";

import { dashboardController } from "./controllers/dashboard-controller";
import { libController } from "./controllers/lib-invoces-controller";
import { Files } from "@/core/files/files";

export function app() {
	const server = fastify({});
	server.register(fastifyStatic, { root: Files.path });
	server.register(cors);
	server.register(file);
	server.register(dashboardController, { prefix: "/dashboard" });
	server.register(libController, { prefix: "/lib" });

	return server;
}
