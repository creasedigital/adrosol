import { Box, Flex, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "./CustomButton";
const Search = (props) => {
	return (
		<Flex align="center" justify="center">
			<Flex align="center">
				<Input placeholder="search a user" mr={2} width="150px" />
				<FontAwesomeIcon icon={faSearch} onClick={props.handleSearch} />
				<Box>
					<CustomButton ml={4} onClick={props}>
						Get Users
					</CustomButton>
				</Box>
			</Flex>
		</Flex>
	);
};
export default Search;
