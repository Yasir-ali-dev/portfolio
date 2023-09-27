import { ArrowOutward, Email, EmailOutlined, Facebook, Instagram, LocalPhone } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <Box 
            flex={7} 
            display={"flex"}
        >    
          <Stack
            flex={1}
            padding={"5em 2em"}
            gap={"1em"}
            spacing={".55em"}
          >
            <Typography variant='h2'>
                MY NAME IS <strong>YASIR ALI...</strong>
            </Typography>
            <Typography variant='h3' >
                <strong>Web Developer</strong> with expertise in <strong>MERN</strong>
            </Typography>
            <Button variant='contained'  
                sx={{
                    width:"17em", backgroundColor:'#141313',
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
                    <LocalPhone fontSize='large'/>  0000-1222-1111 
                </Box>
                <Box 
                    display={"flex"} 
                    alignItems={"center"}
                >
                    <Email fontSize='large'/> yasir@gmail.com  
                </Box>
             </Box>       
           </Stack> 
          <Box 
             flex={1}
             padding={"1.2em 2em"}
             width={"100%"}
          > 
            <img src={require("../assets/Img.png")} alt="" width={"100%"} />
          </Box> 
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}    
           >
            <Facebook color='primary' fontSize='large'/>
            <Instagram fontSize='large'/>
            <EmailOutlined fontSize='large'/>   
          </Box>
        </Box>
    </>
  )
}

export default Dashboard
