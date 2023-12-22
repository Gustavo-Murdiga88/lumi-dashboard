import fastify from "fastify";
import file from "@fastify/multipart";

import { randomUUID } from "node:crypto";
import { Files } from "@/core/files/files";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";
import { dashboardController } from "./controllers/dashboard-controller";
import { libController } from "./controllers/lib-invoces-controller";

const server = fastify({
	logger: true,
});

server.register(file);
server.register(dashboardController, { prefix: "/dashboard" });
server.register(libController, { prefix: "/lib" });

server.listen({ port: 3001, host: "0.0.0.0" }).then(() => {
	console.log(`Server listening on port 3001`);
});
