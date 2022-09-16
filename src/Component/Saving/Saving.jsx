import React from "react";
import "./Saving.css";
import swipeMachine from "../../images/swiping.png";
import avatar from "../../images/Avatar.png";
import bus from "../../images/bus.png";
import books from "../../images/books.png";
import card from "../../images/card.png";
import laptop from "../../images/laptop.png";
import mobile from "../../images/mobile.png";
import hello from "../../images/hello.png";
const Saving = () => {
  return (
    <section className="saving-sec">
      <div className="heading" data-aos="fade-right">
        <span>save</span>
        <h1>Saving is Simple Here</h1>
      </div>
      <div className="upper-div">
        <div className="upper-l" data-aos="fade-right">
          <span>
            Auto Invest <br /> Spare Change{" "}
          </span>
          <p>
            Shop any where using UPI or Cards, we read your shopping sms and we
            round up the spare change and invest in 24K pure GOLD portfolio,
            which is a Safe Haven, yielding upto 16*% average Annualized returns
            from past 5 years.
          </p>
        </div>
        <div className="upper-r" data-aos="fade-left">
          <div className="inner-upper">
            <div className="spend">
              <span>spend</span>
              <img src={swipeMachine} alt="" />
            </div>
            <div className="transaction-text">
              <div>
                Round up
              </div>
              <div>
              spare change
              </div>
            </div>
            <div className="transaction-status">
              <div className="avatar">
                {" "}
                <img src={avatar} alt="" />
              </div>
              <div className="transaction-succes">
                <span>Transaction successfull</span>
                <p>
                  INR 90 $ sent from your account xxxxx <br /> xxxx 6100 mode
                  upi......
                </p>
              </div>
            </div>
          </div>
          <div className="wallet">
            <span>
              Auto <br /> Invest
            </span>
          </div>
          <div className="lin3"></div>
        </div>
      </div>
      <div className="lower-div">
      <div className="lower-inner-first">
        <img className="bus" data-aos="fade-right" src={bus} alt="" />
        <img className="laptop" data-aos="fade-right" src={laptop} alt="" />
        <img className="card-pay" data-aos="fade-right" src={card} alt="" />
        <img className="books" data-aos="fade-left" src={books} alt="" />
        <img className="mobile" data-aos="fade-left" src={mobile} alt="" />
        <img className="hello"data-aos="fade-left" src={hello} alt="" />
      </div>
      <div className="lower-inner-second" data-aos="fade-right">
        <span>
          Achieve major & <br />
          Meaningful goals
        </span>
        <p>
          Save as low as 10 ₹ every day and upto 2000₹. Save for goals like a
          phone, jewellery, education, bike, marriage or a vacation. Investing
          is one of the most effective ways to build wealth, and contrary to
          popular belief, you don’t need a lot of money to get started with
          PayNav. In Digital GOLD you get upto 9-11*% annualised returns and
          perfectly safe unlike other volatile investments.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Saving;
