import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Ourstore from './Pages/Ourstore';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import CompareProducts from './Pages/CompareProducts';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import SignUP from './Pages/SignUP';
import SingleBlogs from './Pages/SingleBlogs';
import ShopCar from './Pages/ShopCar';
import Wishlist from './Pages/Wishlist';
import ProductView from './Pages/ProductView';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {

  const products = useSelector((state) => state.Products);
  const [categoryVal , setSategoryVal] = useState("All");

  const [currentPage , setCurrentPage] = useState(1);
const [proPerPage ] = useState(6);

const indexOfLastPost =currentPage * proPerPage
const indexOfFirstPost =indexOfLastPost - proPerPage;
const currentProducts = products.slice(indexOfFirstPost , indexOfLastPost);


const [item , setitem] = useState(currentProducts);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout setSategoryVal={setSategoryVal} categoryVal={categoryVal} item={item} setitem={setitem}/>}>
          <Route index element={<Home setSategoryVal={setSategoryVal} categoryVal={categoryVal} item={item} setitem={setitem}/>}/>
          <Route path='/about' element={<About />}/>

          <Route path='/Ourstore' element={<Ourstore  currentProducts={currentProducts} 
          setCurrentPage={setCurrentPage} currentPage={currentPage} proPerPage={proPerPage}
          setSategoryVal={setSategoryVal} item={item} setitem={setitem} categoryVal={categoryVal}/>}/>

          <Route path='/Wishlist' element={<Wishlist/>}/>
          <Route path='/product-details/:id' element={<ProductView/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/Blogs/:id' element={<SingleBlogs/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/compare_products' element={<CompareProducts/>}/>
          <Route path='/ShopCar' element={<ShopCar/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/forgot-password' element={<Forgot/>}/>
          <Route path='/signup' element={<SignUP/>}/>
        </Route>
      </Routes>
      {/* <a href="asdssd">asdddsssdddddddd</a> */}

    </div>
  );
}

export default App;
