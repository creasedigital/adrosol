import { Box, Flex, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";

const Search = (props) => {
	console.log(props);
	return (
		<Flex align="center" justify="center">
			<Flex align="center">
				<Input
					placeholder="search a user"
					width="300px"
					mr={4}
					value={props.data}
					onChange={(e) => props.changeSearch(e)}
				/>
				<FontAwesomeIcon
					icon={faSearch}
					onClick={props.handleSearch}
					cursor="pointer"
					size="xl"
					color="main.800"
					transitionProperty="scale"
					transitionDuration="1"
					transitionTimingFunction="ease-in-out"
					transition="all 0.3s"
					_hover={{ transform: "scale(1.2)" }}
				/>
			</Flex>
		</Flex>
	);
};
export default Search;
