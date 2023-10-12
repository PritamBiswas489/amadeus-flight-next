import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
import { applyfilterFieldActions } from "@/store/redux/apply-fliter-slice";
export default function FilterAccordianDepartureTiming({itineriesindex,itineriesData}) {
//   console.log(
//     "======================= FilterAccordianDepartureTiming ========================="
//   );
  const dispatch = useDispatch();
  const departureTimimgsState = useSelector((state)=>state['filterField'].departureTimimgs);
  const departureTimimgs = departureTimimgsState?.[itineriesindex] || []; 
  const applyFilterSelector = useSelector((state) => state["applyfilterField"].applyFilter);
  const handleCheckboxChange = (event)=>{
      if(applyFilterSelector === false){
        dispatch(applyfilterFieldActions.setApplyFilter({applyFilter:true}));
      }
        const value = event.target.value;
       if (event.target.checked) {
         dispatch(filterFieldActions.setDepartureTimimgs({index:itineriesindex,value}));
       } else {
         dispatch(filterFieldActions.removeDepartureTimimgs({index:itineriesindex,value}));
       }
   }
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id={`panelsStayOpen-headingdepartTiming${itineriesindex}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapsedepartTiming${itineriesindex}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapsedepartTiming${itineriesindex}`}
        >
         {`${itineriesData.from_to_details.fromLocation.iataCode} - ${itineriesData.from_to_details.toLocation.iataCode}`}
        </button>
      </h6>
      <div
        id={`panelsStayOpen-collapsedepartTiming${itineriesindex}`}
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingdepartTiming"
      >
        <div className="accordion-body">
          <div className={style.airports}>
            <ul>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox"
                   onChange={handleCheckboxChange}
                   checked={departureTimimgs.includes('Before_6_AM')}
                   value={'Before_6_AM'}
                  /> Before 6AM
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={departureTimimgs.includes('6_AM_12_PM')}
                  value={'6_AM_12_PM'}
                  /> 6AM-12PM
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={departureTimimgs.includes('12_PM_6_PM')}
                  value={'12_PM_6_PM'}
                  /> 12PM-6PM
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={departureTimimgs.includes('After_6_PM')}
                  value={'After_6_PM'}
                  /> After 6PM
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
