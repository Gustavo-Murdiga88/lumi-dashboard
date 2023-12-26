"use client";

import { Table } from "@/components/table";
import { Menu } from "@/components/menu/widget";
import { MenuItem } from "@/components/menu/menu-item";
import { revalidate } from "../actions/action";

export interface IInvoicesPropsFormatted {
	path: string | undefined;
	contribuiIlum: string;
	energiaEletrica: string;
	energiaGd: string;
	energiaICMS: string;
	nClient: string;
	referenteA: string;
	id: string;
}

export function TableInvoices({
	invoices,
}: {
	invoices: IInvoicesPropsFormatted[];
}) {
	async function deleteInvoice(id: string) {
		const response = await fetch(`http://localhost:3001/lib/invoice/${id}`, {
			method: "DELETE",
			cache: "no-store",
		});

		if (response.ok) {
			revalidate();
		}
	}

	if (!invoices || invoices?.length === 0) {
		return (
			<aside className="flex flex-col flex-1 min-h-[300px]">
				<h1 className="mt-5">Ultimas faturas lançadas</h1>
				<div className="flex-1 flex items-center justify-center">
					<strong className=" block text-[18px] font-semibold ">
						Nenhuma Fatura lançada até o momento 😭
					</strong>
				</div>
			</aside>
		);
	}

	return (
		<aside>
			<h1 className="mt-5">Ultimas faturas lançadas</h1>
			<div className="overflow-auto">
				<Table.Root className="w-full min-w-[900px] text-center text-[12px] lg:w-full">
					<Table.Thead className="text-left">
						<Table.Tr className="border-b-[2px] border-b-zinc-700">
							<Table.Th>Nº Cliente</Table.Th>
							<Table.Th>Mes ref.</Table.Th>
							<Table.Th>Energia Elétrica (KW/h)</Table.Th>
							<Table.Th>Energia ICMS (KW/h)</Table.Th>
							<Table.Th>Energia comp. (KW/h)</Table.Th>
							<Table.Th>Contr. Ilum. Pb (R$)</Table.Th>
							<Table.Th aria-label="config" />
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{invoices?.map((invoice) => (
							<Table.Tr key={invoice.id}>
								<Table.Td> {invoice.nClient}</Table.Td>
								<Table.Td>{invoice.referenteA}</Table.Td>
								<Table.Td>{invoice.energiaEletrica}</Table.Td>
								<Table.Td>{invoice.energiaICMS}</Table.Td>
								<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
									{invoice.energiaGd}
								</Table.Td>
								<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
									{invoice.contribuiIlum}
								</Table.Td>
								<Table.Td
									aria-label="config"
									className="align-middle hover:bg-zinc-900"
								>
									<div className="flex items-center justify-center">
										<Menu>
											<MenuItem onClick={() => deleteInvoice(invoice.id)}>
												Deletar
											</MenuItem>
											<MenuItem onClick={() => deleteInvoice(invoice.id)}>
												Visualizar
											</MenuItem>
										</Menu>
									</div>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table.Root>
			</div>
		</aside>
	);
}
