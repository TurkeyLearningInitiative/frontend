import Image from "next/image";
import React from "react";
import DiscordButton from "./DiscordButton";

type Props = {};

function SupportUs({}: Props) {
	return (
		<>
			<div
				className="bg-white py-24 px-6 sm:py-32 lg:px-8"
				id="destek-ol"
			>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
						Elindeki bilgiyi paylaş
					</p>
					<h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Destek ol
					</h2>

					<div className="mt-6 text-lg leading-8 text-gray-600 flex items-center flex-col">
						Şuanda depoladığımız notları bu repoda biriktiriyoruz.
						Platform hazır olana kadar elindeki notları hangi
						formatta olursa olsun buraya ekleyebilirsin.
						<br />
						<div className="self-center flex justify-center">
							<a
								href="https://github.com/ayyucedemirbas/TurkeyLearningInitiative"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									className="my-5 hover:scale-125 transition-all 
                                 	ease-in-out duration-200 border-dashed hover:border-2 border-indigo-600
                                 	rounded-lg hover:translate-y-3"
									src="/TurkeyLearningInitiative.svg"
									width="442"
									height="193"
									alt="Turkey Learning Initiative"
								/>
							</a>
						</div>
						<div className="flex gap-4 items-center">
							<DiscordButton />
							<a
								href="https://github.com/ayyucedemirbas/TurkeyLearningInitiative"
								className="text-base font-semibold leading-7 text-gray-900 hover:bg-slate-50 px-3.5 py-1.5"
							>
								Repoyu incele <span aria-hidden="true">→</span>
							</a>
						</div>
						<div className=" bg-slate-100 h-1 w-full mb-2 mt-7"></div>
						Projemizin gelişmesi, kaynakları organize edebilmek için
						desteğe ihtiyacımız olabilir. Sen de bu projenin bir
						parçası olup takip etmek istersen Discord serverımıza
						katılabilirsin.
					</div>
				</div>
			</div>
		</>
	);
}

export default SupportUs;
