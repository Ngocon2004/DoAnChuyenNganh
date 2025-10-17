import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Compoments/QuantityBox";
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
    return(
        <>
        <section className=" section cartPage">
            <div className="container">
                <h2 className=" hd mb-4">Giỏ hàng của bạn</h2>
                <p>Bạn <b>3</b> có sản phẩm  trong giỏ hàng.</p>
                <div className="row"> 
                    <div className="col-md-8 pr-0">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="45%">Sản phẩm</th>
                                        <th width="25%">Giá</th>
                                        <th width="20%">Số lượng</th>
                                        <th width="10%">Tổng</th>
                                        <th width="15%">Xóa </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td  width="40%">
                                        <Link to= "/product"> 
                                            <div className="d-flex align-items-center cartItemWrapper">
                                                <div className="imgWrapper mr-3">
                                                    <img alt="product" src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                                                </div>
                                                <div className="info ">
                                                    <h6 className="mb-1">Mũ bảo hiểm Royal Canin Poodle Adult cho chó Poodle trưởng thành</h6>
                                                    <Rating name="read-only" value={4.5} readOnly  size="small"/>
                                                </div>
                                            </div>
                                        </Link>

                                    </td>

                                    <td width="25%">420K</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="20%">420K</td>
                                    <td width="15%"> <span className="remove"><IoMdClose className="cursor"/></span></td>

                                </tr>

                                <tr>
                                    <td  width="40%">
                                        <Link to= "/product"> 
                                            <div className="d-flex align-items-center cartItemWrapper">
                                                <div className="imgWrapper mr-3">
                                                    <img alt="product" src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                                                </div>
                                                <div className="info ">
                                                    <h6 className="mb-1">Mũ bảo hiểm Royal Canin Poodle Adult cho chó Poodle trưởng thành</h6>
                                                    <Rating name="read-only" value={4.5} readOnly  size="small"/>
                                                </div>
                                            </div>
                                        </Link>

                                    </td>

                                    <td width="25%">420K</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="20%">420K</td>
                                    <td width="15%"> <span className="remove"><IoMdClose className="cursor"/></span></td>

                                </tr>
                                
                                 <tr>
                                    <td  width="40%">
                                        <Link to= "/product"> 
                                            <div className="d-flex align-items-center cartItemWrapper">
                                                <div className="imgWrapper mr-3">
                                                    <img alt="product" src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                                                </div>
                                                <div className="info ">
                                                    <h6 className="mb-1">Mũ bảo hiểm Royal Canin Poodle Adult cho chó Poodle trưởng thành</h6>
                                                    <Rating name="read-only" value={4.5} readOnly  size="small"/>
                                                </div>
                                            </div>
                                        </Link>

                                    </td>

                                    <td width="25%">420K</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="20%">420K</td>
                                    <td width="15%"> <span className="remove"><IoMdClose className="cursor"/></span></td>

                                </tr>

                                 <tr>
                                    <td  width="40%">
                                        <Link to= "/product"> 
                                            <div className="d-flex align-items-center cartItemWrapper">
                                                <div className="imgWrapper mr-3">
                                                    <img alt="product" src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                                                </div>
                                                <div className="info ">
                                                    <h6 className="mb-1">Mũ bảo hiểm Royal Canin Poodle Adult cho chó Poodle trưởng thành</h6>
                                                    <Rating name="read-only" value={4.5} readOnly  size="small"/>
                                                </div>
                                            </div>
                                        </Link>

                                    </td>

                                    <td width="25%">420K</td>
                                    <td width="25%"><QuantityBox/></td>
                                    <td width="20%">420K</td>
                                    <td width="15%"> <span className="remove"><IoMdClose className="cursor"/></span></td>

                                </tr>
                            </tbody>
                        </table>

                           

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow p-3 cartDetails">
                            <h4 className="mb-3 hd">Tổng giỏ hàng</h4>

                            <div className="d-flex align-items-center mb-3 ">
                                <span className="flex-grow-1">Tạm tính:</span>
                                <span className="ml-auto text-red font-weight-bold">1.260K</span>

                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span className="flex-grow-1">Phí vận chuyển:</span>
                                <span className="ml-auto "><b>Miễn phí</b></span>

                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span className="flex-grow-1">Địa chỉ:</span>
                                <span className="ml-auto "><b>Đà Lạt, Lâm Đồng</b></span>

                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <span className="flex-grow-1">Tổng:</span>
                                <span className="ml-auto text-red font-weight-bold">1.260K</span>

                            </div>
                            <br/>

                            <Button className="btn-blue btn-lg btn-block btn-round"><><IoCartOutline/> Thêm vào giỏ hàng</></Button>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Cart;