import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../assets/images/signup-image.jpg';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Hidden from '@mui/material/Hidden';


function Copyright(){
    
    return (
        <Box sx={{ p: 1}}>  
            <Typography variant="body2" component="h2" align="center" gutterBottom>
                {'©'}
                {' '}
                {new Date().getFullYear()}
                {' '}
                <Link color="inherit" href="/" underline='none'>
                    Ed-Tech.
                </Link>
                {' | '}
                All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default function Footer(){
    return (
        <Box sx={{ backgroundColor: '#000000', color: '#fff', p: 5, width: '100%'}}>  
            <div>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={10}>
                        <Box sx={{ overflowX: 'hidden', overflowY: 'hidden'}}>
                            <footer> 
                                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>  
                                        <Grid container direction="column" justifyContent="center" alignItems="flex-start">   
                                           
                                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link  href="/" underline="none" color="inherit">
                                                        <Typography>
                                                            <LinkedInIcon titleAccess="Linkedin Account"/>                           
                                                        </Typography>  
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link  href="/" underline="none" color="inherit">
                                                        <Typography>
                                                            <YouTubeIcon titleAccess="Youtube Account"/>  
                                                                                     
                                                        </Typography>  
                                                    </Link>
                                                </Grid>  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link href="/" underline="none" color="inherit">
                                                        <Typography>
                                                            <TwitterIcon titleAccess="Twitter Account"/>     
                                                        </Typography> 
                                                    </Link>                       
                                                </Grid>  
                                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                                    <Link href="/" underline="none" color="inherit">
                                                        <Typography>
                                                            <FacebookIcon titleAccess="Facebook Account"/>     
                                                        </Typography> 
                                                    </Link>                       
                                                </Grid>                                  
                                            </Grid>        
                                        </Grid>                   
                                    </Grid>
                                </Grid>    
                                <br /><br />
                                <hr class="footerSeparator"/>
                                <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                                    {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>  
                                        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                                            
                                            <Grid item xs={4} sm={4} md={4} lg={3} xl={3}> 
                                                <Link href="/about/terms-use" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Terms of Use
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                            <Grid item xs={4} sm={4} md={4} lg={3} xl={3}> 
                                                <Link href="/about/privacy-policy" underline="none" color="inherit">
                                                    <Typography variant="body2">
                                                        Privacy Policy
                                                    </Typography> 
                                                </Link>  
                                            </Grid>
                                        </Grid>                               
                                    </Grid>    */}
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>  
                                        <Copyright />  
                                    </Grid>      
                                </Grid>
                            </footer>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}