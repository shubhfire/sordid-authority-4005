import logo from "./logo.svg";
import "./ChooseMilaap.css";
import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const ChooseMilaap = () => {
  return (
    <Box
      p="4"
      backgroundImage="url('https://assets.milaap.org/packs/_/assets/images/pricing/green-bg-a83bd3814ffa117260a22716f7a153c7.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="100%"
    >
      <Box
        fontSize="30px"
        fontFamily={"AvenirLTPro-Medium"}
        fontWeight="400"
        textAlign="center"
      >
        <h3>Why choose Milaap?</h3>
        <br />
      </Box>
      <Flex w="80%" marginLeft="200px" justifyContent="space-around">
        <Box w="40%" maxH="800px">
          <Box
            h="120px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="5px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682001/production/entity_details/milaap_page/11594/svgg_1631682000.jpg"
                  />
                </Box>
                <Box>
                  {" "}
                  <span className="chooseName">
                    Dedicated relationship manager
                  </span>
                </Box>
              </Flex>
            </Box>
            <Box className="des">
              Dedicated relationship manager to address all your fundraising
              needs. Receive help and support anytime, anywhere
            </Box>
          </Box>
          <br />
          {/* //className="App-logo" */}
          <Box marginLeft="-200px" marginTop="25%" marginBottom={"-4"}>
            {" "}
            <header>
              <Image w="55%" h="300px" src={logo} alt="logo" />
            </header>
          </Box>
        </Box>
        <Spacer />
        <Box width="25%" borderColor="#e0e1e3">
          <Box
            h="150px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="10px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682004/production/entity_details/milaap_page/11594/path0_1631682003.jpg "
                  />
                </Box>
                <Box>
                  <span className="chooseName">Simple setup</span>
                </Box>
              </Flex>
            </Box>
            <Box className="des">
              Set up your fundraiser effortlessly, in 3 simple steps
            </Box>
          </Box>
          <br />

          <Box
            h="150px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="5px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682010/production/entity_details/milaap_page/11594/Group_759_1631682009.jpg"
                    alt="Easy fund withdrawal"
                  />
                </Box>
                <Box>
                  <span className="chooseName">Easy fund withdrawal</span>
                </Box>
              </Flex>
            </Box>
            <Box className="des">
              Provide all the necessary documents (government ID proof, bank
              account details etc.), request transfer and withdraw funds safely
              in a few simple steps
            </Box>
          </Box>
          <br />
          <Box
            h="150px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="5px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682016/production/entity_details/milaap_page/11594/path0-1_1631682016.jpg"
                    alt="24X7 Exper support"
                  />
                </Box>
                <Box>
                  <span className="chooseName">24X7 Exper support</span>
                </Box>
              </Flex>
            </Box>

            <Box className="des">
              Expert support at your service, whenever you need
            </Box>
          </Box>
          <Button
            borderRadius="30px"
            line-height="50px"
            marginTop="20px"
            size="md"
            fontSize="20px"
            height="50px"
            width="230px"
            color="#fff"
            backgroundColor="#9c3353"
            colorScheme='#fff'
          >
            Start a fundraiser
          </Button>
        </Box>
        <Spacer />
        <Box width="25%" borderColor="#e0e1e3">
          <Box
            h="150px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="10px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682008/production/entity_details/milaap_page/11594/path0-2_1631682007.jpg"
                    alt="smart dashboard"
                  />
                </Box>
                <Box>
                  <span className="chooseName">smart dashboard</span>
                </Box>
              </Flex>
            </Box>
            <Box className="des">
              Manage all your fundraiser details (withdrawals, donations,
              receipts and much more) with the interactive dashboard
            </Box>
          </Box>
          <br />

          <Box
            h="150px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="5px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682014/production/entity_details/milaap_page/11594/path0-3_1631682013.jpg"
                    alt="Safety and security"
                  />
                </Box>
                <Box>
                  <span marginTop="6" className="chooseName">
                    Safety and security
                  </span>
                </Box>
              </Flex>
            </Box>
            <Box className="des">
              The most secure encryption technology to keep your funds safe ​
            </Box>
          </Box>
          <br />
          <Box
            h="150px"
            border="2px dashed"
            bg="#fff"
            borderColor="#e0e1e3"
            borderRadius="5px"
          >
            <Box borderBottom="2px dashed" bg="#fff" borderColor="#e0e1e3">
              <Flex>
                <Box className="cardHeading">
                  <Image
                    className="choose"
                    src="https://cimages.milaap.org/milaap/image/upload/v1631682019/production/entity_details/milaap_page/11594/path0-4_1631682018.jpg"
                    alt="All-in-one mobile app"
                  />
                </Box>
                <Box>
                  <span className="chooseName">All-in-one mobile app</span>
                </Box>
              </Flex>
            </Box>
            <Box className="des">
              New mobile app to keep your fundraiser needs at your fingertips
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ChooseMilaap;
