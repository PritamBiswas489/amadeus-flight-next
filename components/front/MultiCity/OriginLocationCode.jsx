import React,{useRef, useEffect} from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import oneWayIcon from "@/assets/front/images/oneway.svg";
import plain from "@/assets/front/images/plain.svg";
import Image from "next/image";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import { useSelector, useDispatch } from 'react-redux';
import { multicitySearchFieldActions } from '@/store/redux/multicity-search-field-slice';


export default function OriginLocationCode({fieldCount}) {
  const dispatch = useDispatch();
  const fromAircodeShowState = useSelector((state)=>state['multicitySearch'].fromAircodeShow);
  const fromAirportDataState = useSelector((state)=>state['multicitySearch'].m_fromAirportData);
  const fromAirportData = fromAirportDataState?.[fieldCount] || {}  ;
  const fromAircodeShow = fromAircodeShowState?.[fieldCount] || false;
  const setFromAircodeShow = (value)=>{
     const dPrev = [...fromAircodeShowState];
     dPrev[fieldCount] = value;
     dispatch(multicitySearchFieldActions.setFromAircodeShow({fromAircodeShow:dPrev}));
  }
  const setfromAirportData = (value)=>{
    const dPrev = [...fromAirportDataState];
    dPrev[fieldCount] = value;
    dispatch(multicitySearchFieldActions.setfromAirportData({fromAirportData:dPrev}));
  }

  const fromAircodeRef = useRef(null);
  const listFromAircodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
        if (fromAircodeRef.current && !fromAircodeRef.current.contains(event.target) && listFromAircodeRef.current && !listFromAircodeRef.current.contains(event.target)) {
            setFromAircodeShow(false);
        }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, [setFromAircodeShow]);
  return (
    <div className={style.inputArea}>
        <div className="d-flex justify-content-between align-items-center">
        <label>{fromAirportData.iataCode ? fromAirportData.iataCode : "From"}</label>
            <span>
                <Image src={plain} width={16} height={14} alt="" />
            </span>
            <span className={style.roundTripIcon}>
                <Image src={oneWayIcon} width={36} height={36} alt="" />
            </span>
        </div>
        <div className={style.inputBox}>
            <input
                onClick={() => {
                    setFromAircodeShow(true);
                }}
                type="text"
                ref={fromAircodeRef}
                placeholder={fromAirportData.name ? `${fromAirportData.name}, ${fromAirportData.address.cityName}` : "Select From"}
                className={style.formInput}
                readOnly={true}
            />
            {fromAircodeShow && (
                <AirlineCodeList
                    hidePanel={() => setFromAircodeShow(false)}
                    updateDefaultList={()=>{}}
                    defaultAirportList={()=>{}}
                    setSelectAirportData={(data) => setfromAirportData(data)}
                    placeholder="From"
                    ref={listFromAircodeRef}
                ></AirlineCodeList>
            )}
        </div>
    </div>

)
}
