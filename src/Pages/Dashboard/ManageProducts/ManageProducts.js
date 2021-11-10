import DeleteIcon from '@mui/icons-material/Delete';
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
const ManageProducts = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
    } , [])


    const handleDelete = (id) => {
      Swal.fire({
        icon:'warning',
        title: 'Do you want to delete the Product',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:"DELETE",
          }).then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire('Your booking is deleted', '', 'success')
                const newMyOrder = products.filter(product => product._id !== id)
                setProducts(newMyOrder)
            })
        } 
      })
      
    }
    const style1 = { typography: 'h6' ,fontWeight:'bold'}
    const style2 = { typography: 'body1'}
    return (
        <div >
            <h1>All Products</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{fontSize:"25px"}}>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={style1}>Product ID</TableCell>
            <TableCell align="center" sx={style1}>Product name</TableCell>
            <TableCell align="center" sx={style1}>price</TableCell>
            <TableCell align="center" sx={style1}>Image</TableCell>
            <TableCell align="center" sx={style1}>Description</TableCell>
            <TableCell align="center" sx={style1}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" sx={style2}>
                {product._id}
              </TableCell>
              <TableCell align="center" sx={style2}>{product.name}</TableCell>
              <TableCell align="center" sx={style2}>{product.price}</TableCell>
              <TableCell align="center"><img src={product.img} style={{width:"5rem"}} alt="" /></TableCell>
              <TableCell align="center" sx={style2}>{`${product.des.slice(0,50)}...`}</TableCell>
              <TableCell align="cener">
              <Button  startIcon={<DeleteIcon />} style={{background:grey[900] , color:"white" ,margin:'0 1rem' ,padding:'0.5rem 1rem'}} color="inherit" onClick={() => handleDelete(product._id)}>
                     Delete 
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

export default ManageProducts;