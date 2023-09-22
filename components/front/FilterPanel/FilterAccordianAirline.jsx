import React,{useState} from "react";
import style from "@/pages/flight/search/index.module.scss";
import { convertObjectToArray } from "@/service/Helpers";
 
import AirlineCheckbox from "./AirlineCheckbox";
 
 
 

export default function FilterAccordianAirline({ carriers }) {
  const list = convertObjectToArray(carriers); 
  //console.log("======================= FilterAccordianAirline =========================");
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingSeven">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseSeven"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseSeven"
        >
          Preferred Airlines
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseSeven"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingSeven"
      >
        <div className="accordion-body">
          <div className={style.airports} style={{maxHeight:"300px",overflowY:'auto'}}>
            <ul>
              {list.map((item,index) => {
                return (
                 <AirlineCheckbox key={item.key} item={item}/>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
