"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sheet } from "../sheet";

type Active = "Dashboard" | "Cadastros" | "Gerar orçamento";
export function Nav() {
	const [active, setActive] = useState<Active>("Dashboard");

	return (
		<>
			<Sheet />
			<nav className="hidden lg:block">
				<ul className="flex gap-4 rounded-lg bg-zinc-700 p-2 px-4">
					<li className="relative">
						<span className="invisible px-6 py-1 text-[14px] font-semibold leading-relaxed">
							Dashboard
						</span>
						{active === "Dashboard" && (
							<motion.div
								layoutId="nav"
								className="absolute inset-0 rounded-lg bg-zinc-950"
							/>
						)}
						<Link
							onClick={() => {
								setActive("Dashboard");
							}}
							className="absolute inset-0 z-10 rounded-md px-6 py-1 text-[14px] font-semibold leading-relaxed"
							href="/dashboard"
							aria-label="Dashboard"
						>
							Dashboard
						</Link>
					</li>
					<li className="relative">
						<span className="invisible px-6 py-1 text-[14px] font-semibold leading-relaxed">
							Cadastros
						</span>
						{active === "Cadastros" && (
							<motion.div
								layoutId="nav"
								className="absolute inset-0 rounded-lg bg-zinc-950"
							/>
						)}
						<Link
							onClick={() => {
								setActive("Cadastros");
							}}
							className="absolute inset-0 z-10 rounded-md px-6 py-1 text-[14px] font-semibold leading-relaxed"
							href="/cadastros"
							aria-label="Cadastros"
						>
							Faturas
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
