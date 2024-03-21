import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...input: ClassValue[]) {
	return twMerge(clsx(input));
}

function formatNumber(num: number, precision = 1) {
	if (num >= 1e12)
		return `${(num / 1e12).toFixed(precision).replace(/\.0$/, "")}T`;
	if (num >= 1e9)
		return `${(num / 1e9).toFixed(precision).replace(/\.0$/, "")}B`;
	if (num >= 1e6)
		return `${(num / 1e6).toFixed(precision).replace(/\.0$/, "")}M`;
	if (num >= 1e3)
		return `${(num / 1e3).toFixed(precision).replace(/\.0$/, "")}K`;
	return num;
}

export { cn, formatNumber };
