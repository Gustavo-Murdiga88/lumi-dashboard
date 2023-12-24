import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Lumi | Faturas",
};

export default function InvoicesLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
