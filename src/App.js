import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';

//import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
