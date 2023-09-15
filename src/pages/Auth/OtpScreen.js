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

function OtpScreen() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const [error, setError] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  
    const email = localStorage.getItem('email')
    console.log('emaila',email);
  
    const submit = () =>{
      axios.get(`http://edtech.eu-north-1.elasticbeanstalk.com:80/ed-tech/api/v1/register/verification/${email}/${otp}`).then(res=>{
        console.log(res.data);
        if(res.data.apiError){
          setError(res.data.apiError.errorMessage)
          setOpen(true);
        }
        else navigate('/login')
      }).catch(error=>{
        console.log('axios',error);
      })
    }
  return (
    <div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          separator={<span>-ss</span>}
          inputStyle={{ width: '60px', height: '60px', fontSize: '24px' }}
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
    <Stack spacing={2} sx={{ width: '100%' }}>
    
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
        </Alert>
    </Snackbar>
    </Stack>
    </div>
  )
}

export default OtpScreen