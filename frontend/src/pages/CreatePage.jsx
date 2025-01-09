import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		make: "",
		model: "",
		year: "",
		price: "",
		mileage: "",
		image: "",
		color: "",
		description: "",
		fuelType: "",
		transmission: "",
		condition: "",
		location: "",
		sellerContact: "",
	  });
	
	  const toast = useToast();
	  const { createProduct } = useProductStore();
	
	  const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
		  toast({
			title: "Error",
			description: message,
			status: "error",
			isClosable: true,
		  });
		} else {
		  toast({
			title: "Success",
			description: message,
			status: "success",
			isClosable: true,
		  });
		}
		setNewProduct({
		  make: "",
		  model: "",
		  year: "",
		  price: "",
		  mileage: "",
		  image: "",
		  color: "",
		  description: "",
		  fuelType: "",
		  transmission: "",
		  condition: "",
		  location: "",
		  sellerContact: "",
		});
	  };
	
	  return (
		<Container maxW={"container.sm"}>
		  <VStack spacing={8}>
			<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
			  Create New Car Product
			</Heading>
	
			<Box
			  w={"full"}
			  bg={useColorModeValue("white", "gray.800")}
			  p={6}
			  rounded={"lg"}
			  shadow={"md"}
			>
			  <VStack spacing={4}>
				<Input
				  placeholder="Make"
				  name="make"
				  value={newProduct.make}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, make: e.target.value })
				  }
				/>
				<Input
				  placeholder="Model"
				  name="model"
				  value={newProduct.model}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, model: e.target.value })
				  }
				/>
				<Input
				  placeholder="Year"
				  name="year"
				  type="number"
				  value={newProduct.year}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, year: e.target.value })
				  }
				/>
				<Input
				  placeholder="Price"
				  name="price"
				  type="number"
				  value={newProduct.price}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, price: e.target.value })
				  }
				/>
				<Input
				  placeholder="Mileage"
				  name="mileage"
				  type="number"
				  value={newProduct.mileage}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, mileage: e.target.value })
				  }
				/>
				<Input
				  placeholder="Image URL"
				  name="image"
				  value={newProduct.image}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, image: e.target.value })
				  }
				/>
				<Input
				  placeholder="Color"
				  name="color"
				  value={newProduct.color}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, color: e.target.value })
				  }
				/>
				<Input
				  placeholder="Description"
				  name="description"
				  value={newProduct.description}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, description: e.target.value })
				  }
				/>
				<Input
				  placeholder="Fuel Type"
				  name="fuelType"
				  value={newProduct.fuelType}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, fuelType: e.target.value })
				  }
				/>
				<Input
				  placeholder="Transmission"
				  name="transmission"
				  value={newProduct.transmission}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, transmission: e.target.value })
				  }
				/>
				<Input
				  placeholder="Condition"
				  name="condition"
				  value={newProduct.condition}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, condition: e.target.value })
				  }
				/>
				<Input
				  placeholder="Location"
				  name="location"
				  value={newProduct.location}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, location: e.target.value })
				  }
				/>
				<Input
				  placeholder="Seller Contact"
				  name="sellerContact"
				  value={newProduct.sellerContact}
				  onChange={(e) =>
					setNewProduct({ ...newProduct, sellerContact: e.target.value })
				  }
				/>
				<Button colorScheme="blue" onClick={handleAddProduct} w="full">
				  Add Car Product
				</Button>
			  </VStack>
			</Box>
		  </VStack>
		</Container>
	  );
	};
export default CreatePage;
