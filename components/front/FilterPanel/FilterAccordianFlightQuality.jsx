import React from "react";
import style from "@/pages/flight/search/index.module.scss";

export default function FilterAccordianFlightQuality() {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFive"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFive"
        >
          Flight quality
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingFive"
      >
        <div className="accordion-body">
          <div className={style.airports}>
            <ul>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" /> Economy <span>$1,882</span>
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" /> Business <span>$1,882</span>
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" /> Mixed <span>$1,882</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
