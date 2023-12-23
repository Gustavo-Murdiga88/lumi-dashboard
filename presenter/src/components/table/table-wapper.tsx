import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITableWrapper extends ComponentProps<"div"> {
	children: ReactNode;
}

export function TableWrapper({ children, className, ...props }: ITableWrapper) {
	return (
		<div
			className={twMerge([
				"overflow-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700 py-4",
				className,
			])}
		>
			{children}
		</div>
	);
}
