import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Lumi | dashboard",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
}
