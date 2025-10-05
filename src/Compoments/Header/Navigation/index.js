import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';


//import { RiHome2Line } from "react-icons/ri";

const Navigation = () => {

  const [isOpenSidebarVal,setisOpenSidebarVal]= useState(false);
    return (
            <nav>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-3 navPart1'>
                      <div className='catWrapper'>
                        <Button className='allCatTab align-items-center' onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                          <span className='icon1 mr-2'><IoIosMenu /></span>
                          <span class="text">Danh Mục</span>
                          <span className='icon2 ml-2'><FaAngleDown /></span>
                        </Button>                      

                        <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                          <ul> 
                            <Link to="/"><Button>Thức ăn</Button></Link>
                            <Link to="/"><Button>Vệ sinh</Button></Link>
                            <Link to="/"><Button>Quần áo</Button></Link>
                            <Link to="/"><Button>Chăm sóc sức khỏe</Button></Link>
                            <Link to="/"><Button>Thiết bị</Button></Link>
                            <Link to="/"><Button>Phụ kiện</Button></Link>
                            <Link to="/"><Button>Đồ chơi</Button></Link>
                            <Link to="/"><Button>Khác</Button></Link>
                              <Link to="/"><Button>Phụ kiện</Button></Link>
                                    <Link to="/"><Button>Đồ chơi</Button></Link>
                                    <Link to="/"><Button>Khác</Button></Link>
                                     <Link to="/"><Button>Phụ kiện</Button></Link>
                                    <Link to="/"><Button>Đồ chơi</Button></Link>
                                    <Link to="/"><Button>Khác</Button></Link>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className=' list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Trang Chủ</Button></Link></li>
                            <li className='list-inline-item'>
                              <Link to="/"><Button>Sản Phẩm</Button><FaAngleDown/></Link>
                <div className='subMenu shadow'>
                                    <Link to="/"><Button>Thức ăn</Button></Link>
                                    <Link to="/"><Button>Vệ sinh</Button></Link>
                                    <Link to="/"><Button>Quần áo</Button></Link>
                                    <Link to="/"><Button>Chăm sóc sức khỏe</Button></Link>
                                    <Link to="/"><Button>Thiết bị</Button></Link>
                                    <Link to="/"><Button>Phụ kiện</Button></Link>
                                    <Link to="/"><Button>Đồ chơi</Button></Link>
                                    <Link to="/"><Button>Khác</Button></Link>
                                   

                                    
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>Chó</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Mèo</Button></Link></li>                          
                            <li className='list-inline-item'><Link to="/"><Button>Blogs</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Giới Thiệu</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Liên Hệ</Button></Link></li>

                        </ul>
                    </div>
                  </div>
                  
                </div>
            </nav>
    );
};

export default Navigation;
