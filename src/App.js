import './App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Products/Search';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart/Cart';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [category, setCategory] = useState('');

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
        <Header toggleHamburger={toggleHamburger} />
        <div className='filter-search'>
          <Navbar handleCategory={handleCategory} category={category} hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />
          <Search products={products} setSearchedProducts={setSearchedProducts} />
        </div>
        <main>
          <Router>
            <Routes>
              <Route path='/' element={
                <Products products={products} searchedProducts={searchedProducts} addToCart={(productData) => {
                    console.log(productData);
                  }}
                />}
              />
              <Route path='/product/:id' element={<ProductDetails addToCart={(productData) => {
                    console.log(productData);
                  }} 
                />} />
              <Route path='/cart' element={< Cart />} />
              {/* <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route> */}
            </Routes>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
