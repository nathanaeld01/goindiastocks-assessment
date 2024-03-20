import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...input: ClassValue[]) {
	return twMerge(clsx(input));
}

function formatNumber(num: number, precision?: number) {
	if (num >= 1e12) return `${(num / 1e12).toFixed(precision ?? 0)}T`;
	if (num >= 1e9) return `${(num / 1e9).toFixed(precision ?? 0)}B`;
	if (num >= 1e6) return `${(num / 1e6).toFixed(precision ?? 0)}M`;
	if (num >= 1e3) return `${(num / 1e3).toFixed(precision ?? 0)}K`;
	return num;
}

export { cn, formatNumber };
