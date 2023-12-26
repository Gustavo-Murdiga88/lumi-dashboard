import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Lumi | Faturas",
};

export default function InvoicesLayout({
	children,
	register,
}: {
	children: ReactNode;
	register: ReactNode;
}) {
	return (
		<>
			{children} {register}
		</>
	);
}
