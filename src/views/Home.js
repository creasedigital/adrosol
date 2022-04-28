import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Search from "../components/Search";
import TableContent from "../components/TableContent";

const hasUsers = false;

const Home = () => {
	const handleSearch = () => {
		console.log("I am searching");
	};

	return (
		<Box>
			<Box mb={5}>
				<Header />
			</Box>
			<Box mb={5}>
				<Search handleSearch={handleSearch} />
			</Box>
			{hasUsers ? (
				<Box as="p">Please Use The Search Above or Get Users</Box>
			) : (
				<Box>
					<TableContent />
				</Box>
			)}
		</Box>
	);
};
export default Home;
