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
        axios.get('http://edtech.eu-west-2.elasticbeanstalk.com:80/ed-tech/api/v1/users/students')
        .then(res=>{
            console.log('data',res.data.data);
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
          </TableRow>
        </TableHead>
        
            <TableBody >
            {students.map((item,id)=>(
            <TableRow key={id}>
              <TableCell className={classes.cell}>{item.usernames}</TableCell>
              <TableCell className={classes.cell}>{item.email}</TableCell>
            </TableRow>
        )       )}
          </TableBody>
      </Table>
    </div>
  );
}

export default Contacts;
