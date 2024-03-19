type Props = {
	author: string;
};

export const Post = ({ author }: Props) => {
	return (
		<div className="w-full flex border border-offwhite rounded-md shadow-[3px_3px_7px_0px] shadow-black/10">
			<div className="w-14 h-full p-2.5 shrink-0">
				<div className="relative size-9 bg-primary/10 rounded-full"></div>
			</div>
			<div className="w-full h-full grid grid-rows-[1fr_auto_1fr] *:w-full">
				<div className="h-8 flex items-center">
					<span className="font-semibold text-gray">{author}</span>
				</div>
				<div className=""></div>
				<div className="h-10 flex *:flex-1"></div>
			</div>
		</div>
	);
};
