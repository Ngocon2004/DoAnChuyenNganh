import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useRef } from 'react';
import ProductZoom from '../ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../QuantityBox';
import { BsCartDash } from "react-icons/bs";
import { useState } from 'react';
import { LuHeart } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import RelatedProduct from './RelatedProduct';
//import { useContext } from "react";
//import { Mycontext } from "../../App";

const ProductDetail = () => {
    const [activeSize, setActiveSize] = useState(null);
    const[activeTabs, setActiveTabs]=useState(0);
    const zoomRef = useRef(null);

    const isActive=(index)=>{
        setActiveSize(index)
    }

    return (
        <>
        <section className="productDetail section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <ProductZoom />

                    </div>
                    <div className="col-md-7">
                        <h2 className="hd text-capitalize"> Chi tiết tất cả các loại sản phẩm  </h2>

                        <ul className="list list-inline d-flex align-items-center">
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text-light mr-2"> Thương hiệu: </span>
                                    <span>aclfas</span>                            
                                </div>
                            </li>

                           <li className='list-inline-item '>
                                <div className='d-flex align-items-center mr-4'>
                                    <Rating className="read-only" value={4.5} readOnly size="small" precision={0.5} />
                                    <span className='ml-2'> (Xem 3 đánh giá) </span>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex info mb-4">
                            <span className="oldPrice gl mr-3">500.000đ</span>
                            <span className="netPrice text-danger gl">420.000đ</span>
                        </div>
                        <span className="badge badge-success mb-3">Còn hàng</span>
                        <p>Thức ăn hạt Royal Canin Poodle Adult dành cho chó Poodle trưởng thành trên 10 tháng tuổi, 
                            giúp duy trì vóc dáng cân đối và bộ lông mềm mượt. Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và
                            tăng cường sức đề kháng cho chó.</p>
                        <ul className="mr-3 ml-4">
                            <li>Thành phần dinh dưỡng cân đối, giàu protein và vitamin.</li>
                            <li>Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và tăng cường sức đề kháng.</li>
                            <li>Hạt nhỏ phù hợp với kích thước hàm của chó Poodle.</li>
                            <li>Giúp duy trì vóc dáng cân đối và bộ lông mềm mượt.</li>
                        </ul>
                        <div className="productSize d-flex align-items-center mt-4">
                            <span className="text-light mr-2">Size/ Cân nặng: </span>
                            <ul className="list list-inline mb-0 pl-4">
                             <li className='list-inline-item'>< a className={`tag ${activeSize===0 ?'active':''}`} onClick={()=> isActive(0)}>0.5kg</a> </li>
                             <li className='list-inline-item'>< a className={`tag ${activeSize===1 ?'active':''}`} onClick={()=> isActive(1)}>1kg</a> </li>
                             <li className='list-inline-item'>< a className={`tag ${activeSize===2 ?'active':''}`} onClick={()=> isActive(2)}>3kg</a> </li>
                             <li className='list-inline-item'>< a className={`tag ${activeSize===3 ?'active':''}`} onClick={()=> isActive(3)}>5kg</a> </li>
                             <li className='list-inline-item'>< a className={`tag ${activeSize===4 ?'active':''}`} onClick={()=> isActive(4)}>7kg</a> </li>


                            </ul>
                        </div>


                        <div className="d-flex align-items-center mt-4">
                            <div className="quantityDrop d-flex align-items-center mr-4">
                                <QuantityBox />
                            </div>
                            <Button className='btn-blue btn-lg btn-big btn-round'><BsCartDash /> &nbsp; Thêm vào giỏ hàng</Button>

                            <Tooltip title="Add to Wishlist" placement="top">
                                <Button className='btn-blue btn-lg btn-big btn-circle ml-4'><LuHeart /> </Button>
                            </Tooltip>
                            <Tooltip title="Add to Compare" placement="top">
                                <Button className='btn-blue btn-lg btn-big btn-circle ml-4'><IoIosGitCompare /> </Button>
                            </Tooltip>
                        </div>

                       
                    </div>

                </div>

                <br/>
                <div className="card mt-5 p-5detailPageTabs">
                    <div className='customTabs'>
                        <ul className='list list-inline '>
                            <li className='list-inline-item'>
                                <Button className={` ${activeTabs===0 ?'active':''}`} onClick={()=> setActiveTabs(0)}>Mô tả</Button>
                            </li>
                             <li className='list-inline-item'>
                                <Button className={` ${activeTabs===1 ?'active':''}`} onClick={()=> setActiveTabs(1)}>Thông tin chi tiết</Button>
                            </li>
                             <li className='list-inline-item'>
                                <Button className={` ${activeTabs===2 ?'active':''}`} onClick={()=> setActiveTabs(2)}>Đánh giá</Button>
                            </li>
                            
                        </ul>

                        <br/>

                        <div className='tabContent ml-4'>
                                {activeTabs===0 && <div> 
                                <p>Thức ăn hạt Royal Canin Poodle Adult dành cho chó Poodle trưởng thành trên 10 tháng tuổi, 
                                giúp duy trì vóc dáng cân đối và bộ lông mềm mượt. Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và
                                tăng cường sức đề kháng cho chó.</p>
                            <ul className="mr-3 ml-4">
                                <li>Thành phần dinh dưỡng cân đối, giàu protein và vitamin.</li>
                                <li>Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và tăng cường sức đề kháng.</li>
                                <li>Hạt nhỏ phù hợp với kích thước hàm của chó Poodle.</li>
                                <li>Giúp duy trì vóc dáng cân đối và bộ lông mềm mượt.</li>
                            </ul>
                            </div>
                            }
                        </div>

                        <br/>
                        <div class="table-responsive">
                            
                            {activeTabs===1 &&
                             <table class="table table-bordered">
                                <tbody>
                                    <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                     <tr className='stand-up '>
                                        <th> Thương hiệu</th>
                                        <td> Royal Canin </td>
                                    </tr>
                                </tbody>

                             </table>
                            }   
                        </div>
                        <div className='tabContent ml-4'>
                             {activeTabs===2 && 
                            <div className='row '>
                                <div className='col-md-8'>
                                     <h3 className='mb-4'>Đánh giá cho Chi tiết tất cả các loại sản phẩm</h3>
                                    <br/>
                                    <div className='reviewScroll'>
                                        <div className="reviewBox mb-4 border-bottom">
                                            <div className='info'>
                                                <div className="d-flex align-items-center w-100" >
                                                    <h5> Nguyen Van A</h5>
                                                    <Rating className="read-only ml-5" value={5} readOnly size="small" precision={0.5} />
                                                </div>
                                                <div>
                                                    <h6 className='date'> 20/10/2023</h6>
                                                    <p className='mt-2'>Sản phẩm rất tốt, giao hàng nhanh, đóng gói cẩn thận. Sẽ ủng hộ shop lần sau.</p>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <br class="res-hide"/>

                                    <form class="reviewForm">
                                        <h4 className='mb-4'> Thêm đánh giá của bạn</h4>
                                        <div class="form-group">
                                            <textarea className="form-control shadow" name="review" placeholder="Nhập đánh giá của bạn"></textarea>
                                        </div>
                                        
                                        <div className="row">
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <span className="MuiRating-root MuiRating-sizeMedium css-1i1gfbe"> 
                                                        <Rating className="read-only ml-5" value={0} readOnly size="small" precision={0.5} /> </span>
                                                
                                                </div>

                                            </div>

                                        </div>
                                        <br/>

                                        <div class="form-group">
                                            <Button className='btn-blue btn-lg btn-big btn-round'> &nbsp; Gửi đánh giá</Button>

                                        </div>
                                    </form>


                                </div>
                            </div>
                            }
                        </div>

                    </div>

                </div>
                <br/>

                <RelatedProduct title="Sản phẩm tương tự" />
                <br/>
                <RelatedProduct title="Sản phẩm bán chạy" />

            </div>

        </section>
      
        </>
    )
}
export default ProductDetail;