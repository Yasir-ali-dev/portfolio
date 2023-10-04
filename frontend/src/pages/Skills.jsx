import { ArrowUpward } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

const Skills = () => {


  return (
    <Stack 
      padding={"3em"} 
      gap={1.5}
    >
      <Typography
        textAlign={{ sm:"center", xs: "center", lg:"start", md:"start"} }
        variant='h4'
      >Skills</Typography>
      <Typography 
        variant='h3'
        textAlign={{ sm:"center", xs: "center", lg:"start", md:"start"} }
        >Check Out My Skills</Typography>
      <Stack 
        display={"flex"} 
        gap={2} 
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
      <Card sx={{ maxWidth:{ md: 270 , lg: 270 ,sm:270, xs:350 , xl:400} }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={220}
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

        <Card sx={{ maxWidth:{ md: 270 , lg: 270 ,sm:270, xs:350 , xl:400} }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={220}
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
        <Card sx={{ maxWidth:{ md: 270 , lg: 270 ,sm:270, xs:350 , xl:400} }}>
        <CardActionArea>  
          <CardMedia
            component="img"
            height={220}
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
      </Stack>
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