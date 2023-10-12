import React from 'react';
import MultiRangeTimeSlider from '@/components/common/MultiRangeTimeSlider';
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { filterFieldActions } from '@/store/redux/filter-field-slice';
import { getHourMinute } from '@/service/Helpers';

export default function FilterAccordianDurationReturn() {
    console.log(
        "======================= FilterAccordianDurationReturn ========================="
      );
    const   dispatch = useDispatch();
    const {minReturnDuration,maxReturnDuration} = useSelector((state)=>state['offerData']);   
    const {minReturnDuration:minReturnDurationValue,maxReturnDuration:maxReturnDurationValue} = useSelector((state)=>state['filterField']);   
   
    const setData = (min,max)=>{
      dispatch(filterFieldActions.setMinReturnDuration({
          minReturnDuration: min,
        }));
        dispatch(filterFieldActions.setMaxReturnDuration({
          maxReturnDuration: max,
        }));
    }
    const {hours:minHour,minutes:minMinute} = getHourMinute(minReturnDurationValue);
    const {hours:maxHour,minutes:maxMinute} = getHourMinute(maxReturnDurationValue);
    return (
      <div className="accordion-item">
      <h6 className="accordion-header" id="panelsStayOpen-headingReturnDuration">
          <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseReturnDuration"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseReturnDuration"
          >
              Return Duration
          </button>
      </h6>
      <div id="panelsStayOpen-collapseReturnDuration" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingReturnDuration">
          <div className={`accordion-body  ${style.timesFlight}`}>
              <div className={style.sliderArea}>
                  <p>{`${minHour > 0 ? minHour+'h' : ''}${minMinute}m`} - {`${maxHour > 0 ? maxHour+'h' : ''}${maxMinute}m`}</p>
                  <MultiRangeTimeSlider
                      min={minReturnDuration}
                      max={maxReturnDuration}
                      onChange={({min, max}) => {
                          setData(min,max);
                      }}
                  />
              </div>
          </div>
      </div>
  </div>
    )
}
