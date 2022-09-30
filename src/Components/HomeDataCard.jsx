import React from 'react'
import {Box,Tag,Text,Flex,CircularProgress, Stack,CircularProgressLabel,Image} from "@chakra-ui/react";
// import "../Styles/spin.scss";


import {useNavigate} from "react-router-dom";


export const HomeDataCard = ({data}) => {
   console.log(data)
   const navigate = useNavigate()
  //  console.log(data.tax_ribbon[0])

  return ( 
    
          <Box h="450px" w="320px" boxShadow="md" borderRadius="11px" _hover={{shadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px, rgba(0, 0, 0, 0.22) 0px 3px 3px;"}} onClick={(e) => { navigate(`/donate/${data.id}`) }} >
            
          <Image  src={data.lozad_src} alt="my_name" borderRadius="3px 3px 0px 0px" h="250px" w="100%"
          {...data.tax_ribbon ? (
          
            <Tag m="15px 0px 0px -220px" bg={"#9c3353"} color="white">
              {data.tax_ribbon}
            </Tag>
          ) : null}
        />
        <Box h="60px">
          <Text
            fontSize="15px"
            fontWeight="500"
            textAlign="left"
            m="0px 10px 10px 10px"
          >
            {data.motivation}
          </Text>
        </Box>
           <Flex m="20px 10px 10px 10px">
             <CircularProgress value={data.progress_circle}  color="green"
            size="50px">
              <CircularProgressLabel>
              {data.progress_circle}%
            </CircularProgressLabel>
             </CircularProgress>
             <Stack textAlign="left" ml="10px">
            <Text fontSize="xs">Raised</Text>
            <Text fontSize="md" fontWeight="500">
              {data.raised_amount}
            </Text>
          </Stack>
          <Stack
            ml="10px"
            textAlign="left"
            borderLeft={"3px solid #ecedee"}
            paddingLeft="10px"
          >
            <Text fontSize="xs">Created by</Text>
            <Text fontSize="sm">{data.created_name}</Text>
          </Stack>
           </Flex>
           <Box
          bg={"#ecedee"}
          m="15px 10px 25px 10px"
          borderLeft="3px solid black"
          textAlign="left"
        >
          <Text fontSize="13px" fontWeight="300" ml="10px">
            For every {data.status_msg ? data.status_msg : "$100"} you donate, Milaap will contribute $5 on your behalf.
          </Text>
        </Box>
          </Box>

  )
}

