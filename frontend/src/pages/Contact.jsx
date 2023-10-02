import { ArrowUpward } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Stack flex={7} display={"flex"} flexDirection={"row"} alignItems={"center"}  justifyContent={"center"} >
      <Box padding={"3em"} flex={1}>
        <Box display={"flex"} flexDirection={"column"} gap={1.7} padding={1.5}>
            <Typography variant='h6'>Contact</Typography>
            <Typography variant='h3' fontWeight={"bolder"} >REACH OUT ME</Typography>
            <Typography  variant="body1">Sukkur IBA University, Near Airport Road, Sukkur, Pakistan</Typography>            
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={.51} marginY={4} padding={1.5}> 
            <Typography fontWeight={"bolder"} variant='h5'>+92 311 2172777</Typography>
            <Typography fontWeight={"bolder"} variant='h5'>yasirali.bscssef20@iba-suk.edu.pk</Typography>
        </Box>
        <ButtonGroup sx={{gap:2}} padding={2}>
            <Button variant='text' >FACEBOOK</Button>
            <Button variant='text'>GITHUB</Button>
            <Button variant='text'>LINKEDIN</Button>
            <Button variant='text'>INSTAGRAM</Button>
        </ButtonGroup>
      </Box>
      <Box  padding={"3em"} flex={1.5}>
        <Box className="form">
           <Typography>EMAIL ME</Typography> 
           <form>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard"
                    multiline
                    maxRows={5}   
                />
                <Button 
                    sx={{
                        alignSelf:"center",
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
