import { Container, Grid, Paper,Stack,Button, Typography,Select, MenuItem, TextField} from '@mui/material'
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
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
import axios from 'axios';
import Icon from '@mui/material/Icon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// {
//     "address": "marie",
//     "email": "a@gmail.com"",
//     "enrollmentYear": 2020,
//     "firstName": "gael",
//     "gender": "male",
//     "graduationYear": 2024,
//     "lastName": "gael",
//     "major": "physics",
//     "phone": "650292470",
//     "pwd": "UBa19P0170@"
//   }
let image = require('../../assets/images/signup-image.jpg')

function StudentSignUp() {
  const navigation = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [Address,setAddress] = useState('')
    const [email,setEmial] = useState('')
    const [enrolmentYear,setEnrolmentYear] = useState('')
    const [firstName,setfirstName] = useState('')
    const [gender,setgender] = useState('')
    const [gradYear,setGradYear] = useState('') 
    const [lanstName,setLastName] = useState('')
    const [major,setMejor] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')

  const toLogin = ()=>{
    axios.post('http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/register/student',{
        Address,email,enrolmentYear,firstName,gender,gradYear,lanstName,major,phone,password
    }).then(res=>{
        console.log(res.status);
        navigation('/login')
    }).catch(error=>{
        console.log('error is ',error);
    })
  }
  return (
    <div style={{height:'100%'}}>
        <Paper sx={{margin:'10%',backgroundColor:'#FFF'}}>
        <Grid container style={{justifyContent:'center',padding:'8%',alignItems:'center'}}>
                <Grid item sx={12} md={6} xs={12}>
                    <h1 style={{textAlign:'center',fontWeight:'bold'}}>Create A Students Account</h1>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap',padding:5,gap:2 }}>
                    <FormControl sx={{  width: '100%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Address</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type='text'
                        value={Address}
                        onChange={(e)=>setAddress(e.target.value)}
                       
                    />
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
                    <TextField
                    variant="standard"
                        id="select"
                        label="Enrolment Year"
                        value={enrolmentYear}
                        onChange={e=>setEnrolmentYear(e.target.value)}
                        select
                        InputProps={{
                            endAdornment: (
                            <Icon>
                                <ArrowDropDownIcon />
                            </Icon>
                            ),
                        }}
                        >
                    <MenuItem value="10">2019</MenuItem>
                    <MenuItem value="10">2020</MenuItem>
                    <MenuItem value="20">2021</MenuItem>
                    <MenuItem value="10">2022</MenuItem>
                    </TextField>
                    </FormControl>


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
                    <MenuItem value="10">male</MenuItem>
                    <MenuItem value="20">female</MenuItem>
                    </TextField>
                    </FormControl>
               
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                    <TextField
                    variant="standard"
                        id="select"
                        label="Graduation Year"
                        value={gradYear}
                        onChange={e=>setGradYear(e.target.value)}
                        select
                        InputProps={{
                            endAdornment: (
                            <Icon>
                                <ArrowDropDownIcon />
                            </Icon>
                            ),
                        }}
                        >
                    <MenuItem value="10">2019</MenuItem>
                    <MenuItem value="10">2020</MenuItem>
                    <MenuItem value="20">2021</MenuItem>
                    <MenuItem value="10">2022</MenuItem>
                    </TextField>
                    </FormControl>
              
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Last Name</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type='text'
                        value={lanstName}
                        onChange={e=>setLastName(e.target.value)}
                        
                    />
                </FormControl>
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Major</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type='text' 
                        value={major}
                        onChange={e=>setMejor(e.target.value)}
                        
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
                <FormControl sx={{ width: '100%',marginTop:3 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type= 'password'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                       
                    />
                </FormControl>
                <FormGroup >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                </FormGroup>
                    </Box>
                    
                    
                <Stack spacing={2} ml={5} mr={5} >
                    <Button 
                    onClick={toLogin}
                    variant="contained">SignUp</Button>
                </Stack>
                    <Box sx={{marginTop:3}}>
                        <TModalSignUp/>
                    </Box>
                </Grid>
                <Grid item sx={12} md={6} xs={12} justifyContent={'center'} >
                    <img alt='nothing here' src={image} style={{display:'flex',marginLeft:'auto',marginRight:'auto'}}/>
                </Grid>
            </Grid>
        </Paper>
    </div>
    
  )
}

export default StudentSignUp