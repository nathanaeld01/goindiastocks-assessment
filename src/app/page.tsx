import { Story } from "@/components/story";
import { TabContent, TabItem, Tabs } from "@/components/tabs";

export default function Page() {
	return (
		<Tabs defaultIndex="discussion">
			<div className="flex md:hidden">
				<TabItem index="discussion">Discussion Forum</TabItem>
				<TabItem index="market">Market Stories</TabItem>
			</div>
			<div className="wrapper">
				<TabContent index="discussion" className="p-5 md:p-0 flex-[7]">
					<h2 className="section-title">Discussion Forum</h2>
				</TabContent>
				<TabContent index="market" className="p-5 md:p-0 flex-[3]">
					<h2 className="section-title">Market Stories</h2>
					<div className="space-y-4">
						<Story
							title="The Coldest Sunset"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							image="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149152830.jpg"
						/>
						<Story
							title="The Coldest Sunset"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							image="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149152830.jpg"
						/>
						<Story
							title="The Coldest Sunset"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							image="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149152830.jpg"
						/>
					</div>
				</TabContent>
			</div>
		</Tabs>
	);
}
