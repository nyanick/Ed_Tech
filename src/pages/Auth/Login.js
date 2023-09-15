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
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import TModalSignUp from '../../components/Auth/Modal';
import axios from 'axios';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

let image = require('../../assets/images/signup-image.jpg')

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function Login() {
    const [email, setemail] = React.useState('')
    const [pwd, setpwd] = React.useState('')
    const [error, setError] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false);
    const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
     const navigate = useNavigate()
     
    const login = async()=>{
        // navigate('/')
        console.log(email,pwd);
        await axios.post('http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/auth',
        {
            email,pwd
        }).then(res=>{
            console.log(res.data);
            // console.log('profil',res.data.data.user.profile);
            if(res.data.apiError){
                    setError(res.data.apiError.errorMessage)
                    setOpen(true);
            }
            else if(res.data.apiSuccess === 200){
                if(res.data.data.user.profile ==="student"){
                    navigate('/home')
                }else{
                    navigate('/')
                }
            }
            localStorage.setItem('email',res.data.user.email)
            localStorage.setItem('gender',res.data.user.gender)
            localStorage.setItem('phone',res.data.user.phone)
            localStorage.setItem('profile',res.data.user.profile)
        }).catch(err=>{
            console.log("the error ",err);
        })
    }
    // console.log('bla',error);
    
  return (
    <div style={{height:'100%'}}>
        <Paper sx={{margin:'10%',backgroundColor:'#FFF'}}>
            <Grid container style={{justifyContent:'center',padding:'8%'}}>
                <Grid item sx={12} md={6} xs={12}> 
                        <h1 style={{textAlign:'center',fontWeight:'bold'}}>Login</h1>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap',padding:5,gap:2 }}>
                    <FormControl sx={{  width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='email'
                    value={email}
                    onChange={e=>setemail(e.target.value)}
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
            
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={pwd}
                    onChange={e=>setpwd(e.target.value)}
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

                    <Stack spacing={2} sx={{ width: '100%' }}>
    
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                {error}
                                </Alert>
                            </Snackbar>
                            </Stack>
                <Stack spacing={2} ml={5} mr={5} >
                    <Button onClick={login} variant="contained">Login</Button>
                </Stack>
    
                    
                        <TModalSignUp/>
                    
                </Grid>
                <Grid item sx={12} md={6} xs={12} justifyContent={'center'} >
                    <img alt='nothing her' src={image} style={{display:'flex',marginLeft:'auto',marginRight:'auto',}}/>
                {/* <Link>Create An Account</L> */}
                
                </Grid>
            </Grid>
        </Paper>
    </div>
    
  )
}

export default Login