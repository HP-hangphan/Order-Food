import React from 'react';
import {Card, CardMedia, IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';

const RestaurantCard = ({item}) => {
  return (
    <div>
        <Card className='w-[18rem]'>
            <div className={`{$true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
            <img src={item.images[0]} className= "w-full h-[10rem] rounded-t-md object-cover" alt=""/>
               
            <Chip size ="small" 
                  className = "absolute top-2 left-2"
                  color ={true ? "success" : "error"}
                  label = {true ? "Open" : "Closed"}>
            
            </Chip> 
            
            </div>

            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>{item.name}</p>
                    <p className='text-gray-500 text-sm'>
                        {item.description}
                    </p>
                </div>

                <div>
                    <IconButton>
                        {true? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default RestaurantCard