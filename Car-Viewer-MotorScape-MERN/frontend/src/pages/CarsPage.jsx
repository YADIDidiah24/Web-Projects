import { Container, Text, VStack, Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const CarsPage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={10}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Current Products 🚗
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} w="70%">
                    {products.map((product) => (
                        <Box key={product._id}>
                            <ProductCard product={product} />
                        </Box>
                    ))}
                </SimpleGrid>

                {products.length === 0 && (
                    <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
                        No products found 😢{" "}
                        <Link to={"/create"}>
                            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
                                Create a product
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    );
};

export default CarsPage;
