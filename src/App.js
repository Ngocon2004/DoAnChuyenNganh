import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Compoments/Header';
import { createContext, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Footer  from './Compoments/Footer';
import ProductModal from './Compoments/ProductModal';
import Listing from './Pages/Listing';
import ProductDetail from './Compoments/ProductDetail';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
//import { Route } from 'react-router-dom';

const Mycontext = createContext();

function App() {

  
  
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")

  },[]);

  const getCountry= async(url)=>{
    const responsive=await axios.get(url).then((res)=>{
        setCountryList(res.data.data)
        console.log(res.data.data)
    })
  }

  const values={
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow
  }

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>

        {
          isHeaderFooterShow===true && <Header />
        }
        
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/listing" exact={true} element={<Listing />}/>
            <Route path="/product" exact={true} element={<ProductDetail />}/>
            <Route path="/cart" exact={true} element={<Cart />}/>
            <Route path="/signin" exact={true} element={<SignIn />}/>
          </Routes>
        <Footer/>
        {isOpenProductModal === true && <ProductModal />}
        </Mycontext.Provider>
    </BrowserRouter>
    

  );
}

export default App;
export {Mycontext};
