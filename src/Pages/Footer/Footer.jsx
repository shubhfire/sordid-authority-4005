import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  HStack,
  SimpleGrid,
  Text,
  Link,
  Image,
  VisuallyHidden,
  chakra,
  Button,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"13px"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("#ffffff", "#9c3353")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
    
      bg={useColorModeValue("#ffffff", "gray.900")}
      color={useColorModeValue("gray.600", "gray.500")}
      mt={8}
    
    >
      <Box maxW={"98vw"} margin={"auto"} padding={"0px"} py={5}>
        <SimpleGrid
            columns={{
                base: 1,
                sm: 2,
                md: 3,
                lg: 5,
                xl: 5,
                "2xl": 5,
              }}
            rowGap={{
                base: 3,
                sm: 3,
                md: 3,
                lg: 5,
                xl: 0,
                "2xl": 0,
              }}

          
          width={"100%"}
        >
          <Stack
            align={"center"}
            
            w={"100%"}
            spacing={3}
          >
            <ListHeader>Donate towards</ListHeader>
            <Link href={"#"} fontSize={"13px"}>
              Medical
            </Link>
            <Link href={"#"} fontSize={"13px"}>
              Education
            </Link>
            <Link href={"#"} fontSize={"13px"}>
              Memorial
            </Link>
          </Stack>

          <Stack
            align={"center"}
            
            w={"100%"}
            spacing={{
                base: 1,
                sm: 2,
                md: 3,
                lg: 5,
                xl: 5,
                "2xl": 5,
            }}
          >
            <ListHeader>Milaap</ListHeader>
            <Link href={"#"} fontSize={"13px"} color="#9c3353">
              About us
            </Link>
            <Link href={"#"} fontSize={"13px"} color="#9c3353">
              Press and medial
            </Link>
            <Link href={"#"} fontSize={"13px"} color="#9c3353">
              Team
            </Link>
            <Link href={"#"} fontSize={"13px"} color="#9c3353">
              Careers
            </Link>
            <Link href={"#"} fontSize={"13px"} color="#9c3353">
              Contact
            </Link>
            <Link href={"#"} fontSize={"13px"} color="#9c3353">
              Board
            </Link>
          </Stack>

          <Stack
            align={"center"}
           
            spacing={{
                base: 1,
                sm: 2,
                md: 3,
                lg: 5,
                xl: 5,
                "2xl": 5,
            }}
            w={"100%"}
          >
            <ListHeader>Indian office address</ListHeader>
            <Link _hover={{textdecoration:"none"}} href={"#"} fontSize={"13px"}>
              Milaap Social Ventures India Pvt. Ltd.
            </Link>
            <Link _hover={{textdecoration:"none"}} href={"#"} fontSize={"13px"}>
              ClayWorks Create - building,11th KM Create Campus,Arakere
              Bannerghatta Rd, Bangalore, Karnataka, India 560076
            </Link>
            <ListHeader>Supported by</ListHeader>
            
            <HStack>
            <Image src="https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png" />
            <Image src="https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png" />
            <Image src="https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png" />
          
            </HStack>
          </Stack>

          <Box
            
            w={"100%"}
            display={"flex"}
            gap={'10px'}
            flexDirection={"column"}
            spacing={2}
            justifyContent={"space-around"}
            padding={{
                    base: "10px",
                    sm: "1.3em",
                    md: "1.2em",
                    lg: "1em",
                    xl: "1em",
                    "2xl": "1em",
                  }}
          >
            <Button
              onClick={() => navigate("/fund")}
              size={{
                base: "sm",
                sm: "sm",
                md: "sm",
                lg: "sm",
                xl: "mg",
                "2xl": "lg",
              }}
            //   fontSize="1.6vw"
              height={{
                base: "40px",
                sm: "40px",
                md: "40px",
                lg: "50px",
                xl: "50px",
                "2xl": "60px",
              }}
            //   width={{
            //     base: "3em",
            //     sm: "1em",
            //     md: "1em",
            //     lg: "1em",
            //     xl: "1em",
            //     "5xl": "2em",
            //   }}
              borderRadius={"50px"}
              background={"#9c3353"}
              color={"white"}
              variant="solid"
              _hover={{
                shadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
              }}
              _focus={{ color: "white", background: "#9c3353" }}
            //   padding={{
            //     base: "10px",
            //     sm: "1.3em",
            //     md: "1.2em",
            //     lg: "1em",
            //     xl: "1em",
            //     "2xl": "1em",
            //   }}
            >
              Start a fundraiser
            </Button>

            <HStack
              align={"center"}
              justifyContent={"center"}
              
            >
              <Link href={"#"} fontSize={"13px"} color="#9c3353">
                Pricing
              </Link>
              <Link href={"#"} fontSize={"13px"} color="#9c3353">
                Reviews
              </Link>
              <Link href={"#"} fontSize={"13px"} color="#9c3353">
                FAQs and tips
              </Link>
            </HStack>

            <HStack
              align={"center"}
              justifyContent={"center"}
              
            >
              <Link _hover={{textdecoration:"none"}} fontSize={"11px"}>
                find us on
              </Link>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaFacebookF />
              </SocialButton>
            </HStack>
          </Box>

          <Stack
            align={"start"}
            
            bg={"#f7f7f7"}
            direction="row"
            alignItems={"center"}
          >
            <Box>
              <Image src="https://i.imgur.com/0il33pr.png" alt="" />
            </Box>

            <Box
             
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Text fontSize={13}>Set up, manage and prommote your </Text>
              <Text fontSize={13}>fundraiser with Milaap app</Text>
              <ListHeader>Download Now!</ListHeader>
              <Stack
                
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                cursor={"pointer"}
                  h={"4em"}
                  w={150}
                  src="https://i.imgur.com/sZYzN62.png"
                />
                <Image
                cursor={"pointer"}
                  h={"2.9em"}
                  w={130}
                  src="https://i.imgur.com/livUBs9.png"
                />
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Box>

      {/*  */}

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')} bg="black" color="white">
        <Container
          as={Stack}
          maxW={'xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          fontSize={13}
          align={{ md: 'center' }}>
          <Text  >Security & Privacy  </Text>
            <Text> Conditions of use  </Text>
            <Text> © 2010 - 2022 milaap.org. All rights reserved.</Text>
         
        </Container>
      </Box>
    </Box>
  );
}
