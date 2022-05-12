//NPM packages
import React from "react";
import ReactDOM from "react-dom";

//Project files
import App from "./App";
import { ModalProvider } from "./state/ModalContext";

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<App />
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
