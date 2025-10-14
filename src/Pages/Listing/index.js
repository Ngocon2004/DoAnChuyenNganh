import Sidebar from "../../Compoments/Sidebar";
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { IoGrid } from "react-icons/io5";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { height } from "@mui/system";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import ProductItems from "../../Compoments/ProductItems";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Listing = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');

    const openDropdown = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <section className="product-listing-page">
            <div className="container">
                <div className="productListing d-flex" >
                    <Sidebar />
                    <div className="content_right">
                       <img alt="banner" src="https://file.hstatic.net/200000264739/file/kc-website-banner-ol-231.2_0c619bed68cb498f9edbf54905c6f9d5.jpg" className="cursor w-100 mb-3 "/>
                    </div>

                    <div className="showBy mt-3 mb-3 d-flex align-items-center ">
                        <div className="d-flex align-items-center btnWrapper">
                            <Button className={productView==='one'&&'act'} onClick={() => setProductView('one')}><IoMdMenu /></Button>
                            <Button className={productView==='three'&&'act'} onClick={() => setProductView('three')}><IoGrid /></Button>
                            <Button className={productView==='four'&&'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                        </div>
                        <div className="ml-auto showByFilter">
                            <Button  onClick={handleClick}>Hiện SL sản phẩm <FaAngleDown /></Button>
                            <Menu
                                className="w-100 showPerPageDrown"
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openDropdown}
                                onClose={handleClose}
                                slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                                }}
                            >
                                <MenuItem onClick={handleClose}>10</MenuItem>
                                <MenuItem onClick={handleClose}>20</MenuItem>
                                <MenuItem onClick={handleClose}>30</MenuItem>
                                <MenuItem onClick={handleClose}>40</MenuItem>
                                <MenuItem onClick={handleClose}>50</MenuItem>
                            </Menu>

                        </div>

                    </div>
                    <div className="productListing">
                        <ProductItems itemView={productView}/>
                        <ProductItems itemView={productView}/>
                        <ProductItems itemView={productView}/>
                        <ProductItems itemView={productView}/>
                        <ProductItems itemView={productView}/>
                        <ProductItems itemView={productView}/>
                        <ProductItems itemView={productView}/>

                    </div>
                    <div className=" d-flex align-items-center justify-content-center mt-4 mb-4">
                         <Pagination count={10} color="primary"  size="large"/>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Listing;