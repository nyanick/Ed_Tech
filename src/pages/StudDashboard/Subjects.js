import { Container, Grid, Paper,Stack,Button, Typography, CardActions, CardMedia } from '@mui/material'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './index.css'
import { Card, CardContent } from '@mui/material';

// import { makeStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { studCources } from '../../data';
import IZNavBar from '../../components/Header/IZNavBar';
import Footer from '../../components/Footer/Footer';

   const useStyles = makeStyles({
     card: {
       transition: 'transform 0.3s, box-shadow 0.3s',
       '&:hover': {
         transform: 'scale(1.1)',
         boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
       },
     },
   });
function Subjects() {
    const classes = useStyles();
  return (
    <div>
    <IZNavBar/>
     <div className='content'>
       <div style={{textAlign:'center',fontSize:35,}}>
         Welcome
       </div>
     </div>
     <div style={{marginBottom:20}}>
       <Container style={{marginTop:15}} maxWidth='lg'>
         <div style={{marginTop:30,marginBottom:30,paddingBottom:15,paddingTop:40,
           color:'black',fontWeight:'400',fontSize:25
         }}> {studCources.length} Subjects Registered </div>
         <Grid container spacing={5} rowSpacing={10}>
 
           {studCources.map((item,id)=>(
             <Grid item xs={12} md={6} lg={4} >
             <Card className={classes.card} sx={{ maxWidth: 400 }}>
             <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                     style={{objectFit:'fill'}}
                    image={item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize'
                    }}>
                    {item.course}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     {item.date}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     {item.carte}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions> 
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
             </Card>
             </Grid>
           ))}
           
         </Grid>
       </Container>
     </div>
     <Footer/>
   </div>
  )
}

export default Subjects
