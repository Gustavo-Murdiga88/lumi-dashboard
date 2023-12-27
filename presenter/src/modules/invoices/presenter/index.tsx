import Link from "next/link";
import { TableInvoices } from "./organisms/table";
import { revalidate } from "./actions/action";
import { Footer } from "./organisms/footer";
import { format } from "@/app/utils/number";
import { dateFormat } from "@/app/utils/date";

export interface IInvoicesProps {
	path: string | undefined;
	contribuiIlum: number;
	energiaEletrica: number;
	energiaGd: number;
	energiaICMS: number;
	nClient: string;
	referenteA: string;
	id: string;
}

let url = "http://localhost:3001/lib/invoices/list/";
export default async function dashboard() {
	let list = await fetch(url, {
		cache: "no-store",
		next: {
			tags: ["list"],
		},
	}).then(
		(response) => response.json() as Promise<{ invoices: IInvoicesProps[] }>,
	);

	const listFommatted = list.invoices.map((item) => ({
		contribuiIlum: format.format(item.contribuiIlum),
		energiaEletrica: format.format(item.energiaEletrica),
		energiaGd: format.format(item.energiaGd),
		energiaICMS: format.format(item.energiaICMS),
		nClient: item.nClient,
		id: item.id,
		path: `http://localhost:3001/lib/invoice/download/${item.id}`,
		referenteA: dateFormat(item.referenteA),
	}));

	async function paginate(page: number) {
		"use server";

		const customURL = new URL("lib/invoices/list/", "http://localhost:3001/");
		customURL.searchParams.set("page", `${page}`);
		customURL.searchParams.set("limit", "10");

		url = customURL.toString();

		revalidate("/invoices");
	}

	return (
		<>
			<header className="flex items-center justify-between">
				<h1 className="text-[32px] font-semibold leading-relaxed">
					Histórico de faturas
				</h1>
				<Link
					aria-label="Enviar faturas"
					href="/invoices/register"
					className="text-[14px] border rounded-md p-2 border-zinc-300 hover:bg-zinc-300 hover:text-zinc-900 text-zinc-300"
				>
					Enviar Faturas
				</Link>
			</header>
			<main className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr]">
				<TableInvoices invoices={listFommatted} />
				{listFommatted.length > 0 && (
					<Footer
						fetchPage={paginate}
						hasNextPage={list.invoices.length >= 10}
					/>
				)}
			</main>
		</>
	);
}
