import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITR extends ComponentProps<"tr"> {
	children: ReactNode;
}

export function Tr({ className, children, ...props }: ITR) {
	return (
		<tr
			{...props}
			className={twMerge(["border-b-[2px] border-b-zinc-700", className])}
		>
			{children}
		</tr>
	);
}
