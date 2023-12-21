import { Entity } from "@/core/entity/entity";

export type KeysValues =
	| "energia-eletrica"
	| "energia-compensada-gd-i"
	| "contrib-ilum-publica-municipal"
	| "energia-scee-s-icms"
	| "n-do-cliente"
	| "referente-a";

type KeysEntity = {
	[k in KeysValues]: string;
};

export class Keys extends Entity<KeysEntity> {
	protected constructor(props: KeysEntity) {
		super(props);
	}

	static create(obj: KeysEntity) {
		return new Keys(obj);
	}
}
