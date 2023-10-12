import React, { useEffect } from "react";
import searchIcon from "@/assets/front/images/search-icon.svg";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { multicitySearchFieldActions } from "@/store/redux/multicity-search-field-slice";
import LocationField from "../MultiCity/LocationField";
import PassengerType from "../MultiCity/PassengerType";
import ClassType from "../MultiCity/ClassType";
import { useSnackbar } from "notistack";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/router";
import styleInner from "@/sections/front/InnerFlightSearch/index.module.scss";
import styleHome from "@/sections/front/HomeFlightSearch/index.module.scss";
import { applyfilterFieldActions } from "@/store/redux/apply-fliter-slice";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
import useGlobalCookies from "@/hooks/useGlobalCookies";

export default function HomeMultiCitySearchFields({isInner,disablebtn}) {
  const { cookies, setGlobalCookie, removeGlobalCookie } = useGlobalCookies();
  let style;
  if(isInner){
    style = styleInner;
  }else{
    style = styleHome;
  }
  const [multicitySearchValue, setMulticitySearchValue, clearMulticitySearchValue] = useLocalStorage('multicitySearchValue', '');
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const numberOfField = useSelector(
    (state) => state["multicitySearch"].numberOfField
  );
  const dispatch = useDispatch();
  const nonStop = useSelector((state) => state["multicitySearch"].nonStop);
  
  const setNonStop = (nonStop) =>
    dispatch(multicitySearchFieldActions.setNonStop({ nonStop }));

  const dataStore = useSelector((state) => state["multicitySearch"]);

  const multiCitySearcHandler = () => {
    dispatch(applyfilterFieldActions.setApplyFilter({applyFilter:false}));
    dispatch(filterFieldActions.reset({}));

    const {
      m_fromAirportData,
      m_toAirportData,
      m_departureDate,
      classValue,
      adultValue,
      childrenValue,
      infantValue,
      flightType,
      nonStop,
    } = dataStore;
    // console.log(fromAirportData);
    console.log(m_toAirportData);
    // console.log(m_departureDate);
    let valid = true;
    if (m_fromAirportData.length === 0) {
      valid = false;
    }
    const itineraries = [];
    const s_m_fromAirportData = [];
    const s_m_toAirportData = [];
    const s_m_departureDate = [];
    if (m_fromAirportData.length > 0) {
      for(let index = 0; index< numberOfField ; index++){
        if (m_fromAirportData?.[index] && m_toAirportData?.[index] && m_departureDate?.[index]) {
          if (
            m_fromAirportData[index]?.iataCode  &&
            m_toAirportData[index]?.iataCode &&
            (m_departureDate[index] !== "" || m_departureDate[index] !== null)
          ) {
              itineraries.push({
                from: m_fromAirportData[index].iataCode,
                to: m_toAirportData[index].iataCode,
                date: m_departureDate[index],
              });
              s_m_fromAirportData.push(m_fromAirportData[index]);
              s_m_toAirportData.push(m_toAirportData[index]);
              s_m_departureDate.push(m_departureDate[index]);
          }
        }

      }
       
    }
    if (itineraries.length === 0) {
      valid = false;
    }
    if (valid === true) {
      console.log(m_fromAirportData);

      clearMulticitySearchValue();
      console.log({s_m_fromAirportData});
      console.log({s_m_toAirportData});
      setMulticitySearchValue(JSON.stringify({
        m_fromAirportData:s_m_fromAirportData,
        m_toAirportData:s_m_toAirportData,
        m_departureDate:s_m_departureDate,
        m_classValue:classValue,
        m_adultValue:adultValue,
        m_childrenValue:childrenValue,
        m_infantValue:infantValue,
        m_nonStop:nonStop,
      }));

      let itineraryparam = "";
      let itinerarydateparam = "";
      itineraries.forEach((value, index) => {
        itineraryparam = itineraryparam + `${value.from}-${value.to}|`;
        itinerarydateparam =
          itinerarydateparam + `${value.date.replace(/\//g, "")}|`;
      });
      if (itineraryparam.charAt(itineraryparam.length - 1) === "|") {
        itineraryparam = itineraryparam.slice(0, -1);
      }
      if (itinerarydateparam.charAt(itinerarydateparam.length - 1) === "|") {
        itinerarydateparam = itinerarydateparam.slice(0, -1);
      }
      const itinerary = `${itineraryparam}-${itinerarydateparam}`;

      removeGlobalCookie('multiItineraryParam');
      setGlobalCookie("multiItineraryParam", itineraryparam, { path: '/', maxAge: 360000 });

      const tripType = "M";
      let cabinClass = "";
      if (classValue === "ECONOMY") {
        cabinClass = "E";
      }
      if (classValue === "PREMIUM_ECONOMY") {
        cabinClass = "P";
      }
      if (classValue === "BUSINESS") {
        cabinClass = "B";
      }
      if (classValue === "FIRST") {
        cabinClass = "F";
      }
      const paxType = `A-${parseInt(adultValue)}_C-${parseInt(
        childrenValue
      )}_I-${parseInt(infantValue)}`;

      const queryParameters = {
        i: itineraryparam,
        d: itinerarydateparam,
        tripType,
        cabinClass,
        paxType,
        ns: nonStop == true ? 1 : 0,
      };
      const queryString = new URLSearchParams(queryParameters).toString();
      const destinationRoute = "/flight/multicity";
      const finalRoute = `${destinationRoute}?${queryString}`;
      //console.log(finalRoute);
      router.push(finalRoute);
    }

    // enqueueSnackbar("Working.....", { variant: "error" });
  };
  useEffect(()=>{
    if(router.pathname==='/' || router.pathname==='/flight/search'){
      if (multicitySearchValue) {
        const storage_d = JSON.parse(multicitySearchValue);
        const d = storage_d?.m_fromAirportData || [];
        const d1 = storage_d?.m_toAirportData || [];
        const lengthToMatch = Math.min(d.length, d1.length);
    
        const d3 = d.slice(0, lengthToMatch);
        const d4 = d1.slice(0, lengthToMatch);
    
        
        const updates = {
          m_fromAirportData: d3,
          m_toAirportData: d4,
          numberOfField: d3.length === 0 ? 1 : d3.length,
          m_departureDate: storage_d?.m_departureDate,
          classValue: storage_d?.m_classValue,
          adultValue: storage_d?.m_adultValue,
          childrenValue: storage_d?.m_childrenValue,
          infantValue: storage_d?.m_infantValue,
          nonStop: storage_d?.m_nonStop,
        };
    
        // Define your action to update the state in one go
        const updateAction = multicitySearchFieldActions.setMulticitySearchData(updates);
        dispatch(updateAction);
      }
    
    }

  },[router.pathname,multicitySearchValue])
  

  const renderLocationItem = [];
  for (let iCount = 0; iCount < numberOfField; iCount++) {
    let showAddMoreField = false;
    let removeField = false;
    if (iCount + 1 === numberOfField) {
      showAddMoreField = true;
    }
    if (iCount + 1 === numberOfField) {
      removeField = true;
    }

    renderLocationItem.push(
      <LocationField
        key={iCount}
        fieldCount={iCount}
        removeField={removeField}
        showAddMoreField={showAddMoreField}
      />
    );
  }
   
  return (
    <>
      <div className="row">{renderLocationItem}</div>
      <div className="row  mt-2">
        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
          <PassengerType />
        </div>
        <ClassType />
        <div className="col-4">
          <div className="mb-3">
            <button
              // disabled={disablebtn}
              onClick={multiCitySearcHandler}
              className={style.findFlight}
            >
              find your flight
            </button>
          </div>
          <div className="checkbox custom text-center mb-2">
            <label>
              <input
                type="checkbox"
                onChange={() => setNonStop(!nonStop)}
                // defaultChecked={JSON.parse(nonStop)}
                checked={JSON.parse(nonStop)}
              />{" "}
              Non Stop FlightOnly
            </label>
          </div>
          <div className={style.bannSearch}>
            <input
              type="text"
              placeholder="Search prefer airlines "
              className={style["input-1"]}
            />
            <button type="button" className={style["srcButton"]}>
              <Image src={searchIcon} width={24} height={24} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
