import { Container, Text, VStack, Button, Box, Image, Grid, useColorModeValue,Card,Avatar, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FaCarRear } from "react-icons/fa6";

const MotionBox = motion(Box);

const HomePage = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, cyan.400, blue.500)",
    "linear(to-r, purple.400, pink.500)"
  );
  const sectionBg = useColorModeValue("teal.400", "orange.700");


  return (
    <Container maxW="container.xl" py={120}>
      <VStack spacing={12}>
		<MotionBox
	initial={{ opacity: 0, y: -50 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.5 }}
	>
	<Text
		fontSize={{ base: "3xl", md: "5xl" }}
		fontWeight={"bold"}
		bgGradient={bgGradient}
		bgClip={"text"}
		textAlign={"center"}
		display="inline"
	>
		Welcome to This Motor Listings Platform{" "}
	</Text>
	<Text
		fontSize={{ base: "3xl", md: "5xl" }}
		fontWeight={"bold"}
		textAlign={"center"}
		display="inline"
	>
		🚗
	</Text>
	</MotionBox>


		<Box
		  bg={sectionBg}
          borderRadius="xl"
          p={8}
          boxShadow="xl"
          width="60%">	
			<VStack spacing={5}>
				<Text fontSize="xl" textAlign="center" color={useColorModeValue("black.600", "gray.300")}>
				Discover, buy, and sell amazing cars. Start your journey with us today!

				</Text>
				<Flex alignItems="center" justifyContent="space-between" gap={4}>
				<Box borderRadius="full"overflow="hidden" boxShadow="2xl" width="100px" height="100px" 
				display="flex"
				alignItems="center"
				justifyContent="center"
				color="orange"
				bg="grey">		
				<FaCarRear size="5em" /> 
				</Box>

				<MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Link to="/CarListings">
					<Button colorScheme="orange" size="lg" width="100%" height="60px">
						Browse All Vehicles And Motors
					</Button>
					</Link>
				</MotionBox>
          

				
				</Flex>


			</VStack>
			
		</Box>
      </VStack>
	  <Text mt="25px"fontSize="2xl" justifyContent="center" textAlign={"center"} fontWeight="bold" color={useColorModeValue("gray.700", "gray.300")}>
	  Browse a wide range of vehicles with just one click, no hidden fees, and no annoying pop-ups. Whether you're on desktop or mobile, enjoy a hassle-free search with detailed listings and stunning visuals. MotorScape is your ultimate destination for finding the perfect ride, anytime, anywhere!{" "}
				</Text>
    </Container>
  );
};

export default HomePage;
