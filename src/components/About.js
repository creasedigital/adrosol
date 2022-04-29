import { Box, Flex } from "@chakra-ui/react";
import Layout from "../layout/Layout";

const About = () => {
	return (
		<>
			<Layout>
				<Flex
					align="center"
					justify="center"
					p={10}
					bgColor="main.100"
					boxShadow="md"
					color="main.900"
					borderRadius="10px"
				>
					This App was built for the Adroit Solutions Limited.
				</Flex>
			</Layout>
		</>
	);
};
export default About;