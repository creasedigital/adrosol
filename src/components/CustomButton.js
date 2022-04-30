import { Button } from "@chakra-ui/react";

const CustomButton = ({ user, setIsModalOpen, setActiveUser }) => {
	return (
		<Button
			onClick={() => {
				setIsModalOpen(true);
				setActiveUser(user);
			}}
			p={2}
			bgColor="#2D2B52"
			color="#F7F7F7"
			_active={{ border: "none", outline: "none" }}
			_focus={{ border: "none", outline: "none" }}
			_hover={{
				backgroundColor: "#F7F7F7",
				color: "#2D2B52",
				border: "1px solid #2D2B52",
			}}
		>
			View User
		</Button>
	);
};
export default CustomButton;
