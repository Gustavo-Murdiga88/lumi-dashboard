import { useFormStatus } from "react-dom";

export function Button({ disabled }: { disabled: boolean }) {
	const { pending } = useFormStatus();

	return (
		<button
			className="w-[250px] disabled:opacity-35 disabled:pointer-events-none p-2 hover:bg-zinc-300 hover:text-zinc-900 transition-all rounded-md border border-zinc-200 "
			type="submit"
			disabled={disabled || pending}
		>
			Enviar aquivos
		</button>
	);
}
