import { socialLinks } from "@/common/constants";
import Image from "next/image";
import React from "react";

type Props = {};

function TwitterButton({}: Props) {
	return (
		<a
			href={socialLinks.twitter}
			role="button"
			className="flex gap-2 rounded-md  px-3.5 py-1.5 text-base font-semibold leading-7 
            text-black shadow-sm hover:bg-blue-50"
		>
			<Image
				alt={"Twitter"}
				src={"/twitter.svg"}
				height={24}
				width={24}
			/>
			Twitter&apos;da destek ol
		</a>
	);
}

export default TwitterButton;
