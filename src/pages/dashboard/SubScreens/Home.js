import React,{useEffect, useState} from 'react'
import LineChart from '../../../components/Chart/LineChart'
import { Line } from 'react-chartjs-2';
import { Chart as chartjs } from 'chart.js/auto';
import { Container, Grid, Paper,Stack,Button, Typography, CardActions, CardMedia, Box } from '@mui/material'
import { Card, CardContent } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import './chart.css'

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
  const [activeUsers,setActiveUsers] = useState('')
  const [completionRate,setCompletionRate] = useState('')
  const [course,setCourse] = useState('')
  

  const graphData =()=>{
    axios.get('http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/course/teacher/2')
    .then(res=>{
      console.log(res.data[0].course.title);
      setCompletionRate(res.data[0].completionRate)
      setCourse(res.data[0].course.title)
    }).catch(err=>{
      console.log(err);
    })
  }

  const active = () =>{
    axios.get('http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/users/active-sessions')
    .then(res=>{
      console.log(res.data);
      setActiveUsers(res.data)
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    active()
    graphData()
  },[])

  const chartData = {
    labels: ['Red', course, 'Blue','yam'],
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, completionRate, 96,78],
        backgroundColor: "rgba(7, 105, 204, 0.2)",
         borderColor: "#085aa1",
         borderWidth: 2,
         pointBackgroundColor: "#085aa1",
         pointBorderColor: "rgba(255,255,255,0)",
         pointBorderWidth: 15,
         pointHoverRadius: 4,
         pointRadius: 3,
      }
    ]
  };
  const options = {
    responsive: true,
     maintainAspectRatio: false,
     scales: {
       x: {
         grid: {
           display: true,
         },
       },
       y: {
         grid: {
           display: true,
         },
       },
     },
  };
  return (
    <div>
      <h4 className="text-center">Welcome to the Dashboard</h4><br/>
      <div style={{marginBottom:20}}>
       <Container style={{marginTop:15}} maxWidth='lg'>
         <Grid container spacing={5} rowSpacing={10} justifyContent={'space-between'}>
             <Grid item xs={12} md={6} lg={6} >
             <Card className={classes.card} sx={{ minWidth: 400 }}>
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
             <Grid item xs={12} md={6} lg={6} >
             <Card className={classes.card} sx={{ minWidth: 400 }}>
             <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize',textAlign:'center'
                    }}>
                    Total Number Of active Users
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
                    {activeUsers}
                    </Typography>
                </CardContent>
             </Card>
             </Grid>
            
           
         </Grid>
       </Container>
     </div>
     <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
    </div>
  )
}

export default Home