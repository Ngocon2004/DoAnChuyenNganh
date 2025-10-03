import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";

const Navigation = () => {
    return (
            <nav>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-3 navPart1'>
                      <Button className='allCatTab align-items-center'>
                        <span className='icon1 mr-2'><IoIosMenu /></span>
                         <span class="text">Danh Mục</span>
                         <span className='icon2 ml-2'><FaAngleDown /></span>
                      </Button>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className=' list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Trang Chủ</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Sản Phẩm</Button> <FaAngleDown/></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Thú Cưng</Button></Link></li>                       
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
