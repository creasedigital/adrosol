import { Box } from "@chakra-ui/react";
import Home from "./views/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	// const [query, setQuery] = useState("");
	// const [searchParam] = useState("users");

	const fetchData = async () => {
		setIsLoaded(true);
		return axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setUsers(res.data);
				console.log(res.data);
				setIsLoaded(false);

				return res.data;
			})
			.catch((err) => {
				setError(err);
				setIsLoaded(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleSearch = async (searchData) => {
		const res = await fetchData();
		const filterUser = res.filter(
			(item) =>
				item.username.includes(searchData) || item.name.includes(searchData),
		);
		console.log(filterUser);
		setUsers(filterUser);
	};

	return (
		<Box bgColor="main.100">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								handleSearch={handleSearch}
								users={users}
								error={error}
								isLoaded={isLoaded}
							/>
						}
					/>
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}

export default App;
