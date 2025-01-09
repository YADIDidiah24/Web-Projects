import React, { useState } from "react";
import {Box,Button,Heading,IconButton,Image,Input,Modal,ModalBody,ModalCloseButton,ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, VStack, Flex, Stack, Badge,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FaCar, FaLocationArrow, FaTag, FaCogs, FaGasPump, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProductCard = ({ product }) => {

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const textColor = useColorModeValue("black.600", "black.200");
  const bg = useColorModeValue("white", "black.800");
  const borderColor = useColorModeValue("black.200", "black.600");

  const handleDeleteProduct = async (pid) => {
	
	const { success, message } = await deleteProduct(pid);
	if (!success) {
		toast({
			title: "Error",
			description: message,
			status: "error",
			duration: 3000,
			isClosable: true,
		});
	} else {
		toast({
			title: "Success",
			description: message,
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	}
};

const handleUpdateProduct = async (pid, updatedProduct) => {
	const { success, message } = await updateProduct(pid, updatedProduct);
	
	if (!success) {
		toast({
			title: "Error",
			description: message,
			status: "error",
			duration: 3000,
			isClosable: true,
		});
	} else {
		toast({
			title: "Success",
			description: "Product updated successfully",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	}
};

  return (
    <MotionBox
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      shadow="md"
      rounded="lg"
      overflow="hidden"
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Flex direction="row" align="center" p={6}>
        {/* Left side: Details and description */}
		<Box flex="0 0 200px">
          <Image
            src={product.image}
            alt={product.name}
            h="200px"
            w="100%"
            objectFit="cover"
			borderRadius="md"
          />
        </Box>
        <Box flex="1" ml={6}>
          <Flex justify="space-between" align="center" mb={2}>
            <Heading as="h3" size="lg" color={textColor}>
              {product.name}
            </Heading>
            <Badge colorScheme="green" fontSize="lg" px={2} py={1}>
              AED {product.price}
            </Badge>
          </Flex>
          <Text mb={4}>{product.description}</Text>

          <Stack spacing={3} mb={4}>
            <Flex alignItems="center" justifyContent="space-between" gap={1}>
              <Flex align="center">
                <FaCar color="black.500" />
                <Text ml={2} fontSize="md" color="black.500">
                  {product.make} {product.model}
                </Text>
              </Flex>
              <Flex align="center">
                <FaCalendarAlt color="black.500" />
                <Text ml={2} fontSize="sm" color="black.500">
                  {product.year}
                </Text>
              </Flex>
              <Flex align="center">
                <FaCogs color="black.500" />
                <Text ml={2} fontSize="sm" color="black.500">
                  {product.condition}
                </Text>
              </Flex>
              <Flex align="center">
                <FaGasPump color="black.500" />
                <Text ml={2} fontSize="sm" color="black.500">
                  {product.fuelType}
                </Text>
              </Flex>
              <Flex align="center">
                <FaLocationArrow color="black.500" />
                <Text ml={2} fontSize="sm" color="black.500">
                  {product.location}
                </Text>
              </Flex>
              <Flex align="center">
                <FaPhoneAlt color="black.500" />
                <Text ml={2} fontSize="sm" color="black.500">
                  {product.sellerContact}
                </Text>
              </Flex>
            </Flex>
          </Stack>

          <Flex justify="space-between" mt={4}>
            <Tooltip label="Edit Product" placement="top">
			<IconButton
			icon={<EditIcon />}
			onClick={() => {
				console.log("Edit button clicked");
				onOpen(); // for update modal
			}}
			colorScheme="blue"
			variant="outline"
			/>

            </Tooltip>
            <Tooltip label="Delete Product" placement="top">
			<IconButton
			icon={<DeleteIcon />}
			onClick={(e) => {
				e.stopPropagation();
				console.log("Delete button clicked");
				handleDeleteProduct(product._id);
			}}
			colorScheme="red"
			variant="outline"
			/>

            </Tooltip>
          </Flex>
        </Box>

      </Flex>

      
      <Modal >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
              />
              {/* Add more fields as needed */}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default ProductCard;
