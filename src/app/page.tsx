import { Post, type PostType } from "@/components/post";
import { Story, type StoryType } from "@/components/story";
import { TabContent, TabItem, Tabs } from "@/components/tabs";

import { discussionData, storiesData } from "@/lib/data";

export default async function Page() {
	// comment out the following lines
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`,
	);
	const data = await response.json();
	const { discussionData, storiesData } = data as {
		discussionData: PostType[];
		storiesData: StoryType[];
	};
	// upto here

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
