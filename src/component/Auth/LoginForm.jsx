import { Typography, TextField, Button } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'
import { useDispatch } from 'react-redux'


const initialValues ={
    email: "",
    password: ""
}
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
      console.log(values);
      dispatch(loginUser({userData: values, navigate}))

    }
  return (
    <div>
      <Typography variant='h5' className="text-center">
       Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
        <Field
        as={TextField}
        name="email"
        label="Email"
        fullWidth
        variant="outlined"
        margin ="normal"
       
      />
      <Field
        as={TextField}
        name="password"
        label="Password"
        fullWidth
        variant="outlined"
        margin ="normal"
        type="password"
       
      />
      <Button sx={{mt:2, padding: "1rem"}} fullWidth type ="submit" variant ='contained'>
      Log In
      </Button>

        
        </Form>
      
      </Formik>
      <Typography variant = "body2" align ="center" sx ={{mt:3}} >
      Don't have an account yet?
      <Button onClick={()=> navigate("/account/register")}>
      Register
    </Button>
      </Typography>
     
    </div>
  )
}

export default LoginForm
