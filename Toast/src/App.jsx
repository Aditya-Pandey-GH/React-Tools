import React from "react";
import { useToast } from "./ToastContext";

const App = () => {
	const { showToast } = useToast();
	return (
		<>
			<button
				className="px-4 py-2 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white transition-all rounded"
				onClick={() => {
					showToast("The toast works as intended :)");
				}}
			>
				Show Toast
			</button>
		</>
	);
};

export default App;
