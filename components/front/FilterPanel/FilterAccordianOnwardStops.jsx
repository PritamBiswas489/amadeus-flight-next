import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
import { applyfilterFieldActions } from "@/store/redux/apply-fliter-slice";
export default function FilterAccordianOnwardStops({itineriesindex,itineriesData}) {
  console.log(
    "======================= FilterAccordianOnwardStops ========================="
  );
  const dispatch = useDispatch();
  const onwardStopsState = useSelector((state)=>state['filterField'].onwardStops);
  const onwardStops =    onwardStopsState?.[itineriesindex] || []; 
  const applyFilterSelector = useSelector((state) => state["applyfilterField"].applyFilter);
  const handleCheckboxChange = (event)=>{
       if(applyFilterSelector === false){
        dispatch(applyfilterFieldActions.setApplyFilter({applyFilter:true}));
       }
        
        const value = event.target.value;
       if (event.target.checked) {
         dispatch(filterFieldActions.setOnwardStops({index:itineriesindex,value}));
       } else {
         dispatch(filterFieldActions.removeOnwardStops({index:itineriesindex,value}));
       }
   }
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id={`panelsStayOpen-headingEleven${itineriesindex}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapseEleven${itineriesindex}`}
          aria-expanded="true"
          aria-controls= {`panelsStayOpen-collapseEleven${itineriesindex}`}
        >
         {`${itineriesData.from_to_details.fromLocation.iataCode} - ${itineriesData.from_to_details.toLocation.iataCode}`}
        </button>
      </h6>
      <div
        id={`panelsStayOpen-collapseEleven${itineriesindex}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-headingEleven${itineriesindex}`}
      >
        <div className="accordion-body">
          <div className={style.airports}>
            <ul>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox"
                   onChange={handleCheckboxChange}
                   checked={onwardStops.includes('DIRECT')}
                   value={'DIRECT'}
                  /> Direct
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={onwardStops.includes('ONESTOP')}
                  value={'ONESTOP'}
                  /> 1Stop
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={onwardStops.includes('TWOPLUSSTOP')}
                  value={'TWOPLUSSTOP'}
                  /> 2+ Stops
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
