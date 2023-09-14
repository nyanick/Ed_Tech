import { Container, Grid, Paper,Stack,Button, Typography, CardActions, CardMedia } from '@mui/material'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './index.css'
import { Card, CardContent } from '@mui/material';

// import { makeStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { Carear, studCources } from '../../data';
import IZNavBar from '../../components/Header/IZNavBar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

   const useStyles = makeStyles({
     card: {
       transition: 'transform 0.3s, box-shadow 0.3s',
       '&:hover': {
         transform: 'scale(1.1)',
         boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
       },
     },
   });

function StudDashboard() {
  const classes = useStyles();

  const [data,setData] = React.useState([])

  React.useEffect(()=>{
    const fetchData = async () => {
      await axios.get('http://edtech.eu-north-1.elasticbeanstalk.com/ed-tech/api/v1/course',{
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res=>{
        console.log(res.data);
        setData(res.data)
        console.log(data);
      }).catch(error=>{
        console.log("axios aaa",error);
      })
    }
    fetchData()
  },[])

  return (
    <div>
   <IZNavBar/>
    <div className='content'>
      <div style={{textAlign:'center',fontSize:35,}}>
        Welcome
      </div>
    </div>
  <div style={{paddingTop:20}}>
    <div style={{textAlign:'center'}}>
        Build Your Carear
    </div>
    <Typography variant='h2' color={'#3ea7d5'} sx={{textAlign:'center'}}>
        Featured Programmes
    </Typography>

    <div style={{marginBottom:20}}>
       <Container style={{marginTop:15}} maxWidth='lg'>
         <Grid container spacing={5} rowSpacing={10}>
 
           {Carear.map((item,id)=>(
             <Grid item xs={12} md={6} lg={4} >
             <Card className={classes.card} sx={{ maxWidth: 400 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize'
                    }}>
                    {item.course}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize',
                     fontSize:20
                    }}>
                     {item.date} :  {item.carte}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.text}
                    </Typography>
                </CardContent>
                <CardActions> 
                    <Button size="small">Enrol Now</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
             </Card>
             </Grid>
           ))}
           
         </Grid>
       </Container>
     </div>
    </div>
    <Footer/>
  </div>
  )
}

export default StudDashboard