import Logo from "../../assets/image/logo.png";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import CountryDropDown from "./CountryDropDown";



const Header = () => {
  return (   
    <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center ">Cửa Hàng <b>PetShop</b> Bán Đồ Dùng Cho Thú Cưng</p>
                </div>
            </div>
            
            <header className="header">
                <div className="container">
                    <div className="row ">
                      <div className="logoWapper d-flex align-items-center col-sm-2">
                        <a href='/'><img src={Logo} alt="Logo" style={{height:50}}/></a>
                      </div>

                      <div className='col-sm-10 d-flex align-items-center part2'>
                        <CountryDropDown />
                        <SearchBox />

                       <div className='part3 d-flex align-items-center ml-auto'>
                        <Button className='circle mr-3'> <FiUser /></Button>
                          <div className='ml-auto cartTab d-flex align-items-center'>
                              <span className='price'>0.000 VND</span>
                              <div className='possition-relative'>
                                <Button className='circle ml-2'> <BsBag /></Button>
                                <span className='count d-flex align-items-center justify-content-center'>0</span>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </header>
            <Navigation />

        </div>
    </>
  );
};

export default Header;
