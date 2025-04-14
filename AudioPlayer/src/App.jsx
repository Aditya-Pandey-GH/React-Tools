import React from "react";
import AudioPlayer from "./AudioPlayer";

const App = () => {
	const audios = ["/songs/song1.mp3", "/songs/song2.mp3"];
	return (
		<>
			<AudioPlayer seekTime={5} sources={audios} />
		</>
	);
};

export default App;
