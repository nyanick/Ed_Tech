import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function OtpInputs() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const [error, setError] = React.useState('')
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

  const email = localStorage.getItem('email')

  const submit = () =>{
    axios.get(`http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/register/verification/${email}/${otp}`,{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res=>{
      if(res.data.apiError){
        setError(res.data.apiError.errorMessage)
        setOpen(true);
      }
      else {
        localStorage.setItem('token',res.data.data.token)
        localStorage.setItem('email',res.data.data.user.email)
        localStorage.setItem('gender',res.data.data.user.gender)
        localStorage.setItem('phone',res.data.data.user.phone)
        localStorage.setItem('profile',res.data.data.user.profile)
         if(res.data.data.user.profile != "student" ){
            navigate('/Teacher')
         }
         else{
            navigate('/home')
         }
      }
    }).catch(error=>{
      console.log('axios',error);
    })
  }

  return (
    <React.Fragment>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
        <Box>
            <Button onClick={submit} variant="contained"
            style={{
                border: '4px double #cccccc',
                borderRadius: '10px',
                fontSize: '28px',
                cursor: 'pointer',
                margin: '10px',
              }}
             
            >Submit</Button>
        </Box>
      </div>
      
    </div>
    {/* <Stack spacing={2} sx={{ width: '100%' }}>
    
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
        </Alert>
    </Snackbar>
    </Stack> */}
    </React.Fragment>
  );
}

export default OtpInputs;
