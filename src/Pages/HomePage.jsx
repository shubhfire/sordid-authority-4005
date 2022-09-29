// import React from 'react'

import {
  Button,
  Flex,
  Heading,
  Image,
  GridItem,
  Grid,
  Box,
  Stack,
  Text,
  Spacer,
  InputGroup,
  Input,
  InputRightElement,
  useBreakpointValue,
  SimpleGrid
} from '@chakra-ui/react';
import { AiFillRightCircle,ImSearch } from 'react-icons/ai';
import { HiSearch } from 'react-icons/hi';
import { BsDiamondFill,BsSuitDiamondFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getinTheHomeData } from '../Redux/AppReducer/action';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { HomeDataCard } from '../Components/HomeDataCard'
const HomePage = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const storedata = useSelector((store)=>store.AppReducer.homeData)
// console.log(storedata)

const images = [
  "https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg",
  "https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg",
  "https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg",
  "https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg",
]

React.useEffect(() => {
  
  dispatch(getinTheHomeData(1))

  return () => {
   
  }
}, [])


   
   const [imgbutn1,setImgbtn1]=useState(false) 
   const [imgbutn2,setImgbtn2]=useState(false) 
   const [imgbutn3,setImgbtn3]=useState(false) 
   const [imgbutn4,setImgbtn4]=useState(false)   
    
   const handleingBtn1 = () =>{
    dispatch(getinTheHomeData("medical"))
    setImgbtn1(true)
    setImgbtn3(false)
    setImgbtn2(false)
    setImgbtn4(false)
   }

   const handleingBtn2 = () =>{
    dispatch(getinTheHomeData("education"))
    setImgbtn1(false)
    setImgbtn3(true)
    setImgbtn2(false)
    setImgbtn4(false)
   }

   const handleingBtn3 = () =>{
    dispatch(getinTheHomeData("memorials"))
    setImgbtn1(false)
    setImgbtn3(false)
    setImgbtn2(true)
    setImgbtn4(false)
   }

  return (
    <Box>
    <Box  backgroundPosition="right"
     backgroundImage={{md:"url('https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg')", 
     lg:"url('https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg')",
    xl:"url('https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg')"
    }}
    
    backgroundRepeat="no-repeat">
      <Box shadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;" pr={5} pl={5} borderRadius={6} bg="#ffffff"  display={{base:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}} alignItems="center" justifyContent="center"  h={"50px"} w={"550px"} m="auto"  mt={2} >
      
      <Text justify={"space-between"} fontSize="19px" fontWeight="500" >Fundraising just got a fun new makeover with Milaap360! </Text> <Spacer /> <AiFillRightCircle size={"25px"} color="#9c3353" />
      

  </Box>
    <Stack   direction={{ base: 'column', md: 'row' }} >
     
   
       
      <Flex p={8} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={8} w={"full"} maxW={'lg'} >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              fontWeight="300"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                
                left: 0,
                
                zIndex: -1,
              }}>
             Milaap
            </Text>
            <br />{' '}
           {' '}
          </Heading>
          <Text color="#5d5d5d" fontSize= {{base:"",sm:"18px",md:"20px",lg:"20px",xl:"22px","2xl":""}}>
            Free Crowdfunding for India
            </Text>
          <Text color="#2f2121" fontSize={{ base: 'sm', lg: '18px' }} >
          Raise funds online for medical emergencies and social causes
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              fontSize={{base:"13px",sm:"18px",md:"17px",lg:"25px",xl:"","2xl":""}}
              onClick={()=> navigate('/fund')}
              width={{base:"70%",lg:"80%"}}
              h={{base:"8vh",lg:"8vh"}}
              bg={'#9c3353'}
              color={'white'}
              _hover={{
                bg: '#9c3353',
                shadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"
              }}>
             Start a fundraiser - it's FREE
            </Button>
         
            
           
          </Stack>


          <Box 
          height={{base:"120px",sm:"120px",md:"130px",lg:"140px",xl:"150px","2xl":""}} 
              display="flex"
         w= {{base:"300px",sm:"350px",md:"400px",lg:"450px",xl:"550px","2xl":""}}
          >
            
            <Box borderRight="1px solid #bf9db0" height={{base:"60px",sm:"60px",md:"70px",lg:"70px",xl:"70px","2xl":"80px"}} w={"30%"} pl={2} >
            <Text fontSize={{base:"15px",sm:"15px",md:"19px",lg:"20px",xl:"","2xl":""}}> 702,000 +</Text>
                 <Text fontSize={{base:"12px",sm:"12px",md:"16px",lg:"16",xl:"","2xl":""}} >Fundraisers
</Text>
            </Box>


            <Box borderRight="1px solid #bf9db0"  height={{base:"60px",sm:"60px",md:"70px",lg:"70px",xl:"70px","2xl":"80px"}} w={"30%"} pl={2} >
            <Text fontSize={{base:"15px",sm:"15px",md:"19px",lg:"19px",xl:"19px","2xl":""}}>Rs. 2117 Crores +</Text>
                 <Text fontSize={{base:"12px",sm:"12px",md:"16px",lg:"16",xl:"16px","2xl":""}} >Raised</Text>
            </Box>


            <Box   height={{base:"60px",sm:"60px",md:"70px",lg:"70px",xl:"70px","2xl":"80px"}} w={"30%"} pl={2} >
            <Text fontSize={{base:"15px",sm:"15px",md:"19px",lg:"20px",xl:"20px","2xl":""}}> 84 lakh +</Text>
                 <Text fontSize={{base:"12px",sm:"12px",md:"16px",lg:"16",xl:"16px","2xl":""}} >Donations</Text>
            </Box>
            
            
            
             </Box>


        </Stack>

         

         

          
      </Flex>
      <Flex flex={1}   >
        
      </Flex>
    </Stack>

    


    </Box>



{/* data sort start here */}


    <Box  w={"full"}  mt={10} >



{/* Heading tag line */}

  <Box mb={7}>

  <Text align="center" fontWeight={540} fontSize={{base:"19px",sm:"21px",md:"23px",lg:"26px",xl:"28px","2xl":""}} >Thousands are fundraising online on Milaap</Text>
  </Box>
{/* Heading tag line */}


{/* Diamond disign */}

    <Box w={"30%"} align="center" m={"auto"} h={20} display="flex" alignItems="center" justifyContent="space-between" >

    <Box h={0.3} w={"33%"} bg={"grey"} ></Box>
    <BsSuitDiamondFill color={"#b0869e"} />
  <BsDiamondFill size={"25px"} color={"#9c3353"}/>
  <BsSuitDiamondFill color={"#b0869e"}  />
  <Box h={0.3} w={"33%"} bg={"grey"} ></Box>
 

    </Box>
{/* Diamond disign */}



{/* input box  */}
  
  <Box w={{base:"80%",sm:"80%",md:"80%",lg:"60%",xl:"70%","2xl":"70%"}} m={"auto"}>
  <InputGroup size='md' >
      <Input
      pr="4.5rem"
      border="1px solid #9c3353"
      
       focusBorderColor='#9c3353'
        type={'text'}
        placeholder='Search by fundraiser name, title,location,cause or other keywords'
        borderRadius="50px"
      />
      <InputRightElement width='4.5rem'>
        <Button onClick={()=>navigate('/donate')} h='2.5rem' w={"100%"} borderRightRadius="50px" bg={"#9c3353"} color="white"  >
         <HiSearch/>

        </Button>
      </InputRightElement>
    </InputGroup>
    </Box>

    {/* input box  */}


    {/* sorting buttonns and data display */}
  
  <Box mt={"100px"}>

   {/* sorting buttons */}
   {/* const [imgbutn,setImgbtn]=useState(false)  */}

    <Box margin={'auto'}  display="flex" flexDirection={'row'} padding={{base:"10px",sm:"20px",md:"20px",lg:"20px",xl:"25px","2xl":"25px"}} justifyContent={'space-between'} gap={{base:"0px",sm:"20px",md:"20px",lg:"20px",xl:"25px","2xl":"25px"}} w={{base:"90%",sm:"70%",md:"80%",lg:"60%",xl:"50%","2xl":"50%"}}>

        <Box onClick={()=> handleingBtn1() }   shadow="#9c3353 0px 5px 15px" padding={{base:"6px 10px",sm:"15px 20px",md:"20px 30px",lg:"20px 30px",xl:"20px 30px","2xl":"20px 30px"}} boxSizing='border-box' display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"}  bg={`${imgbutn1?"#9c3353":"white"}`}  border="1px solid black">
          <Image width={{base:"60%",sm:"60%",md:"70%",lg:"80%",xl:"80%","2xl":"60%"}} value="medical"  src={`${imgbutn1?'https://assets.milaap.org/assets/home/medical-transparent-icon-a9adecab3167c41605eb773b11fdc423c7e27cd3918e50cd0aa0b1781640e748.png':"https://assets.milaap.org/assets/home/medical-icon-22eba5bcdf629bb6e4244cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png"}`} />
          <Text color={`${imgbutn1?"white":"black"}`} >Medical</Text>
        </Box>

        <Box onClick={()=>handleingBtn3()  }  shadow="#9c3353 0px 5px 15px" padding={{base:"6px 10px",sm:"15px 20px",md:"20px 30px",lg:"20px 30px",xl:"20px 30px","2xl":"20px 30px"}} boxSizing='border-box' display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"}  bg={`${imgbutn2?"#9c3353":"white"}`}  border="1px solid black">
          <Image width={{base:"60%",sm:"60%",md:"70%",lg:"80%",xl:"80%","2xl":"60%"}}  src={`${imgbutn2?'https://assets.milaap.org/assets/home/memorial-transparent-icon-853c64d1299d9d300554a4bce17164bcf7e9ca3af8e99981ce23cf8822e8624f.png':"https://assets.milaap.org/assets/home/memorial-icon-d649fd768074bb5124e32420e406bb00b1524ee5d277747db46964e82ad914bb.png"}`} />
          <Text color={`${imgbutn2?"white":"black"}`} >Memorials</Text>
        </Box>

        <Box onClick={()=> handleingBtn2() } shadow="#9c3353 0px 5px 15px" padding={{base:"6px 10px",sm:"15px 20px",md:"20px 30px",lg:"20px 30px",xl:"20px 30px","2xl":"20px 30px"}} boxSizing='border-box' display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"}  bg={`${imgbutn3?"#9c3353":"white"}`}  border="1px solid black">
          <Image width={{base:"60%",sm:"60%",md:"70%",lg:"80%",xl:"80%","2xl":"60%"}} src={`${imgbutn3?'https://assets.milaap.org/assets/home/education-transparent-icon-396c16d8ccd62e9bcc40fcad99256db78b6af27a3098de70128942a68af07f19.png':"https://assets.milaap.org/assets/home/education-icon-710f135e0b777734a9ca958da28464f386379cb78ed4880e978ac9790eb45a8d.png"}`} />
          <Text color={`${imgbutn3?"white":"black"}`} >Education</Text>
        </Box>

    </Box>

         {/* black img https://assets.milaap.org/assets/home/medical-icon…44cdaab2d40c12e2e5fa63b83d27654423737ef4319ca.png*/}

    {/* sorting buttons */}

  {/* data display  */}

    <Box w={"80%"} m="auto" display="flex" alignItems={"center"} justifyContent="center" >

            <SimpleGrid columns={{md:2  ,lg: 2,xl: 3,"2xl":3  }} alignItems="center" justifyContent={"center"} spacing='40px'>
              {storedata.map((e)=> {
                return  <HomeDataCard key={e.id} Data={e}/>
              })}
            </SimpleGrid>
    </Box>

    <Box mt={10} mb={10} >
      <NavLink  to={"/donate"}> <Text color={"#9c3353"} textDecoration={"underline"} textAlign={"center"}>See more fundraisers</Text></NavLink>
    </Box>

   {/* data display  */}


  </Box>

  
  {/* sorting buttons  end data display */}

<Box  h={{base:"350px",sm:"400px",md:"450px",lg:"500px",xl:"554px","2xl":"600px"}} display={{base:"none",sm:"none",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}} alignItems={"center"} justifyContent={"center"} >

<Box h={{base:"230px",sm:"250px",md:"280px",lg:"300px",xl:"354px","2xl":"400px"}} w={{base:"80%",sm:"80%",md:"80%",lg:"80%",xl:"80%","2xl":"80%"}} >
<Image borderRadius={15} shadow= "rgb(156,51,83) 0px 5px 15px" src='https://i.imgur.com/5IIOe3N.png' h="object-fit" w="object-fit"/>
</Box>


</Box>


{/* carosel div start here */}

  <Box  bg="#efefef" p={20} display={{base:"none",sm:"none",md:"block",lg:"block",xl:"block","2xl":"block"}} >

    {/* Heading tag line */}

  <Box mb={7}>

<Text align="center" fontWeight={540} fontSize={{base:"19px",sm:"21px",md:"23px",lg:"26px",xl:"28px","2xl":""}} >What people are saying about Milaap</Text>
</Box>
{/* Heading tag line */}


{/* Diamond disign */}

  <Box w={"30%"} align="center" m={"auto"} h={20} display="flex" alignItems="center" justifyContent="space-between" >

  <Box h={0.3} w={"33%"} bg={"grey"} ></Box>
  <BsSuitDiamondFill color={"#b0869e"} />
<BsDiamondFill size={"25px"} color={"#9c3353"}/>
<BsSuitDiamondFill color={"#b0869e"}  />
<Box h={0.3} w={"33%"} bg={"grey"} ></Box>


  </Box>
{/* Diamond disign */}


{/* carosel start here */}
<Box  alignItems={"center"} justifyContent="center" m={"auto"} width={{base:"40%",sm:"40%",md:"50%",lg:"60%",xl:"60%","2xl":"60%"}} display={{base:"flex",sm:"flex",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}} >

                
            <Carousel infiniteLoop="true" showStatus="false" showIndicators="false" ariaLabel="next" showArrows={true} showThumbs={false} autoPlay={true} w={60} >
<Box>
  <Image src='https://i.imgur.com/eeLjrL3.png' />
</Box>

<Box>
  <Image src='https://i.imgur.com/mO0JmuG.png' />
</Box>

<Box>
  <Image src='https://i.imgur.com/L9kFIZn.png' />
</Box>

<Box>
  <Image src='https://i.imgur.com/NgdY3ia.png' />
</Box>

    </Carousel>

    </Box>

  </Box>
  
</Box>

   {/* carosel div end here */}














</Box>
  )
}

export default HomePage