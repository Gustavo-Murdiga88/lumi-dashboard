"use client";

import { FormEvent, useState } from "react";

import { Cloud, File } from "lucide-react";
import { useRouter } from "next/navigation";
import { revalidate } from "../actions/action";

export interface IFilesAttachment {
	id: string;
	file: File;
}

export function Form() {
	const router = useRouter();

	const [files, setFiles] = useState<IFilesAttachment[]>([]);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = new FormData();

		files.forEach((file) => {
			form.append("attachments", file.file, file.file.name);
		});
		const response = await fetch("http://localhost:3001/dashboard/invoices", {
			method: "POST",
			body: form,
			cache: "no-store",
		});

		if (response.ok) {
			revalidate();
			router.back();
		}
	}

	function handleChangeInput(event: FormEvent<HTMLInputElement>) {
		const { files } = event.currentTarget;

		if (!files) {
			return;
		}

		const filesList: IFilesAttachment[] = Array.from({
			length: files.length,
		}).map((_, index) => ({
			id: new Date().getTime().toString(),
			file: files[index],
		}));

		setFiles(filesList);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 p-2 border border-zinc-300 rounded-md mt-4"
		>
			<div className="flex flex-col gap-5 p-4">
				<h1 className="text-[16px]">Envie sua faturas para análise</h1>
				<label
					htmlFor="files"
					className="p-2 cursor-pointer w-full border-dashed min-h-[150px] max-h-[300px] overflow-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700 text-[14px] items-center border border-zinc-200 rounded-md  flex justify-between"
				>
					<span className="sr-only">Selecione um arquivo</span>
					<input
						key="attachments"
						disabled={files.length > 0}
						className="sr-only"
						name="files"
						onChange={(event) => {
							handleChangeInput(event);
						}}
						multiple
						id="files"
						type="file"
						accept="application/pdf"
					/>

					<ul className="flex-1 text-[14px]">
						{files.length === 0 && (
							<li className="flex items-center justify-center flex-col">
								<Cloud size={80} />
								<strong>Nenhum arquivo selecionado</strong>
							</li>
						)}

						{files.length > 0 &&
							files.map(({ file, id }) => (
								<li
									key={id}
									className="flex gap-4 items-center mt-3 h-10 border-b border-zinc-600 hover:border-b-zinc-800 hover:bg-zinc-400 px-4 hover:text-zinc-900 "
								>
									<File size={18} />
									<strong>Fatura: {file.name}</strong>
								</li>
							))}
					</ul>
				</label>
				<button
					className="w-[250px] disabled:opacity-35 disabled:pointer-events-none p-2 hover:bg-zinc-300 hover:text-zinc-900 transition-all rounded-md border border-zinc-200 "
					type="submit"
					disabled={files.length === 0}
				>
					Enviar aquivos
				</button>
			</div>
		</form>
	);
}
