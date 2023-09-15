import { Container, Grid,Button, Typography, CardActions, CardMedia, Paper } from '@mui/material'
import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { studCources } from '../../data';
import IZNavBar from '../../components/Header/IZNavBar';
import Footer from '../../components/Footer/Footer';
import { Image } from '@mui/icons-material';

const learning = require('../../assets/images/learning.avif')
const land = require('../../assets/images/land.jpeg')

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
          In the midst of Pakistan's diverse heritage
          lies an unwavering quest for knowledge. At Ed-Tech, we're passionate about
          fostering this quest by making A Levels education both accessible and
          affordable. Merging top-tier content with the latest e-learning technologies, we
          aim to democratise quality education, ensuring every Pakistani student,
          irrespective of their background, is equipped for a brighter future. As a venture
          deeply rooted in the Pakistani ethos, Ed-Tech promises to champion the
          dreams and aspirations of our nation's youth, reshaping our educational
          landscape one lesson at a time.  </Typography>
         </Grid>
         <Grid item xs={12} md={6} lg={6} >
          <img src={learning}
          alt="...nothing here to shows" style={{height:'100%',width:'100%'}} />
         </Grid>
        </Grid>

        <Grid container spacing={10}justifyContent={'space-between'} alignItems={'center'} mt={8}>

         <Grid item xs={12} md={12} lg={12} >
          <img src={land}
          alt="...nothing here to shows" style={{height:'70%',width:'100%'}} />
         </Grid>
        </Grid>
      </Container>
    </div>
    <Footer/>
  </div>
  )
}

export default AboutStudents