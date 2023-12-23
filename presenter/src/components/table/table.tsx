import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TableWrapper } from "./table-wapper";

interface ITBody extends ComponentProps<"table"> {
	children: ReactNode;
}

export function TableComponent({ className, children, ...props }: ITBody) {
	return (
		<TableWrapper>
			<table
				{...props}
				className={twMerge([
					"w-full min-w-[900px] text-[12px] lg:w-full table-fixed",
					className,
				])}
			>
				{children}
			</table>
		</TableWrapper>
	);
}
