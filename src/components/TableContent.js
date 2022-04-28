import { Tbody, Box, Table, TableContainer, Flex } from "@chakra-ui/react";
import SearchResults from "./SearchResults";
import TableData from "./TableData";

const TableContent = () => {
	return (
		<Flex justify="center" w="100%">
			<TableContainer maxWidth="80%" overflowX="auto">
				<Table variant="unstyled" colorScheme="main.400">
					<TableData />
					<Tbody>
						<SearchResults />
					</Tbody>
				</Table>
			</TableContainer>
		</Flex>
	);
};
export default TableContent;
