import React from "react";
import {Button, Menu, MenuItem, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import BtnCollapse from "./Component/BtnCollapse";
import Link from '@mui/material/Link';
import styled from "@emotion/styled";   
import './NavStyles.css'

function NavBarCollapse (){

    const ButtonStyledLink = styled(Button)({
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)'
          },
          '&:after': {
            bottom: 0,
            content: "''",
            display: 'block',
            height: 2,
            left: 0,
            position: 'absolute',
            backgroundColor: '#00d8ff',
            transition: 'width 0.5s ease 0s, left 0.5s ease 0s',
            width: 0,
          },
          '&:hover:after': {
                width:' 100%', 
                left: 0,
          }
    })

    return (
        <div sx={{position: 'absolute', right: 0}}>
            
            <BtnCollapse>
                <Link href='/' underline="none" color="textPrimary">
                    <MenuItem>            
                        Home
                    </MenuItem>
                </Link>
                <Link href='/subjects' underline="none" color="textPrimary">
                    <MenuItem>
                        Subjects
                    </MenuItem>
                </Link>
            
                <Link href='/' underline="none" color="textPrimary">
                    <MenuItem>
                        Blog
                    </MenuItem>
                </Link>
                <Link href='/' underline="none" color="textPrimary">
                    <MenuItem>
                        About
                    </MenuItem>
                </Link>
                               
            </BtnCollapse>

            <div sx={{width: "100%"}} id="appbar-collapse">
                <Box sx={{display: {xs: 'none', sm: 'block', md: 'block'} }} >
            
                    <Link  href='/home' underline="none" color="textPrimary">
                        <ButtonStyledLink  color="inherit">         
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Home
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    

                    <Link href='/subjects' underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">           
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                Subjects
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                   
                    <Link href="/a-students" underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">          
                            <Typography sx={{ fontWeight: 420}} variant="body1"> 
                                About
                            </Typography>
                        </ButtonStyledLink>
                    </Link>

                    
    
                      
                </Box> 
            </div>
        </div>
    );
}
export default NavBarCollapse;
