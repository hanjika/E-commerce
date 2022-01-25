import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Search from './components/Products/Search';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import Login from './components/Login-Register/Login';
import Register from './components/Login-Register/Register';
import Error from './components/Error/Error';
import LoginSuccess from './components/Login-Register/LoginSuccess';

const App = () => {
  const [userId, setUserId] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [currentCart, setCurrentCart] = useState([]);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  const handleCategory = (cat) => {
    if (cat === '') {
      setCategory(cat);
    } else {
      setCategory(`category/${cat}`);
    }
  }

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/' + category).then(
      (result) => {
          setIsLoaded(true);
          setProducts(result.data);
      },
      (error) => {
          setIsLoaded(true);
          setError(error);
      }
    )
  }, [category]);

  const [searchedProducts, setSearchedProducts] = useState(products);

  const HamStyle = styled.div`
    .navigation ul {
      display: ${hamburgerOpen ? 'inline' : 'none'};
      @media (min-width: 800px) {
        display: flex;
      }
    }`;

  useEffect(() => {
      setSearchedProducts(products);
  }, [products]);

  if (error) {
    return (
      <Router>
        <Error message={error.message} setCategory={setCategory} />;
        <Routes>
          <Route path='/' element={<Products category={category} searchedProducts={searchedProducts} />} />
        </Routes>
      </Router>
    )
  } else if (!isLoaded) {
      return <p>Loading...</p>;
  } else {
    return (
      <HamStyle>
          <div className="App">
          <Router>
            <Header userId={userId} setUserId={setUserId} toggleHamburger={toggleHamburger} setCategory={setCategory} />
            <div className='filter-search'>
              <Navbar handleCategory={handleCategory} category={category} hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} userId={userId} setUserId={setUserId} />
              <Search products={products} setSearchedProducts={setSearchedProducts} />
            </div>
            <main>
              <Routes>
                <Route path='/' element={<Products error={error} category={category} searchedProducts={searchedProducts} />} />
                <Route path='/product/:id' element={<ProductDetails userId={userId} currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
                <Route path='/login' element={<Login setUserId={setUserId} />} />
                <Route path='/loginsuccess' element={<LoginSuccess />} />
                <Route path='/register' element={<Register userId={userId} />} />
                <Route path='/profile' element={<Profile userId={userId} />} />
                <Route path='/cart' element={<Cart userId={userId} currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
              </Routes> 
            </main>
          </Router>
          <Footer />
        </div>
      </HamStyle>
    )
  }
}

export default App;