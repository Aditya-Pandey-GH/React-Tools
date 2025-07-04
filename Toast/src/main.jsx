import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastProvider } from "./ToastContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ToastProvider>
		<App />
	</ToastProvider>
);
