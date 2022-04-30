import { Tbody, Table, TableContainer, Flex } from "@chakra-ui/react";
import SearchResults from "./SearchResults";
import TableData from "./TableData";

const TableContent = ({
	users,
	setActiveUser,
	activeUser,
	isModalOpen,
	setIsModalOpen,
}) => {
	return (
		<Flex justify="center" w="100%" p="4" bgColor="main.100">
			{users.length > 0 && (
				<TableContainer maxWidth="80%" overflowX="auto" mt={10} bgColor="white">
					<Table variant="striped" boxShadow="lg" rounded="md" cursor="pointer">
						<TableData users={users} />
						<Tbody>
							<SearchResults
								setActiveUser={setActiveUser}
								activeUser={activeUser}
								isModalOpen={isModalOpen}
								setIsModalOpen={setIsModalOpen}
								users={users}
							/>
						</Tbody>
					</Table>
				</TableContainer>
			)}
			{users.length < 1 && <h1>No user was found</h1>}
		</Flex>
	);
};
export default TableContent;
