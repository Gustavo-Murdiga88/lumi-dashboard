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

	toObject() {
		return {
			contribuIlum: this.props["contrib-ilum-publica-municipal"],
			"energia-gd": this.props["energia-compensada-gd-i"],
			"energia-eletrica": this.props["energia-eletrica"],
			"energia-s": this.props["energia-scee-s-icms"],
			"n-do-client": this.props["n-do-cliente"],
			"referente-a": this.props["referente-a"],
		};
	}

	static create(obj: KeysEntity) {
		return new Keys(obj);
	}
}
