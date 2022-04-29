import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
	return (
		<Button _active={{ border: "none", outline: "none" }}>
			{props.children}
		</Button>
	);
};
export default CustomButton;
