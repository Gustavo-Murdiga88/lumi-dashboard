import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITHead extends ComponentProps<"thead"> {
	children: ReactNode;
}

export function Thead({ className, children, ...props }: ITHead) {
	return (
		<thead {...props} className={twMerge(["text-left", className])}>
			{children}
		</thead>
	);
}
