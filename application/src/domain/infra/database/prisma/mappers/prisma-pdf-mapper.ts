import type { Invoices, Prisma } from "@prisma/client";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";

export class PrismaPdfMapper {
	static toDomain(raw: Invoices): PDF {
		return PDF.create({
			pathAttach: raw.pathAttach ?? "",
			contribuiIlum: raw.contIlumPub / 100,
			energiaEletrica: raw.energiaEletrica / 100,
			energiaGd: raw.energiaComp / 100,
			energiaSiICMS: raw.energiaICMS / 100,
			nClient: raw.numClient,
			referenteA: raw.mesRef,
		});
	}

	static toPrisma(raw: PDF): Prisma.InvoicesCreateInput {
		return {
			contIlumPub: raw.props.contribuiIlum * 100,
			energiaComp: raw.props.energiaGd * 100,
			energiaEletrica: raw.props.energiaEletrica * 100,
			energiaICMS: raw.props.energiaSiICMS * 100,
			numClient: raw.props.nClient,
			mesRef: raw.props.referenteA,
			pathAttach: raw.props.pathAttach,
		};
	}
}
