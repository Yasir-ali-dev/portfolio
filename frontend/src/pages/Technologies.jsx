import React from 'react'
import { Box, Stack } from '@mui/material';

const tech=["/R.svg","/node-js.svg","/mongodb.svg","/express.svg","/JScript.svg","/java.svg","/git.svg","postman.svg"];
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
          {
            tech.map((_,index)=>{
              return (
                <Box width={"90px"}>
                 <img 
                    key={index}
                    src={_} 
                    alt="nodejs-logo"
                    width={"100%"}
                 />
                </Box>
                )  
            })
          }
        {/* <Box   >
          
        </Box> 
        <Box width={"90px"} >
          <img 
            src={"/node-js.svg"} 
            alt="express-logo"
            width={"100%"}
             />
        </Box> 
        <Box width={"90px"} >
          <img 
            width={"100%"}
            alignSelf={"center"}
            src={"/mongodb.svg"} 
            alt="mongodb"
            
             />
        </Box> 
        <Box width={"90px"}>
          <img
            alignSelf={"center"} 
            src={"/jScript.svg"} 
            alt="JS-logo"
            width={"100%"}
             />
        </Box> */}

    </Stack>
  )
}

export default Technologies;