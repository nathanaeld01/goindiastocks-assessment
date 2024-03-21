import "@/styles/post.css";

import { formatNumber } from "@/lib/utils";

import {
	EyeIcon,
	HeartIcon,
	MessageSquareIcon,
	Share2Icon,
} from "lucide-react";
import Image from "next/image";

export type PostType = {
	content: string;
	author: string;
	time: string;
	likes?: number;
	views?: number;
	comments?: number;
};

export const Post = ({
	content,
	author,
	time,
	likes,
	views,
	comments,
}: PostType) => {
	return (
		<div className="post-item">
			<div className="post-header">
				<div className="relative size-9 rounded-full overflow-hidden">
					<Image src="/avatar.png" alt={`${author} Avatar`} fill />
				</div>
			</div>
			<div className="post-content">
				<div className="flex py-2 items-center">
					<span className="text-sm font-semibold text-gray">
						{author}
					</span>
					<span className="ml-8 block px-2.5 py-0.5 bg-lightblue text-white text-[0.675rem] rounded-full">
						Sector 2
					</span>
					<span className="ml-auto text-[.675rem] text-lightblue font-semibold">
						{time}
					</span>
				</div>
				<div className="text-sm text-gray">{content}</div>
				<div className="h-9 flex gap-2 justify-stretch">
					<div className="post-metric">
						<HeartIcon className="size-5" />
						<span className="flex font-semibold text-xs">
							{formatNumber(likes ?? 0)}
						</span>
					</div>
					<div className="post-metric">
						<EyeIcon className="size-5" />
						<span className="flex font-semibold text-xs">
							{formatNumber(views ?? 0)}
						</span>
					</div>
					<div className="post-metric">
						<MessageSquareIcon className="size-5" />
						<span className="flex font-semibold text-xs">{`${formatNumber(
							comments ?? 0,
							1,
						)} Comments`}</span>
					</div>
					<div className="post-metric">
						<Share2Icon className="size-5" />
						<span className="flex font-semibold text-xs">
							Share
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
