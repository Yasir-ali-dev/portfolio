import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material';
import {ArrowOutward, Email, EmailOutlined, Facebook, GitHub, Instagram, LinkedIn, LocalPhone} from '@mui/icons-material';
const links= ["Home","About","Services","Work","Contact"];

const Home = () => {
  return (
    <div>
      <Stack display={"flex"} flexDirection={"row"} >
        <Box 
            flex={1.5} 
            sx={{
                backgroundColor:"#141313", 
                color :"#FFFFFF"
            }} 
            display={"flex"} 
            flexDirection={"column"}
            padding={"0em 1em"}
            justifyContent={"space-around"}
        >
            <Box
                sx={{
                    padding:".5em .9em "
                }} 
            >
            
                <Typography variant='h3'>Yasir.</Typography>
            </Box>
          
            <Box 
                sx={{
                    display:"flex",
                    flexDirection:"column", 
                    gap:".5em",
                    padding:".3em 1em "
                }} >
            
                 {links.map((link , index) =>{
                    return <a key={index} className='link' href='_$'  >{link}</a>
                 })}
            </Box>
        
            <Box 
                display={"flex"} 
                flexDirection={"column" } 
                sx={{
                    gap:".5em",
                    padding:".3em 1em "
                }}
            >    
                <GitHub fontSize='large'/>
                <LinkedIn fontSize='large'/>
                <Facebook fontSize='large'/>
                <Typography variant='p'>
                Copyright ©2023 Yasir Ali. All right reserved.
                </Typography>
            </Box>
        </Box>
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
      </Stack>
    </div>
  )
}

export default Home
