import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarCollapse from './NavBarCollapse'
import Avatar from '@mui/material/Avatar';
import Logo from '../../assets/images/signin-image.jpg';
import { createTheme } from '@mui/material/styles';
import LastBtn from './Component/LastBtn';

const theme = createTheme({
   
});

export default function IZNavBar() {
    return (
        <div>
            <AppBar position="fixed" sx={{borderBottom: "1px solid #00d8ff"}} color="default">
                <Toolbar>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6} md={10} lg={8}>
                            <Grid container direction="row" justifyContent='space-between' alignItems="center">
                                <Grid item xs={12} sm={6} md={2} lg={4}>
                                    <Avatar sx={{width: 70, height: 70}} alt="Ed -Tech" src={Logo} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={9} lg={4}>
                                    <NavBarCollapse /> 
                                </Grid>
                                <Grid item xs={12} sm={6} md={9} lg={3}>
                                    <LastBtn /> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                               
                </Toolbar>
            </AppBar>  
        </div>
    )
}