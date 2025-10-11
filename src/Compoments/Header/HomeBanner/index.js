import React from "react";
import Slider from "react-slick";


const HomeBanner=()=>{
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
    };
    
    return(
        <div className="container mt-1">
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://file.hstatic.net/200000264739/file/banner-desktop-kitcat_83a1d61bf9ce4bdc8cda190905d10948.jpg" className="w-100"/>
                    </div> 
                    <div className="item">
                        <img src="https://paddy.vn/cdn/shop/files/paddy-natural-core_1880_x_720_px.png?v=1748848766&width=1880" className="w-100"/>
                    </div> 
                    <div className="item">
                        <img src="https://file.hstatic.net/200000264739/file/kc-website-banner-ol-231.3_62a4f9865a1645d8ae2bdb2f37607908.jpg" className="w-100"/>
                    </div> 
                    <div className="item">
                        <img src="https://file.hstatic.net/200000264739/file/kc-website-banner-ol-231.2_0c619bed68cb498f9edbf54905c6f9d5.jpg" className="w-100"/>
                    </div>              
                    <div className="item">
                        <img src="https://thumbs.dreamstime.com/b/animal-pet-toy-store-interior-cartoon-background-supermarket-indoor-cat-dog-care-accessory-to-buy-domestic-canine-cage-282320011.jpg?w=1400" className="w-100"/>
                    </div>
                </Slider>
            </div> 
        </div>

    )


}
export default HomeBanner;