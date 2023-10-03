import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box 
        display={"flex"} 
        flexDirection={"row"} 
        justifyContent={"center"} 
        alignItems={"center"} 
        padding={"1.5em"} 
        gap={2}
        sx={{backgroundColor:"#141313", color:"white"}}
    >    
        <Typography textTransform={"capitalize"} variant='h6'>All rights reserved @ Yasir Ali</Typography>
    </Box>
  )
}

export default Footer
