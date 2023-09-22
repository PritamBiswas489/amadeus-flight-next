import React from 'react';
import MultiRangeTimeSlider from '@/components/common/MultiRangeTimeSlider';
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { filterFieldActions } from '@/store/redux/filter-field-slice';
import { getHourMinute } from '@/service/Helpers';

export default function FilterAccordianDurationDeparture() {
  const   dispatch = useDispatch();
  const {minDeparttureDuration,maxDeparttureDuration} = useSelector((state)=>state['offerData']);   
  const {minDeparttureDuration:minDeparttureDurationValue,maxDeparttureDuration:maxDeparttureDurationValue} = useSelector((state)=>state['filterField']);   
 
  const setData = (min,max)=>{
   // console.log({min,max})
    dispatch(filterFieldActions.setMinDeparttureDuration({
        minDeparttureDuration: min,
      }));
      dispatch(filterFieldActions.setMaxDeparttureDuration({
        maxDeparttureDuration: max,
      }));
  }
  const {hours:minHour,minutes:minMinute} = getHourMinute(minDeparttureDurationValue);
  const {hours:maxHour,minutes:maxMinute} = getHourMinute(maxDeparttureDurationValue);
  return (
    <div className="accordion-item">
    <h6 className="accordion-header" id="panelsStayOpen-headingDeparttureDuration">
        <button
            className="accordion-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseDeparttureDuration"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseDeparttureDuration"
        >
            Onward Duration
        </button>
    </h6>
    <div id="panelsStayOpen-collapseDeparttureDuration" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingDeparttureDuration">
        <div className={`accordion-body  ${style.timesFlight}`}>
            <div className={style.sliderArea}>
                <p>{`${minHour > 0 ? minHour+'h' : ''}${minMinute}m`} - {`${maxHour > 0 ? maxHour+'h' : ''}${maxMinute}m`}</p>
                <MultiRangeTimeSlider
                    min={minDeparttureDuration}
                    max={maxDeparttureDuration}
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
