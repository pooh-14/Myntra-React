// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
  import Home from './Components/Home';
  import Register from './Components/Register';
  import Login from './Components/Login';
  import AddProduct from './Components/AddProduct';
  import AllProducts from './Components/AllProducts';
  import SingleProduct from './Components/SingleProduct';
  import Cart from './Components/Cart';
import Profile from './Components/Profile';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const { state } = useContext(AuthContext);
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/addproduct' element={<AddProduct/>}/>
      <Route exact path='/allproducts' element={<AllProducts/>}/>
      <Route exact path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
