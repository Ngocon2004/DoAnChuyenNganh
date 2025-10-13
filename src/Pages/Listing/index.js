import Sidebar from "../../Compoments/Sidebar";



const Listing = () => {
    return (
        <section className="product-listing-page">
            <div className="container">
                <div className="productListing d-flex" >
                    <Sidebar />
                    <div className="content_right">
                       <img alt="banner" src="https://file.hstatic.net/200000264739/file/kc-website-banner-ol-231.2_0c619bed68cb498f9edbf54905c6f9d5.jpg" className="cursor w-100 mb-3"/>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Listing;