"use client";

import { createContext, useContext } from "react";

type TabIndex = string;
type TabsContextType = {
	activeTab: TabIndex;
	setActiveTab: (index: string) => void;
};

const TabContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
	const context = useContext(TabContext);
	if (!context) throw new Error("useTabs must be used within a TabsProvider");

	return context;
};

export { TabContext, useTabs, type TabIndex };
