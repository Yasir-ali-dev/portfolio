import React from 'react'
import {Box,  Stack, Typography} from '@mui/material';
import {    Facebook, GitHub, LinkedIn} from '@mui/icons-material';
import Dashboard from './Dashboard';
import Services from './Services';
import Skills from './Skills';
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
            height={"100vh"}
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
        <Skills/>
      </Stack>
    </div>
  )
}

export default Home
