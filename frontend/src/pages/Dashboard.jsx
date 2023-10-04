import { ArrowOutward, Email, EmailOutlined, Facebook, Instagram, LocalPhone } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
          <Stack 
            display={"flex"} 
            direction={{xs:"column-reverse", sm:"column-reverse",md:"row"}} 
            maxHeight={"100vh"}
            paddingX={"3em"}
          >
            <Stack
              flex={1}
              gap={1}
              alignSelf={"center"}
              spacing={".55em"}
            >
              <Typography 
                fontSize={{lg:"3.35em", xl:"3.75em",md:"3em", sm:"2em",xs:"1.45em"}} variant='h2'
                >
                  MY NAME IS <strong>YASIR ALI...</strong>
              </Typography>
              <Typography 
                fontSize={{lg:"3.15em", xl:"3.55em",md:"2.8em", sm:"1.9em",xs:"1.35em"}} 
                variant='h3' 
                >
                  <strong>Web Developer</strong> with expertise in <strong>MERN</strong>
              </Typography>
              <Button
                 variant='contained' 
                 fontSize={{lg:"2.35em", xl:"2.75em",md:"1.5em", sm:"1.3em",xs:"1em"}} 
                  sx={{
                      width:"17em",
                      backgroundColor:'#141313',
                      padding:"1.15em 0"
                  }}>
                  let's talk with me <ArrowOutward/> 
              </Button>
              <Box 
                  display={"flex"} 
                  padding={".94em 0em"}
                  gap={1}
              >   
                  <Box 
                      display={"flex"} 
                      alignItems={"center"}
                  >
                    <IconButton
                    >
                      <LocalPhone  fontSize="large"   />   
                    </IconButton>0000-1222-1111
                  </Box>
                  <Box 
                      display={"flex"} 
                      alignItems={"center"}
                  >
                    <IconButton>
                      <Email fontSize='large'/> 
                    </IconButton>
                      yasir@gmail.com  
                  </Box>
              </Box>       
            </Stack> 
            <Box 
              padding={"1.2em 2em"}
              flex={1}
              justifyContent={"center"}
              display={"flex"}
            > 
              <Box width={{lg:"530px",xg:"550px",md:"470px" , sm:"420px"}} >
                <img 
                  src={require("../assets/Img.png")} 
                  alt="main_image"   
                  width={"100%"}  
                  /> 
              </Box>              
            </Box> 
            <Box
              sx={{display:{sm:"none", xs:"none" ,md:"flex",lg:"flex",xl:"flex"}}}
              flexDirection={"column"}
              justifyContent={"center"}    
            >
              <Facebook color='primary' fontSize='large'/>
              <Instagram fontSize='large'/>
              <EmailOutlined fontSize='large'/>   
            </Box>
        </Stack>
  )
}

export default Dashboard
