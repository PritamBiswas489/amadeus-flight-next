import React from "react";
 
import { useSelector, useDispatch } from "react-redux";
import { filterFieldActions } from "@/store/redux/filter-field-slice";
import { applyfilterFieldActions } from "@/store/redux/apply-fliter-slice";


export default function AirlineCheckbox({item}) {
    //console.log("======================= AirlineCheckbox =========================");
    const dispatch = useDispatch();
    const airlines = useSelector((state)=>state['filterField'].airlines);
    const applyFilterSelector = useSelector((state) => state["applyfilterField"].applyFilter);
     
    const handleCheckboxChange = (event)=>{
      if(applyFilterSelector === false){
        dispatch(applyfilterFieldActions.setApplyFilter({applyFilter:true}));
       }
           
          const value = event.target.value;
          if (event.target.checked) {
            dispatch(filterFieldActions.setAirlines({value:value}));
          } else {
            dispatch(filterFieldActions.removeAirline({value:value}));
          }
      }
  return (
    <li  className="checkbox custom-2">
    <label>
      <input type="checkbox" value={item.key}
       onChange={handleCheckboxChange}
       checked={airlines.includes(item.key)}
      
      /> {item.title}
    </label>
  </li>
  )
}
