import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import SupportUs from "./SupportUs";
import TwitterButton from "./TwitterButton";
import { navigation } from "@/common/constants";

export default function Landing() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className="relative bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 lg:w-full lg:max-w-2xl">
						<svg
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="0,0 90,0 50,100 0,100" />
						</svg>

						<div className="relative px-6 pt-6 lg:pl-8 lg:pr-0">
							<nav
								className="flex items-center justify-between sm:h-10 lg:justify-start"
								aria-label="Global"
							>
								<Logo />
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
									onClick={() => setMobileMenuOpen(true)}
								>
									<span className="sr-only">
										Open main menu
									</span>
									<Bars3Icon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>
								<div className="hidden lg:ml-12 lg:block lg:space-x-14">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="text-sm font-semibold leading-6 text-gray-900"
										>
											{item.name}
										</a>
									))}
								</div>
							</nav>
							<Dialog
								as="div"
								open={mobileMenuOpen}
								onClose={setMobileMenuOpen}
							>
								<Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
									<div className="flex flex-row-reverse items-center justify-between">
										<button
											type="button"
											className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
											onClick={() =>
												setMobileMenuOpen(false)
											}
										>
											<span className="sr-only">
												Close menu
											</span>
											<XMarkIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>
										<Logo />
									</div>
									<div className="mt-6 space-y-2">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
											>
												{item.name}
											</a>
										))}
									</div>
								</Dialog.Panel>
							</Dialog>
						</div>

						<div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
								<div className="hidden sm:mb-10 sm:flex">
									<div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
										Gönüllü olarak çalışan bir ekibiz {"  "}
										<a
											href="#"
											className="whitespace-nowrap font-semibold text-indigo-600"
										>
											<span
												className="absolute inset-0"
												aria-hidden="true"
											/>
											Sen de bize katıl{" "}
											<span aria-hidden="true">
												&rarr;
											</span>
										</a>
									</div>
								</div>
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Notlarını paylaş, <br />
									öğren ve geliş.
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									Ülkemizde yaşanan felaketlerden sonra eğitim
									hayatının sekteye uğrayacağı bölgelerdeki
									vatandaşlarımızın her an eğitim içeriklerine
									kolayca ulaşmasını hedefliyoruz. Sen de
									bizlere yardımcı olabilirsin.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<a
										href="#"
										className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Notları incele
									</a>
									<TwitterButton />

									<a
										href="#"
										className="text-base font-semibold leading-7 text-gray-900"
									>
										Paylaş <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
						src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
						alt="TurkeyLearningInitiative"
					/>
				</div>
			</div>
			<SupportUs />
		</>
	);
}
