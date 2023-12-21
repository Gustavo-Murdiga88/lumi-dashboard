import { PDFExtract } from "pdf.js-extract";
import { textNormalized } from "@/core/normalized/normalized";

export const runtime = "nodejs";

const key_words = {
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

type FormattedKeyType = {
	[k in keyof typeof key_words]: k;
}[keyof typeof key_words];

export async function pdfExtrator(path: string) {
	const pdf = new PDFExtract();

	return new Promise((resolve, reject) => {
		pdf.extract(
			path,
			{
				normalizeWhitespace: true,
			},
			(err, data) => {
				if (err) {
					reject(err);
				}
				const pdfExtract = data?.pages
					.flatMap((page) =>
						page.content.map((item) => textNormalized(item.str)),
					)
					.filter((item) => item !== "-" && item !== "");

				pdfExtract?.forEach((item, index) => {
					if (Object.hasOwn(key_words, item)) {
						key_words[item as keyof typeof key_words].value =
							pdfExtract[
								index + key_words[item as keyof typeof key_words].skip
							];
					}
				});

				const formattedKeys: Partial<Record<FormattedKeyType, string>> = {};

				Object.entries(key_words).forEach(([key, value]) => {
					formattedKeys[key as FormattedKeyType] = value.value;
				});

				resolve(formattedKeys);
			},
		);
	});
}
