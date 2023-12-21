export function textNormalized(text: string) {
	return text
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9\s]/g, "")
		.replaceAll(/\s/g, "-")
		.toLowerCase();
}
