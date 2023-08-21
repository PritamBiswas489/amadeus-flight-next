import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import flexibleDate from "@/assets/front/images/flexible-date.jpg";


export default function GraphPanel() {
  return (
    <>
      <div className="">
        {/* <Image
          alt=""
          src={flexibleDate}
          placeholder="flexibleDate"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        /> */}
      </div>
      <div className={style.radioTabWrap}>
        <div className="row align-items-center g-2">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className={style.radioTab}>
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option1"
                autoComplete="off"
              />
              <label className="btn whiteBdrBtn" htmlFor="option1">
                Cheapest<span>₹ 60,845 12h 50m </span>
              </label>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className={style.radioTab}>
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option2"
                autoComplete="off"
              />
              <label className="btn whiteBdrBtn" htmlFor="option2">
                Best<span>₹ 60,845 12h 50m</span>
              </label>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className={style.radioTab}>
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option3"
                autoComplete="off"
              />
              <label className="btn whiteBdrBtn" htmlFor="option3">
                Quickest<span>₹ 60,845 12h 50m</span>
              </label>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <div className={`text-center ${style.dtBox}`}>
              <select>
                <option value="">Sorted By</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
