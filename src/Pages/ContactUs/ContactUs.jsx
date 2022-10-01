
import React from 'react'
import "./contactUs.css";
import { FaMapMarkerAlt} from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaPhoneAlt} from "react-icons/fa";
// import img from '../../assets/linux_logo.jpg';
import join from './assets/join.jpg'
import { Box, Heading,Input,Center, Button, Textarea,} from "@chakra-ui/react";
import Footer from '../Footer/Footer';
const ContactUs = () => {
  return (
    <>
    <div className='head_container'>
        <div className='conatct_para'>
           <p>Contact us</p>
            <p>We are here to help you and answer any questions you may have. Here is how to reach us!</p>
        </div>
        <div className='contact_img'>
            <img src="https://i0.wp.com/pages.milaap.org/wp-content/uploads/2022/01/Contact_illustration.png?w=328&ssl=1" alt="" />
        </div>
    </div>
    <br />
    <div className='location_icons'>
    <FaMapMarkerAlt style={{fontSize:"30px",marginTop:"10px",color:"#9c3353"}}/>
    <p>INDIA</p>
    <br />
    <hr style={{width:"70%",border:"1px solid #9c3353"}}/>
    </div>
    <br />
    <p style={{fontSize:"16px",fontWeight:"400"}}>Milaap Social Ventures India Pvt. Ltd. ClayWorks Create – building,11th KM Create Campus, Arakere Bannerghatta Rd, Bangalore, Karnataka, India 560076</p>
    <br />
    <div className='social_info'>
        <div style={{display:"flex",gap:"1rem"}}><BsBriefcaseFill/>
        <p style={{color: "#9c3353"}}> feedback@milaap.org</p>
        </div>
        <br />
        <div style={{display:"flex",gap:"1rem"}}>
           <FaPhoneAlt/> 
           <p style={{color: "#9c3353"}}>9916174848</p>
        </div>
        <br />
       <img src={join} alt=""/>
    </div>


    <Box w={"80%"} m={"auto"} mt={"5%"} textAlign={"start"}>
            <Heading fontSize={"30px"}>Let us know what you think</Heading>
            <form
            
            name="contact"
            method="POST"
            action="https://getform.io/f/8868c4e2-ac5f-4c2a-89fc-71844d80620e"
            
          >
            <Center>
              <Input mt={"3%"} mr={"2%"} name="name" placeholder={"Name"} required/>
              <Input mt={"3%"} name="email" placeholder={"Email address"} required />
            </Center>
            <Center>
              <Textarea
                mt={"3%"}
                h={"200px"}
                
                placeholder={
                  "You can type any suggestions or queries you might have. Let us help you!"
                } required
              />
            </Center>
            <Button
              mt={"4%"}
              h={"50px"}
              color={"white"}
              fontSize={"20px"}
              w="18%"
              type="submit"
              name="message"
              bgColor={"#9c3353"}
            >
              Send
            </Button>
            </form>
          </Box>

          <Footer/>
    </>
  )
}

export default ContactUs