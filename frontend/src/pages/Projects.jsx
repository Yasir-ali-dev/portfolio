import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import React from 'react'
import Slider from './Slider';

const Projects = () => {
  return (
    <Stack 
        height={"100vh"}
        padding={{ lg:"3em",md:"3em",sm:"2em",xs:"1.5em"}}
        boxShadow={".3em .3em .3em grey "}
        width={"800px"}
    >
        <Slider/>
        <Typography>User Tracking App System</Typography>
        <ButtonGroup>
            <Button>github</Button>
            <Button>Link</Button>
        </ButtonGroup>
    </Stack>
  )
}

export default Projects;