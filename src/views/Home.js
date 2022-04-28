import { Box, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import Search from "../components/Search";
import TableContent from "../components/TableContent";

const Home = (props) => {
	if (props.error) {
		return <>{props.error.message}</>;
	} else if (props.isLoaded) {
		return <Spinner />;
	} else {
		return (
			<Box>
				<Box mb={5}>
					<Header />
				</Box>
				<Box mb={5}>
					<Search handleSearch={props.handleSearch} />
				</Box>
				{props.hasUsers ? (
					<Box as="p">Please Use The Search Above or Get Users</Box>
				) : (
					<Box>
						<TableContent />
					</Box>
				)}
			</Box>
		);
	}
};
export default Home;
