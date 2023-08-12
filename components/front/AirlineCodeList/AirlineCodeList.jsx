import React, { useEffect, useRef } from "react";
import { useState, forwardRef } from "react";
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import AirportItem from "./AirportItem";
 
import useFetch from "@/hooks/useFetch";

const AirlineCodeList = forwardRef((props, ref) => {
  const { data , loading, error, fetchData } = useFetch();
  const [inputValue, setInputValue] = useState('');
  const [airportList, setAirportList] = useState([]);
  function setAirportDetails(data){
    props.setSelectAirportData(data);
    props.hidePanel();
  }
  const inputRef = useRef(null);

  useEffect(() => {
    // When the component mounts, focus the input element
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Return a cleanup function to handle focus when the component unmounts
    return () => {
      if (inputRef.current) {
        inputRef.current.blur(); // Remove focus when the component unmounts
      }
    };
  }, []);
  useEffect(()=>{
      if(data !== null){
        setAirportList(data);
        props.updateDefaultList(data);
      }else{
        setAirportList(props.defaultAirportList)
      }
  },[data,props.defaultAirportList]);

  useEffect(()=>{
   //props.updateDefaultList(airportList);
},[airportList]);
 
  useEffect(() => {
       const  typingTimeout = setTimeout(function() {
        if(inputValue!=''){
            fetchData(`${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${inputValue}`, { method: 'GET' });
        }
        }, 500); // Adjust the time delay as needed
          return ()=>{ clearTimeout(typingTimeout);  }
    }, [inputValue]);
  return (
    
    <div ref={ref} className={style.srcDropdown}>
      <div className={style.dropdownSearch}>
        <input ref={inputRef} type="text" style={{fontSize:'16px',fontWeight:'bold'}} value={inputValue} onInput={(event)=>setInputValue(event.target.value)} placeholder={props.placeholder} className={style.srcInput} />
        {loading && (
          <span   style={{   position: "absolute",  right: "20px", top: "20px" }}>
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </span>
        )}
      </div>
      <div className={style.dropdownSearchList}>
        <div className={style.recentSearch}>
         {
            airportList!==null && typeof airportList.response!=='undefined' && airportList.response.map((airportData,index)=>{
                return <AirportItem setAirportDetails={(value)=>setAirportDetails(value)} data={airportData} key={index}></AirportItem>;
            })
         }   
         
        </div>
      </div>
    </div>
  );
});

export default AirlineCodeList;
