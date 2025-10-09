import { TfiFullscreen } from "react-icons/tfi";
import { SwiperSlide } from "swiper/react";
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";

const ProductItems = () => {
    return (
        
        <SwiperSlide>
            <div className="productItem">
                <div className="imgWrapper">
                    <img src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                    </div>
                    <div className="info">
                        <h4 className="text-center">Hạt Royal Canin Poodle Adult Cho Chó Poodle Trưởng Thành - Paddy</h4>
                        <span className="text-success d-block">Còn hàng</span>
                        <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                            <div>
                            <span className="oldPrice ml-3">500.000đ</span>
                            <span className="netPrice text-danger ml-4">420.000đ</span>
                            </div>
                        </div>
                        <span className="badge badge-primary">28%</span>
                        <div className="actions">
                            <Button><TfiFullscreen/></Button>
                            <Button><FaRegHeart/></Button>
                        </div>
            </div>
        </SwiperSlide>
    )
}
export default ProductItems;