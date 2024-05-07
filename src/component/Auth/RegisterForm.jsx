import { Typography, TextField, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser, registerUser } from '../State/Authentication/Action'


const initialValues ={
    email: "",
    password: "",
    fullName: "",
    role: ""
    
}
const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
      dispatch(registerUser({userData: values, navigate}))
        
    }
  return (
    <div>
    <Typography variant='h5' className="text-center">
    Register
   </Typography>
   <Formik onSubmit={handleSubmit} initialValues={initialValues}>
     <Form>
     <Field
     as={TextField}
     name="fullName"
     label="Full Name"
     fullWidth
     variant="outlined"
     margin ="normal"
    
   />
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
   <FormControl fullWidth margin="normal">
  <InputLabel id="role-simple-select-label">Role</InputLabel>
  <Field
    as={Select}
    labelId="role-simple-select-label"
    id="role-simple-select"
    label="Role"
    name="role"
    // value={role}
    
    // onChange={handleChange}
  >
    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
    
  </Field>
</FormControl>
   <Button sx={{mt:2, padding: "1rem"}} fullWidth type ="submit" variant ='contained'>
   Register
   </Button>

     
     </Form>
   
   </Formik>
   <Typography variant = "body2" align ="center" sx ={{mt:3}} >
   If you have account?
   <Button onClick={()=> navigate("/account/login")}>
   Login
 </Button>
   </Typography>
    
    </div>
  )
}

export default RegisterForm