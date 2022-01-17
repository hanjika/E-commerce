import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Search from './components/Products/Search';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import AlertAddedToCart from './components/Cart/AlertAddedToCart';
import Cart from './components/Cart/Cart';
import CartHistory from './components/Cart/CartHistory';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

const App = () => {
  const userId = 1;

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

  useEffect(() => {
      setSearchedProducts(products);
  }, [products]);

  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (!isLoaded) {
      return <p>Loading...</p>;
  } else {
    return (
      <div className="App">
        <Router>
          <Header toggleHamburger={toggleHamburger} />
          <div className='filter-search'>
            <Navbar handleCategory={handleCategory} category={category} hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />
            <Search products={products} setSearchedProducts={setSearchedProducts} />
          </div>
          <main>
            <Routes>
              <Route path='/' element={<Products searchedProducts={searchedProducts} />} />
              <Route path='/product/:id' element={<ProductDetails userId={userId} currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
              <Route path='/profile' element={<Profile userId={userId} />} />
              <Route path='/cart' element={<Cart userId={userId} currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
            </Routes> 
          </main>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
