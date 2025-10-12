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

//import { Route } from 'react-router-dom';

const Mycontext = createContext();

function App() {

  
  
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

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
    setisOpenProductModal
  }

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        <Footer/>
        {isOpenProductModal === true && <ProductModal />}
        </Mycontext.Provider>
    </BrowserRouter>
    

  );
}

export default App;
export {Mycontext};
