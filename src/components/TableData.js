import { Thead, Tr, Th } from "@chakra-ui/react";

const TableData = () => {
	return (
		<>
			<Thead bgColor="main.900">
				<Tr>
					<Th color="white">Name</Th>
					<Th color="white">Username</Th>
					<Th color="white">Email</Th>
					<Th color="white">Phone</Th>
					<Th color="white">Website</Th>
					<Th color="white">Company Name</Th>
				</Tr>
			</Thead>
		</>
	);
};
export default TableData;
