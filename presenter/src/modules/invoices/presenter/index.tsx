import {
	ArrowLeft,
	ArrowRight,
	File,
	FileCheck,
	MoreVertical,
	Search,
} from "lucide-react";
import { Metadata } from "next";
import { Table } from "@/components/table";
import { Chart } from "@/components/icons/chart";
import { Input } from "@/components/input/widget";
import { Button } from "@/components/ui/button";
import { Form } from "./organisms/form";

export default async function dashboard() {
	return (
		<>
			<h1 className="text-[32px] font-semibold leading-relaxed">Faturas</h1>
			<Form />

			<main className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr]">
				<aside>
					<h1 className="mt-5">Ultimas faturas lançadas</h1>
					<div className="overflow-auto">
						<Table.Root className="w-full min-w-[900px] text-[12px] lg:w-full">
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
								<Table.Tr>
									<Table.Td>Sunday</Table.Td>
									<Table.Td>Blanca</Table.Td>
									<Table.Td>Monday</Table.Td>
									<Table.Td>Tuesday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Sequi voluptas tenetur. Tempora cum facere dolor sed.
											Cupiditate quisquam ea quos eum veritatis voluptatem quo.
											Nemo quos sint qui. Ut suscipit mollitia eius vel. Facere
											in at iusto consequuntur omnis non fugiat. Minima
											repudiandae iusto distinctio distinctio facilis. Aut
											numquam tenetur commodi veritatis vitae non. Officiis sit
											libero doloribus qui non facilis aut. Animi nulla soluta
											ab sit alias explicabo vitae et adipisci. Vitae quia quia
											quia enim cum placeat optio. Dolores porro molestiae odio
											et sit est amet. Magnam sunt distinctio dolores cum sit
											ratione culpa ipsa. Vero voluptatem ex illo alias
											laboriosam voluptatem.
										</p>
									</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										Valor
									</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Friday</Table.Td>
									<Table.Td>Bryon</Table.Td>
									<Table.Td>Saturday</Table.Td>
									<Table.Td>Sunday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Corporis voluptates harum. Architecto ut in corporis
											consectetur maiores exercitationem rerum officia dolorem.
											Vel aut voluptatem facilis et ducimus eum qui vel. Autem
											praesentium autem repellendus consectetur ut quia.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Thursday</Table.Td>
									<Table.Td>Leif</Table.Td>
									<Table.Td>Thursday</Table.Td>
									<Table.Td>Saturday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Vel ea similique ipsa nulla. Quasi explicabo illum dolorem
											est vel porro suscipit enim. Eum reiciendis voluptatem.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Thursday</Table.Td>
									<Table.Td>Reymundo</Table.Td>
									<Table.Td>Monday</Table.Td>
									<Table.Td>Friday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Distinctio quas ducimus sint sunt veniam quia. Doloribus
											ratione laboriosam placeat ipsum id quod. Dolores autem
											quisquam dolorum adipisci. Et aliquam error minima sed.
											Dignissimos deserunt recusandae quibusdam iure occaecati
											id incidunt cupiditate quae. Ab officia repellendus aut
											qui molestiae. Praesentium recusandae accusantium in ut
											consequatur cumque ducimus. Sed magnam sed eum quo. Aut
											cum itaque eius voluptate eum dolor consequatur fuga.
											Voluptas sed inventore neque voluptate deserunt aperiam
											facere. Voluptas dolore repudiandae qui totam architecto
											odit et. Dolor quasi facilis laboriosam perspiciatis
											numquam ut. Inventore quo voluptatem ratione earum
											molestiae cum.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Friday</Table.Td>
									<Table.Td>Omari</Table.Td>
									<Table.Td>Monday</Table.Td>
									<Table.Td>Tuesday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Qui veniam nemo id repellendus animi aperiam. In quod
											voluptatem. Voluptas tenetur officia autem consequuntur.
											Animi eius sunt.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Tuesday</Table.Td>
									<Table.Td>Oswaldo</Table.Td>
									<Table.Td>Tuesday</Table.Td>
									<Table.Td>Saturday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Dicta tempore optio molestiae. Velit sit dolore quae
											aperiam omnis in incidunt aliquid. Et dolor sequi unde et
											omnis ipsum. Voluptatum modi voluptatibus repellat sunt
											enim neque assumenda.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Wednesday</Table.Td>
									<Table.Td>Pamela</Table.Td>
									<Table.Td>Friday</Table.Td>
									<Table.Td>Friday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Eum et necessitatibus ut. Autem ut repudiandae nihil.
											Excepturi voluptatem eos quia perspiciatis rerum
											architecto est molestiae. Enim voluptas animi cupiditate.
											Quo autem expedita. Praesentium nobis nihil qui maiores
											fugiat ipsum iste eos sed. Omnis omnis est voluptatum eos
											modi nihil. Culpa quidem consequuntur. Commodi in magni
											beatae. Sunt ex beatae est vero ipsam vel.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Sunday</Table.Td>
									<Table.Td>Shaina</Table.Td>
									<Table.Td>Sunday</Table.Td>
									<Table.Td>Monday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">
											Voluptatem soluta odio repellendus vel quis. Velit beatae
											ex quas ab sit. Exercitationem et est sed consequatur
											voluptatem impedit dolores.
										</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
								<Table.Tr>
									<Table.Td>Tuesday</Table.Td>
									<Table.Td>Benjamin</Table.Td>
									<Table.Td>Tuesday</Table.Td>
									<Table.Td>Sunday</Table.Td>
									<Table.Td className="overflow-hidden text-ellipsis p-2 text-neutral-200 hover:bg-zinc-900">
										<p className="truncate">Hic quis est.</p>
									</Table.Td>
									<Table.Td>Valor</Table.Td>
									<Table.Td
										aria-label="config"
										className="align-middle hover:bg-zinc-900"
									>
										<div className="flex items-center justify-center">
											<MoreVertical />
										</div>
									</Table.Td>
								</Table.Tr>
							</Table.Tbody>
						</Table.Root>
					</div>
					{/* <footer className="flex items-center justify-end p-4">
						<div className="mr-4 flex items-center gap-4">
							<ArrowLeft size={24} />
							<strong className="text-[18px]">1</strong>
							<ArrowRight size={24} />
						</div>
						<Button variant="outline">Detalhes</Button>
					</footer> */}
				</aside>
			</main>
		</>
	);
}
