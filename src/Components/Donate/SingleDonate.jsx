import { Box,Flex,Text,Heading, useDisclosure,Image, Tag,CircularProgress,CircularProgressLabel,Stack, Button,Link,Center,Hide } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { getDonate } from '../../Redux/AppReducer/action';
import {BsWhatsapp,BsFacebook} from "react-icons/bs"
import { FaHandHoldingHeart } from "react-icons/fa";
import DonateModal from '../../Pages/DonateModal';



const SingleDonate = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {id} = useParams()
  const donate= useSelector((store)=>store.AppReducer.donate)
  const [item,setItem] = useState({});
   
  useEffect(() => {
    if (donate?.length === 0) {
      dispatch(getDonate());
    }
  }, [donate?.length, dispatch]);

  useEffect(()=>{
    if(id){
      const temp=donate.find((donate)=>donate.id===Number(id));
      temp && setItem(temp)
    }
  },[donate,id])

  
  return (
    <Box>
       <Flex margin="auto" w={["95vw","95vw","95vw","80vw"]} gap="20px" direction={["column", "column", "column", "column", "row"]}>
         <Box w={["100%", "100%", "100%", "100%", "50%"]}>
           <Box bg={"#f3f3f3"} h="40px" borderRadius="10px">
              <Text fontSize="sm" textAlign="center" pt="8px">
              Milaap will not charge any fee on your donation to this fundraiser.
              </Text>
           </Box>
            <Heading fontSize="25px" fontWeight="500" textAlign="left" m="29px">
                {item.motivation}
            </Heading>
             <Image src={item.lozad_src} w="100%" borderRadius="3px 3px 0px 0px"
            h="450px" textAlign="left"
                 {...item.tax_ribbon ? (<Tag bg={"#9c3353"} m="10px" color="white" size="lg">{item.tax_ribbon}</Tag>):null}
             />
             <Flex m="20px 10px 10px 10px" justifyContent="space-between">
               <Flex>
               <CircularProgress value={item.progress_circle}  color="green"
            size="60px">
              <CircularProgressLabel>
              {item.progress_circle}%
            </CircularProgressLabel>
             </CircularProgress>
             <Stack textAlign="left" m="12px">
            <Text fontSize="sm">Raised</Text>
            <Stack direction="row">
            <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
              {item.raised_amount}
            </Text>
            <Text fontSize="lg" fontWeight="500">
                    of $5,00,000
              </Text>
            </Stack>
          </Stack>
        </Flex>
          <Button borderRadius="15px" m="20px" color="#9c3353" background="white">
              <Link>1465 suppporters</Link>
            </Button>
          </Flex>
          <Flex>
          <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
          <Button
            bg={"#25d366"}
            color="white"
            size="lg"
            w="250px"

            borderRadius="25px"
          >
            
            <BsWhatsapp/>
            Share
          </Button></a>
          
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <Button
            bg={"#3b5998"}
            color="white"
            w="240px"
            size="lg"
            borderRadius="25px"
            m="20px"
            mt="-2px"
          >
            <BsFacebook />
            Share
          </Button></a>
          </Flex>
          <Flex  justifyContent="space-around" m="20px">
          <Flex border={"1px solid #e0e1e3"} w="300px">
          <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
            <Text mt="10px" textAlign="center">
               {item.created_name ? item.created_name[0]:"A"}
            </Text>
          </Box>
          <Box m="20px">
                <Text fontSize="sm">Created by</Text>
                <Text>{item.created_name}</Text>
              </Box>
          </Flex>

          <Flex border={"1px solid #e0e1e3"} w="300px">
              <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
                <Text mt="12px" textAlign="center">
                  {item.created_name ? item.created_name[0] : "A"}
                </Text>
              </Box>
              <Box m="10px 5px 0px 0px">
                <Text fontSize="sm">This fundraiser will benefit</Text>
                <Text>{item.created_name}</Text>
                <Text fontSize="sm">from India, Asia</Text>
              </Box>
            </Flex>
          </Flex>

          <Box
            textAlign="left"
            m="10px"
            color="black"
            w="200px"
            padding="15px"
            borderRadius="25px">
            <Heading fontSize="xl" textAlign="center">
              Story
            </Heading>
          </Box>
          <Box w="100%" mt="30px">
            <Text textAlign="left">
            My name is {item.created_name} and I am 42 years old. I am here to raise funds for myself. I'm suffering from Breast cancer from the past few days. I am currently admitted and receiving Chemotherapy & Radiotherapy in Narayan Hospital, Bengaluru.

            Until now, I've spent about Rs. 100000. I've arranged the amount from savings.

           In the next 30 days, I need Rs.11,00,000.00 more for further treatment. Please come forward to support my cause. Any contribution will be of immense help. Do contribute and share this crowdfunding fundraiser link with your friends and family.
            </Text>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text fontSize="sm">
              If something isn't right, we will work with you to ensure no
              misuse occurs.
            </Text>
            <Box textAlign="center">
            <Link color={"#9c3353"} fontSize="sm">
              Report this cause
            </Link>
            </Box>
          </Box>
          
          <Box bg={"#fceef2"} padding="20px" borderRadius="10px">
            <Box>
              <Heading m="20px" fontSize="lg">
                Supporters
              </Heading>
            </Box>
            <Box>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px" textAlign="center">
                    {item.created_name ? item.created_name[0] : "A"}
                  </Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    {item.created_name}
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹1,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px" textAlign="center">A</Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    Anonymous
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹7,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px" textAlign="center">
                    {item.created_name ? item.created_name[0] : "A"}
                  </Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    {item.created_name}
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹1,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px" textAlign="center">A</Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    Anonymous
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹10,315
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box textAlign="center">
            <Link color={"#9c3353"} >View all supporters</Link>
            </Box>
          </Box>
           
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text>
              Create a support fundraiser page and raise donations from your
              friends to help {item.created_name}
            </Text>
            <Center>
            <Button
              m="10px"
              bg="#9c3353"
              color="white"
              w="360px"
              padding="15px"
              borderRadius="25px"
            >
              Create a support fundraiser
            </Button>
            </Center>
          </Box>

          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text textAlign="center">
            Know someone in need of funds for a medical emergency?
            </Text>
            <Center>
            <Button
              m="10px"
              color="black"
              border="1px solid #9c3353"
              w="280px"
              padding="15px"
              borderRadius="25px"
            >
              Refer to us
            </Button>
            </Center>
          </Box>

          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text>
              If something isn't right, we will work with you to ensure no
              misuse occurs.
            </Text>
            <Box textAlign="center">
            <Link color={"#9c3353"}>Report this cause</Link>
            </Box>
          </Box>
         </Box>

         <Hide below="6xl">
          <Box
            w="400px"
            h="600px"
            padding="20px"
            bg={"#f7f7f7"}
            borderRadius="10px"
          >
            <Flex justifyContent="space-between">
              <Flex justifyContent="space-between">
                <FaHandHoldingHeart />
                <Text>Donate</Text>
              </Flex>
              <Link color={"#9c3353"}>1154 Supporters</Link>
            </Flex>
            <Flex>
              <CircularProgress
                value={item.progress_circle}
                color="green"
                size="60px"
              >
                <CircularProgressLabel>
                  {item.progress_circle}%
                </CircularProgressLabel>
              </CircularProgress>
              <Stack textAlign="left" m="12px">
                <Text fontSize="sm">Raised</Text>
                <Stack direction="row">
                  <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
                    {item.raised_amount}
                  </Text>
                  <Text fontSize="lg" fontWeight="500">
                    of $5,00,000
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Box
              bg={"#ecedee"}
              m="15px 10px 25px 10px"
              borderLeft="3px solid black"
              textAlign="left"
              padding="10px"
            >
              <Text>
                Recieve
                <span> {item.tax_ribbon} </span>
                by donating to this cause.
              </Text>
            </Box>
            <Button
              m="10px"
              bg="#9c3353"
              color="white"
              w="300px"
              padding="25px"
              borderRadius="25px"
              onClick={onOpen}
            >
              Donate now
            </Button>
            <Box>
              <Text fontSize="sm">Card, Netbanking, Cheque pickups</Text>
            </Box>
            <Flex>
              <Box bg={"#9c3353"} w="100px" h="1px" m="10px"></Box>
              <Text fontSize="sm" color={"#9c3353"}>
                Or Donate using
              </Text>
              <Box bg={"#9c3353"} w="100px" h="1px" m="10px"></Box>
            </Flex>
            <Box
              backgroundImage="url(../img2.png)"
              h="180px"
              w="180px"
              margin="auto"
            >
              <Button bg={"#9c3353"} color="white" mt="60px">
                Generate QR
              </Button>
            </Box>
            <Box>
              <Text>Scan & donate with any app</Text>
            </Box>
          </Box>
        </Hide>
      </Flex>
      <DonateModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  )
}

export default SingleDonate;