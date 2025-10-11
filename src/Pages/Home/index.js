import HomeBanner from "../../Compoments/Header/HomeBanner";
import HomeCat from "../../Compoments/HomeCat";
import catb from "../../assets/image/catb.png";
import dogb from "../../assets/image/dogb.png";
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItems from "../../Compoments/ProductItems";
import { IoMailOutline } from "react-icons/io5";



const Home = () => {
    return (
        <>
            <HomeBanner/>
            <HomeCat/>
            <section className="homeProducts">
              <div className="container">
                <div className="row">
                    <div className="col-md-3 sticky">
                        <div className="banner banner-tall mb-4">
                          <Button> 
                            <img alt="cat banner" src={catb} className="cursor w-100"/>
                          </Button>
                        </div>
                        <div className="banner banner-small">
                          <Button>
                            <img alt="dog banner" src={dogb} className="cursor w-100"/>
                          </Button>
                        </div>
                    </div>

                    <div className="col-md-9 productRow">
                      <div className="d-flex align-items-center">
                        <div className="info w-75">
                          <h3 className="mb-0 hd"> Sản phẩm  bán chạy</h3>
                          <p className="text-light text-sml mb-0">Khám phá những sản phẩm đang hot nhất hiện nay</p>
                        </div>
                        <Button className="viewAllBnt ml-auto">Xem Thêm <FaArrowRight /></Button>
                      </div>
                      {/** product slider 1 */}
                      <div className="product_row w-100 mt-4">
                        <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                        >
                          <SwiperSlide>
                            <ProductItems />
                          </SwiperSlide>

                          <SwiperSlide>
                            <ProductItems />
                          </SwiperSlide>

                          <SwiperSlide>
                            <ProductItems />
                          </SwiperSlide>

                          <SwiperSlide>
                            <ProductItems />
                          </SwiperSlide>

                          <SwiperSlide>
                            <ProductItems />
                          </SwiperSlide>

                          <SwiperSlide>
                            <ProductItems />
                          </SwiperSlide>
                       </Swiper>
                      </div>

                      <div className="d-flex align-items-center mt-5">
                        <div className="info w-75">
                          <h3 className="mb-0 hd"> Sản phẩm Mới</h3>
                          <p className="text-light text-sml mb-0">Khám phá những sản phẩm đang hot nhất hiện nay</p>
                        </div>
                        <Button className="viewAllBnt ml-auto">Xem Thêm <FaArrowRight /></Button>
                      </div>
                      {/* product slider 2 */}
                      <div className="product_row  productRow2 w-100 mt-4">
                        <ProductItems />
                        <ProductItems />
                        <ProductItems />
                        <ProductItems />
                      </div>

                      <div className="d-flex mt-5 mb-4 bannerSec">
                        <div className="banner">
                          <Button>
                            <img alt="dog banner" src="https://paddy.vn/cdn/shop/files/dog_banner_1370x.jpg?v=1670135189" className="cursor w-100"/>
                          </Button>
                        </div>

                        <div className="banner">
                          <Button>
                            <img alt="cat banner" src="https://paddy.vn/cdn/shop/files/cat_banner_1370x.jpg?v=1670135516" className="cursor w-100"/>
                          </Button>
                        </div>
                      </div>

                    </div>
                </div>

              </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 ">
                    <p className="text-white mb-1">Đặt đơn hàng đầu tiên giảm ngay 20%</p>
                    <h3 className="text-white mb-2">Nhận các ưu đãi đặc biệt</h3>
                    <p className=" text-white mb-3">Đăng ký ngay để không bỏ lỡ các ưu đãi hấp dẫn từ chúng tôi!</p>

                    <form>
                      <IoMailOutline/>
                      <input type="text" placeholder="Địa chỉ email của bạn"/>
                      <Button className="subscribeBnt">Đăng Ký</Button>
                    </form>
                  </div>

                  <div className="col-md-6 ">
                    <img src={"https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png"}/>                               
                  </div>

                </div>
              </div>
            </section>

            

       </>
    )
}
export default Home;