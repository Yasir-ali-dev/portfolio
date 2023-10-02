import { ArrowUpward, Image, LocationOn, Mail, Man2, Phone } from '@mui/icons-material';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <Stack padding={"3em"} flex={7  }>
        <Typography variant='h6'>Nice to meet you!</Typography>
        <Typography variant='h4'>WELCOME TO...</Typography>
        <Stack display={"flex"} padding={"1em"} flexDirection={"row"} gap={2}>
            <Box flex={1} >
                <Box border={"1px solid"}>
                    <img src={require("../assets/tracking.jpg")} alt="image_"  width={"100%"}/>
                </Box>
                <Box display={"flex"} flexDirection={"column"} textAlign={"center"} marginTop={1} gap={1}>  
                    <Typography variant='h4'>Yasir Ali</Typography>
                    <Typography variant='h6'>MERN Stack Web Developer</Typography>
                    <Button variant='text'>Download CV <ArrowUpward/></Button>
                </Box>
            </Box>
            <Box flex={2} padding={"0 2em"} display={"flex"} flexDirection={"column"} gap={2.2}>
                <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={1}>
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <Phone fontSize='large'/>
                        <Typography>{" "}+92 311 2172777</Typography>
                    </Box>
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <Man2 fontSize='large'/>
                        <Typography>{" "}21</Typography>
                    </Box>
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <Mail fontSize='large' />
                        <Typography>{" "}yasirali.bscssef20@iba-suk.edu.pk</Typography>
                    </Box>
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <LocationOn fontSize='large'/>
                        <Typography>Sukkur IBA University, Near Airport Road, Sukkur, Pakistan</Typography>
                    </Box>
                </Box>
                <hr color='grey'/>
                <Box display={"flex"} flexDirection={"row"} gap={2} >
                    <Box flex={1}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography variant='h4'>1+</Typography>
                            <Typography variant='h5'>Years Experience..</Typography>
                        </Box>
                        <Typography>
                            Hello there! My name is Yasir Ali. I am a web develper and designer, and I'm very passionate and dedicated to my work.   
                        </Typography>
                    </Box>
                    <Box  flex={1}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography variant='h4'>3</Typography>
                            <Typography variant='h5'>Clients World Wide...</Typography>
                        </Box>
                        <Typography>                
                            With 1+ years experience as a professional a web developer,
                            I have acquired the skills and knowledge necessary to make your project a success. 
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Stack>        
      
    </Stack>
  )
}

export default About;
