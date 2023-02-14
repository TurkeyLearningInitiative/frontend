import { socialLinks } from "@/common/constants";
import Image from "next/image";
import React from "react";

type Props = {};

function DiscordButton({}: Props) {
	return (
		<a
			href={socialLinks.discord}
			target="_blank"
			rel="noreferrer"
			className="flex gap-2 rounded-md bg-indigo-200   px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			<Image
				alt="TurkeyLearningInitiative Discord channel"
				src={"/discord.svg"}
				height={24}
				width={24}
			/>
			Discord'a katıl
		</a>
	);
}

export default DiscordButton;
