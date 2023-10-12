import React from 'react'
import OriginLocationCode from "../MultiCity/OriginLocationCode";
import DepartureDateTimeRangeDate from "../MultiCity/DepartureDateTimeRangeDate";
import DestinationLocationCode from "../MultiCity/DestinationLocationCode";
import AddMoreDestination from "../MultiCity/AddMoreDestination";
import { useSelector } from "react-redux";
import RemoveField from './RemoveField';
export default function LocationField({fieldCount, showAddMoreField,removeField}) {
  const numberOfField = useSelector(
    (state) => state["multicitySearch"].numberOfField
  );
  return (
    <div className="col-12 mt-2">
    <div className="row g-3">
      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <OriginLocationCode fieldCount={fieldCount} />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <DestinationLocationCode fieldCount={fieldCount} />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-12">
        <DepartureDateTimeRangeDate  fieldCount={fieldCount}/>
      </div>
       <div className="col-lg-2 col-md-2 col-sm-2 col-12">
        {showAddMoreField && numberOfField <4 && <AddMoreDestination fieldCount={fieldCount} />}
       { numberOfField >2 && removeField  && <RemoveField/> } 
      </div> 
    </div>
  </div>
  );
}
