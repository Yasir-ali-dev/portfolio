import React from 'react'
import { Box, Stack } from '@mui/material';

const Technologies = () => {
  return (
    <Stack 
      paddingX={"3em"}
      paddingY={"2em"} 
      className='form' 
      display={"flex"} 
      direction={{md:"row", lg:"row", sm:"row", xs:"row"}}
      justifyContent={"space-between"}
      gap={2}
      alignItems={"center"}
      flexWrap={"wrap"}
      >
        <Box width={"90px"} alignSelf={"center"}>
          <img 
            src={require("../assets/React-icon.svg.png")} 
            alt="react-logo"
            width={"100%"}
             />
        </Box> 
        <Box  width={"90px"} alignSelf={"center"}>
          <img 
            src={require("../assets/nod.png")} 
            alt="nodejs-logo"
            width={"100%"}
             />
        </Box> 
        <Box width={"170px"} alignSelf={"center"}>
          <img 
            src={require("../assets/Expressjs.png")} 
            alt="express-logo"
            width={"100%"}
             />
        </Box> 
        <Box width={"170px"} >
          <img 
            width={"100%"}
            alignSelf={"center"}
            src={require("../assets/MongoDB-Logo.png")} 
            alt="mongodb"
            style={{transform:"scale(1.3)"}}
             />
        </Box> 
        <Box >
          <img
            alignSelf={"center"} 
            src={require("../assets/js.png")} 
            alt="JS-logo"
            width={"75px"}
             />
        </Box>   
    </Stack>
  )
}

export default Technologies;