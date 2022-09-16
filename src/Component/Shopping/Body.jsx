import React from 'react'
import './Body.css'
import img1 from '../../images/image1.png'
import img2 from '../../images/image2.png'
import img3 from '../../images/image3.png'
import paperBag from '../../images/Paperbag.png'
import moneyCounting from '../../images/Credit Machine.png'
import goldBiscuit from '../../images/gold-bis.png'
const Body = () => {
  return (
   <section className="body-sec">
        <div className="body-l" data-aos="fade-right">
            <span>How to EARN?</span>
        </div>
        
<div>
    <div className='lines'>
    <img className='money-counting' src={moneyCounting} alt="" />
        <img className='gold-biscuit' src={goldBiscuit} alt="" />
        <img className='paper-bag' src={paperBag} alt="" />
        <div className='line1'></div>
        <div className='line2'></div>
        
    </div>
<div className="body-r">
            
            <div className="box box1" data-aos="fade-right">
                <div className='box-img'><img src={img1} alt="" /></div>
                <div>
                    <span>1. Spend Through PayNav</span>
                    <p>More than just shopping, you can earn gold ordering food delivery, riding in an Uber and playing games . </p>
                </div>
            </div>
            <div className="box box2" data-aos="fade-right">
            <div className='box-img'><img src={img2} alt="" /></div>
                <div>
                    <span>1. Spend Through PayNav</span>
                    <p>More than just shopping, you can earn gold ordering food delivery, riding in an Uber and playing games . </p>
                </div>
            </div>
            <div className="box box3" data-aos="fade-left">
            <div className='box-img'><img src={img3} alt="" /></div>
                <div>
                    <span>1. Spend Through PayNav</span>
                    <p>More than just shopping, you can earn gold ordering food delivery, riding in an Uber and playing games . </p>
                </div>
            </div>
           
        </div>
</div>
   </section>
  )
}

export default Body