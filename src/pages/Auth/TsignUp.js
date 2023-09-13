import { Container, Grid, Paper,Stack,Button, Typography } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';import { Link } from 'react-router-dom';
import TModalSignUp from '../../components/Auth/Modal';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
let image = require('../../assets/images/signup-image.jpg')

function TeacherSignUp() {
  
      const navigation = useNavigate()
      
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const toLogin = ()=>{
        navigation('/login')
      }
  return (
    <div style={{height:'100%'}}>
        <Paper sx={{margin:'10%',backgroundColor:'#FFF'}}>
            <Grid container style={{justifyContent:'center',padding:'8%',alignItems:'center'}}>
                <Grid item sx={12} md={6} xs={12}> 
                
                        <h1 style={{textAlign:'center',fontWeight:'bold'}}>Create Teachers Account</h1>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap',padding:5,gap:2 }}>
                    <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Address</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='text'
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        
                        >
                        <HomeIcon color='black' fontSize='15'/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                
                <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='email'
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        
                        >
                        <EmailIcon color='black' fontSize='15'/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                    <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">First Name</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='text'
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        
                        >
                        <PersonIcon color='black' fontSize='15'/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='email'
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        
                        >
                        <EmailIcon color='black' fontSize='15'/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Matricule</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='text'
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        
                        >
                        <AccountCircleIcon color='black' fontSize='15'/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Phone</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='Phone'
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        
                        >
                        <EmailIcon color='black' fontSize='15'/>
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    startAdornment={
                    <InputAdornment position='start'>
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormGroup >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                </FormGroup>
               

                    </Box>
                <Stack spacing={2} ml={5} mr={5} >
                    <Button 
                    onClick={toLogin}
                    variant="contained">Create Account</Button>
                </Stack>
                <Stack spacing={2} ml={5} mr={5} >
                    <Button onClick={toLogin} sx={{textAlign:'center',paddingTop:2,fontSize:20}} >login</Button>
                </Stack>
                 </Grid>
                <Grid item sx={12} md={6} xs={12} justifyContent={'center'} >
                    <img alt='nothing her' src={image} style={{display:'flex',marginLeft:'auto',marginRight:'auto'}}/>
                {/* <Link>Create An Account</L> */}
                <Typography style={{textAlign:'center',marginTop:10}}> Create An Account</Typography>
                </Grid>
            </Grid>
        </Paper>
    </div>
    
  )
}

export default TeacherSignUp