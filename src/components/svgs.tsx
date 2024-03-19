// These are from Lucide Icons, adjusted to my preferences

import { forwardRef } from "react";

type ExcludeProps =
	| "viewBox"
	| "fill"
	| "stroke"
	| "strokeLinecap"
	| "strokeLinejoin"
	| "strokeWidth";

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, ExcludeProps> {}

const CommentIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="3"
		strokeLinecap="round"
		strokeLinejoin="round"
		ref={ref}
		{...props}
	>
		<path
			className="fill-white"
			d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
		></path>
		<path className="stroke-primary" d="M8 10h.01"></path>
		<path className="stroke-primary" d="M12 10h.01"></path>
		<path className="stroke-primary" d="M16 10h.01"></path>
	</svg>
));

const MarketIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		ref={ref}
		{...props}
	>
		<circle className="fill-white" cx="12" cy="12" r="10"></circle>
		<path
			className="stroke-primary"
			d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8 M12 18V6"
		></path>
	</svg>
));

export { CommentIcon, MarketIcon };
