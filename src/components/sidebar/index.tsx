"use client";

import "@/styles/sidebar.css";

import clsx from "clsx";
import { BellIcon, User2Icon } from "lucide-react";
import { useState } from "react";
import { CommentIcon, MarketIcon } from "../svgs";
import { SidebarItem } from "./Item";
import { SidebarToggler } from "./Toggler";

export const Sidebar = () => {
	const [toggled, setToggled] = useState(false);

	const toggleHandler = () => setToggled((prev) => !prev);

	return (
		<aside className={clsx("sidebar", toggled && "show")}>
			<div className="sidebar-wrapper divide-y divide-gray">
				<div className="sidebar-header">
					<div className="relative size-6 flex justify-center items-center rounded-full overflow-hidden">
						<User2Icon className="absolute fill-white stroke-white size-7" />
					</div>
					<p className="grow">Hello, User</p>
					<div className="relative size-6">
						<BellIcon className="fill-white stroke-white size-6" />
						<span className="absolute block size-1.5 top-0 right-0 bg-red rounded-full" />
					</div>
				</div>
				<div className="sidebar-menu">
					<SidebarItem icon={<CommentIcon />} isDropdown>
						Discussion Forum
					</SidebarItem>
					<SidebarItem icon={<MarketIcon />}>
						Market Stories
					</SidebarItem>
					<SidebarItem>Sentiment</SidebarItem>
					<SidebarItem>Market</SidebarItem>
					<SidebarItem>Sector</SidebarItem>
					<SidebarItem>Watchlist</SidebarItem>
					<SidebarItem>Events</SidebarItem>
					<SidebarItem>News/Interviews</SidebarItem>
				</div>
			</div>
			<SidebarToggler toggle={toggled} onToggle={toggleHandler} />
		</aside>
	);
};
