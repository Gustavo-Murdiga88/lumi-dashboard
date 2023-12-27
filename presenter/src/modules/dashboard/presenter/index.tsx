import { FileCheck } from "lucide-react";
import { TableDashboard } from "./organisms/table";
import { format } from "@/app/utils/number";
import { dateFormat } from "@/app/utils/date";
import { Chart } from "@/components/chart/widget";

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

export default async function dashboard() {
	let list = await fetch("http://localhost:3001/dashboard/invoices/list/", {
		cache: "no-store",
		next: {
			tags: ["list"],
		},
	}).then(
		(response) =>
			response.json() as Promise<{
				invoices: IInvoicesProps[];
				sum: {
					contIlumPub: number;
					energiaComp: number;
					energiaEletrica: number;
					energiaICMS: number;
				};
			}>,
	);

	const sum = {
		contIlumPub: format.format((list.sum?.contIlumPub ?? 0) / 100) ?? "00,00",
		energiaComp: format.format((list.sum?.energiaComp ?? 0) / 100) ?? "00,00",
		energiaEletrica:
			format.format((list.sum?.energiaEletrica ?? 0) / 100) ?? "00,00",
		energiaICMS: format.format((list.sum?.energiaICMS ?? 0) / 100) ?? "00,00",
	};

	const dataSeries = {
		contIlumPub: (list.sum?.contIlumPub ?? 0) / 100,
		energiaComp: (list.sum?.energiaComp ?? 0) / 100,
		energiaEletrica: (list.sum?.energiaEletrica ?? 0) / 100,
		energiaICMS: (list.sum?.energiaICMS ?? 0) / 100,
	};

	const invoices = list.invoices.map((item) => ({
		contribuiIlum: format.format(item.contribuiIlum),
		energiaEletrica: format.format(item.energiaEletrica),
		energiaGd: format.format(item.energiaGd),
		energiaICMS: format.format(item.energiaICMS),
		nClient: item.nClient,
		id: item.id,
		path: `http://localhost:3001/lib/invoice/download/${item.id}`,
		referenteA: dateFormat(item.referenteA),
	}));

	const lastThrow = invoices[list.invoices.length - 1];

	return (
		<>
			<h1 className="text-[32px] font-semibold leading-relaxed">Dashboard</h1>
			<section className="grid grid-cols-1 gap-4 lg:grid-cols-4 justify-end">
				<div className="flex flex-col gap-4 rounded-lg border border-zinc-300 px-5 py-6">
					<header className="flex items-center justify-between">
						<strong className="text-[14px] font-semibold">
							Energia Elétrica
						</strong>
						<FileCheck size={18} />
					</header>
					<strong className="block text-2xl font-semibold">
						R$ {sum?.energiaEletrica ?? "00,00"}
					</strong>
					<span className="block text-[12px] font-semibold">
						Data do último lançamento: <br />
						{lastThrow?.referenteA ?? "Não há"}
					</span>
				</div>
				<div className="flex flex-col gap-4 rounded-lg border border-zinc-300 px-5 py-6">
					<header className="flex items-center justify-between">
						<strong className="text-[14px] font-semibold">
							Energia SCEE s/ ICMS
						</strong>
						<FileCheck size={18} />
					</header>
					<strong className="block text-2xl font-semibold">
						R$ {sum?.energiaICMS ?? "00,00"}
					</strong>
					<span className="block text-[12px] font-semibold">
						Data do último lançamento: <br />
						{lastThrow?.referenteA ?? "Não há"}
					</span>
				</div>
				<div className="flex flex-col gap-4 rounded-lg border border-zinc-300 px-5 py-6">
					<header className="flex items-center justify-between">
						<strong className="text-[14px] font-semibold">
							Energia compensada
						</strong>
						<FileCheck size={18} />
					</header>
					<strong className="block text-2xl font-semibold">
						R$ {sum?.energiaComp ?? "00,00"}
					</strong>
					<span className="block text-[12px] font-semibold">
						Data do último lançamento: <br />
						{lastThrow?.referenteA ?? "Não há"}
					</span>
				</div>
				<div className="flex  flex-col gap-4 rounded-lg border border-zinc-300 px-5 py-6">
					<header className="flex items-center justify-between">
						<strong className="text-[14px] font-semibold">
							Contrib Ilum Publica
						</strong>
						<FileCheck size={18} />
					</header>
					<strong className="block text-2xl font-semibold">
						R$ {sum?.contIlumPub ?? "00,00"}
					</strong>
					<span className="block text-[12px] font-semibold">
						Data do último lançamento: <br />
						{lastThrow?.referenteA ?? "Não há"}
					</span>
				</div>
			</section>

			<main className="grid grid-cols-1 gap-8 lg:grid-cols-[521px_1fr]">
				<aside className="flex items-center justify-center">
					<Chart
						data={[
							dataSeries.energiaEletrica,
							dataSeries.energiaICMS,
							dataSeries.energiaComp,
							dataSeries.contIlumPub,
						]}
					/>
				</aside>
				<aside>
					<TableDashboard invoices={invoices} />
				</aside>
			</main>
		</>
	);
}
