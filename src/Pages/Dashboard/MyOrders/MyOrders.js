import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import BackBtn from '../../Shared/BackBtn/BackBtn';
import SingleOrder from '../SingleOrder/SingleOrder';

// this componenet will show the Order of a single user
const MyOrders = () => {
    const {user} = useAuth()
    const [orders,setOrders] = useState([])
    useEffect(() => {
        fetch(`https://gentle-forest-49473.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [user.email])

    //delete a order
    const handleClick = (id) => {
        Swal.fire({
            icon:'warning',
            title: 'Do you want to delete the booking',
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gentle-forest-49473.herokuapp.com/deleteOrder/${id}` , {
                    method:"DELETE"
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
        <Container >
            <h1 className="text-center">My Orders</h1>
            <Grid container spacing={2} className="my-5">
                {
                    orders.length > 0 ? 
                        orders.map(order => <SingleOrder key={order._id} order={order} handleClick = {handleClick}/>) : <h1 className="my-5 text-center">You have no order</h1>
                    
                }
            </Grid>
            <BackBtn/>
        </Container>
    );
};

export default MyOrders;