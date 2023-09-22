import React from "react";
import style from "@/pages/flight/search/index.module.scss";

export default function FilterLayoverCity() {
  return (
    <div className={style.radioInnerBox}>
      <h6>Layover City</h6>
      <ul>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-6"
          />
          <label className="form-check-label" htmlFor="rd-6">
            Aberdeen (ABZ)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-7"
          />
          <label className="form-check-label" htmlFor="rd-7">
            Asterdam (AMS)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-8"
          />
          <label className="form-check-label" htmlFor="rd-8">
            Asterdam (AMS)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-9"
          />
          <label className="form-check-label" htmlFor="rd-9">
            Asterdam (AMS)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-10"
          />
          <label className="form-check-label" htmlFor="rd-10">
            Asterdam (AMS)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-11"
          />
          <label className="form-check-label" htmlFor="rd-11">
            Asterdam (AMS)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-12"
          />
          <label className="form-check-label" htmlFor="rd-12">
            Asterdam (AMS)
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-13"
          />
          <label className="form-check-label" htmlFor="rd-13">
            Asterdam (AMS)
          </label>
        </li>
      </ul>
    </div>
  );
}
