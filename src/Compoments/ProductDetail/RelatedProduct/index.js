import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItems from "../../ProductItems";
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa";
import React from "react";

const RelatedProduct = (props) => {
    return (
        <>
                    <div className="d-flex align-items-center">
                        <div className="info w-75">
                          <h3 className="mb-0 hd"> {props.title} </h3>
                        </div>
                      </div>

                    <div className="product_row w-100 mt-4">
                        <Swiper
                                slidesPerView={5}
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

        <div className="section">

        </div>
        </>
    )
        
}
export default RelatedProduct;