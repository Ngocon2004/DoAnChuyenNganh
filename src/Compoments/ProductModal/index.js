import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useContext } from "react";
import { Mycontext } from "../../App";
import ProductZoom from "../ProductZoom";
 

const ProductModal = (props) => {
    
    const context = useContext(Mycontext);
    {/*const [slideIndex, setSlideIndex] = useState(0);*/}

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

            <div className=" productDetailModal row mt-2 flex-nowrap">
                <div className='col-md-6'>
                    <ProductZoom />
                </div>
                
                <div className='col-md-7 d-inline-block '>
                    <div className="d-flex mt-4">
                        <div className="info flex-grow-1">
                            <h5>Hạt Royal Canin Poodle Adult Cho Chó Poodle Trưởng Thành </h5>
                            <span className="text-success d-block mb-2">Còn hàng</span>
                            <div >
                                <span className="oldPrice gl mr-3">500.000đ</span>
                                <span className="netPrice text-danger gl">420.000đ</span>
                            </div>

                            <p className="mt-3">Thức ăn hạt Royal Canin Poodle Adult dành cho chó Poodle trưởng thành trên 10 tháng tuổi, 
                                giúp duy trì vóc dáng cân đối và bộ lông mềm mượt. Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và
                                tăng cường sức đề kháng cho chó.</p>
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