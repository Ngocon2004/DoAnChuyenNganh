import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import Button from '@mui/material/Button';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea'
    ]);

    return (
        <section className="homeCat container mt-1 mb-5">
            <div className="container">
                <h3 className="hd text-center mb-0">Danh mục sản phẩm</h3>
                <Swiper
                    className="homeCat-swiper mt-4"
                    slidesPerView={5}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                > 
                {
                    itemBg.map((item, index) => {
                        return(
                            <SwiperSlide>
                                <Button className="catItem">
                                    <div className="item text-center " style={{background:item}}>
                                        <img src="https://paddy.vn/cdn/shop/files/Pate_MEo_Con_2_940x.jpg?v=1695354433" />
                                        <h5>Pate Mèo</h5>
                                    </div>
                                </Button>
                            </SwiperSlide>
                        )
                    })
                }                

                </Swiper>

            </div>

        </section>
    )
}
export default HomeCat;