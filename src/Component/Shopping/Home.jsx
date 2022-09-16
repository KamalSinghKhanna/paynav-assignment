import React, {useEffect} from "react";
import "./Home.css";
import Aos from "aos"
import "aos/dist/aos.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gold from '../../images/gold.png'
import swiggy from '../../images/swiggy.png'
import zivame from '../../images/z.png'
import bigBasket from '../../images/bn.png'
import flipcart from '../../images/flipcart.png'
import makeMyTrip from '../../images/my.png'
import myntra from '../../images/myntra.png'
import ellipse1 from '../../images/Ellipse1.png'
import ellipse2 from '../../images/Ellipse2.png'
import ellipse3 from '../../images/Ellipse3.png'
import ellipse4 from '../../images/Ellipse4.png'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1250, min: 800 },
    items: 3,
  },
  miniTablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  return (
    <div className="home-sec">
      <div className="ellipse">
        <img className="img-ellipse1" src={ellipse1} alt="" />
        <img className="img-ellipse2" src={ellipse2} alt="" />
        <img className="img-ellipse3" src={ellipse3} alt="" />
        <img className="img-ellipse4" src={ellipse4} alt="" />
      </div>
      <div className="heading" data-aos="fade-right">
        <span>Earn</span>
        <h1>Shopping is investing</h1>
      </div>
      <div className="least-inner-box">
        <div className="overlay"></div>
      <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            removeArrowOnDeviceType={[
              "tablet",
              "miniTablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
            className="owl-carousel owl-theme slider"
          >
            <div className="item">
              <div>
              <img src={swiggy} alt="" />
              </div>
              <div>
                <span>Swiggy</span>
                <p>upto 14% <img src={gold} alt="" /> gold</p>
              </div>
            </div>
            
            <div className="item">
              <div>
              <img src={flipcart} alt="" />
              </div>
              <div>
                <span>Flipcart</span>
                <p>upto 14% <img src={gold} alt="" /> gold</p>
              </div>
            </div>
            
            <div className="item">
              <div>
              <img src={makeMyTrip} alt="" />
              </div>
              <div>
                <span>Book My Show</span>
                <p>upto 14% <img src={gold} alt="" /> gold</p>
              </div>
            </div>
            
            <div className="item">
              <div>
              <img src={myntra} alt="" />
              </div>
              <div>
                <span>Myntra</span>
                <p>upto 14% <img src={gold} alt="" /> gold</p>
              </div>
            </div>
            
            <div className="item">
              <div>
              <img src={bigBasket} alt="" />
              </div>
              <div>
                <span>Big Basket</span>
                <p>upto 14% <img src={gold} alt="" /> gold</p>
              </div>
            </div>
            <div className="item">
              <div>
              <img src={zivame} alt="" />
              </div>
              <div>
                <span>Zivame</span>
                <p>upto 14% <img src={gold} alt="" /> gold</p>
              </div>
            </div>
            
          </Carousel>
      </div>
      <div className="inner-box">
        <div className="text" data-aos="fade-right">
          <h1>500 <span>+</span> Brands have <br /> become our merchants </h1>
        </div>
        <div className="text-2" data-aos="fade-left">
            <p>More than just shopping, you can earn gold ordering food delivery, riding in an Uber and playing games . With so many ways to win gold, they’ll add up quickly.</p>
            <button className="dis-btn">Discover</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
