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
import Loader from './components/Loader';

const HamStyle = styled.div`
  .navigation ul {
    display: ${props => props.ham};
    @media (min-width: 800px) {
      display: flex;
    }
  }`;

const App = () => {
  const [userId, setUserId] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [currentCart, setCurrentCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [addOrRemove, setAddOrRemove] = useState('add');

  useEffect(() => {
    if (addOrRemove === 'add') {
      currentCart.map(product => (
        setTotal(total + (product.price*product.quantity))
      ))
    }
  }, [currentCart]);

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
      return <Loader type={'opening-loader'} />;
  } else {
    return (
      <HamStyle ham={hamburgerOpen ? 'inline' : 'none'}>
          <div className="App">
          <Router basename='/E-commerce'>
            <Header userId={userId} setUserId={setUserId} hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} setCategory={setCategory} />
            <div className='filter-search'>
              <Navbar handleCategory={handleCategory} category={category} hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} userId={userId} setUserId={setUserId} />
              <Search products={products} setSearchedProducts={setSearchedProducts} />
            </div>
            <main>
              <Routes>
                <Route path='/' element={<Products error={error} category={category} searchedProducts={searchedProducts} />} />
                <Route path='/product/:id' element={<ProductDetails userId={userId} currentCart={currentCart} setCurrentCart={setCurrentCart} setAddOrRemove={setAddOrRemove} />} />
                <Route path='/login' element={<Login userId={userId} setUserId={setUserId} setCategory={setCategory} />} />
                <Route path='/loginsuccess' element={<LoginSuccess />} />
                <Route path='/register' element={<Register userId={userId} />} />
                <Route path='/profile' element={<Profile userId={userId} setCategory={setCategory} />} />
                <Route path='/cart' element={<Cart total={total} setTotal={setTotal} setAddOrRemove={setAddOrRemove} userId={userId} currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
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