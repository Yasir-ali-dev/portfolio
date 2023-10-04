import { ArrowUpward } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Stack 
      flex={7} 
      display={"flex"} 
      alignItems={"center"}  
      justifyContent={"center"} 
      direction={{md:"row", xs:"column" , lg:"row",sm:"column"}}
      padding={{md:"3em", sm:"1.5em",xs:"1em", lg:"3em"}}
      paddingY={{md:"5em", sm:"2em",xs:"1em", lg:"5em"}}
      gap={{xs:3,md:2,lg:2,xl:2,sm:3}}
    >
      <Box flex={1}>
        <Box display={"flex"} flexDirection={"column"} gap={1.7} padding={1.5}>
            <Typography variant='h6'>Contact</Typography>
            <Typography variant='h3' fontWeight={"bolder"} >REACH OUT ME</Typography>
            <Typography  variant="body1">Sukkur IBA University, Near Airport Road, Sukkur, Pakistan</Typography>            
        </Box>
        <Box 
          display={"flex"} 
          flexDirection={"column"} 
          gap={.51} 
          marginY={{md:4,lg:4,sm:2,xs:1.5}} 
          padding={1.5}
        > 
            <Typography fontWeight={"bolder"} variant='h5'>+92 311 2172777</Typography>
            <Typography fontWeight={"bolder"} variant='h5'>yasirali.bscssef20@iba-suk.edu.pk</Typography>
        </Box>
        <ButtonGroup sx={{gap:1}} padding={2}>
            <Button variant='text' >FACEBOOK</Button>
            <Button variant='text'>GITHUB</Button>
            <Button variant='text'>LINKEDIN</Button>
            <Button variant='text'>INSTAGRAM</Button>
        </ButtonGroup>
      </Box>
      <Box  flex={1.5}>
        <Box className="form" padding={"2em"}>
           <Typography variant='h4'>EMAIL ME</Typography> 
           <form className='email-form'>
                <Box display="flex" justifyContent={"space-between"} paddingY={"2em"}>
                    <TextField id="name" label="Name" variant="standard" />
                    <TextField 
                        id="emial" 
                        label="Email" 
                        variant="standard" 
                    />
                </Box>
                <TextField 
                    id="comments" 
                    label="Comments" 
                    variant="standard"
                    multiline
                    rows={4} 
                />
                <Button 
                    sx={{
                        marginTop:"1em",
                        width:"170px",
                        backgroundColor:'#141313',
                        padding:".71em 1em",
                        marginTop:"1em"  
                    }}
                    variant='contained' 
                >Load More <ArrowUpward sx={{marginLeft:"1em"}}/></Button>
           </form>
        </Box>
      </Box>
    </Stack>
  )
}

export default Contact
