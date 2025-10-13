import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import { useRef } from 'react';
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useContext } from "react";
import { Mycontext } from "../../App";

const ProductModal = (props) => {

    {/*const [slideIndex, setSlideIndex] = useState(0);*/}
    const zoomSliderBig = useRef();
    const zoomSlider= useRef();

    const context = useContext(Mycontext);

    var settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false
    };

    const settings2 = { 
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <Dialog className="productModal" open={true} onClose={() => context.setisOpenProductModal(false)}>
            <Button className='close_' onClick={() => context.setisOpenProductModal(false)}><MdClose /></Button> 
            <h4 className='mb-2 font-weight-bold'>Thông Tin Sản Phẩm</h4> 
            <div className="d-flex align-items-center ">
                <div className="d-flex align-items-center mr-4">
                    <span>Thương hiệu:</span>
                    <span className="ml-2"><b>Royal Canin</b></span>
                </div>
            <Rating className="read-only" value={4} readOnly size="small" precision={0.5} />
            </div>
            <hr />

            <div className=" productDetailModal row mt-2">
                <div className='col-md-6'>
                    <div className='productZoom position-relative'>
                        <div className='badge badge-primary'>20%</div>
                        <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}> 
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'}
                                    />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-3.jpg?v=17249216855'}
                                    />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'}
                                    />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'}
                                    />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1}
                                    src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'}
                                    />
                            </div>
                        </Slider>
                    </div>

                    <Slider {...settings} className='zoomSlider mt-3' ref={zoomSlider}>
                        <div className='item' >
                            <img alt="product" src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'} 
                            className='w-100' onClick={() => goto(0)}/>
                        </div>

                        <div className='item' >
                            <img alt="product" src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-3.jpg?v=17249216855'} 
                            className='w-100' onClick={() => goto(1)}/>
                        </div>

                        <div className='item' >
                            <img alt="product" src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'} 
                            className='w-100' onClick={() => goto(2)}/>
                        </div>

                        <div className='item' >
                            <img alt="product" src={'https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685'} 
                            className='w-100' onClick={() => goto(3)}/>
                        </div>
                    </Slider>
                </div>
                
                <div className='col-md-7'>
                    <div className="d-flex mt-4">
                        <div className="info flex-grow-1">
                            <h5>Hạt Royal Canin Poodle Adult Cho Chó Poodle Trưởng Thành </h5>
                            <span className="text-success d-block mb-2">Còn hàng</span>
                            <div >
                                <span className="oldPrice gl mr-3">500.000đ</span>
                                <span className="netPrice text-danger gl">420.000đ</span>
                            </div>

                            <p className="mt-3">Thức ăn hạt Royal Canin Poodle Adult dành cho chó Poodle trưởng thành trên 10 tháng tuổi, giúp duy trì vóc dáng cân đối và bộ lông mềm mượt. Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và tăng cường sức đề kháng cho chó.</p>
                            <ul>
                                <li>Thành phần dinh dưỡng cân đối, giàu protein và vitamin.</li>
                            </ul>

                            <div className="d-flex align-items-center "> 
                            <QuantityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round'>Thêm vào giỏ hàng</Button>
                            </div>

                            <div className="d-flex align-items-center mt-5 actions">
                                <Button className='btn-round btn-sml ' variant="outlined" ><IoIosHeartEmpty />Thêm vào yêu thích</Button>
                                 <Button className='btn-round btn-sml ml-3' variant="outlined" ><MdOutlineCompareArrows />So sánh</Button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </Dialog>
    )
}

export default ProductModal;