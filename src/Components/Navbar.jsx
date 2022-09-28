import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Switch from "react-switch";

const textSwitch = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",

  fontSize: 15,
  color: "white",
  paddingRight: "2",
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checke, setcheck] = useState(false);
  const navigate = useNavigate();

  let activeStyle = {
    backgroundColor: "#9c3353",
    height: "100%",
    width: "object-fit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    fontWeight: "400",
    fontSize: "16px",
    color: "white",
  };

  let active4 = {
    // backgroundColor:"#9c3353",
    height: "100%",
    width: "object-fit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    fontWeight: "500",
    fontSize: "16px",
  };

  // #9c3353

  return (
    <>
      <Box
        bg={useColorModeValue("#ffffff", "#ffffff")}
        px={0}
        boxShadow="lg"
        pos="sticky"
        top={"0px"}
        zIndex="10000"
        h={{ sm: "3.5em", md: "3.8em", lg: "4.6em", xl: "4.7em", "2xl": "5em" }}
        w={"100%"}
      >
        <Flex
          h={{
            sm: "3.5em",
            md: "3.8em",
            lg: "4.6em",
            xl: "4.7em",
            "2xl": "5em",
          }}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} w={"53%"}>
            <Box>
              {" "}
              <Image
                onClick={() => navigate("/")}
                style={{marginLeft: "24px",cursor:"pointer"}}
                h={10}
                src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
                alt="Dan Abramov"
              />
            </Box>
            <HStack
              w={"80%"}
              as={"nav"}
              spacing={2.5}
              display={{ base: "none", md: "flex" }}
              h={{
                sm: "3.5em",
                md: "3.8em",
                lg: "4.6em",
                xl: "4.7em",
                "2xl": "5em",
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : active4)}
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/donate"
              >
                Donate
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/fund"
                width="80px"
              >
                Lend
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/pricing"
              >
                Pricing
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/contactUs"
              >
                Contact us
              </NavLink>

              <Box
                h={10}
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                style={{ marginLeft: "9px" }}
              >
                {/* <Switch  id='email-alerts'  /> */}
                <Switch
                  height={25}
                  width={75}
                  handleDiameter={31}
                  boxShadow="1px 2px 2px grey"
                  onChange={() => setcheck(!checke)}
                  checked={checke}
                  onColor={"#9c3353"}
                  offColor={"#9c3353"}
                  checkedIcon={<div style={textSwitch}>INR</div>}
                  uncheckedIcon={<div style={textSwitch}>USD</div>}
                />
              </Box>
            </HStack>
          </HStack>

          <Flex
            alignItems={"center"}
            w={{
              sm: "10em",
              md: "15em",
              lg: "25em",
              xl: "32em",
              "2xl": "34em",
            }}
            justifyContent="space-around"
          >
            <Button
              onClick={() => navigate("/fund")}
              width={{base:"130px", sm: "180px", md: "180px", lg: "190px", xl: "190px", "2xl": "200px" }}
              height={{base:"30px", sm: "40px", md: "40px", lg: "50px", xl: "50px", "2xl": "50px" }}
              fontSize={{base:"9px", sm: "11px", md: "15px", lg: "16px", xl: "16px", "2xl": "17px" }}
              fontWeight={"semibold"}
              borderRadius={"50px"}
              style={{letterSpacing: "1.6px"}}
              background={"#9c3353"}
              color={"white"}
              variant="solid"
              _hover={{
                shadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
              }}
              _focus={{ color: "white", background: "#9c3353" }}
              
            >
              Start a fundraiser
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19.5"
                    cy="19.5"
                    r="18.75"
                    fill="white"
                    stroke="#9C3352"
                    stroke-width="1.5"
                  ></circle>
                  <path
                    d="M22.5759 20.4688C21.4107 20.4688 20.8884 21.125 19 21.125C17.0714 21.125 16.5491 20.4688 15.3839 20.4688C12.4107 20.4688 10 22.9707 10 26.0059V27.0312C10 28.1387 10.8438 29 11.9286 29H26.0714C27.1161 29 28 28.1387 28 27.0312V26.0059C28 22.9707 25.5491 20.4688 22.5759 20.4688ZM26.0714 27.0312H11.9286V26.0059C11.9286 24.0371 13.4554 22.4375 15.3839 22.4375C15.9866 22.4375 16.9107 23.0938 19 23.0938C21.0491 23.0938 21.9732 22.4375 22.5759 22.4375C24.5045 22.4375 26.0714 24.0371 26.0714 26.0059V27.0312ZM19 19.8125C22.1741 19.8125 24.7857 17.1875 24.7857 13.9062C24.7857 10.666 22.1741 8 19 8C15.7857 8 13.2143 10.666 13.2143 13.9062C13.2143 17.1875 15.7857 19.8125 19 19.8125ZM19 9.96875C21.0893 9.96875 22.8571 11.7734 22.8571 13.9062C22.8571 16.0801 21.0893 17.8438 19 17.8438C16.8705 17.8438 15.1429 16.0801 15.1429 13.9062C15.1429 11.7734 16.8705 9.96875 19 9.96875Z"
                    fill="#9C3352"
                  ></path>
                </svg>
              </MenuButton>
              <MenuList display={"flex"}>
                <MenuItem w={"50%"} onClick={() => navigate("/login")}>
                  Login
                </MenuItem>
                <MenuDivider />
                <MenuItem w={"50%"} onClick={() => navigate("/register")}>
                  Register
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box bg="white" pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : active4)}
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/donate"
              >
                Donate
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/fund"
              >
                Lend
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/pricing"
              >
                Pricing
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : active4)}
                to="/contactUs"
              >
                Contact us
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
