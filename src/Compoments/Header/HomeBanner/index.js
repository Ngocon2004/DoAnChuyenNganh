import React from "react";
import Slider from "react-slick";


const HomeBanner=()=>{
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(

        <div className="homeBannerSection">
            <Slider {...settings}>
                
                    <div className="item">
                        <img src="https://paddy.vn/cdn/shop/files/banner_web_1880_x_720_px_d0cd69bd-82c2-4d89-ba1f-8fd08f172cc9.png?v=1759654397&width=1880" className="w-100"/>

                    </div>
                    <div className="item">
                        <img src="https://paddy.vn/cdn/shop/files/banner_web_1880_x_720_px_d0cd69bd-82c2-4d89-ba1f-8fd08f172cc9.png?v=1759654397&width=1880" className="w-100"/>

                    </div>
                    <div className="item">
                        <img src="https://paddy.vn/cdn/shop/files/banner_web_1880_x_720_px_d0cd69bd-82c2-4d89-ba1f-8fd08f172cc9.png?v=1759654397&width=1880" className="w-100"/>

                    </div>
                    <div className="item">
                        <img src="https://paddy.vn/cdn/shop/files/banner_web_1880_x_720_px_d0cd69bd-82c2-4d89-ba1f-8fd08f172cc9.png?v=1759654397&width=1880" className="w-100"/>

                    </div>
                
            </Slider>
        </div>

    )


}
export default HomeBanner;