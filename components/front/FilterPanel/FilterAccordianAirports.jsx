import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import { convertObjectToArray } from "@/service/Helpers";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
import { applyfilterFieldActions } from "@/store/redux/apply-fliter-slice";

export default function FilterAccordianAirports({locations}) {
  const list = convertObjectToArray(locations);
  const dispatch = useDispatch();
  const airports = useSelector((state)=>state['filterField'].airports);
  const applyFilterSelector = useSelector((state) => state["applyfilterField"].applyFilter);
  //console.log("======================= FilterAccordianAirports =========================");
  const handleCheckboxChange = (event)=>{
    if(applyFilterSelector === false){
      dispatch(applyfilterFieldActions.setApplyFilter({applyFilter:true}));
     }
    // alert('asa');
     const value = event.target.value;
     if (event.target.checked) {
         dispatch(filterFieldActions.setAirports({airports:[...airports, value]}));
       } else {
         dispatch(filterFieldActions.setAirports({airports:airports.filter(item => item !== value)}));
       }
   }

  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingThree">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Preferred Airports
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div className="accordion-body">
          <div className={style.airports} style={{maxHeight:"300px",overflowY:'auto'}}>
            <ul>
            {list.map((item,index) => {
                return (
                  <li key={item.key} 
                  onChange={handleCheckboxChange}
                  checked={airports.includes(item.key)}
                  
                  className="checkbox custom-2">
                    <label>
                      <input type="checkbox" value={item.key} /> {item.title.cityCode}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
           
          
        </div>
      </div>
    </div>
  );
}
