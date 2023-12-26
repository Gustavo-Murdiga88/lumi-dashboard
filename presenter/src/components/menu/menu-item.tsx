"use client";

import { ComponentProps, ReactNode } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface IMenuItemProps extends ComponentProps<typeof DropdownMenuItem> {
	children: ReactNode;
}

export function MenuItem({ children, ...props }: IMenuItemProps) {
	return <DropdownMenuItem {...props}>{children}</DropdownMenuItem>;
}
