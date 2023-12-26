"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer({
	fetchPage,
	hasNextPage,
}: {
	fetchPage: (page: number) => void;
	hasNextPage: boolean;
}) {
	const pagination = useRef(0);

	return (
		<footer className="flex items-center justify-end p-4">
			<div className="mr-4 flex items-center gap-4">
				<Button
					variant="outline"
					onClick={() => {
						if (pagination.current - 1 < 0) {
							return;
						}

						pagination.current--;
						fetchPage(pagination.current);
					}}
				>
					<ArrowLeft size={24} />
				</Button>
				<strong className="text-[18px]">{pagination.current + 1}</strong>
				<Button
					variant="outline"
					disabled={!hasNextPage}
					onClick={() => {
						pagination.current++;
						fetchPage(pagination.current);
					}}
				>
					<ArrowRight size={24} />
				</Button>
			</div>
		</footer>
	);
}
