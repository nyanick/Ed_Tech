import { Grid, Paper } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Courses() {
  return (
    <div>
        <div>
            General
        </div>
        <Grid container spacing={2} sx={{marginTop:5}}>
        
        <Grid item xs={12} md={6} lg={3}>
             <Card sx={{ maxWidth: 400 }}>
             <CardMedia
                 component="img"
                 alt="green iguana"
                 height="140"
                 image={require('../../../assets/images/signup-image.jpg')}
             />
             <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 Lizard
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
 
        <Grid item xs={12} md={6} lg={3}>
             <Card sx={{ maxWidth: 400 }}>
             <CardMedia
                 component="img"
                 alt="green iguana"
                 height="140"
                 image={require('../../../assets/images/signup-image.jpg')}
             />
             <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 Lizard
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
 
        <Grid item xs={12} md={6} lg={3}>
             <Card sx={{ maxWidth: 400 }}>
             <CardMedia
                 component="img"
                 alt="green iguana"
                 height="140"
                 image={require('../../../assets/images/signup-image.jpg')}
             />
             <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 Lizard
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
        <Grid item xs={12} md={6} lg={3}>
             <Card sx={{ maxWidth: 400 }}>
             <CardMedia
                 component="img"
                 alt="green iguana"
                 height="140"
                 image={require('../../../assets/images/signup-image.jpg')}
             />
             <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 Lizard
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
 
        <Grid item xs={12} md={6} lg={3}>
             <Card sx={{ maxWidth: 400 }}>
             <CardMedia
                 component="img"
                 alt="green iguana"
                 height="140"
                 image={require('../../../assets/images/signup-image.jpg')}
             />
             <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                 Lizard
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
         
     </Grid>
    </div>
  )
}

export default Courses