import React, { useEffect, useState, useRef } from "react";
import { parseBlob } from "music-metadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faForward,
	faBackward,
	faRotateLeft,
	faRotateRight,
	faRepeat,
	faRandom,
	faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./AudioPlayer.css";

const AudioPlayer = ({ seekTime = 10, sources = [] }) => {
	const songsRef = useRef(null);
	const [songIndex, setSongIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isRandom, setIsRandom] = useState(false);
	const [isRepeated, setIsRepeated] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(0.05);
	const [isMute, setIsMute] = useState(false);
	const [meta, setMeta] = useState({
		title: "Unknown Title",
		artist: "Unknown Artist",
		album: "Unknown Album",
		cover: null,
	});

	const audio = songsRef.current;

	const fetchMetadata = async () => {
		try {
			const response = await fetch(sources[songIndex]);
			const blob = await response.blob();
			const metadata = await parseBlob(blob);

			let cover = "";
			if (metadata.common.picture && metadata.common.picture.length > 0) {
				const picture = metadata.common.picture[0];
				const base64String = btoa(new Uint8Array(picture.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
				cover = `data:${picture.format};base64,${base64String}`;
			}

			setMeta({
				title: metadata.common.title || "Unknown Title",
				album: metadata.common.album || "Unknown Album",
				// artist: metadata.common.artist || "Unknown Artist",
				artist: metadata.common.albumartist || "Unknown Artist",
				cover,
			});
		} catch (err) {
			console.error("Error reading metadata:", err);
			setMeta({
				title: "Unknown Title",
				album: "Unknown Album",
				artist: "Unknown Artist",
				cover: "",
			});
		}
	};

	useEffect(() => {
		if (sources.length > 0) {
			fetchMetadata(sources[0]);
		}
	}, []);

	useEffect(() => {
		if (!audio || !sources[songIndex]) return;

		audio.src = sources[songIndex];
		audio.load();

		if (isPlaying) {
			audio.play();
		}

		fetchMetadata(sources[songIndex]);
	}, [songIndex]);

	// Play, Pause button
	useEffect(() => {
		if (!audio) return;
		if (isPlaying) {
			audio.play().catch((err) => {
				console.error(err);
				setIsPlaying(false);
			});
		} else {
			audio.pause();
		}
	}, [isPlaying]);

	// Volume Change
	useEffect(() => {
		if (!audio) return;
		audio.volume = volume;
	}, [volume]);

	// Seek Bar Timers
	useEffect(() => {
		if (!audio) return;

		// Current Time & Total Duration
		const updateTime = () => {
			setCurrentTime(audio.currentTime);
			setDuration(audio.duration || 0);
		};

		const handleEnded = () => {
			if (isRepeated) {
				audio.currentTime = 0;
				audio.play();
			} else {
				nextSong();
			}
		};

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("ended", handleEnded);

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("ended", handleEnded);
		};
	}, [audio, isRepeated]);

	// Randomize the Next Song
	const randomizeSong = () => {
		let randomIndex = Math.floor(Math.random() * sources.length);
		while (randomIndex === songIndex && sources.length > 1) {
			randomIndex = Math.floor(Math.random() * sources.length);
		}
		setSongIndex(randomIndex);
	};

	// Previous Song
	const prevSong = () => {
		setSongIndex((prev) => (prev - 1 + sources.length) % sources.length);
	};

	// Next Song
	const nextSong = () => {
		if (isRandom) randomizeSong();
		else setSongIndex((prev) => (prev + 1) % sources.length);
	};

	// Seek Bar Sliding Functionality
	const seekAudio = (e) => {
		const value = e.target.value;
		if (audio) {
			audio.currentTime = (value / 100) * duration;
		}
	};

	// Rewind few seconds
	const rewind = () => {
		if (audio) {
			audio.currentTime = Math.max(audio.currentTime - seekTime, 0);
		}
	};

	// Fast forward few seconds
	const fastForward = () => {
		if (audio) {
			audio.currentTime = Math.min(audio.currentTime + seekTime, duration);
		}
	};

	// Toggle Mute
	const toggleMute = () => {
		if (!audio) return;
		setIsMute(!isMute);
		audio.muted = !isMute;
	};

	const formatTime = (time) => {
		const min = Math.floor(time / 60)
			.toString()
			.padStart(2, "0");
		const sec = Math.floor(time % 60)
			.toString()
			.padStart(2, "0");
		return `${min}:${sec}`;
	};

	return (
		<>
			<div className="relative w-full md:w-fit bg-slate-300 dark:bg-slate-700 text-white p-4 md:px-8 md:py-4 rounded-md flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 md:space-y-0">
				{/* Blurred BG Image */}
				<div
					className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat blur-xl brightness-50 rounded`}
					style={{ backgroundImage: `url(${meta.cover})` }}
				></div>

				{/* Songs */}
				<audio ref={songsRef}>
					<source src={sources[songIndex]} />
				</audio>

				{/* Cover Image */}
				<img src={meta.cover || "/error.png"} alt="Song Thumbnail" className="w-48 h-48 object-cover object-center rounded-md z-50" />

				{/* Meta Data & Media Controls */}
				<div className="flex flex-col justify-center items-center space-y-4 z-50">
					{/* Meta Data */}
					<div className="flex flex-col justify-center items-center space-y-1 text-center">
						<h2 className="font-bold text-lg">{meta.title}</h2>
						<span className="text-sm">{meta.album}</span>
						<span className="font-light text-sm">Artist(s) : {meta.artist}</span>
					</div>

					{/* Media Controls */}
					<div className="w-full">
						<div className="w-full flex justify-between">
							<span className="font-light text-sm">{formatTime(currentTime)}</span>
							<span className="font-light text-sm">{formatTime(duration)}</span>
						</div>

						{/* Seek Bar */}
						<div className="h-8 flex justify-center items-center">
							<input
								type="range"
								min={0}
								max={100}
								value={(currentTime / duration) * 100 || 0}
								onChange={seekAudio}
								className="w-full appearance-none bg-white h-1 hover:h-2 rounded-full transition-all"
							/>
						</div>
					</div>

					{/* Rewind & Fast Forward */}
					<div className="flex flex-row space-x-2">
						<button
							type="button"
							className="cursor-pointer w-8 h-8 hover:opacity-75"
							onClick={rewind}
							title={`Rewind ${seekTime} seconds`}
						>
							<FontAwesomeIcon icon={faRotateLeft} className={`text-lg`} />
						</button>
						<button
							type="button"
							className="cursor-pointer w-8 h-8 hover:opacity-75"
							onClick={fastForward}
							title={`Fast forward ${seekTime} seconds`}
						>
							<FontAwesomeIcon icon={faRotateRight} className={`text-lg`} />
						</button>
					</div>

					{/* Play/Pause, Next/Prev, Repeat, Random */}
					<div className="flex flex-row space-x-2">
						{/* Random */}
						<button
							type="button"
							className="cursor-pointer w-8 h-8 hover:opacity-75"
							onClick={() => setIsRandom(!isRandom)}
							title={`Turn ${isRandom ? "off" : "on"} Random`}
						>
							<FontAwesomeIcon icon={faRandom} className={`text-lg ${isRandom ? "text-green-400" : ""} transition-colors`} />
						</button>

						{/* Previous Song */}
						<button type="button" className="cursor-pointer w-8 h-8 hover:opacity-75" onClick={prevSong} title={"Previous Song"}>
							<FontAwesomeIcon icon={faBackward} className={`text-lg`} />
						</button>

						{/* Play || Pause */}
						<button
							type="button"
							className="cursor-pointer w-8 h-8 hover:opacity-75"
							onClick={() => setIsPlaying(!isPlaying)}
							title={isPlaying ? "Pause" : "Play"}
						>
							{isPlaying ? (
								<FontAwesomeIcon icon={faPause} className={`text-lg`} />
							) : (
								<FontAwesomeIcon icon={faPlay} className={`text-lg`} />
							)}
						</button>

						{/* Next Song */}
						<button type="button" className="cursor-pointer w-8 h-8 hover:opacity-75" onClick={nextSong} title={"Next Song"}>
							<FontAwesomeIcon icon={faForward} className={`text-lg`} />
						</button>

						{/* Repeat */}
						<button
							type="button"
							className="cursor-pointer w-8 h-8 hover:opacity-75"
							onClick={() => setIsRepeated(!isRepeated)}
							title={`Turn ${isRepeated ? "off" : "on"} Repeat`}
						>
							<FontAwesomeIcon icon={faRepeat} className={`text-lg ${isRepeated ? "text-green-400" : ""} transition-colors`} />
						</button>
					</div>

					{/* Volume */}
					<div className="w-full flex flex-row space-x-2 justify-center items-center">
						<button type="button" className="cursor-pointer w-8 h-8 hover:opacity-75" onClick={toggleMute}>
							<FontAwesomeIcon icon={faVolumeHigh} className={`text-lg ${isMute ? "text-red-500" : ""}`} />
						</button>
						<input
							type="range"
							min={0}
							max={1}
							step={0.01}
							value={volume}
							onChange={(e) => setVolume(e.target.value)}
							className={`w-full appearance-none bg-white h-1 hover:h-2 rounded-full transition-all ${
								isMute ? "slider-red-alert" : ""
							}`}
							// title={`Volume: ${volume * 100}%`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AudioPlayer;
