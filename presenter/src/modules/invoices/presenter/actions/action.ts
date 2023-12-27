"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import type { IInvoicesProps } from "..";

export async function revalidate(path?: string) {
	revalidateTag("list");
}

export async function fetchList(url: string) {
	const list = await fetch(url, {
		cache: "no-cache",
	}).then(
		(response) => response.json() as Promise<{ invoices: IInvoicesProps[] }>,
	);

	revalidatePath("/invoices", "page");
	return list;
}
