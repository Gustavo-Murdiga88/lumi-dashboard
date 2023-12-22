import { KeyMapperValues } from "@/core/const/keys-mappers";
import { KeysValues } from "../enterprise/entities/pdf";

export type FormattedKeyType = {
	[k in KeysValues]: string;
};

export class ScrepperFormat {
	static Format(obj: KeyMapperValues) {
		const formattedKeys: Partial<FormattedKeyType> = {};

		Object.entries(obj).forEach(([key, value]) => {
			formattedKeys[key as KeysValues] = value.value;
		});

		return formattedKeys;
	}
}
