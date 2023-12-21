export class Recipient {
	static toNormalized(value: string) {
		return value
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/[^a-zA-Z0-9\s]/g, "")
			.replaceAll(/\s/g, "-")
			.toLowerCase();
	}
}
