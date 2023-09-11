import { Container, Grid,Button, Typography, CardActions, CardMedia, Paper } from '@mui/material'
import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { studCources } from '../../data';
import IZNavBar from '../../components/Header/IZNavBar';
import Footer from '../../components/Footer/Footer';
import { Image } from '@mui/icons-material';

   const useStyles = makeStyles({
     card: {
       transition: 'transform 0.3s, box-shadow 0.3s',
       '&:hover': {
         transform: 'scale(1.1)',
         boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
       },
     },
   });

function AboutStudents() {
  const classes = useStyles();

  return (
    <div>
   <IZNavBar/>
    <div className='content'>
     jajjaj
    </div>
    <div style={{marginBottom:20}}>
      <Container maxWidth='lg'>
        
        <Grid container spacing={10} mt={10} justifyContent={'space-between'} alignItems={'center'}>

         <Grid item xs={12} md={6} lg={6} >
          <Typography variant='h5' gutterBottom>
            About Us
          </Typography>
          <Typography variant='h4' gutterBottom>
           Welcome To 
          </Typography>
          <Typography variant='h3' gutterBottom color={'#3ea7d5'}>
            Ed-Technologies
          </Typography>
          <Typography >
          Ed-Technologies is a distinctive anglo-saxon university with future international reputation for higher standards of achievements and innovations in all areas of professionalism, arts, sciences and technology. If you are looking for a life-changing experience that will equip you with the knowledge and skills you will need to meet the future with confidence, we are sure that you will find it in Ed-tech. As a graduate or postgraduate student in Ed-Tech, you will study in modern surroundings that boast exceptionally well-equipped studios, workshops and facilities.
          </Typography>
         </Grid>
         <Grid item xs={12} md={6} lg={6} >
          <img src='https://www.uniba.cm/frontend/images/img1.jpg'
          alt="...nothing here to shows" style={{height:'100%',width:'100%'}} />
         </Grid>
        </Grid>

        <Grid container spacing={10}justifyContent={'space-between'} alignItems={'center'} mt={8}>

         <Grid item xs={12} md={6} lg={6} >
          <img src='https://www.uniba.cm/frontend/images/img1.jpg'
          alt="...nothing here to shows" style={{height:'70%',width:'80%'}} />
         </Grid>
         <Grid item xs={12} md={6} lg={6} >
          <Typography variant='h5' gutterBottom>
            Founding
          </Typography>
          <Typography >
          Ed-Technologies is a distinctive anglo-saxon university with future international reputation for higher standards of achievements and innovations in all areas of professionalism, arts, sciences and technology. If you are looking for a life-changing experience that will equip you with the knowledge and skills you will need to meet the future with confidence, we are sure that you will find it in Ed-tech. As a graduate or postgraduate student in Ed-Tech, you will study in modern surroundings that boast exceptionally well-equipped studios, workshops and facilities.
          </Typography>
         </Grid>
        </Grid>
      </Container>
    </div>
    <Footer/>
  </div>
  )
}

export default AboutStudents