import { ArrowUpward } from '@mui/icons-material';
import { Box, Button,  Stack, Typography } from '@mui/material';
import React from 'react'

const Experience = () => {
  return (
    <Stack 
      className='form' 
      display={"flex"} 
      direction={{md:"row", xs:"column" , lg:"row",sm:"column"}}
      alignItems={"center"}  
      justifyContent={"center"} 
      gap={1} 
      padding={{md:"3em", sm:"1.5em",xs:"1em", lg:"3em"}} 
      paddingY={{ sm:"4em",xs:"2em",md:"5em", lg:"7em"}} 
      flexWrap={"wrap"}
    >
      <Box 
        flex={1} 
        gap={2} 
        display={"flex"} 
        flexDirection={"column"}
        justifyContent={"center"}
      >
            <Typography variant='h6'>Experience</Typography>
            <Typography variant='h3' fontWeight={"bolder"} >My Experience</Typography>
            <Typography  variant="body1">
             Hello there! My name is Yasir Ali. I am a web develper and designer, and I'm very passionate and dedicated to my work.         
            </Typography>                    
            <Button 
                marginTop="2em"
                sx={{
                    width:"270px",
                    backgroundColor:'#141313',
                    padding:".71em 1em",
                    marginTop:"1em"  
                }}
                variant='contained' 
            >Download my Resume <ArrowUpward sx={{marginLeft:"1em"}}/></Button>
      </Box>
      
      <Box 
        flex={1} 
        display={"flex"} 
        flexDirection={{md:"column", xs:"column" , lg:"column",sm:"row"}}
        gap={{md:2, xs: 1 , lg:2,sm:2}}  
        paddingY={{md:2, xs:2 , lg:2,sm:4}}      
      >
          <Box paddingY={2} gap={1} display={"flex"} flexDirection={"column"}>
            <Typography 
              fontSize={{sm:30,xs:20,md:35,lg:40,xl:45}} 
              variant="h3">Java Development</Typography>
            <Typography variant='body1'>1 year</Typography>
            <hr color='#B86ADF'/>
          </Box>  
          <Box paddingY={2} gap={1} display={"flex"} flexDirection={"column"}>
            <Typography 
              fontSize={{sm:30,xs:20,md:35,lg:40,xl:45}} 
              variant='h3'>React js</Typography>
            <Typography variant='body1'>1.5 year</Typography>
            <hr color='#FF6C63'/>
          </Box>      
          <Box paddingY={2} gap={1} display={"flex"} flexDirection={"column"}>
            <Typography 
              fontSize={{sm:30,xs:20,md:35,lg:40,xl:45}} 
              variant='h3'>Node js Backend</Typography>
            <Typography variant='body1'>6 months</Typography>
            <hr color='#FFBA47'/>
          </Box>          
      </Box>

    </Stack>
  )
}

export default Experience;

