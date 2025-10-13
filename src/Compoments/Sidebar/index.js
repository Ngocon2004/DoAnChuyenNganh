import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import React, { useState } from 'react';


const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    return (
        <div className="sidebar">
            <div className="filterBox">
            <h5> Danh Sách Sản Phẩm</h5>
            <div className='scroll'>
                <ul>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Chó" />
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Mèo" />
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Vật nuôi khác" />
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Thiết bị thông minh" />
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Hành mới về" />
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="thương hiệu" />
                    </li>
                </ul>
            </div>

            </div>
           
            <div className="filterBox">
                <h5> Lọc Theo Giá</h5>
                <RangeSlider
                    value={value}
                    onInput={setValue}
                    min={0}
                    max={100000}
                    step={100}/>
                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>Gia từ <strong className='text-dark'> Rs:{value[0]}</strong></span>
                        <span className='ml-auto'>Đến <strong className='text-dark'> Rs:{value[1]}</strong></span>
                    </div>
            </div>

            <div className="filterBox">
                <h5> Danh Sách Sản Phẩm</h5>
                <div className='scroll'>
                    <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Còn hàng" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Đang giảm giá" />
                        </li>
                        
                    </ul>
                </div>

            </div>

            <div className="filterBox">
                <h5> Thương Hiệu</h5>
                <div className='scroll'>
                    <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Nutrience" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Royal Canin" />
                        </li>
                         <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Kit Cat" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Tropiclean" />
                        </li>
                         <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Ciao Churu" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Nekko" />
                        </li>
                         <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Monge" />
                        </li>
                    </ul>
                </div>
            </div>
            {/*<Link to="#"><img src='' className='w-100'/></Link>*/}

        </div>
    )
}
export default Sidebar;