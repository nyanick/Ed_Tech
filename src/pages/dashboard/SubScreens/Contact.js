import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

import { Table,TableBody,TableCell,TableHead,TableRow } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        border: '1px solid black',
        borderCollapse: 'collapse',
        // width:'100%',
      },
      cellHead: {
        border: '1px solid black',
        padding: '15px',
        backgroundColor:'gray',
        // color:'#fff'
        fontSize:20
      },
      cell: {
        border: '1px solid black',
        padding: '8px',
      },
});



function Contacts() {
const [students,setStudents] = useState([])

    useEffect(()=>{
        axios.get('http://edtech.eu-west-2.elasticbeanstalk.com:80/ed-tech/api/v1/users/students',{
          headers:{
            'Access-Control-Allow-Origin': '*',
            'Authorization' : `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(res=>{
            setStudents(res.data.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
  const classes = useStyles();

  return (
    <div>
        <h3 style={{textAlign:'center'}} >Student List</h3><br/>
       <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cellHead}>User Name</TableCell>
            <TableCell className={classes.cellHead}>Email Address</TableCell>
            <TableCell className={classes.cellHead}>Address</TableCell>
            <TableCell className={classes.cellHead}>Gender</TableCell>
            <TableCell className={classes.cellHead}>Major</TableCell>
            <TableCell className={classes.cellHead}>Enrollment Year</TableCell>
            <TableCell className={classes.cellHead}>Graduation Year</TableCell>
          </TableRow>
        </TableHead>
        
            <TableBody >
            {students.map((item,id)=>(
            <TableRow key={id}>
              <TableCell className={classes.cell}>{item.usernames}</TableCell>
              <TableCell className={classes.cell}>{item.email}</TableCell>
              <TableCell className={classes.cell}>{item.address}</TableCell>
              <TableCell className={classes.cell}>{item.gender}</TableCell>             
              <TableCell className={classes.cell}>{item.major}</TableCell>
              <TableCell className={classes.cell}>{item.enrollmentYear}</TableCell>
              <TableCell className={classes.cell}>{item.graduationYear}</TableCell>
            </TableRow>
        )       )}
          </TableBody>
      </Table>
    </div>
  );
}

export default Contacts;
