import { Flex, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/adrosol@2x.png";

const Header = () => {
	return (
		<Flex
			bgColor="main.200"
			w="100%"
			alignItems="center"
			justifyContent="space-between"
			p={4}
		>
			<Flex>
				<Link to="/">
					<Image src={Logo} alt="adrosol logo" h="60px" />
				</Link>
			</Flex>
			<Link to="/about">
				<Box as="p" fontWeight="bold" pr={4}>
					About
				</Box>
			</Link>
		</Flex>
	);
};
export default Header;
