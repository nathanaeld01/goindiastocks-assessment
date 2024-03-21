import { Post } from "@/components/post";
import { Story } from "@/components/story";
import { TabContent, TabItem, Tabs } from "@/components/tabs";

import { discussionData, storiesData } from "@/lib/data";

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
					<div className="space-y-4">
						{discussionData.map((discussion) => (
							<Post {...discussion} key={discussion.author} />
						))}
					</div>
				</TabContent>
				<TabContent index="market" className="p-5 md:p-0 flex-[3]">
					<h2 className="section-title">Market Stories</h2>
					<div className="space-y-4">
						{storiesData.map((story) => (
							<Story {...story} key={story.title} />
						))}
					</div>
				</TabContent>
			</div>
		</Tabs>
	);
}
