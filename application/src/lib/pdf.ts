import { PDFExtract } from "pdf.js-extract";
import { Screpper } from "@/domain/dashboard/scrapper/screpper";
import { keysMapper } from "@/core/const/keys-mappers";
import { ScrepperFormat } from "@/domain/dashboard/scrapper/formater";
import { Keys } from "@/domain/dashboard/scrapper/keys";

export const runtime = "nodejs";
const pdf = new PDFExtract();

export async function pdfExtrator(path: string) {
	return new Promise<Keys>((resolve, reject) => {
		pdf.extract(
			path,
			{
				normalizeWhitespace: true,
			},
			(err, data) => {
				if (err) {
					reject(err);
				}

				Screpper.Reader(data || null, keysMapper);
				const formatted = ScrepperFormat.Format(keysMapper);
				const keys = Keys.create({
					"contrib-ilum-publica-municipal":
						formatted["contrib-ilum-publica-municipal"] || "",
					"energia-compensada-gd-i": formatted["energia-compensada-gd-i"] || "",
					"energia-eletrica": formatted["energia-eletrica"] || "",
					"energia-scee-s-icms": formatted["energia-scee-s-icms"] || "",
					"n-do-cliente": formatted["n-do-cliente"] || "",
					"referente-a": formatted["referente-a"] || "",
				});

				resolve(keys);
			},
		);
	});
}
