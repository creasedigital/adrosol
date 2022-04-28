import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = (props) => {
	const [users, setUsers] = useState(null);

	return (
		<userContext.Provider value={users}>{props.children}</userContext.Provider>
	);
};

export default UserContextProvider;
