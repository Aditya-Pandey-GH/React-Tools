import React from "react";
import ThemeToggle from "./ThemeToggle";

const App = () => {
	return (
		<>
			<header>
				<nav className="flex justify-between items-center px-6 py-8 font-semibold">
					<h1>MY SITE</h1>
					<div>
						<ul className="flex justify-between items-center gap-4 list-none">
							<li>
								<a href="">Home</a>
							</li>
							<li>
								<a href="">About Us</a>
							</li>
							<li>
								<a href="">Contact Us</a>
							</li>
						</ul>
					</div>
					<ThemeToggle />
				</nav>
			</header>
			<main className="">
				<div className="w-20 h-20 bg-red-500 dark:bg-green-500"></div>
			</main>
			{/* <ThemeToggle /> */}
		</>
	);
};

export default App;
