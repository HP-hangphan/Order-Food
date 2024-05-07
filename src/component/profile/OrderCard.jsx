import { Button, Card, CardMedia } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
   <Card className='flex justify-between items-center p-5'>
   <div className='flex items-center space-x-5'>
    <CardMedia className='h-16 w-16' component="img" image ="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_1280.jpg" alt=''/>
    <div >
        <p>Biryani</p>
        <p>199.000d</p>
    </div>
   </div>
   <div>
    <Button className='cursor-not-allowed'>Completed</Button>
   </div>
   
   </Card>
  )
}

export default OrderCard
