"use client";

import { ReactNode } from "react";
import { MoreVertical } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Menu({ children }: { children: ReactNode }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreVertical />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" sideOffset={5}>
				{children}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
