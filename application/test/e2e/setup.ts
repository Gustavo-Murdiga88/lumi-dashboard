import { config } from "dotenv";
import { randomUUID } from "crypto";
import { execSync } from "child_process";
import { ErrorNotDatBaseFind } from "@/core/errors/error-not-data-base-find";
import { prismaClient } from "@/domain/infra/database/prisma/prisma-service";

const schemeId = randomUUID();

config({
	override: true,
});

function handleSchemeDataBase(id: string) {
	if (!process.env.DATABASE_URL) {
		throw new ErrorNotDatBaseFind();
	}

	const url = new URL(process.env.DATABASE_URL);

	url.searchParams.set("schema", id);

	return url.toString();
}

const databaseURL = handleSchemeDataBase(schemeId);

process.env.DATABASE_URL = databaseURL;

execSync("pnpm prisma migrate deploy");

export async function deleteSchema() {
	await prismaClient.$executeRawUnsafe(
		`DROP SCHEMA IF EXISTS "${schemeId}" CASCADE`,
	);
	await prismaClient.$disconnect();
}
