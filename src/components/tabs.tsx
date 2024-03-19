"use client";

import { TabContext, type TabIndex, useTabs } from "@/context/tabs-context";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type TabsProps = {
	defaultIndex?: TabIndex;
	children: React.ReactNode;
};

type TabItemProps = {
	index: string;
	children: React.ReactNode;
};

type TabContentProps = {
	index: string;
	className?: string;
	children: React.ReactNode;
};

const Tabs = ({ defaultIndex, children }: TabsProps) => {
	const [activeTab, setActiveTab] = useState<TabIndex>(defaultIndex ?? "");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && defaultIndex) {
				setActiveTab(defaultIndex);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [defaultIndex]);

	return (
		<TabContext.Provider value={{ activeTab, setActiveTab }}>
			{children}
		</TabContext.Provider>
	);
};

const TabItem = ({ index, children }: TabItemProps) => {
	const { activeTab, setActiveTab } = useTabs();

	return (
		<li
			className={cn(
				"w-full h-10 flex bg-primary border-b-2 border-b-transparent text-white justify-center items-center cursor-pointer select-none",
				index === activeTab && "bg-primary-hover border-b-red",
			)}
			onClick={() => setActiveTab(index)}
		>
			{children}
		</li>
	);
};

const TabContent = ({ index, className, children }: TabContentProps) => {
	const { activeTab } = useTabs();

	return (
		<div
			className={cn(
				"w-full hidden md:block",
				index === activeTab && "block",
				className,
			)}
		>
			{children}
		</div>
	);
};

export { TabContent, TabItem, Tabs };
