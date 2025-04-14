import { useState, useRef, createContext, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
	const [isToastShowing, setIsToastShowing] = useState(false);
	const [message, setMessage] = useState("");
	const toastTimer = useRef(null);

	const showToast = (msg = "No message was passed in the toast") => {
		setMessage(msg);
		clearTimeout(toastTimer.current);
		setIsToastShowing(true);
		toastTimer.current = setTimeout(() => {
			setIsToastShowing(false);
		}, 3000);
	};

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<div className={`w-full fixed bottom-8 flex justify-center items-center pointer-events-none`}>
				<div
					className={`py-2 px-10 bg-neutral-500 dark:bg-neutral-300 text-white dark:text-black rounded font-semibold 
						transition-opacity duration-500 
						${isToastShowing ? "opacity-100" : "opacity-0"}`}
					// Change the bg and text colors of the Toast according to your project requirements.
				>
					{message}
				</div>
			</div>
		</ToastContext.Provider>
	);
};

// export default Toast;
export const useToast = () => useContext(ToastContext);
