import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Lumi | dashboard",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
