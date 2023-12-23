import {
	Avatar as ShadAvatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";

import { ComponentProps } from "react";

interface IAvatarProps extends ComponentProps<typeof AvatarImage> {
	fallback?: string;
}

export function Avatar({ fallback, className, ...props }: IAvatarProps) {
	return (
		<ShadAvatar className={className}>
			<AvatarImage {...props} />
			<AvatarFallback>{fallback ?? "OÇ"}</AvatarFallback>
		</ShadAvatar>
	);
}
