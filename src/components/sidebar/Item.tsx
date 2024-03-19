import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
	icon?: React.ReactElement;
	isDropdown?: boolean;
	children: React.ReactNode;
};

export const SidebarItem = ({ icon, isDropdown, children }: Props) => {
	return (
		<Link
			className="w-full h-10 flex px-4 bg-transparent items-center gap-2 hover:bg-black/15 transition-colors duration-100"
			href="#"
		>
			{icon && React.cloneElement(icon, { className: "size-5" })}
			<span className={cn("grow", !icon && "pl-7")}>{children}</span>
			{isDropdown && (
				<svg
					viewBox="0 0 24 24"
					className="fill-white size-5"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M7 10l5 5 5-5z" />
				</svg>
			)}
		</Link>
	);
};
