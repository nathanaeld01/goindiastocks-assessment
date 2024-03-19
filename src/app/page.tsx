import { TabContent, TabItem, Tabs } from "@/components/tabs";

export default function Page() {
	return (
		<div className="w-full flex flex-col">
			<Tabs defaultIndex="discussion">
				<div className="flex md:hidden">
					<TabItem index="discussion">Discussion Forum</TabItem>
					<TabItem index="market">Market Stories</TabItem>
				</div>
				<div className="max-w-[1100px] w-full mx-auto flex">
					<TabContent index="discussion" className="flex-[7]">
						<h2 className="hidden md:block text-2xl text-red font-semibold uppercase">
							Discussion Forum
						</h2>
					</TabContent>
					<TabContent index="market" className="flex-[3]">
						<h2 className="hidden md:block text-2xl text-red font-semibold uppercase">
							Market Stories
						</h2>
					</TabContent>
				</div>
			</Tabs>
		</div>
	);
}
