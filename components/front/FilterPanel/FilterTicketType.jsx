import React from "react";

import style from "@/pages/flight/search/index.module.scss";

export default function FilterTicketType() {
  return (
    <div className={style.leftFilterRadio}>
      <ul>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-4"
          />
          <label className="form-check-label" htmlFor="rd-4">
            All Tickets{" "}
          </label>
        </li>
        <li className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-5"
          />
          <label className="form-check-label" htmlFor="rd-5">
            Best Tickets
          </label>
        </li>
      </ul>
    </div>
  );
}
