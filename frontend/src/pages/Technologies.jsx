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
        <Box width={"90px"} >
          <img 
            src={require("../assets/react.svg")} 
            alt="react-logo"
            width={"100%"}
             />
        </Box> 
        <Box  width={"90px"} >
          <img 
            src={require("../assets/node-js.svg")} 
            alt="nodejs-logo"
            width={"100%"}
             />
        </Box> 
        <Box width={"90px"} >
          <img 
            src={require("../assets/java.svg")} 
            alt="express-logo"
            width={"100%"}
             />
        </Box> 
        <Box width={"90px"} >
          <img 
            width={"100%"}
            alignSelf={"center"}
            src={require("../assets/mongodb.svg")} 
            alt="mongodb"
            
             />
        </Box> 
        <Box width={"90px"}>
          <img
            alignSelf={"center"} 
            src={require("../assets/JScript.svg")} 
            alt="JS-logo"
            width={"100%"}
             />
        </Box>   
    </Stack>
  )
}

export default Technologies;