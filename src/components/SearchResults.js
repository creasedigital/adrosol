import { Tr, Td } from "@chakra-ui/react";

const SearchResults = (props) => {
	return (
		<>
			{props.users.map((user) => (
				<Tr>
					<Td>{user.name}</Td>
					<Td>{user.username}</Td>
					<Td>{user.email}</Td>
					<Td>{user.phone}</Td>
					<Td>{user.website}</Td>
					<Td>{user.company.name}</Td>
				</Tr>
			))}
		</>
	);
};
export default SearchResults;
