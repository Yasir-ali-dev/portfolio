import { Facebook, GitHub, LinkedIn, ShoppingCartCheckout } from '@mui/icons-material'
import { AppBar, Button, Tab, Tabs, Toolbar ,useTheme,useMediaQuery, Typography, Box} from '@mui/material'
import React, { useState } from 'react';
import DrawerComponent from './DrawerComponent';
const links=["Home","About","Experience","Projects","Skills","Contact Us"];


const Header = () => {
  const [value,setValue]=useState(0);
  const theme =useTheme();
  const isMatch =useMediaQuery(theme.breakpoints.down("md"));

  
  return (
    <React.Fragment>
        <AppBar position='sticky' >
            <Toolbar sx={{backgroundColor:"#141313", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Typography variant='h4'>Yasir.</Typography>
                {isMatch ?
                (<>
                    <Typography sx={{fontSize:"2rem",paddingLeft:"7%"}}></Typography>
                    <DrawerComponent/>
                </>)
                :
                (<>
                    <Tabs 
                        value={value} 
                        onChange={(e,val)=>setValue(val)}
                        textColor='inherit'
                        indicatorColor='white'
                    >
                       {links.map((link,index)=>{
                           return <Tab key={index} label={link}/> 
                       })} 
                    </Tabs>
                
                    <Box 
                        display={"flex"}  
                        sx={{
                            gap:".5em",
                            padding:".3em 1em "
                        }}
                    >    
                        <GitHub fontSize='large'/>
                        <LinkedIn fontSize='large'/>
                        <Facebook fontSize='large'/>
        
                    </Box>
                </>)
            }
            </Toolbar>
        </AppBar> 
    </React.Fragment>
  )
}

export default Header
