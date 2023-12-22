import { randomUUID } from "crypto";
import "dotenv/config";
import { execSync } from "child_process";
import { PrismaClient } from "@prisma/client";
import { ErrorNotDatBaseFind } from "@/core/errors/error-not-data-base-find";

const prisma = new PrismaClient();

const schemeId = randomUUID();

function handleSchemeDataBase(id: string) {
	if (!process.env.DATABASE_URL) {
		throw new ErrorNotDatBaseFind();
	}

	const url = new URL(process.env.DATABASE_URL);

	url.searchParams.set("scheme", id);

	return url.toString();
}

beforeAll(async () => {
	const databaseURL = handleSchemeDataBase(schemeId);

	process.env.DATABASE_URL = databaseURL;

	execSync("pnpm prisma migrate deploy");
});

afterAll(async () => {
	await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemeId}" CASCADE`);
	await prisma.$disconnect();
});
