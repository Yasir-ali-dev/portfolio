import React from 'react'
import {Box,  Typography} from '@mui/material';
import {    Facebook, GitHub, LinkedIn} from '@mui/icons-material';
const links= ["Home","About","Services","Work","Contact"];

const Home = () => {
  return (
        <Box 
            position={"sticky"}
            sx={{
                backgroundColor:"#141313", 
                color :"#FFFFFF"
            }} 
            display={"flex"} 
            flexDirection={"column"}
            padding={"0em 1em"}
            justifyContent={"space-around"}
            height={"100vh"}
            width={"10em"}
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
  )
}

export default Home
