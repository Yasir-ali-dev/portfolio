import React from 'react'
import {Box, Button, ButtonGroup, Stack, Typography} from '@mui/material';
import {ArrowOutward, Email, Facebook, GitHub, LinkedIn, LocalPhone} from '@mui/icons-material';
const links= ["Home","About","Services","Work","Contact"];

const Home = () => {
  return (
    <div>
      <Stack display={"flex"} flexDirection={"row"} height={"100vh"}>
        <Box 
            flex={1.5} 
            sx={{
                backgroundColor:"#141313", 
                color :"#FFFFFF"
            }} 
            display={"flex"} 
            flexDirection={"column"}
            padding={"1em 1em"}
            justifyContent={"space-around"}
        >
            <Box
                sx={{
                    padding:"1em .9em "
                }} 
            >
            
                <Typography variant='h4'>Yasir.</Typography>
            </Box>
          
            <Box 
                sx={{
                    display:"flex",
                    flexDirection:"column", 
                    gap:"1em",
                    padding:"1em 1em "
                }} >
            
                 {links.map((link , index) =>{
                    return <a key={index} className='link' href='_$'  >{link}</a>
                 })}
            </Box>
        
            <Box 
                display={"flex"} 
                flexDirection={"column" } 
                sx={{
                    gap:".7em",
                    padding:".5em 1em "
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
            padding={"6em 2em"}
            gap={"1.2em"}
            spacing={".45em"}
          >
            <Typography variant='h2'>
                MY NAME IS <strong>YASIR ALI...</strong>
            </Typography>
            <Typography variant='h3' >
                <strong>Web Developer</strong> with expertise in <strong>MERN</strong>
            </Typography>
            <Button>
                let's talk with me <ArrowOutward/> 
            </Button>
             <Box display={"flex"} alignItems={"center"} gap={1}>
                <LocalPhone fontSize='large'/>  0000-1222-1111 
                <Email fontSize='large'/> yasir@gmail.com  
             </Box>       
           </Stack> 
       
          <Box 
             flex={1}
          > 
            </Box> 
               


        </Box>
      </Stack>
    </div>
  )
}

export default Home
