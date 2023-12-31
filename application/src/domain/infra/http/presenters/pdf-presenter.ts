import { PDF } from "@/domain/dashboard/enterprise/entities/pdf";

export class PDFMapper {
	static toHttp(raw: PDF) {
		return {
			path: raw.props.pathAttach,
			contribuiIlum: raw.props.contribuiIlum,
			energiaEletrica: raw.props.energiaEletrica,
			energiaGd: raw.props.energiaGd,
			energiaICMS: raw.props.energiaICMS,
			nClient: raw.props.nClient,
			referenteA: raw.props.referenteA,
			id: raw.id,
		};
	}
}
