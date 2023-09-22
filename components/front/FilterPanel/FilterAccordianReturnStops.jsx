import React from 'react'
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
export default function FilterAccordianReturnStops() {
    // console.log(
    //     "======================= FilterAccordianReturnStops ========================="
    //   );
    const dispatch = useDispatch();
    const returnStops = useSelector((state)=>state['filterField'].returnStops);
    const handleCheckboxChange = (event)=>{
            const value = event.target.value;
        if (event.target.checked) {
            dispatch(filterFieldActions.setReturnStops({value}));
        } else {
            dispatch(filterFieldActions.removeReturnStops({value}));
        }
    }
    return (
        <div className="accordion-item">
          <h6 className="accordion-header" id="panelsStayOpen-headingElevenOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseElevenOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseElevenOne"
            >
             Return Stops
            </button>
          </h6>
          <div
            id="panelsStayOpen-collapseElevenOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingElevenOne"
          >
            <div className="accordion-body">
              <div className={style.airports}>
              <ul>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox"
                   onChange={handleCheckboxChange}
                   checked={returnStops.includes('DIRECT')}
                   value={'DIRECT'}
                  /> Direct
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={returnStops.includes('ONESTOP')}
                  value={'ONESTOP'}
                  /> 1Stop
                </label>
              </li>
              <li className="checkbox custom-2">
                <label>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  checked={returnStops.includes('TWOPLUSSTOP')}
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
