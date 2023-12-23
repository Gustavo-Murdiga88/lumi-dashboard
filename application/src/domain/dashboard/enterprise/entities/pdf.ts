import { Entity } from "@/core/entity/entity";

export type KeysValues =
	| "energia-eletrica"
	| "energia-compensada-gd-i"
	| "contrib-ilum-publica-municipal"
	| "energia-scee-s-icms"
	| "n-do-cliente"
	| "referente-a";

export type PDFEntity = {
	contribuiIlum: number;
	energiaGd: number;
	energiaEletrica: number;
	energiaICMS: number;
	nClient: string;
	referenteA: string;
	pathAttach?: string;
};

export class PDF extends Entity<PDFEntity> {
	protected constructor(props: PDFEntity) {
		super(props);
	}

	static create(obj: PDFEntity & { id?: string }) {
		return new PDF(obj);
	}
}
