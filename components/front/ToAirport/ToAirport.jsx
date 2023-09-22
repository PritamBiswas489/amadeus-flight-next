import React,{useRef, useEffect} from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";
 
import plain from "@/assets/front/images/plain.svg";

export default function ToAirport( ) {
    const toAircodeRef = useRef(null);
    const listToAircodeRef = useRef(null);
    const dispatch = useDispatch();

   const  defaultToAirportList = useSelector((state)=>state['searchField'].defaultToAirportList);
    const flightType =  useSelector((state)=>state['searchField'].flightType);
    const settoAirportData = (toAirportData)=> dispatch(searchFieldActions.settoAirportData({toAirportData}));
    const settoAircodeShow = (toAircodeShow)=> dispatch(searchFieldActions.settoAircodeShow({toAircodeShow}));
    const setDefaultToAirportList = (defaultToAirportList)=> dispatch(searchFieldActions.setDefaultToAirportList({defaultToAirportList}));
    const toAirportData =  useSelector((state)=>state['searchField'].toAirportData);
    const toAircodeShow =  useSelector((state)=>state['searchField'].toAircodeShow);

     //to aircode
     useEffect(() => {
        const handleClickOutsideSecond = (event) => {
            if (toAircodeRef.current && !toAircodeRef.current.contains(event.target) && listToAircodeRef.current && !listToAircodeRef.current.contains(event.target)) {
                settoAircodeShow(false);
            }
        };
        document.addEventListener("click", handleClickOutsideSecond);
        return () => {
            document.removeEventListener("click", handleClickOutsideSecond);
        };
    }, []);
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
                                                        ref={toAircodeRef}
                                                        type="text"
                                                        placeholder={toAirportData.name ? `${toAirportData.name}, ${toAirportData.address.cityName}` : "Select To"}
                                                        className={style.formInput}
                                                        readOnly={true}
                                                    />
                                                    {toAircodeShow && (
                                                        <AirlineCodeList
                                                            hidePanel={() => settoAircodeShow(false)}
                                                            defaultAirportList={defaultToAirportList}
                                                            updateDefaultList={(value) => setDefaultToAirportList(value)}
                                                            setSelectAirportData={(data) => settoAirportData(data)}
                                                            placeholder="To"
                                                            ref={listToAircodeRef}
                                                        ></AirlineCodeList>
                                                    )}
                                                </div>
                                            </div>
                                         
  )
}
