import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ITBody extends ComponentProps<"tbody"> {
	children: ReactNode;
}

export function Tbody({ className, children, ...props }: ITBody) {
	return (
		<tbody {...props} className={twMerge([className])}>
			{children}
		</tbody>
	);
}
