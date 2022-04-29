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
	const [hasUsers, setHasUsers] = useState(false);
	const [query, setQuery] = useState("");
	const [searchData, setSearchData] = useState("");
	// const [searchParam] = useState("users");

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/${!query ? "users" : query}`)
			.then((res) => {
				setUsers(res.data);
				setIsLoaded(true);
				setHasUsers(true);
			})
			.catch((err) => {
				setError(err);
				setIsLoaded(true);
			});

		console.log(users);
	}, [query]);

	const handleSearch = () => {
		setQuery(searchData);
		setSearchData("");
	};

	const changeSearch = (e) => {
		setSearchData(e.target.value);
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
								changeSearch={changeSearch}
								data={searchData}
								users={users}
								hasUsers={hasUsers}
								error={error}
								isLoaded={!isLoaded}
								query={query}
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
