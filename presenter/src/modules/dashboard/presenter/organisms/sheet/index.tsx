"use client";

import clsx from "clsx";
import { Command, Menu } from "lucide-react";
import Link from "next/link";
import { ComponentRef, useRef, useState } from "react";
import {
	SheetContent,
	Sheet as SheetShad,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Active = "Dashboard" | "Cadastros" | "Gerar orçamento";

export function Sheet() {
	const [active, setActive] = useState<Active>("Dashboard");

	const closeButton = useRef<ComponentRef<"button">>(null);

	function closeSheet(url: Active) {
		setActive(url);
		setTimeout(() => {
			closeButton.current?.click();
		}, 150);
	}

	return (
		<SheetShad>
			<SheetTrigger asChild>
				<Button ref={closeButton} className="flex lg:hidden" variant="outline">
					<Menu size={24} />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="block lg:hidden">
				<SheetHeader className="mb-10">
					<SheetTitle className="mt-8 flex items-center justify-between gap-2">
						<div className="flex items-center gap-4">
							<Command />
							<strong>Orçamenteiro</strong>
						</div>
					</SheetTitle>
				</SheetHeader>
				<nav>
					<ul className="flex flex-col gap-4 rounded-lg px-0">
						<li>
							<Link
								onClick={() => closeSheet("Dashboard")}
								className={clsx(
									"block rounded-md px-6 py-2 text-[14px] font-semibold leading-relaxed",
									active === "Dashboard" && "bg-zinc-100 text-zinc-950",
								)}
								href="/dashboard"
								aria-label="Dashboard"
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								onClick={() => closeSheet("Cadastros")}
								className={clsx(
									"block rounded-md px-6 py-2 text-[14px] font-semibold leading-relaxed",
									active === "Cadastros" && "bg-zinc-100 text-zinc-950",
								)}
								href="/cadastros"
								aria-label="Cadastros"
							>
								Faturas
							</Link>
						</li>
					</ul>
				</nav>
			</SheetContent>
		</SheetShad>
	);
}
