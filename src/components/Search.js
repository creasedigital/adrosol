import { Flex, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = (props) => {
	return (
		<Flex>
			<Flex>
				<Input placeholder="search a user" />
				<FontAwesomeIcon icon={faSearch} onClick={props.handleSearch} />
			</Flex>
		</Flex>
	);
};
export default Search;
