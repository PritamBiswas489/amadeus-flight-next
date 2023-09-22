import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
export default function FilterAccordianReturnTiming() {
//   console.log(
//     "======================= FilterAccordianReturnTiming ========================="
//   );
  const dispatch = useDispatch();
  const returnTimimgs = useSelector((state)=>state['filterField'].returnTimimgs);
  const handleCheckboxChange = (event)=>{
        const value = event.target.value;
       if (event.target.checked) {
         dispatch(filterFieldActions.setReturnTimimgs({value}));
       } else {
         dispatch(filterFieldActions.removeReturnTimimgs({value}));
       }
   }
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingdepartTiming">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapsedepartTiming"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapsedepartTiming"
        >
         Return
        </button>
      </h6>
      <div
        id="panelsStayOpen-collapsedepartTiming"
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
                   checked={returnTimimgs.includes('Before_6_AM')}
                   value={'Before_6_AM'}
                  /> Before 6AM
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={returnTimimgs.includes('6_AM_12_PM')}
                  value={'6_AM_12_PM'}
                  /> 6AM-12PM
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={returnTimimgs.includes('12_PM_6_PM')}
                  value={'12_PM_6_PM'}
                  /> 12PM-6PM
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={returnTimimgs.includes('After_6_PM')}
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
