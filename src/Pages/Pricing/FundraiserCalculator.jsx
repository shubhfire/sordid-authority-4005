import {
  Box,
  Button,
  Collapse,
  Flex,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";



const FundraiserCalculator = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [query, setQuery] = useState(100000);

  const handleslider = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  return (
    <Box>
      <Box
        fontSize="22px"
        p={"20px 0 10px"}
        fontFamily="AvenirLTPro-Book"
        textAlign="center"
      >
        <h3 style={{ fontWeight: "700", fontSize: "26px" }}>
          Fundraiser goal calculator
        </h3>
        <Box color={"#5d5d5d"} fontSize="18px" p={"0 30px"}>
          A simple way to plan and achieve your fundraiser goal
        </Box>
      </Box>

      <Box
        marginLeft="34%"
        maxW="lg"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <Box p="6">
          <Flex d="flex" alignItems="baseline">
            <Box>I want to raise:</Box>
            <Spacer />
            <Flex w="70%">
              <Select
                w="32%"
                borderLeft="none"
                borderTop={"none"}
                borderRadius="0px"
                borderRight="0px"
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
              </Select>
              <div>
                <input
                  value={query}
                  name="value"
                  min="10000"
                  max="10000000"
                  onChange={handleslider}
                  type="number"
                />
              </div>
            </Flex>
          </Flex>
          <Box ml="5%" w="90%" mt={"14"}>
            <Slider
              value={query.value}
              min={10000}
              max={10000000}
              colorScheme="#e6e6e6"
              defaultValue={100000}
              onChange={(value) => setQuery({ ...query, value: value })}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} background="#9c3353" />
            </Slider>
          </Box>
        </Box>
      </Box>
      <br />
      <br />

      <Box
        marginLeft="34%"
        minHeight="100px"
        maxW="lg"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        bg={"#9c3353"}
        textAlign="center"
      >
        <Button
          onClick={onToggle}
          borderRadius="30px"
          line-height="50px"
          marginTop="40px"
          size="md"
          fontSize="20px"
          height="30px"
          width="230px"
          color="#9c3353"
          backgroundColor="#fff"
        >
          Calculate
        </Button>
      </Box>
      <br />
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#9c3353"
          rounded="md"
          shadow="md"
        >
          <Flex>
            <Box p={4} textAlign={"left"} maxW={"24%"}>
              <Box mt={"50px"}>
                <h4>​​Consider setting a goal of approx.</h4>
              </Box>
              <Box fontSize="30px">
                <h1>{+query + (+query * 2) / 100}</h1>
              </Box>
              <Box fontStyle={"italic"} fontSize={"12px"}>
                Disclaimer: This goal is the approximate amount you should
                consider setting where we assume that you would receive 70% of
                the total funds from INR contributions.
              </Box>
            </Box>
            <Spacer />
            <Box minW={"60%"}>
              <Box ml={"50%"}>See breakup</Box>
              <br />
              <br />
              <Flex marginLeft={"20%"}>
                <Box>
                  <Box>Want to raise (₹) :</Box>
                  <br />
                  <Box>Milaap platform fee (₹) :</Box>
                  <br />
                  <Box>Payment gateway charges (₹) :</Box>
                  <br />
                </Box>
                <Spacer />
                <Box>
                  <Box>{query}</Box>
                  <br />
                  <Box>0</Box>
                  <br />
                  <Box>{(query * 2) / 100}</Box>
                  <br />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FundraiserCalculator;
