import { useState, useEffect } from "react";

const Typewriter = ({
	profsArr = [""],
	typingSpeed = 50,
	deletingSpeed = 50,
	cursor = true,
	cursorBlinkSpeed = 250,
	loop = true,
	pauseDuration = 1500, // Pause between typing and text deletion
	// cursorCharacter = "|", // Customizable cursor (if you want thin line as default cursor)
	cursorCharacter, // Customizable cursor (if you want thick line as default cursor)
	// randomizeTypingSpeed = false, // Random typing speed
	typingSound = null, // Give a source for audio file, if you want to add a typing sound
	clearInstantly = false, // Disables text deletion (and hence animation won't be shown)
	fontFamily = "inherit", // Name of the Font Family ('Times New Roman', 'Calibri', 'Arial', 'sans-serif', 'serif', etc.)
	textColor = "#ffffff", // Color of the text to be typed
	fontWeight = 400,
	bold = false,
	italics = false,
}) => {
	const [text, setText] = useState(""); // Current text
	const [currentIndex, setCurrentIndex] = useState(0); // Current string index
	const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
	const [showCursor, setShowCursor] = useState(true); // Cursor visibility

	// Cursor blinking effect
	useEffect(() => {
		if (!cursor) return;

		const blink = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, cursorBlinkSpeed);

		return () => clearInterval(blink);
	}, [cursor, cursorBlinkSpeed]);

	// Handle typing sound
	const playSound = () => {
		if (typingSound) {
			const audio = new Audio(typingSound);
			audio.play();
		}
	};

	// Typing and deleting logic
	useEffect(() => {
		const currentString = profsArr[currentIndex];
		let timeout;

		// const getTypingSpeed = () => (randomizeTypingSpeed ? Math.random() * (typingSpeed - typingSpeed / 2) + typingSpeed / 2 : typingSpeed);

		if (!isDeleting) {
			// Typing logic
			if (text.length < currentString.length) {
				timeout = setTimeout(() => {
					setText((prev) => prev + currentString[prev.length]);
					playSound();
					// }, getTypingSpeed());
				}, typingSpeed);
			} else {
				timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
			}
		} else {
			// Deleting logic
			if (clearInstantly) {
				setText("");
				setIsDeleting(false);
				setCurrentIndex((prevIndex) => (loop ? (prevIndex + 1) % profsArr.length : prevIndex + 1));
			} else {
				if (text.length > 0) {
					timeout = setTimeout(() => {
						setText((prev) => prev.slice(0, -1));
					}, deletingSpeed);
				} else {
					setIsDeleting(false);
					setCurrentIndex((prevIndex) => (loop ? (prevIndex + 1) % profsArr.length : prevIndex + 1));
				}
			}
		}

		return () => clearTimeout(timeout);
		// }, [text, isDeleting, currentIndex, profsArr, typingSpeed, deletingSpeed, loop, randomizeTypingSpeed, pauseDuration, clearInstantly]);
	}, [text, isDeleting, currentIndex, profsArr, typingSpeed, deletingSpeed, loop, pauseDuration, clearInstantly]);

	return (
		<>
			<span
				style={{
					color: textColor,
					fontFamily: fontFamily,
					whiteSpace: "pre",
					fontWeight: bold ? "bold" : fontWeight,
					fontStyle: italics ? "italic" : "normal",
				}}
			>
				{text}
			</span>
			{/* {cursor && <span style={{ opacity: showCursor ? 1 : 0 }}>{" " + cursorCharacter}</span>} */}
			{/* {cursor && showCursor && <span>{" " + cursorCharacter}</span>} */}

			{cursor && showCursor && (
				<>
					{cursorCharacter ? (
						<span>{" " + cursorCharacter}</span>
					) : (
						<>
							<span style={{ marginLeft: "0.25rem" }}></span>
							<span style={{ backgroundColor: textColor }}>{" "}</span>
						</>
					)}
				</>
			)}
		</>
	);
};
export default Typewriter;
