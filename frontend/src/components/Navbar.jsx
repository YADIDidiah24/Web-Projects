import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Text,
	Input,
	InputGroup,
	InputLeftElement,
	useColorMode,
	useColorModeValue,
	Slide,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { SearchIcon, PlusSquareIcon } from "@chakra-ui/icons";
  import { IoMoon } from "react-icons/io5";
  import { LuSun } from "react-icons/lu";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  
  const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.50", "gray.900");
	const textColor = useColorModeValue("teal.600", "teal.300");
  
	return (
	  <Slide direction="down" in={true} style={{ zIndex: 10 }}>
		<Box bg={bgColor} py={4} boxShadow="md">
		  <Container maxW={"95%"} px={4}>
			<Flex
			  h={16}
			  alignItems={"center"}
			  justifyContent={"space-between"}
			  flexDir={{
				base: "column",
				sm: "row",
			  }}
			>
			  <MotionBox
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			  >
				<Text
				  fontSize={{ base: "24px", sm: "30px" }}
				  fontWeight={"bold"}
				  textTransform={"uppercase"}
				  textAlign={"center"}
				  color={textColor}
				>
				  <Link to={"/"}>MotorScape</Link>
				</Text>
			  </MotionBox>
  
			  <HStack
				spacing={6}
				alignItems={"center"}
				display={{ base: "none", sm: "flex" }}
			  >
				{["All Cars", "My Listings"].map((item) => (
				  <Link key={item} to={`/${item.toLowerCase().replace(" ", "-")}`}>
					<Button
					  variant="ghost"
					  _hover={{
						color: "teal.400",
						bg: useColorModeValue("gray.100", "gray.700"),
					  }}
					>
					  {item}
					</Button>
				  </Link>
				))}
				{/* LinkedIn Link */}
				<a
				  href="https://www.linkedin.com/in/yadidiah-kanaparthi/" // Replace with your LinkedIn profile URL
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  <Button
					variant="ghost"
					_hover={{
					  color: "teal.400",
					  bg: useColorModeValue("gray.100", "gray.700"),
					}}
				  >
					Contact Me
				  </Button>
				</a>
			  </HStack>
  
			  <InputGroup
				w={{
				  base: "100%",
				  sm: "40%",
				}}
				mt={{
				  base: 4,
				  sm: 0,
				}}
			  >
				<InputLeftElement pointerEvents="none">
				  <SearchIcon color="gray.500" />
				</InputLeftElement>
				<Input
				  type="text"
				  placeholder="Search by Make, Model, or Year..."
				  borderRadius="full"
				  variant="filled"
				  _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
				  _focus={{
					borderColor: "teal.400",
					bg: useColorModeValue("white", "gray.800"),
				  }}
				/>
			  </InputGroup>
  
			  <HStack spacing={4} alignItems={"center"} mt={{ base: 4, sm: 0 }}>
				<Link to={"/create"}>
				  <Button
					colorScheme="teal"
					leftIcon={<PlusSquareIcon fontSize={20} />}
					borderRadius="full"
					_hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
					transition="all 0.2s"
				  >
					Add Listing
				  </Button>
				</Link>
				<Button
				  onClick={toggleColorMode}
				  variant="ghost"
				  borderRadius="full"
				  _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
				>
				  {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
				</Button>
			  </HStack>
			</Flex>
		  </Container>
		</Box>
	  </Slide>
	);
  };
  
  export default Navbar;
  