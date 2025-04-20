import React, { useState } from "react";
import Separator from "./Separator";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const sidebarItems = [
		{
			id: "homePage",
			name: "Home",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/home.png",
			path: "/",
		},
		{
			id: "aboutPage",
			name: "About Us",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/skills.png",
			path: "/AboutUs",
		},
		{
			id: "contactPage",
			name: "Contact Us",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/connect.png",
			path: "/Contact",
		},
	]; // Add the sidebar items according to your project requirements
	// Make sure to use the unicode character ` ` instead of regular Space in the Names, otherwise you may notice some minor styling issues.
	// To use the unicode character ` `, hold Alt key and type "0160" using numpad. Use on-screen keyboard, if your keyboard doesn't have a numpad.

	return (
		<>
			{/* Empty Navbar Alias */}
			{/* <section className="w-full h-20 fixed bg-white dark:bg-neutral-900">
				<nav className="w-full h-full">
					<ul className="w-full h-full flex flex-row justify-end items-center space-x-4 pr-8">
						<li>Home</li>
						<li>About Us</li>
						<li>Contact Us</li>
					</ul>
				</nav>
			</section> */}
			{/* 👆 Remove the above given section if you want. It was just for experiment purposes and has no relevance in the code 👆 */}

			{/* Hamburger Button to Toggle Navbar */}
			<section className="">
				<button
					className={`w-12 h-12 m-4 p-4 fixed rounded-full flex flex-col cursor-pointer space-y-1 bg-neutral-200 dark:bg-neutral-700 active:bg-neutral-200 dark:active:bg-neutral-700 transition-all z-50 ${
						isSidebarOpen ? "bg-neutral-200 dark:bg-neutral-700" : ""
					}`}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					<div className="z-10">
						<span
							className={`w-6 h-0.5 absolute left-3 top-4.25 rounded-full bg-black dark:bg-white transition-all ease-out duration-300 ${
								isSidebarOpen ? "!top-5.5 rotate-45" : ""
							}`}
						></span>
						<span
							className={`w-6 h-0.5 absolute left-3 top-5.75 rounded-full bg-black dark:bg-white transition-all ease-out duration-300 ${
								isSidebarOpen ? "!top-5.5 scale-x-0" : ""
							}`}
						></span>
						<span
							className={`w-6 h-0.5 absolute left-3 top-7.25 rounded-full bg-black dark:bg-white transition-all ease-out duration-300 ${
								isSidebarOpen ? "!top-5.5 -rotate-45" : ""
							}`}
						></span>
					</div>
					{/* <div className="w-10 h-8 absolute top-2 left-1 border rounded border-black dark:border-white hover:bg-white dark:hover:bg-black z-0 transition-colors"></div> */}
				</button>
			</section>

			{/* Sidebar Content */}
			<section
				className={`w-20 h-screen fixed bg-neutral-100 dark:bg-neutral-800 transition-all ease-in-out duration-300 z-40 ${
					isSidebarOpen ? "w-full sm:w-72" : ""
				}`}
			>
				<nav className="">
					<div className="flex flex-col">
						{/* Heading of the current page (Optional) */}
						<div className="pl-20 w-full h-20 flex items-center">
							<h1
								className={`w-full font-bold transition-opacity ease-in-out duration-300 ${
									isSidebarOpen ? "opacity-100" : "opacity-0"
								}`}
							>
								CURRENT PAGE NAME
							</h1>
						</div>

						{/* Change the value of height from '100vh-5rem' to appropriate value according to your project requirements 👇 */}
						<div className="w-full h-[calc(100dvh-5rem)] overflow-y-auto overflow-x-hidden">
							{/* Sidebar Options will go here */}
							<ul className="w-full flex flex-col">
								{/* <ul className="w-full h-[calc(100%-5rem)] flex flex-col"> */}
								{/* Modify the sidebar items according to your project requirements */}
								{sidebarItems.map((item) => (
									<li key={item.id} className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
										<a href={item.path} className="flex items-center gap-2 p-4 cursor-pointer">
											<img
												src={item.logo}
												alt={item.name}
												className="w-8 h-8 mx-2 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
											/>
											<span
												className={`transition-opacity ease-in-out duration-300 ${
													isSidebarOpen ? "opacity-100" : "opacity-0"
												}`}
											>
												{item.name}
												{/* {isSidebarOpen ? item.name : item.name.split(" ").join(" ")} */}
											</span>
										</a>
									</li>
								))}
							</ul>

							{/* Separator */}
							<Separator />

							{/* Other Utilities will go here */}
							{/* These are completely optional to use. Also, you can choose to use only some of them */}
							<ul className="w-full flex flex-col">
								<li className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
									<a href="/settings" target="_blank" className="flex items-center gap-2 p-4 cursor-pointer">
										<img
											src="https://static.vecteezy.com/system/resources/thumbnails/027/312/275/small_2x/setting-symbol-isolated-general-ui-icon-set-concept-3d-render-illustration-png.png"
											// src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-cogwheel-gear-setting-symbol-ai-generative-png-image_11577392.png"
											alt="Settings"
											className="w-8 h-8 mx-2 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
										/>
										<span
											className={`${isSidebarOpen ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-300`}
										>
											Settings
										</span>
									</a>
								</li>
								<li className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
									<button className="flex items-center gap-2 p-4 cursor-pointer">
										<img
											src="https://png.pngtree.com/png-vector/20230308/ourmid/pngtree-toogle-swich-day-and-night-or-light-dark-mode-with-scenery-vector-png-image_6637908.png"
											// src="https://png.pngtree.com/png-vector/20230308/ourmid/pngtree-toogle-swich-day-and-night-or-light-dark-mode-with-scenery-vector-png-image_6637912.png"
											alt="Settings"
											className="w-8 h-8 mx-2 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
										/>
										<span
											className={`transition-opacity ease-in-out duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
										>
											Switch Theme
										</span>
									</button>
								</li>
								<li className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
									<a href="https://aditya-pandey.vercel.app" target="_blank" className="flex items-center gap-2 p-4 cursor-pointer">
										<img
											src="https://play-lh.googleusercontent.com/aMb_Qiolzkq8OxtQZ3Af2j8Zsp-ZZcNetR9O4xSjxH94gMA5c5gpRVbpg-3f_0L7vlo"
											// src="https://pixcap.com/cdn/library/templates/e2d81c01-427b-4af0-8f11-66ce58878421/thumbnail/853456ab-729a-4f9f-bcf8-c07e0c0e09b8_transparent_800_800.webp"
											// src="https://png.pngtree.com/png-vector/20240629/ourmid/pngtree-money-3d-icon-finance-png-image_12920735.png"
											// src="https://cdn3d.iconscout.com/3d/premium/thumb/donation-box-3d-icon-download-in-png-blend-fbx-gltf-file-formats--charity-donate-money-pack-healthcare-medical-icons-10052943.png"
											// src="https://img.pikbest.com/element_our/20230718/bg/4d5a5afc1d5be.png"
											alt="Settings"
											className="w-8 h-8 mx-2 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50 rounded-md"
										/>
										<span
											className={`transition-opacity ease-in-out duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
										>
											Support Us
										</span>
									</a>
								</li>
							</ul>
						</div>

						{/* Other Options like Settings, Logout, Theme Toggler, etc. (Optional) */}
						<div className="w-full h-[calc(100dvh-5rem)] overflow-y-auto">
							{/* Sidebar Options will go here */}
							<ul className="w-full h-[calc(100%-5rem)] flex flex-col">
								{/* Modify the sidebar items according to your project requirements */}
								{sidebarItems.map((item) => (
									<li key={item.id} className=" hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
										<a href={item.path} className="flex items-center gap-2 p-4">
											<img
												src={item.logo}
												alt={item.name}
												className="w-8 h-8 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
											/>
											{"item.name"}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</nav>
			</section>

			{/* Blank Section so that the content of the body does not overlap with the Hamburger icon */}
			{/* <section className="h-20"></section> */}
		</>
	);
};

export default Sidebar;
