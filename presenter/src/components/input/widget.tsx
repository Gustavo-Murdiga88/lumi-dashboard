import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IInputProps extends ComponentProps<"input"> {
	label?: string;
	name: string;
}

export function Input({ name, label, className, ...props }: IInputProps) {
	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label className="text-[14px] font-semibold" htmlFor={name}>
					{label ?? ""}
				</label>
			)}
			<input
				{...props}
				id={name}
				name={name}
				className={twMerge(
					"py-1 px-2 bg-zinc-900 border text-[14px] text-zinc-200 placeholder:text-zinc-600 border-zinc-300 rounded-md ring-1 focus-visible:ring-zinc-200a outline-none",
					className,
				)}
			/>
		</div>
	);
}
