import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {

    return (
        <div className = "home">
            <div className="home__container">
                <img className = "home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-CA_FT_PVD5870._CB418053281_.jpg"
                 alt=""
                 />
                 <div className="home__row">
                     <Product id = '1' title = "the lean startup" price = {29.99} 
                     image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                     rating = {5} />
                     <Product id = '2'  title = "The Book of Secret Wisdom: The Prophetic Record of Human Destiny and Evolution" 
                        price = {14.97}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/51X7LUK-NXL._SX331_BO1,204,203,200_.jpg'
                        rating = {5}
                     />
                 </div>

                 <div className="home__row">
                 <Product id = '3'  title = "Introducing Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release" 
                        price = {49.99}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61Igpi7yWML._AC_SL1000_.jpg'
                        rating = {2}
                     />
                 <Product id = '4'  title = "TRENDOUX Winter Gloves Men Women - Anti Slip Warm Lining Knit Touch Screen Glove" 
                        price = {13.56}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/81EdrdjNJxL._AC_SY550_.jpg'
                        rating = {4}
                     />
                 <Product id = '5'  title = "3D Mask Bracket | Silicone Mask Inner Support Frame | Reusable Washable" 
                        price = {7.56}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61SXo9XevOL._AC_SL1500_.jpg'
                        rating = {3}
                     />
                 </div>

                 <div className="home__row">
                 <Product id = '6'  title = "Samsung 43 TU7000 4K Ultra HD HDR Smart TV" 
                        price = {468.00}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/91-gHZ%2BX9YL._AC_SL1500_.jpg'
                        rating = {5}
                     />
                 </div>
            </div>
        </div>
    )
}

export default Home
