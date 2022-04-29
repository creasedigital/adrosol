import { Tbody, Box, Table, TableContainer, Flex } from "@chakra-ui/react";
import SearchResults from "./SearchResults";
import TableData from "./TableData";

const TableContent = (props) => {
	return (
		<Flex justify="center" w="100%" p="4" bgColor="main.100">
			<TableContainer maxWidth="80%" overflowX="auto" mt={10} bgColor="white">
				<Table variant="striped" boxShadow="lg" rounded="md" cursor="pointer">
					<TableData users={props.users} />
					<Tbody>
						<SearchResults users={props.users} />
					</Tbody>
				</Table>
			</TableContainer>
		</Flex>
	);
};
export default TableContent;
