import { Box, Flex, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import Search from "../components/Search";
import TableContent from "../components/TableContent";
import Layout from "../layout/Layout";

const Home = (props) => {
	if (props.error) {
		return <>{props.error.message}</>;
	} else if (props.isLoaded) {
		return <Spinner />;
	} else {
		return (
			<Box>
				<Layout>
					<Box>
						<Search
							handleSearch={props.handleSearch}
							changeSearch={props.changeSearch}
							data={props.data}
							query={props.query}
						/>
					</Box>
					{/*
					{props.hasUsers ? (

            <Flex justify="center" mt={4} as="p">
							Please Use The Search Above or Get Users
              </Flex>
              ) : (
          */}
					<Box>
						<TableContent users={props.users} />
					</Box>
				</Layout>
			</Box>
		);
	}
};
export default Home;
