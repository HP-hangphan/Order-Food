import React from 'react';
import {Card, CardMedia, IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from'react-redux';
import { isPresentInFavorites } from '../config/logic';
import { addToFavorite } from '../State/Authentication/Action';




const RestaurantCard = ({item}) => {
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
   
    const handleAddToFavorite = () => {
        dispatch(addToFavorite({restaurantId: item.id, jwt}))
    }
    const {auth} = useSelector(store => store)

    const handleToRestaurant = () => {
        if(item.open){
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
        }
    }
  
  return (
    <div>
   
        <Card  className='w-[18rem]' >
            <div className={`{$true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`} >
            
             <img src = {item.images[0]} className= "w-full h-[10rem] rounded-t-md object-cover" alt= "" />
            <Chip size ="small" 
                  className = "absolute top-2 left-2"
                  color ={item.open ? "success" : "error"}
                  label = {item.open ? "Open" : "Closed"}>
            
            </Chip> 
            
            </div>

            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p onClick = {handleToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
                    <p className='text-gray-500 text-sm'>
                        {item.description}
                    </p>
                </div>

                <div>
                    <IconButton onClick={handleAddToFavorite} >
                        {isPresentInFavorites(auth.favourites, item)? <FavoriteIcon color="error"/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default RestaurantCard