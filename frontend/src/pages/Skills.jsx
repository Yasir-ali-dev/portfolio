import { ArrowUpward } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

const Skills = () => {


  return (
    <Stack flex={7} padding={"3em"} gap={2}>
      <Typography 
        textAlign={"center"} 
        variant='h4'
      >Skills</Typography>
      <Typography 
        variant='h3'
        >Check Out My Skills</Typography>
      <Box display={"flex"} flexDirection={"row"} gap={2} >
      <Card sx={{ maxWidth: 270 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={require("../assets/software.webp")}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Web Development
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"bolder"}} color="text.secondary">
                Front-end Development, Back-end Development  
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 270 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={require("../assets/java2.png")}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Java
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"bolder"}} color="text.secondary">
                Object Orientend Programming, Java Core, Data Structures  
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 270 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={require("../assets/js.png")}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Javascript
            </Typography>
            <Typography variant="body2" sx={{fontWeight:"bolder"}} color="text.secondary">
                Vanilla Javascript, ES6,  Server-side javascript, React   
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
      </Box>
      <Button 
            sx={{
                alignSelf:"center",
                marginTop:"1em",
                width:"170px",
                backgroundColor:'#141313',
                padding:".71em 1em"
            }}
             variant='contained' 
        >Load More <ArrowUpward sx={{marginLeft:"1em"}}/></Button>
    </Stack>
  )
}

export default Skills;