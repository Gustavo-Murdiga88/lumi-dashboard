import { PDFExtractResult } from "pdf.js-extract";
import { Recipient } from "@/core/recipient/recipient";

export class Screpper {
	static Reader(
		data: PDFExtractResult | null,
		obj: { [key: string]: { skip: number; value: string } },
	) {
		if (!data) return;

		const pdfExtract = data?.pages
			.flatMap((page) =>
				page.content.map((item) => Recipient.toNormalized(item.str)),
			)
			.filter((item) => item !== "-" && item !== "");

		pdfExtract?.forEach((item, index) => {
			if (Object.hasOwn(obj, item)) {
				obj[item].value = pdfExtract[index + obj[item].skip];
			}
		});
	}
}
