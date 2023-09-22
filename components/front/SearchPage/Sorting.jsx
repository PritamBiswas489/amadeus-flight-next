import React, { useState, useEffect } from "react";
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import flexibleDate from "@/assets/front/images/flexible-date.jpg";
import { useSelector, useDispatch } from "react-redux";
import { filterOrdersAction } from "@/store/redux/filter-orders-slice";
import {
  getCurrencySymbol,
  convertObjectToArray,
  getHourMinute,
} from "@/service/Helpers";

export default function Sorting() {
  const dispatch = useDispatch();
  const [sortOrder, showSortOrder] = useState(true);
  const [selectedValue, setSelectedValue] = useState("cheapestOffer");
  const { cheapestOffer, bestOffer, quickestOffer } = useSelector(
    (state) => state["offerData"]
  );
  const { currencies } = useSelector(
    (state) => state["offerData"].dictionaries
  );
  const { filterOffers } = useSelector((state) => state["filterOrders"]);
  const currency = convertObjectToArray(currencies);

  function timeHourMin(duration) {
    const t = getHourMinute(duration);
    return `${t.hours}h ${t.minutes}m`;
  }
  function processSorting(event) {
    setSelectedValue(event.target.value);
  }
  useEffect(() => {
    function compareByDuration(a, b) {
      const durationA = parseFloat(a.departureDuration);
      const durationB = parseFloat(b.departureDuration);
      return durationA - durationB;
    }
    function compareByPrice(a, b) {
        const durationA = parseFloat(a.totalPrice);
        const durationB = parseFloat(b.totalPrice);
        return durationA - durationB;
      }

    if (selectedValue === "cheapestOffer" || selectedValue === "bestOffer") {
        const a = [...filterOffers] 
        a.sort(compareByPrice);
        dispatch(
            filterOrdersAction.setFilterOffers({
                filterOffers:a,
            })
            );
    }
     
    if (selectedValue === "quickestOffer") {
       const a = [...filterOffers] 
       a.sort(compareByDuration);
       dispatch(
        filterOrdersAction.setFilterOffers({
            filterOffers:a,
        })
        );
    }
  }, [selectedValue]);

  //   dispatch(
  //     filterOrdersAction.setFilterOffers({
  //       filterOffers: filteredData,
  //     })
  //   );

  return (
    <>
      {sortOrder && (
        <div className={style.radioTabWrap}>
          <div className="row align-items-center g-2">
            {cheapestOffer.duration && (
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className={style.radioTab}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option1"
                    value={"cheapestOffer"}
                    autoComplete="off"
                    checked={selectedValue === "cheapestOffer"}
                    onChange={processSorting}
                  />
                  <label className="btn whiteBdrBtn" htmlFor="option1">
                    Cheapest
                    <span>
                      {getCurrencySymbol(currency[0].key)} {cheapestOffer.cost}{" "}
                      {timeHourMin(cheapestOffer.duration)}{" "}
                    </span>
                  </label>
                </div>
              </div>
            )}
            {bestOffer.duration && (
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className={style.radioTab}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option2"
                    value={"bestOffer"}
                    autoComplete="off"
                    checked={selectedValue === "bestOffer"}
                    onChange={processSorting}
                  />
                  <label className="btn whiteBdrBtn" htmlFor="option2">
                    Best
                    <span>
                      {getCurrencySymbol(currency[0].key)} {bestOffer.cost}{" "}
                      {timeHourMin(bestOffer.duration)}
                    </span>
                  </label>
                </div>
              </div>
            )}
            {quickestOffer.duration && (
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className={style.radioTab}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option3"
                    value={"quickestOffer"}
                    autoComplete="off"
                    checked={selectedValue === "quickestOffer"}
                    onChange={processSorting}
                  />
                  <label className="btn whiteBdrBtn" htmlFor="option3">
                    Quickest
                    <span>
                      {getCurrencySymbol(currency[0].key)} {quickestOffer.cost}{" "}
                      {timeHourMin(quickestOffer.duration)}
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
