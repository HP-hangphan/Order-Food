import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {}


  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center'>
        <PersonIcon sx={{fontSize: "9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>Name: </h1>
        <p>Email: hangphanpricy@gmail.com</p>
        <Button variant="outlined" onClick = {handleLogout} sx ={{margin:"2rem 0rem"}}>Logout</Button>      
      </div>
    </div>
  )
}

export default UserProfile