import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITH extends ComponentProps<"th"> {
	children?: ReactNode;
}

export function Th({ className, children, ...props }: ITH) {
	return (
		<th
			{...props}
			className={twMerge([
				"py-2 last:w-14 overflow-hidden whitespace-nowrap text-ellipsis text-center",
				className,
			])}
		>
			{children}
		</th>
	);
}
