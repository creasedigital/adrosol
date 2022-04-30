import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

const layout = ({ children }) => {
	return (
		<>
			<Box maxWidth="container.2xl" m="auto" mb={5}>
				<Header />
			</Box>
			<Box maxWidth="container.2xl" m="auto">
				{children}
			</Box>
		</>
	);
};
export default layout;
