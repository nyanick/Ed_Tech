import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Paper,CardMedia,Button, Typography, CardActions,  } from '@mui/material'
import { Card, CardContent } from '@mui/material';
import IZNavBar from '../../../components/Header/IZNavBar';
import Footer from '../../../components/Footer/Footer';

const useStyles = makeStyles({
  card: {
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
    },
  },
});


function Courses() {
  const classes = useStyles();
  const [data,setData] = React.useState([])
  const [category, setCategory] = React.useState('');
  const categories = ['Science'];


React.useEffect(()=>{
  const fetchData = async () => {
    await axios.get('http://edtech.eu-north-1.elasticbeanstalk.com/ed-tech/api/v1/course',{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>{
      setData(res.data.content)
    }).catch(error=>{
      console.log("axios aaa",error);
    })
  }
  fetchData()
},[])


  
return (
  <div>   
   <div style={{marginBottom:20}}>
     <Container style={{marginTop:15}} maxWidth='lg'>
       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:30,marginBottom:30,paddingBottom:15,paddingTop:40,}}>
       <div style={{
         color:'black',fontWeight:'400',fontSize:25
       }}> {data.length} Courses  </div>
       <div>
       <FormControl sx={{ width: 340,marginTop:3 }} variant="standard">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
       </div>
       </div>
      
       <Grid container spacing={5} rowSpacing={10}>

         {data.map((item,id)=>(
           <Grid item xs={12} md={6} lg={4} >
           <Card className={classes.card} sx={{ maxWidth: 400 }}>
           {/* <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                   style={{objectFit:'fill'}}
                  image={item.image}
              /> */}
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{
                   textTransform:'capitalize'
                  }}>
                  {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.description}
                 
                  </Typography>
                  
                  
                  <Typography variant="body2" style={{
                   textTransform:'capitalize',
                   marginTop : 10
                  }}>
                   Start Date: {item.schedule.startDateTime.slice(0,10)}
                  </Typography>
                  <Typography variant="body2" style={{
                   textTransform:'capitalize'
                  }}>
                   
                   End Date: {item.schedule.startDateTime.slice(0,10)}
                  </Typography>
                  <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     By : {item.teacher.firstName}
                     {' '}{item.teacher.lastName}
                  </Typography>
                  
                  
              </CardContent>
              <CardActions> 
                  <Button size="small">Learn More</Button>
              </CardActions>
           </Card>
           </Grid>
         ))}
         
       </Grid>
     </Container>
   </div>
 </div>
)
}

export default Courses