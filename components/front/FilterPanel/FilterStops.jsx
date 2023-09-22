import React from "react";
import Image from "next/image";
import style from "@/pages/flight/search/index.module.scss";
import { AiFillCheckSquare } from "react-icons/ai";

export default function FilterStops() {
  return (
    <div className={style.leftFilterInnerBox}>
      <div className={style.lfibHeader}>
        <ul className="d-flex justify-content-between align-items-center">
          <li>Stops</li>
          <li>From</li>
        </ul>
      </div>
      <div className={style.lfibBody}>
        <ul className="d-flex justify-content-between align-items-center">
          <li className={style.checked}>
            <span>
              <AiFillCheckSquare />
            </span>{" "}
            Direct (1)333
          </li>
          <li>₹ 12,845</li>
        </ul>
        <ul className="d-flex justify-content-between align-items-center">
          <li className={style.checked}>
            <span>
              <AiFillCheckSquare />
            </span>{" "}
            One Stop (3)
          </li>
          <li>₹ 12,845</li>
        </ul>
        <ul className="d-flex justify-content-between align-items-center">
          <li className={style.checked}>
            <span>
              <AiFillCheckSquare />
            </span>{" "}
            2+ stops (1)
          </li>
          <li>₹ 12,845</li>
        </ul>
      </div>
    </div>
  );
}
