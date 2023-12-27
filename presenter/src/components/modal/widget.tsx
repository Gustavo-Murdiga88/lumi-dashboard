"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function Modal({
	children,
	title,
}: {
	children: ReactNode;
	title: string;
}) {
	const router = useRouter();

	return (
		<section className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm p-4">
			<main className="bg-zinc-800 h-full w-full p-4 flex flex-col rounded-md relative md:h-auto md:w-auto">
				<button
					onClick={() => router.back()}
					type="button"
					className="absolute top-4 z-10 right-4 focus-within:ring-1 focus-within:ring-zinc-100 outline-none rounded-md hover:bg-zinc-100 hover:text-zinc-900"
				>
					<span className="sr-only">fechar</span>
					<X className="border border-zinc-200 rounded-sm" size={24} />
				</button>
				<header className="relative min-w-full px-3 py-4">
					<h1>{title}</h1>
				</header>
				<div className="w-auto md:min-w-[600px] lg:min-w-[800px]">
					{children}
				</div>
			</main>
		</section>
	);
}
