import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders,setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [user])

    const handleClick = (id) => {
        Swal.fire({
            icon:'warning',
            title: 'Do you want to delete the booking',
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteOrder/${id}` , {
                    method:"DELETE"
                }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    Swal.fire('Your booking is deleted', '', 'success')
                    const newMyOrder = orders.filter(booking => booking._id !== id)
                    setOrders(newMyOrder)
                })
            } 
          })
        
    }
    return (
        <Container>
            <h3>My Orders</h3>
            <Grid container spacing={2}>
                {
                    orders.map(order => <SingleOrder key={order._id} order={order} handleClick = {handleClick}/>)
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;