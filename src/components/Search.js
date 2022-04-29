import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import { useState } from "react";

const Search = (props) => {
	const [searchData, setSearchData] = useState("");

	return (
		<Flex align="center" justify="center">
			<Flex align="center">
				<Input
					placeholder="search by username"
					width={{ base: "200px", sm: "300px", md: "450px" }}
					mr={4}
					value={searchData}
					onChange={(e) => setSearchData(e.target.value)}
					_focus={{ border: "none", outline: "4px solid #2D2B52" }}
				/>
				<IconButton
					aria-label="Search Users"
					icon={
						<FontAwesomeIcon
							icon={faSearch}
							onClick={() => props.handleSearch(searchData)}
							// onClick={props.handleSearch}
							cursor="pointer"
							size="xl"
							color="main.800"
						/>
					}
					transitionProperty="scale"
					transitionDuration="1"
					transitionTimingFunction="ease-in-out"
					transition="all 0.3s"
					_hover={{ transform: "scale(1.2)" }}
					_active={{ border: "none", outline: "none" }}
					_focus={{ border: "none", outline: "none" }}
				/>
			</Flex>
		</Flex>
	);
};
export default Search;
