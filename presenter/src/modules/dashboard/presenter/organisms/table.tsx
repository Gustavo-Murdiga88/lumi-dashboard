"use client";

import Link from "next/link";
import { MenuItem } from "@/components/menu/menu-item";
import { Menu } from "@/components/menu/widget";
import { Table } from "@/components/table";

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

export function TableDashboard({
	invoices,
}: {
	invoices: IInvoicesPropsFormatted[];
}) {
	return (
		<div className="overflow-auto">
			<Table.Root className="w-full text-center min-w-[900px] text-[12px] lg:w-full">
				<Table.Thead className="text-left">
					<Table.Tr className="border-b-[2px] border-b-zinc-700">
						<Table.Th>Nº Cliente</Table.Th>
						<Table.Th>Mes ref.</Table.Th>
						<Table.Th>Energia Elétrica</Table.Th>
						<Table.Th>Energia ICMS</Table.Th>
						<Table.Th>Energia Compensada</Table.Th>
						<Table.Th>Contr. Ilum. Pb</Table.Th>
						<Table.Th aria-label="config" />
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{invoices.map((invoice) => (
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
										<MenuItem>
											<Link
												className="w-full"
												href={invoice.path ?? ""}
												target="_blank"
												aria-label="visualizar"
											>
												Visualizar
											</Link>
										</MenuItem>
									</Menu>
								</div>
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table.Root>
		</div>
	);
}
