import { Box, Flex, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import Search from "../components/Search";
import TableContent from "../components/TableContent";
import Layout from "../layout/Layout";
// import { Link } from "react-router-dom";

const Home = (props) => {
	if (props.error) {
		return (
			<Layout>
				<Box bgColor="red.200" color="red.900" textAlign="center" p={4}>
					The requested user was not found, please enter a valid username or{" "}
					<br /> Return to{" "}
					<a href="/">
						<Box color="main.900" fontWeight="bold">
							Home
						</Box>
					</a>{" "}
				</Box>
			</Layout>
		);
	} else if (props.isLoaded) {
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
				</Layout>
			</Box>
		);
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
