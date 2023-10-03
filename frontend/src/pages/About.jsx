import { AllInclusiveOutlined, ArrowUpward, Image, LocationOn, Mail, Man2, Phone } from '@mui/icons-material';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <Stack 
        padding={"3em"} 
    >
        <Typography 
            variant='h6' 
            textAlign={{xs:"center", sm:"start"}}
        >Nice to meet you!</Typography>
        <Typography 
            variant='h4' 
            textAlign={{xs:"center", sm:"start"}}
        >WELCOME TO...</Typography>
        <Stack 
            display={"flex"} 
            padding={"1em"} 
            direction={{md:"row", xs:"column" , lg:"row",sm:"row"}}
            gap={2}
        >
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
            <Box 
                flex={{ md:2,lg:2 , sm:1,xs:1}} 
                paddingX={{ md:"2em", lg:"2em", sm:".5em", xs:".1em"}} 
                display={"flex"} 
                flexDirection={"column"}  
                gap={{md: 3, sm:2, xs:2 }}
            >
                <Box display={"grid"} gridTemplateColumns={"repeat(auto-fill, minmax(230px, 1fr))"} gap={1}>
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
                <Stack
                    display={"flex"} 
                    gap={{ md:2, lg:2, sm:1, xs:1 }} 
                    direction={{md:"row", xs:"column" , lg:"row",sm:"column"}}
                >
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
                </Stack>
                <Box 
                    display={"flex"} 
                    flexDirection={"row"} 
                    justifyContent={"center"} 
                    alignItems={"center"}   
                    padding={"1.5em"} 
                    gap={2}
                    sx={{backgroundColor:"#141313", color:"white"}}
                >
                    <AllInclusiveOutlined fontSize='large'/>    
                    <Typography textTransform={"capitalize"} variant='h5'>Consistency is the key to success</Typography>
                </Box>
            </Box>
        </Stack>        
      
    </Stack>
  )
}

export default About;
