import React, { useCallback, useEffect, useState } from "react";
import MultiRangeTimeSlider from "@/components/common/MultiRangeTimeSlider";
import style from "@/pages/flight/search/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
import { getHourMinute } from "@/service/Helpers";

export default function FilterAccordianDurationDeparture({
  itineriesindex,
  itineriesData,
}) {
//   console.log(
//     "======================= FilterAccordianDurationDeparture ========================="
//   );
  const dispatch = useDispatch();
  const { minDeparttureDuration, maxDeparttureDuration } = useSelector(
    (state) => state["offerData"].itineraryDurationLimit[itineriesindex]
  );
  const {
    minDeparttureDuration: minDeparttureDurationValue,
    maxDeparttureDuration: maxDeparttureDurationValue,
  } = useSelector((state) => state["filterField"]);
  const [minData, setMinData] = useState(minDeparttureDuration);
  const [maxData, setMaxData] = useState(maxDeparttureDuration);

  useEffect(() => {
    
    // console.log(`========${itineriesindex}==========`);
    dispatch(
      filterFieldActions.setMinDeparttureDuration({
        index: itineriesindex,
        minDeparttureDuration: minData,
      })
    );
    dispatch(
      filterFieldActions.setMaxDeparttureDuration({
        index: itineriesindex,
        maxDeparttureDuration: maxData,
      })
    );
    // console.log({minDeparttureDurationValue});
    // console.log({maxDeparttureDurationValue});
  }, [minData, maxData]);

  const setData = (min, max) => {
    setMaxData(max);
    setMinData(min);
  };
  const { hours: minHour, minutes: minMinute } = getHourMinute(
      minDeparttureDurationValue?.[itineriesindex]
      || 0
  );
  const { hours: maxHour, minutes: maxMinute } = getHourMinute(
        maxDeparttureDurationValue?.[itineriesindex]
      || 0
  );
  return (
    <div className="accordion-item">
      <h6
        className="accordion-header"
        id={`panelsStayOpen-headingDeparttureDuration${itineriesindex}`}
      >
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapseDeparttureDuration${itineriesindex}`}
          aria-expanded="false"
          aria-controls={`panelsStayOpen-collapseDeparttureDuration${itineriesindex}`}
        >
          {`${itineriesData.from_to_details.fromLocation.iataCode} - ${itineriesData.from_to_details.toLocation.iataCode}`}
        </button>
      </h6>
      <div
        id={`panelsStayOpen-collapseDeparttureDuration${itineriesindex}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-headingDeparttureDuration${itineriesindex}`}
      >
        <div className={`accordion-body  ${style.timesFlight}`}>
          <div className={style.sliderArea}>
            <p>
              {`${minHour > 0 ? minHour + "h" : ""}${minMinute}m`} -{" "}
              {`${maxHour > 0 ? maxHour + "h" : ""}${maxMinute}m`}
            </p>
            <MultiRangeTimeSlider
              min={minDeparttureDuration}
              max={maxDeparttureDuration}
              onChange={({ min, max }) => {
               
                setData(min, max);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
