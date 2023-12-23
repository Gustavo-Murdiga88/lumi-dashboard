import { KeysValues } from "@/domain/dashboard/enterprise/entities/pdf";

export type KeyMapperValues = {
	[k in KeysValues]: {
		skip: number;
		value: string;
	};
};

export const keysMapper: KeyMapperValues = {
	"energia-eletrica": {
		skip: 2,
		value: "",
	},
	"energia-compensada-gd-i": {
		skip: 2,
		value: "",
	},
	"contrib-ilum-publica-municipal": {
		skip: 1,
		value: "",
	},
	"energia-scee-s-icms": {
		skip: 2,
		value: "",
	},
	"n-do-cliente": {
		skip: 2,
		value: "",
	},
	"referente-a": {
		skip: 3,
		value: "",
	},
};
