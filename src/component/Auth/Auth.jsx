import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { style } from "../Cart/Cart";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/");
    }
  return (
    <>
        <Modal onClose ={handleClose} open={ 
            location.pathname === '/account/register' || location.pathname === '/account/login'
            
        }>

        <Box sx ={style}>
            {location.pathname === '/account/register' ? <RegisterForm/> : <LoginForm/>}
        </Box>
        
        </Modal>
    
    </>
  )
}

export default Auth