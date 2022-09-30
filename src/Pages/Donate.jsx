import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import RefineSearch from "../Components/Donate/RefineSearch";

import { useSelector } from "react-redux";
import DonateItem from "../Components/Donate/DonateItem";


const Donate = () => {
  const isLoading = useSelector(state => state.AppReducer.isLoading)
  return (
    <Box>
      {isLoading ? (
        <div className="spin">
          <div>
            <Spinner color="red.700" size="xl" speed="0.6s" thickness="5px" />
          </div>
          <p>Please wait...</p>
        </div>
      ) : (
        <Flex direction="column">
          <Box position="absolute" right="250px" mt="20px" border="1px solid #9c3353" borderRadius="25px">
            <RefineSearch />

          </Box>
          <DonateItem />
        </Flex>
      )}
    </Box>
  );
};

export default Donate;
