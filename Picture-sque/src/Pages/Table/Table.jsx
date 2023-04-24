// import * as React from "react";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import Axios from 'axios'

function createData(name, accountId, date, status) {
  return { name, accountId, date, status };
}


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const d=(email) => {
    console.log("functin called")
    try{
      Axios.post("https://backend-0sjh.onrender.com/deleteuser", {
        // username: formValues.username,
        email:email
      }).then((res) => {
        setUsers(res.data);
      })
  } 
    catch(err){
      console.log(err.message)
    }
  }
  // console.log(currentUser)
  useEffect(() => {
    Axios.get(`https://backend-0sjh.onrender.com/getusers`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
      <div className="Table">
      <h3>Users</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029",overflow:"auto" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="left">Phone number</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {users.map((user) => (
                <TableRow
                  key={user.username}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="left">{user.phnumber}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  {/* <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell> */}
                  <button className="delbtnnadmin" on onClick={() => d(user.email)}>Delete</button>
                  {/* <button>Delete</button> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
