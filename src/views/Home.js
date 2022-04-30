import { Box, Flex, Spinner } from "@chakra-ui/react";
import Search from "../components/Search";
import TableContent from "../components/TableContent";
import Layout from "../layout/Layout";

const Home = ({
	setActiveUser,
	activeUser,
	isModalOpen,
	setIsModalOpen,
	error,
	isLoaded,
	handleSearch,
	users,
}) => {
	if (error) {
		return (
			<Layout>
				<Box bgColor="red.200" color="red.900" textAlign="center" p={4}>
					The requested user was not found, please enter a valid username or
					name <br /> Return to{" "}
					<a href="/">
						<Box color="main.900" fontWeight="bold">
							Home
						</Box>
					</a>{" "}
				</Box>
			</Layout>
		);
	} else if (isLoaded) {
		return (
			<Box>
				<Layout>
					<Box>
						<Search handleSearch={handleSearch} />
					</Box>
					<Flex
						align="center"
						justify="center"
						p={10}
						bgColor="main.100"
						boxShadow="md"
						color="main.900"
						borderRadius="10px"
					>
						<Spinner color="#2D2B52" size="lg" />
					</Flex>
				</Layout>
			</Box>
		);
	} else {
		return (
			<Box>
				<Layout>
					<Box>
						<Search handleSearch={handleSearch} />
					</Box>
					<Box>
						<TableContent
							activeUser={activeUser}
							setActiveUser={setActiveUser}
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
							users={users}
						/>
					</Box>
				</Layout>
			</Box>
		);
	}
};
export default Home;
