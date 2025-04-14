import React from "react";
import Typewriter from "./TypeWriter";

const App = () => {
	return (
		<>
			<Typewriter
				profsArr={["Hey Pros 👋", "My name is Game Zoned :)", "Welcome back to another video.", "I am back to play games 🎮"]}
				// bold={true}
				// fontWeight={900}
			/>
		</>
	);
};

export default App;
