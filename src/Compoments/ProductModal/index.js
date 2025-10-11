import { MdClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';

const ProductModal = (props) => {
    return (
        <Dialog className="productModal" open={true} onClose={() => props.closeProductModal()}>
            <Button className='close_' onClick={()=>props.closeProductModal()}><MdClose /></Button> 
            <h4 className='mb-2 font-weight-bold'>Chi tiết sản phẩm</h4> 
            <div className="d-flex align-items-center ">
                <div className="d-flex align-items-center mr-4">
                    <span>Thương hiệu:</span>
                    <span className="ml-2"><b>Royal Canin</b></span>
                </div>
                <Rating className="read-only" value={4} readOnly size="small" precision={0.5} />
            </div>
            <hr />
            <div className="d-flex flex-wrap">
                <div className="imgWrapper mr-4 mb-4">
                    <img alt="product" src="https://paddy.vn/cdn/shop/products/hat-royal-canin-poodle-adult-cho-cho-poodle-truong-thanh-paddy-2.jpg?v=1724921685" className="w-100"/>
                </div>
                <div className="info flex-grow-1">
                    <h5>Hạt Royal Canin Poodle Adult Cho Chó Poodle Trưởng Thành </h5>
                    <span className="text-success d-block mb-2">Còn hàng</span>
                    <div>
                        <span className="oldPrice ml-3">500.000đ</span>
                        <span className="netPrice text-danger ml-4">420.000đ</span>
                    </div>
                    <p className="mt-3">Thức ăn hạt Royal Canin Poodle Adult dành cho chó Poodle trưởng thành trên 10 tháng tuổi, giúp duy trì vóc dáng cân đối và bộ lông mềm mượt. Công thức đặc biệt giúp hỗ trợ sức khỏe hệ tiêu hóa và tăng cường sức đề kháng cho chó.</p>
                    <ul>
                        <li>Thành phần dinh dưỡng cân đối, giàu protein và vitamin.</li>
                    </ul>
                </div>
            </div>
        </Dialog>

    )
}

export default ProductModal;