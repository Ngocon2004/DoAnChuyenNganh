import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import React, { useState } from 'react';
import { Mycontext } from "../../App";

const ProductItems = (props) => {

    const context = useContext(Mycontext);

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);

    }
    const closeProductModal = () => {
        context.setisOpenProductModal(false);
    }
    return (
        <>
            <div className={`productItem ${props.itemView || ''}`}>
                <div className="imgWrapper" onClick={()=>viewProductDetails(1)}>
                    <img alt="product" src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                </div>

                <div className="info">
                    <h6>Hạt Royal Canin Poodle Adult Cho Chó Poodle Trưởng Thành </h6>
                    <span className="text-success d-block mb-2">Còn hàng</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                    <div className="priceRow">
                        <span className="oldPrice">500.000đ</span>
                        <span className="netPrice text-danger">420.000đ</span>
                    </div>
                    <div className="infoActions">
                        <Button  className="addToCart">Add to cart</Button>
                    </div>
                </div>

                <span className="badge badge-primary">28%</span>
                <div className="actions">
                    <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                    <Button><FaRegHeart/></Button>
                </div>
            </div>
        </>
    )
}
export default ProductItems;