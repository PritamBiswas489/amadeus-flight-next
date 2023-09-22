import React from "react";
import MultiRangeSlider from "@/components/common/MultiRangeSlider";
import style from "@/pages/flight/search/index.module.scss";

export default function FilterAccordianDuration() {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFour"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFour"
        >
          Duration
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFour"
      >
        <div className={`accordion-body  ${style.timesFlight}`}>
          <div className={style.sliderArea}>
            <h5>Flight Leg</h5>
            <p>14h 25m - 64h 51m</p>
            <MultiRangeSlider
              min={1}
              max={100}
              onChange={(min, max) => {
                //console.log("min", min);
              }}
            />
          </div>
          <div className={style.sliderArea}>
            <h5>Layover</h5>
            <p>0h 25m - 25h 51m</p>
            <MultiRangeSlider
              min={1}
              max={100}
              onChange={(min, max) => {
                //console.log("min", min);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
