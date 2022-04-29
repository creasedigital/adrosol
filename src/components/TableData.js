import { Thead, Tr, Th } from "@chakra-ui/react";

const TableData = (props) => {
	return (
		<>
			<Thead bgColor="main.900">
				<Tr>
					{
						Object.keys(props.users[0]).map((title) => (
							<Th color="white" key={title.id}>
								{title}
							</Th>
						))
						/*
				<Th color="white">Name</Th>
				<Th color="white">Username</Th>
				<Th color="white">Email</Th>
				<Th color="white">Phone</Th>
				<Th color="white">Website</Th>
				<Th color="white">Company Name</Th>
			*/
					}
				</Tr>
			</Thead>
		</>
	);
};
export default TableData;
