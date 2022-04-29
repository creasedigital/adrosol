import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

const layout = (props) => {
	return (
		<>
			<Box mb={5}>
				<Header />
			</Box>
			<Box maxWidth="container.2xl" m="auto">
				{props.children}
			</Box>
		</>
	);
};
export default layout;
