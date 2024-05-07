import { Card, CardContent, CardMedia, IconButton, Typography, CardActions } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width: 345}}>
            <CardMedia 
            
            sx={{height: 345}}
            image= 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'></CardMedia>
            <CardContent>
                <Typography variant="h5">
                    VietNam Fast Food
                </Typography>
                <Typography variant="body2">
                    Sale off 50% for your first order
                </Typography>

                <div className='py-2 space-y-2'>
                    <p>{"Ho Chi Minh"}</p>
                    <p className='text-sm text-blue-500'> April 1, 2024 8:00 AM </p>
                    <p className='text-sm text-red-500'> April 6, 2024 10:00 PM </p>
                </div>
            </CardContent>
           {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
      </Card>
    </div>
  )
}

export default EventCard
