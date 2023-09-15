import { Container, Grid, Paper,Stack,Button, Typography,Select, MenuItem, TextField} from '@mui/material'
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';import { Link } from 'react-router-dom';
import TModalSignUp from '../../components/Auth/Modal';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import Icon from '@mui/material/Icon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

let image = require('../../assets/images/signup-image.jpg')


function AdminSignUp() {
    const navigation = useNavigate()
    const [error, setError] = React.useState('')
      const [open, setOpen] = React.useState(false);
      const [showPassword, setShowPassword] = React.useState(false);
  
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
      const [address,setAddress] = useState('')
      const [email,setEmial] = useState('')
      const [firstName,setfirstName] = useState('')
      const [gender,setgender] = useState('')
      const [lastName,setlastName] = useState('')
      const [phone,setPhone] = useState('')
      const [pwd,setpwd] = useState('')
  
    const registerAdmin = ()=>{
      axios.post('http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/register/admin',{
          address,email,firstName,gender,lastName,phone,pwd
      },{
          headers:{
            'Access-Control-Allow-Origin': '*',
          }
        }).then(res=>{
          localStorage.setItem('email',res.data.data.email)
          if(res.data.apiError){
              setError(res.data.apiError.errorMessage)
              setOpen(true);
              }
              else navigation('/otp')
              }).catch(error=>{
                  console.log('error is ',error);
              })
          }
  return (
    <div style={{height:'100%'}}>
        <Paper sx={{margin:'10%',backgroundColor:'#FFF'}}>
            <Grid container style={{justifyContent:'center',padding:'8%'}}>
                <Grid item sx={12} md={6} xs={12}> 
                
                        <h1 style={{textAlign:'center',fontWeight:'bold'}}>Create An Admin Account</h1>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap',padding:5,gap:2 }}>
                    <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">First Name</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type= 'text' 
                            value={firstName}
                            onChange={e=>setfirstName(e.target.value)}
                        
                        />
                    </FormControl>

                    <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Last Name</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type='text' 
                            value={lastName}
                            onChange={e=>setlastName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                        <TextField
                        variant="standard"
                            id="select"
                            label="Gender"
                            value={gender}
                            onChange={e=>setgender(e.target.value)}
                            select
                            InputProps={{
                                endAdornment: (
                                <Icon>
                                    <ArrowDropDownIcon />
                                </Icon>
                                ),
                            }}
                            >
                        <MenuItem value="MALE">Male</MenuItem>
                        <MenuItem value="FEMALE">Female</MenuItem>
                        </TextField>
                    </FormControl>

                    
                    <FormControl sx={{  width: '100%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                    id="standard-adornment-password"
                    type='email'
                    value={email}
                    onChange={e=>setEmial(e.target.value)}
                />
                    </FormControl>

                    <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Phone</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type='text'
                            value={phone}
                            onChange={e=>setPhone(e.target.value)}
                            
                        />
                    </FormControl>

                    <FormControl sx={{  width: '100%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Address</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type='text'
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                       
                    />
                    </FormControl>
                
               
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={pwd}
                    onChange={e=>setpwd(e.target.value)}
                    endAdornment={
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
                    onClick={registerAdmin}
                    variant="contained">Register</Button>
                </Stack>
                    <Box sx={{marginTop:3}}>
                        <TModalSignUp/>
                    </Box>
                </Grid>
                <Grid item sx={12} md={6} xs={12} justifyContent={'center'} >
                    <img alt='nothing her' src={image} style={{display:'flex',marginLeft:'auto',marginRight:'auto',}}/>
                {/* <Link>Create An Account</L> */}
                {/* <Typography style={{textAlign:'center',marginTop:10}}> Create An Account</Typography> */}
                </Grid>
            </Grid>
        </Paper>
    </div>
    
  )
}

export default AdminSignUp