import React,{useRef, useEffect} from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import plain from "@/assets/front/images/plain.svg";
import Image from "next/image";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import { useSelector, useDispatch } from 'react-redux';
import { multicitySearchFieldActions } from '@/store/redux/multicity-search-field-slice';


export default function DestinationLocationCode({fieldCount}) {
  const dispatch = useDispatch();
  const toAircodeShowState = useSelector((state)=>state['multicitySearch'].toAircodeShow);
  const toAirportDataState = useSelector((state)=>state['multicitySearch'].m_toAirportData);
  const fromAirportDataState = useSelector((state)=>state['multicitySearch'].m_fromAirportData);
  const toAirportData =    toAirportDataState?.[fieldCount] || {};
  const toAircodeShow =    toAircodeShowState?.[fieldCount] || false;
  const settoAircodeShow = (value)=>{
     const dPrev = [...toAircodeShowState];
     dPrev[fieldCount] = value;
     dispatch(multicitySearchFieldActions.settoAircodeShow({toAircodeShow:dPrev}));
  }
  const settoAirportData = (value)=>{
    const dPrev = [...toAirportDataState];
    dPrev[fieldCount] = value;
    dispatch(multicitySearchFieldActions.settoAirportData({toAirportData:dPrev}));

    const dPrev2 = [...fromAirportDataState];
    dPrev2[fieldCount+1] = value;
    dispatch(multicitySearchFieldActions.setfromAirportData({fromAirportData:dPrev2}));
  }

  const toAircodeRef = useRef(null);
  const listtoAircodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
        if (toAircodeRef.current && !toAircodeRef.current.contains(event.target) && listtoAircodeRef.current && !listtoAircodeRef.current.contains(event.target)) {
            settoAircodeShow(false);
        }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, [settoAircodeShow]);
  return (
    <div className={style.inputArea}>
       <div className="d-flex justify-content-between align-items-center">
                                                    <label>{toAirportData.iataCode ? toAirportData.iataCode : "To"}</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                </div>
      
        <div className={style.inputBox}>
            <input
                onClick={() => {
                    settoAircodeShow(true);
                }}
                type="text"
                ref={toAircodeRef}
                placeholder={toAirportData.name ? `${toAirportData.name}, ${toAirportData.address.cityName}` : "Select to"}
                className={style.formInput}
                readOnly={true}
            />
            {toAircodeShow && (
                <AirlineCodeList
                    hidePanel={() => settoAircodeShow(false)}
                    updateDefaultList={()=>{}}
                    defaultAirportList={()=>{}}
                    setSelectAirportData={(data) => settoAirportData(data)}
                    placeholder="to"
                    ref={listtoAircodeRef}
                ></AirlineCodeList>
            )}
        </div>
    </div>

)
}
