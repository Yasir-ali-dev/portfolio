import { ArrowUpward } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react'

const Work = () => {
  return (
    <Stack flex={7} padding={"3em"} gap={1.5}>
       <Typography variant='h6'>Work</Typography>     
       <Typography variant='h4'>RECENT PROJECT</Typography>     
      <Stack display={"grid"} gridTemplateColumns={"1fr 1fr"} className='grid' gridTemplateRows={"1fr 1fr"}>
       <Box 
            display={"flex"} 
            flexDirection={"row"} 
            alignItems={"center"} 
            justifyContent={"center"} 
            padding={"1em"}
            maxWidth={"400px"}
            boxShadow={"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);"}

        >
            <Box flex={1.3}>
                <Typography gutterBottom variant="h6" component="div">
                    Website 
                </Typography>
                <Typography variant="h5" fontWeight={"bold"} color="text.secondary">
                   User Tracking App System 
                </Typography>
            </Box>
            <CardMedia
                sx={{flex:2}}
                component="img"
                height="140"
                image={require("../assets/tracking.jpg")}
                alt="tracking app"  
            />
        </Box>
        <Box 
            display={"flex"} 
            flexDirection={"row"} 
            alignItems={"center"} 
            justifyContent={"center"} 
            padding={"1em"}
            maxWidth={"400px"}
            boxShadow={"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);"}

        >
            <Box flex={1.3}>
                <Typography gutterBottom variant="h6" component="div">
                    Website 
                </Typography>
                <Typography variant="h5" fontWeight={"bold"} color="text.secondary">
                    E-Library Book Store 
                </Typography>
            </Box>
            <CardMedia
                sx={{flex:2}}
                component="img"
                height="140"
                width={"100%"}
                image={require("../assets/lib.jfif")}
                alt="tracking app"  
            />
        </Box>
        <Box 
            display={"flex"} 
            flexDirection={"row"} 
            padding={"1em"}    
            alignItems={"center"} 

            justifyContent={"center"} 

            maxWidth={"400px"}
            boxShadow={"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);"}

        >
            <Box flex={1.3}>
                <Typography gutterBottom variant="h6" component="div">
                    Website 
                </Typography>
                <Typography variant="h5" fontWeight={"bold"} color="text.secondary">
                    Ecommerce App 
                </Typography>
            </Box>
            <CardMedia
                sx={{flex:2}}
                component="img"
                height="140"
                image={require("../assets/software.webp")}
                alt="tracking app"  
            />
        </Box>
      </Stack>
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
    </Stack>
  )
};

export default Work;