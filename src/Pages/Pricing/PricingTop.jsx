import ptopLogo from "./ptopLogo.svg";
import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const PricingTop = () => {
  return (
    <div margin="40px">
      <Flex
        p="20px"
        fontFamily="AvenirLtPro-Mediaum"
        backgroundColor="#9c3353;"
        minHeight="400px"
        width="100%"
        justifyContent="start"
      >
        <Box p="4" minWidth="40%" marginLeft="-30px">
          <Image src={ptopLogo} alt="logo" />
        </Box>
        <Spacer />

        <Box
          textAlign="left"
          p="4"
          fontSize="30px"
          color="#fff"
          fontFamily="AvenirLtPro-Mediaum"
          //   verticalAlign="center"
        >
          <h2>FREE FUNDRAISING FOR ALL!</h2>
          <h3>
            <Flex borderBottom="1px" maxWidth="91%" gap="20px">
              <Box>
                <Image
                  maxWidth="80px"
                  src="https://assets.milaap.org/assets/pricing/zero-percent-0f51fe2fc8b6c470bf9419fbe514c51c38d59ce1f447a40c5f3723d28d5e6901.png"
                  alt="zero"
                />
              </Box>
              <Box marginTop="6">
                <span>PLATFROM FEES</span>
              </Box>
            </Flex>
          </h3>
          <Box
            fontSize="24px"
            color="#fff"
            padding="15px 0"
            width="91%"
            borderBottom="1px"
            lineHeight="37px"
            fontFamily="AvenirLtPro-Mediaum"
          >
            <h3>RAISE MAXIMUM FUNDS FOR THE CAUSE YOU CARE ABOUT</h3>
          </Box>
          <Box boxShadow={"0 0 6px 0 rgb(156 51 83 / 20%)"}>
            <Button
              borderRadius="30px"
              line-height="50px"
              marginTop="20px"
              size="md"
              fontSize="20px"
              height="50px"
              width="230px"
              color="#9c3353"
              backgroundColor="#fff"
            >
              Start a fundraiser
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default PricingTop;
