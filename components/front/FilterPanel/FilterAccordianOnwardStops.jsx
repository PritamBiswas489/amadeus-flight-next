import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
export default function FilterAccordianOnwardStops() {
  // console.log(
  //   "======================= FilterAccordianOnwardStops ========================="
  // );
  const dispatch = useDispatch();
  const onwardStops = useSelector((state)=>state['filterField'].onwardStops);
  const handleCheckboxChange = (event)=>{
        const value = event.target.value;
       if (event.target.checked) {
         dispatch(filterFieldActions.setOnwardStops({value}));
       } else {
         dispatch(filterFieldActions.removeOnwardStops({value}));
       }
   }
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingEleven">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseEleven"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseEleven"
        >
         Onward Stops
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapseEleven"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingEleven"
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
