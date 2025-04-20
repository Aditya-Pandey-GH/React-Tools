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
			id: "skillPage",
			name: "Skills",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/skills.png",
			path: "/Skills",
		},
		{
			id: "projPage",
			name: "Projects",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/projects.png",
			path: "/Projects",
		},
		{
			id: "designPage",
			name: "Designs",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/design.png",
			path: "/Designs",
		},
		{
			id: "milestonePage",
			name: "Milestones",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/achievements.png",
			path: "/Milestones",
		},
		{
			id: "connectPage",
			name: "Connect",
			logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Pages/connect.png",
			path: "/Connect",
		},
	]; // Add the sidebar items according to your project requirements

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
			<section>
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
				className={`w-0 h-screen fixed bg-neutral-100 dark:bg-neutral-800 transition-all ease-in-out duration-300 z-40 ${
					isSidebarOpen ? "w-full sm:w-72" : ""
				}`}
			>
				<nav className={`${isSidebarOpen ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-300`}>
					<div className="flex flex-col">
						{/* Heading of the current page (Optional) */}
						<div className="pl-20 w-full h-18 flex items-center">
							<h1 className="w-full">TOPIC / TITLE</h1>
						</div>

						{/* Change the value of height from '100vh-5rem' to appropriate value according to your project requirements 👇 */}
						<div className="w-full h-[calc(100dvh-5rem)] overflow-y-auto">
							{/* Sidebar Options will go here */}
							<ul className="w-full flex flex-col">
								{/* <ul className="w-full h-[calc(100%-5rem)] flex flex-col"> */}
								{/* Modify the sidebar items according to your project requirements */}
								{sidebarItems.map((item) => (
									<li key={item.id} className=" hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
										<a href={item.path} className="flex items-center gap-2 p-4">
											<img
												src={item.logo}
												alt={item.name}
												className="w-8 h-8 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
											/>
											{item.name}
										</a>
									</li>
								))}
							</ul>

							{/* Separator */}
							<Separator />

							{/* Other Options */}
							<ul className="w-full flex flex-col">
								<li className=" hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
									<a href="/settings" target="_blank" className="flex items-center gap-2 p-4">
										<img
											src="https://static.vecteezy.com/system/resources/thumbnails/027/312/275/small_2x/setting-symbol-isolated-general-ui-icon-set-concept-3d-render-illustration-png.png"
											// src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-cogwheel-gear-setting-symbol-ai-generative-png-image_11577392.png"
											alt="Settings"
											className="w-8 h-8 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
										/>
										Settings
									</a>
								</li>
								<li className=" hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
									<button className="flex items-center gap-2 p-4">
										<img
											src="https://png.pngtree.com/png-vector/20230308/ourmid/pngtree-toogle-swich-day-and-night-or-light-dark-mode-with-scenery-vector-png-image_6637908.png"
											// src="https://png.pngtree.com/png-vector/20230308/ourmid/pngtree-toogle-swich-day-and-night-or-light-dark-mode-with-scenery-vector-png-image_6637912.png"
											alt="Settings"
											className="w-8 h-8 not-dark:drop-shadow-black not-dark:drop-shadow-xs/50"
										/>
										Theme Toggler
									</button>
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
			<section className="h-20"></section>
		</>
	);
};

export default Sidebar;
