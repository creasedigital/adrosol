import { Flex, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/adrosol@2x.png";

const Header = () => {
	return (
		<Flex bgColor="main.200" p={4} maxWidth="container.2xl">
			<Flex alignItems="center" justifyContent="space-between" m="auto" w="75%">
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
		</Flex>
	);
};
export default Header;
