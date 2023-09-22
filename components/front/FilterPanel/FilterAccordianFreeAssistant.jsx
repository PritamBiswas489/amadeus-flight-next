import React from "react";
import Image from "next/image";
import style from "@/pages/flight/search/index.module.scss";
import bag from "@/assets/front/images/bag.svg";
import bag2 from "@/assets/front/images/bag-2.svg";
export default function FilterAccordianFreeAssistant() {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Fee Assistant
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className={`accordion-body  ${style.feeAssistant}`}>
          <ul className="d-flex justify-content-between align-items-center">
            <li>
              <Image
                alt=""
                src={bag}
                placeholder="logo"
                width={9}
                height={12}
                sizes="100vw"
              />{" "}
              Carry-on bag
            </li>
            <li>
              <div
                className={`d-flex align-items-center  ${style.numberCount}`}
              >
                <button
                  onClick={() => {
                    
                  }}
                >
                  +
                </button>
                <div className={style.numberInput}>0</div>
                <button
                  onClick={() => {
                    
                  }}
                >
                  -
                </button>
              </div>
            </li>
          </ul>
          <ul className="d-flex justify-content-between align-items-center">
            <li>
              <Image
                alt=""
                src={bag2}
                placeholder="logo"
                width={9}
                height={12}
                sizes="100vw"
              />{" "}
              Carry-on bag
            </li>
            <li>
              <div
                className={`d-flex align-items-center  ${style.numberCount}`}
              >
                <button
                  onClick={() => {
                   
                  }}
                >
                  +
                </button>
                <div className={style.numberInput}>0</div>
                <button
                  onClick={() => {
                  
                  }}
                >
                  -
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
