import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	IconButton,
} from "@chakra-ui/react";

const CustomModal = ({ children, setIsModalOpen, isModalOpen }) => {
	return (
		<>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ModalOverlay
					bg="rgb(45, 43, 82,0.50)"
					backdropFilter="blur(10px) hue-rotate(90deg)"
				/>
				<ModalContent>
					<IconButton
						onClick={() => setIsModalOpen(false)}
						icon={<ModalCloseButton />}
						_hover={{ backgroundColor: "#2D2B52", color: "#F7F7F7" }}
						_active={{ border: "none", outline: "none" }}
						_focus={{ border: "none", outline: "none" }}
					/>
					<ModalHeader
						color="main.900"
						fontWeight="bold"
						textAlign="center"
						fontSize="2xl"
					>
						USER INFO
					</ModalHeader>
					<ModalBody pl={8} pb={4}>
						{children}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default CustomModal;
