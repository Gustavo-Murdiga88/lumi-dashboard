import { FormattedKeyType } from "@/domain/dashboard/scrapper/formater";

export class FilesMapper {
	static fromScrepperToPDF(screpper: Partial<FormattedKeyType>) {
		const month = screpper["referente-a"]?.slice(0, 3);
		const year = screpper["referente-a"]?.slice(3);

		return {
			contribuiIlum:
				Number(screpper["contrib-ilum-publica-municipal"] || 0) * 100,
			energiaGd: Number(screpper["energia-compensada-gd-i"] || 0) * 100,
			energiaEletrica: Number(screpper["energia-eletrica"] || 0) * 100,
			energiaSiICMS: Number(screpper["energia-scee-s-icms"] || 0) * 100,
			nClient: screpper["n-do-cliente"] || "",
			referenteA: `${month} ${year}`,
		};
	}
}
