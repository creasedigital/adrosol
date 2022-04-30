import { Tr, Td } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const SearchResults = ({ users, setIsModalOpen, setActiveUser }) => {
	return (
		<>
			{users.map((user) => (
				<Tr key={user.id}>
					<Td>{user.id}</Td>
					<Td>{user.name}</Td>
					<Td>{user.username}</Td>
					<Td>{user.email}</Td>
					<Td>{user.address.street}</Td>
					<Td>{user.phone}</Td>
					<Td>{user.website}</Td>
					<Td>{user.company.name}</Td>
					<Td>
						<CustomButton
							setIsModalOpen={setIsModalOpen}
							setActiveUser={setActiveUser}
							user={user}
						/>
					</Td>
				</Tr>
			))}
		</>
	);
};
export default SearchResults;
