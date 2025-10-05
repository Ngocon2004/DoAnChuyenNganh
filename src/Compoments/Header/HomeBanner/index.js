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

        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://thumbs.dreamstime.com/b/animal-pet-toy-store-interior-cartoon-background-supermarket-indoor-cat-dog-care-accessory-to-buy-domestic-canine-cage-282320011.jpg?w=1400" className="w-100"/>
                </div> 
                <div className="item">
                    <img src="https://thumbs.dreamstime.com/b/animal-pet-toy-store-interior-cartoon-background-supermarket-indoor-cat-dog-care-accessory-to-buy-domestic-canine-cage-282320011.jpg?w=1400" className="w-100"/>
                </div> 
                <div className="item">
                    <img src="https://thumbs.dreamstime.com/b/animal-pet-toy-store-interior-cartoon-background-supermarket-indoor-cat-dog-care-accessory-to-buy-domestic-canine-cage-282320011.jpg?w=1400" className="w-100"/>
                </div> 
                <div className="item">
                    <img src="https://thumbs.dreamstime.com/b/animal-pet-toy-store-interior-cartoon-background-supermarket-indoor-cat-dog-care-accessory-to-buy-domestic-canine-cage-282320011.jpg?w=1400" className="w-100"/>
                </div>              
            </Slider>
        </div>

    )


}
export default HomeBanner;