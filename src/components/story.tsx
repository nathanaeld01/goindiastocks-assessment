import Image from "next/image";

type Props = {
	title: string;
	image: string;
	content: string;
};

export const Story = ({ title, image, content }: Props) => {
	return (
		<div className="flex flex-col border border-offwhite rounded-md overflow-hidden">
			<div className="relative h-28 aspect-video">
				<Image src={image} alt={title} fill className="z-0" />
			</div>
			<div className="flex p-2.5 flex-col">
				<h5 className="text-base font-semibold">{title}</h5>
				<p className="text-sm">{content}</p>
			</div>
		</div>
	);
};
