import React,{useState} from 'react'
import LineChart from '../../../components/Chart/LineChart'
import { Line } from 'react-chartjs-2';
import { Chart as chartjs } from 'chart.js/auto';
import { Container, Grid, Paper,Stack,Button, Typography, CardActions, CardMedia, Box } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Card, CardContent } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import { Carear } from '../../../data';

const useStyles = makeStyles({
  card: {
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
    },
  },
});

function Home() {
  const classes = useStyles();
  const chartData = {
    labels: ['Red', 'Orange', 'Blue'],
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96],
        backgroundColor: [
          "rgb(75,196,192,1)",
          '#ecf0f1',
          '#50Af95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderWidth: 1,
      }
    ]
  };
  const options = {
    maintainAspectRatio: false,
    // Other options if needed
  };

  return (
    <div>
      <h4 className="text-center">Welcome to the Dashboard</h4><br/>
      <div style={{marginBottom:20}}>
       <Container style={{marginTop:15}} maxWidth='lg'>
         <Grid container spacing={5} rowSpacing={10} alignSelf={'center'}>
             <Grid item xs={12} md={6} lg={4} >
             <Card className={classes.card} sx={{ minWidth: 350 }}>
             <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    Total Number Of Users
                    </Typography>
                    <Box display="flex" justifyContent="center">
                      <AccessibilityIcon />
                    </Box>
                    <Typography style={{
                     textTransform:'capitalize',
                    }}>
                    
                    </Typography>
                    
                    <hr
                      style={{
                        color: 'black',
                        backgroundColor: 'red',
                        height: 1
                      }}
                    />
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    10
                    </Typography>
                </CardContent>
             </Card>
             </Grid>
             <Grid item xs={12} md={6} lg={4} >
             <Card className={classes.card} sx={{ minWidth: 350 }}>
             <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    Total Number Of Users
                    </Typography>
                    <Box display="flex" justifyContent="center">
                      <AccessibilityIcon />
                    </Box>
                    <Typography style={{
                     textTransform:'capitalize',
                    }}>
                    
                    </Typography>
                    
                    <hr
                      style={{
                        color: 'black',
                        backgroundColor: 'red',
                        height: 1
                      }}
                    />
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    10
                    </Typography>
                </CardContent>
             </Card>
             </Grid>
             <Grid item xs={12} md={6} lg={4} >
             <Card className={classes.card} sx={{ minWidth: 350 }}>
             <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    Total Number Of Users
                    </Typography>
                    <Box display="flex" justifyContent="center">
                      <AccessibilityIcon />
                    </Box>
                    <Typography style={{
                     textTransform:'capitalize',
                    }}>
                    
                    </Typography>
                    
                    <hr
                      style={{
                        color: 'black',
                        backgroundColor: 'red',
                        height: 1
                      }}
                    />
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    10
                    </Typography>
                </CardContent>
             </Card>
             </Grid>
           
         </Grid>
       </Container>
     </div>
     <div style={{ width: '70vw',marginTop:20 }}>
      <Line data={chartData} options={options} />
    </div>
    </div>
  )
}

export default Home