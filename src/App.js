import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import RestaurantDetail from './component/Restaurant/RestaurantDetail';
import Cart from './component/Cart/Cart';
import Profile from './component/profile/Profile';
import CustomerRoute from './Routes/CustomerRoute';
import { getUser } from './component/State/Authentication/Action';
import { useDispatch, useSelector } from'react-redux';
import { useEffect } from'react';
import { store } from './component/State/store';


function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const {auth} = useSelector(store => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt|| jwt))
  }, [auth.jwt]);
  
  return (
   <ThemeProvider theme={darkTheme}>
    <CssBaseline></CssBaseline>
    {/*<Navbar></Navbar>*/}
      {/*<Home/>*/}
     
     {/*<RestaurantDetail/>*/}
     {/*<Cart/>*/}
     {/*<Profile/>*/}
    <CustomerRoute/>
    
    </ThemeProvider>
  );
}

export default App;
