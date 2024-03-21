import Image from "next/image";

export type StoryType = {
	title: string;
	image: string;
	content: string;
};

export const Story = ({ title, image, content }: StoryType) => {
	return (
		<div className="flex flex-col border border-offwhite rounded-md overflow-hidden">
			<div className="relative h-32 aspect-video">
				<Image
					src={image}
					alt={title}
					fill
					className="z-0 object-cover"
				/>
			</div>
			<div className="flex p-2.5 flex-col">
				<h5 className="text-base font-semibold">{title}</h5>
				<p className="text-sm">{content}</p>
			</div>
		</div>
	);
};
