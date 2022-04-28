import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { colors } from "./utils/extendTheme";
import UserContextProvider from "./contexts/UserContext";

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserContextProvider>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</UserContextProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
