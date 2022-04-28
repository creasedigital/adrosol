import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasUsers, setHasUsers] = useState(false);
	const [query, setQuery] = useState("users");
	// const [searchParam] = useState("users");

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/${query}`)
			.then((res) => {
				setUsers(res.data);
				setIsLoaded(true);
			})
			.catch((err) => {
				setError(err);
				setIsLoaded(true);
			});

		console.log(users);
	}, [query]);

	const handleSearch = () => {
		console.log("I am searching");
	};
	return (
		<div>
			<Home
				handleSearch={handleSearch}
				hasUsers={hasUsers}
				error={error}
				isLoaded={!isLoaded}
			/>
		</div>
	);
}

export default App;
