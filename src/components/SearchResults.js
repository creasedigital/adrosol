import { Tr, Td } from "@chakra-ui/react";

const SearchResults = (props) => {
	return (
		<>
			{props.users.map((user) => (
				<Tr key={user.id}>
					<Td>{user.id}</Td>
					<Td>{user.name}</Td>
					<Td>{user.username}</Td>
					<Td>{user.email}</Td>
					<Td>{user.address.street}</Td>
					<Td>{user.phone}</Td>
					<Td>{user.website}</Td>
					<Td>{user.company.name}</Td>
				</Tr>
			))}
		</>
	);
};
export default SearchResults;
