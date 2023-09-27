import { ExpandMore, PlusOne } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import React from 'react'

const Services = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Stack flex={7} padding={"3em"}> 
        <Typography variant='h5'>Services</Typography>
        <Typography variant='h3' >MY SPECIALTIES</Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant='h5' sx={{ width: '33%', flexShrink: 0 }}>
            Front-end Development
          </Typography>
          <Typography variant='h6' sx={{ color: 'text.secondary' }}>I can build and design user interfaces Application in React</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{float:"right"}}>
          <img src={require("../assets/images.png")} alt="image_" width={"110px"}  />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant='h5' sx={{ width: '33%', flexShrink: 0 }}>Back-end Development</Typography>
          <Typography variant='h6' sx={{ color: 'text.secondary' }}>
              I can develop the web servers with nodejs, express and mongodb
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{float:"right"}}>
            <img src={require("../assets/backend.jfif")} alt="image_" width={"110px"}  />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant='h5' sx={{ width: '45%', flexShrink: 0 }}>
            Python and Machine Learning 
          </Typography>
          <Typography variant='h6' sx={{ color: 'text.secondary' }}>
            Can do classical machine learning and python Work 
          </Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{float:"right"}}>
        <img src={require("../assets/download.jfif")} alt="image_" width={"110px"}  />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant='h5' sx={{ width: '33%', flexShrink: 0 }}>Data Structures</Typography>
          <Typography variant='h6' sx={{ color: 'text.secondary' }}>
            Can do Data Strutures and Algorithms in Java 
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{float:"right"}}>
        <img src={require("../assets/cs161logo2.png")} alt="image_" width={"110px"}  />
        </AccordionDetails>
      </Accordion>

    </Stack>
  )
}

export default Services;
