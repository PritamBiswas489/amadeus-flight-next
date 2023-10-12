import React from "react";

import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";

export default function FlightType({   className }) {
  const dispatch = useDispatch();
  const flightType = useSelector((state)=>state['searchField'].flightType);
  const setflightType = (flightType)=> dispatch(searchFieldActions.setflightType({flightType}));
  return (
    
      <ul className={`d-flex ${className}`}>
        <li className="form-check">
          <input
            onChange={() => setflightType("RETURN")}
            // defaultChecked={flightType === "RETURN" ? true : false}
            checked={flightType === "RETURN" ? true : false}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-1"
          />
          <label className="form-check-label" htmlFor="rd-1">
            Return
          </label>
        </li>
        <li className="form-check">
          <input
            // defaultChecked={flightType === "ONEWAY" ? true : false}
            checked={flightType === "ONEWAY" ? true : false}
            onChange={() => setflightType("ONEWAY")}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-2"
          />
          <label className="form-check-label" htmlFor="rd-2">
            One way
          </label>
        </li>
        <li className="form-check">
          <input
            
            // defaultChecked={flightType === "MULTI_CITY" ? true : false}
            checked={flightType === "MULTI_CITY" ? true : false}
            onChange={() => setflightType("MULTI_CITY")}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rd-3"
          />
          <label className="form-check-label" htmlFor="rd-3">
            Multi City
          </label>
        </li>
      </ul>
    
  );
}
