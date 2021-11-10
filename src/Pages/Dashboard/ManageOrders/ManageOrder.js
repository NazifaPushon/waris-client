import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateAltRoundedIcon from '@mui/icons-material/SystemUpdateAltRounded';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const ManageOrder = () => {
    const [orders , setOrders] = useState([])
    const [isUpdated , setIsUpdated] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
          setIsUpdated(false)
          setOrders(data)
        })
    } , [isUpdated])

    const handleUpdate = (id , order) => {
        const updatedOrder = {
          ...order,
          status:'shipped'
        }
        fetch(`http://localhost:5000/updateOrder/${id}` , {
          method:"PUT",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updatedOrder)
        }).then(res => res.json())
        .then(data =>{ 
          console.log(data)
          setIsUpdated(true)
        })
    }

    const handleDelete = (id) => {
      Swal.fire({
        icon:'warning',
        title: 'Do you want to delete the booking',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method:"DELETE",
          }).then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire('Your booking is deleted', '', 'success')
                const newMyOrder = orders.filter(order => order._id !== id)
                setOrders(newMyOrder)
            })
        } 
      })
      
    }
    return (
        <div>
            <h1>some users wil show here</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Order ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {order._id}
              </TableCell>
              <TableCell align="center">{order.email}</TableCell>
              <TableCell align="center">{order.product.name}</TableCell>
              <TableCell align="center">{order.status}</TableCell>
              <TableCell align="center">
              <Button  style={{background:grey[900] , color:"white" ,margin:' 1rem' , padding:'0.5rem 1rem'}} color="inherit" startIcon={<DeleteIcon />} onClick={() => handleDelete(order._id)}>
                     Delete
                </Button>
              <Button style={{background:grey[900] , color:"white" , margin:' 1rem', padding:'0.5rem 1rem'}} color="inherit" onClick={() => handleUpdate(order._id , order)} startIcon={<SystemUpdateAltRoundedIcon />}>
                     Update Status
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrder;