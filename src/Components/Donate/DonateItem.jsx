import React, { useEffect } from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch,useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDonate } from '../../Redux/AppReducer/action';
import DonateCard from "./DonateCard";
import {Link} from "react-router-dom";
const DonateItem = () => {

const dispatch = useDispatch()
const donate=useSelector((store)=>store.AppReducer.donate);
const location = useLocation()
//const [searchparams] = useSearchParams()

useEffect(()=>{
  if(donate.length===0){
    dispatch(getDonate())
  }
},[location.search,dispatch])

  return (
    <Box m="auto" pt="90px">
        <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap="30px">
          {
            donate.length>0 && donate.map((data)=>{
              //console.log(data)
              return (<Box key={data.id}>
              <Link to={`/donate/${data.id}`}>
                  <DonateCard data={data}/>
              </Link>
            </Box>)
            })
          }
        </Grid>
    </Box>
  )
}

export default DonateItem