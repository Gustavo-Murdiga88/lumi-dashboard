import type { Invoices, Prisma } from "@prisma/client";
import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";

export class PrismaPdfMapper {
	static toDomain(raw: Invoices): PDF {
		return PDF.create({
			id: raw.id,
			pathAttach: raw.pathAttach ?? "",
			contribuiIlum: raw.contIlumPub / 100,
			energiaEletrica: raw.energiaEletrica / 100,
			energiaGd: raw.energiaComp / 100,
			energiaICMS: raw.energiaICMS / 100,
			nClient: raw.numClient,
			referenteA: raw.mesRef,
		});
	}

	static toPrisma(raw: PDF): Prisma.InvoicesCreateInput {
		return {
			contIlumPub: raw.props.contribuiIlum,
			energiaComp: raw.props.energiaGd,
			energiaEletrica: raw.props.energiaEletrica,
			energiaICMS: raw.props.energiaICMS,
			numClient: raw.props.nClient,
			mesRef: raw.props.referenteA,
			pathAttach: raw.props.pathAttach,
		};
	}
}
