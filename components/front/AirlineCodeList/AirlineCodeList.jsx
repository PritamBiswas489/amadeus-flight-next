import React   from "react";
import { useRef } from "react";
import Image from "next/image";



import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import plain2 from "@/assets/front/images/plain-3.svg";

const AirlineCodeList = React.forwardRef((props, ref) => (   
   




    <div ref={ref}  className={style.srcDropdown}>
    <div className={style.dropdownSearch}>
      <input type="text" placeholder="" className={style.srcInput} />
    </div>
    <div className={style.dropdownSearchList}>
      <div className={style.recentSearch}>
        <h3>Recent Search</h3>
        <div
          className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
        >
          <div className={style.srcBoxLeft}>
            <Image src={plain2} width={26} height={26} alt="" />
          </div>
          <div className={style.srcBoxMid}>
            <h5>Dhaka , Bangladesh</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              ipsum.
            </p>
          </div>
          <div className={style.srcBoxRight}>
            <h3>DAC</h3>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
        >
          <div className={style.srcBoxLeft}>
            <Image src={plain2} width={26} height={26} alt="" />
          </div>
          <div className={style.srcBoxMid}>
            <h5>Dhaka , Bangladesh</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              ipsum.
            </p>
          </div>
          <div className={style.srcBoxRight}>
            <h3>DAC</h3>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
        >
          <div className={style.srcBoxLeft}>
            <Image src={plain2} width={26} height={26} alt="" />
          </div>
          <div className={style.srcBoxMid}>
            <h5>Dhaka , Bangladesh</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              ipsum.
            </p>
          </div>
          <div className={style.srcBoxRight}>
            <h3>DAC</h3>
          </div>
        </div>
      </div>
      <div className={style.recentSearch}>
        <h3>Popular Cities</h3>
        <div
          className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
        >
          <div className={style.srcBoxLeft}>
            <Image src={plain2} width={26} height={26} alt="" />
          </div>
          <div className={style.srcBoxMid}>
            <h5>Dhaka , Bangladesh</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              ipsum.
            </p>
          </div>
          <div className={style.srcBoxRight}>
            <h3>DAC</h3>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
        >
          <div className={style.srcBoxLeft}>
            <Image src={plain2} width={26} height={26} alt="" />
          </div>
          <div className={style.srcBoxMid}>
            <h5>Dhaka , Bangladesh</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              ipsum.
            </p>
          </div>
          <div className={style.srcBoxRight}>
            <h3>DAC</h3>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
        >
          <div className={style.srcBoxLeft}>
            <Image src={plain2} width={26} height={26} alt="" />
          </div>
          <div className={style.srcBoxMid}>
            <h5>Dhaka , Bangladesh</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              ipsum.
            </p>
          </div>
          <div className={style.srcBoxRight}>
            <h3>DAC</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default AirlineCodeList;
