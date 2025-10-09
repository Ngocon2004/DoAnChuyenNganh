import HomeBanner from "../../Compoments/Header/HomeBanner";
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
            <section className="homeProducts">
              <div className="container">
                <div className="row">
                    <div className="col-md-3">
                      <div className="banner">
                        <img src={catb} className="cursor w-100"/>
                      </div>                      
                    </div>
                   {/*  <div className="col-md-3">
                      <div className="banner">
                        <img src={dogb} className="cursor w-100"/>
                      </div>                      
                    </div>*/}

                    <div className="col-md-9 productRow">
                      <div className="d-flex align-items-center ">
                        <div className="info w-75">
                          <h3 className="mb-0 hd"> Sản phẩm  bán chạy</h3>
                          <p className="text-light text-sml mb-0">Khám phá những sản phẩm đang hot nhất hiện nay</p>
                        </div>
                        <Button className="viewAllBnt ml-auto">Xem Thêm <FaArrowRight /></Button>

                      </div>
                      <div className="product_row w-100 mt-4">
                        <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                        />
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
                              
                      </div>                     
                    </div>
                </div>

              </div>
            </section>
       </>
    )
}
export default Home;