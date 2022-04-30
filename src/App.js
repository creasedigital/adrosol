import { Box } from "@chakra-ui/react";
import CustomModal from "./components/CustomModal";
import Home from "./views/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeUser, setActiveUser] = useState(null);

	const fetchData = async () => {
		setIsLoaded(true);
		return axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setUsers(res.data);
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
		setUsers(filterUser);
	};

	return (
		<>
			{isModalOpen && (
				<CustomModal
					activeUser={activeUser}
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				>
					<Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								Name:{"  "}
							</Box>
							{activeUser && activeUser.name}
						</Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								Username:{"  "}
							</Box>
							{activeUser && activeUser.username}
						</Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								Email:{"  "}
							</Box>
							{activeUser && activeUser.email}
						</Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								City:{"  "}
							</Box>
							{activeUser && activeUser.address.city}
						</Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								Street:{"  "}
							</Box>
							{activeUser && activeUser.address.street}
						</Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								Phone:{"  "}
							</Box>
							{activeUser && activeUser.phone}
						</Box>
						<Box
							as="p"
							mb={2}
							color="#2D2B52"
							fontSize={{ base: "md", sm: "lg", md: "xl" }}
						>
							<Box as="span" fontWeight="700">
								Website:{"  "}
							</Box>
							{activeUser && activeUser.website}
						</Box>
					</Box>
				</CustomModal>
			)}
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
									activeUser={activeUser}
									setActiveUser={setActiveUser}
									isModalOpen={isModalOpen}
									setIsModalOpen={setIsModalOpen}
									isLoaded={isLoaded}
								/>
							}
						/>
						<Route path="about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</Box>
		</>
	);
}

export default App;
