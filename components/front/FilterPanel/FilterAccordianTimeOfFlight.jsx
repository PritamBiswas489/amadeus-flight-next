import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import MultiRangeSlider from "@/components/common/MultiRangeSlider";
import Link from "next/link";
export default function FilterAccordianTimeOfFlight() {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Times of Flight
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className={`accordion-body  ${style.timesFlight}`}>
          <ul className="row g-2">
            <li className="col">
              <Link href={"javascript:void(0);"} className={style.active}>
                Take off
              </Link>
            </li>
            <li className="col">
              <Link href={"javascript:void(0);"}>Landing</Link>
            </li>
          </ul>
          <div className={style.sliderArea}>
            <p>
              Take of from YVR
              <br />
              Mon 12:30am to 11:00am
            </p>
            <MultiRangeSlider
              min={1}
              max={100}
              onChange={(min, max) => {
                ////console.log("min", min);
              }}
            />
          </div>
          <div className={style.sliderArea}>
            <p>
              Take of from MNL
              <br />
              Mon 12:30am to 11:00am
            </p>
            <MultiRangeSlider
              min={1}
              max={100}
              onChange={(min, max) => {
                ////console.log("min", min);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
