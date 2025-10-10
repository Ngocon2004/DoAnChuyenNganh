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
import Rating from "@mui/material/Rating";
import ProductItems from "../../Compoments/ProductItems";


const Home = () => {

  var productSliderOptions = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
  };

    return (
        <>
            <HomeBanner/>
            <HomeCat/>
            <section className="homeProducts">
              <div className="container">
                <div className="row">
                    <div className="col-md-3 sticky">
                        <div className="banner banner-tall mb-4">
                          <img src={catb} className="cursor w-100"/>
                        </div>
                        <div className="banner banner-small">
                          <img src={dogb} className="cursor w-100"/>
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
                      <div className="product_row  productRow2 w-100 mt-4 d-flex">
                        <ProductItems />
                        <ProductItems />
                        <ProductItems />
                        <ProductItems />
                      </div>

                      <div className="d-flex mt-5 mb-4 bannerSec">
                        <div className="banner">
                          <img src="https://paddy.vn/cdn/shop/files/dog_banner_1370x.jpg?v=1670135189" className="cursor w-100"/>
                        </div>

                        <div className="banner">
                          <img src="https://paddy.vn/cdn/shop/files/cat_banner_1370x.jpg?v=1670135516" className="cursor w-100"/>
                        </div>
                      </div>

                    </div>
                </div>

              </div>
            </section>
       </>
    )
}
export default Home;