"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";

const Header = () => {
	return (
		<>
			<Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
				<h1 className="font-blod">mi3765</h1>
				<div className="grow">
					<div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
						<Link href={"/"}>Home</Link>
						<Link href={"/blog"}>Blog</Link>
						<Link href={"/portfolio"}>Portfolio</Link>
						<Link href={"/profile"}>Profile</Link>
						<Link href={"/contact"}>Contact</Link>
					</div>
				</div>
				<div className="flex grow items-center justify-end sm:hidden">
					<Popover.Button
						className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
					hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-orange-500"
					>
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</Popover.Button>
				</div>
				<Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
				<Transition
					as={Fragment}
					enter="duration-200 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
							<div className="px-5 pt-5 pb-6">
								<div className="flex items-center justify-between">
									<h1 className="font-bold">mi3765</h1>
									<div className="-mr-2">
										<Popover.Button
											className="inline-flex items-center justify-center rounded-md bg-white p-2
											text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
										>
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
										<Link
											className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
											href={"/"}
										>
											Home
										</Link>
										<Link
											className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
											href={"/blog"}
										>
											Blog
										</Link>
										<Link
											className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
											href={"/portfolio"}
										>
											Portfolio
										</Link>
										<Link
											className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
											href={"/profile"}
										>
											Profile
										</Link>
										<Link
											className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
											href={"/contact"}
										>
											Contact
										</Link>
									</nav>
								</div>
								<div className="mt-6 flex flex-col items-center gap-2">
									<Link
										href={"/blog/add"}
										className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
										focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
									>
										New Blog
									</Link>
									<Link
										href={"/portfolio/add"}
										className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
										focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
									>
										New Portfolio
									</Link>
									<Link
										href={"/register"}
										className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
										focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
									>
										Sign up
									</Link>
									<Link
										href={"/login"}
										className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2
										focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
									>
										Login
									</Link>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>

				<div className="hidden sm:flex items-center">
					<div className="mr-10">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="inline-flex w-full justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
									Create
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
									<div className="px-1 py-1 ">
										<Menu.Item>
											{({ active }) => (
												<Link
													href={"/portfolio/add"}
													className={`${
														active
															? "bg-orange-500 text-white"
															: "text-gray-900"
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												>
													Portfolio
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<Link
													href={"/blog/add"}
													className={`${
														active
															? "bg-orange-500 text-white"
															: "text-gray-900"
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												>
													Blog
												</Link>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>

					<Link href={"/register"} className="mr-2 font-bold">
						Sign up
					</Link>
					<Link href={"/login"} className="font-bold">
						Login
					</Link>
				</div>
			</Popover>
		</>
	);
};

export default Header;
