import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITD extends ComponentProps<"td"> {
	children?: ReactNode;
}

export function Td({ className, children, ...props }: ITD) {
	return (
		<td
			{...props}
			className={twMerge([
				"overflow-hidden text-ellipsis p-2 text-neutral-200 group-hover:bg-zinc-900",
				className,
			])}
		>
			{children}
		</td>
	);
}
