import React from 'react';
import { useState , useEffect} from 'react';
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { useRef } from 'react';

import style from "@/sections/front/HomeFlightSearch/index.module.scss";

export default function ClassTypeList({classValue, setClass}) {
  ////ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST 
  const [dropdownShow,setDropdownShow] = useState(false);
  const panelRef =  useRef(null); 
 
  const [selectClassTextValue,setSelectedClassTextValue] = useState('Select');

  function setClassValue(Value){
     setClass(Value);
  }

  useEffect(()=>{
    let typeTextValue = '';
    if(classValue === 'ECONOMY'){
        typeTextValue = 'ECONOMY';
    }
    if(classValue === 'PREMIUM_ECONOMY'){
        typeTextValue = 'PREMIUM';
    }
    if(classValue === 'BUSINESS'){
        typeTextValue = 'BUSINESS';
    }
    if(classValue === 'FIRST'){
        typeTextValue = 'FIRST';
    }
    setSelectedClassTextValue(typeTextValue);
},[classValue]);
  

  useEffect(() => {
    const handleClickOutsideSecond = (event) => {
        if ((panelRef.current 
            && 
            !panelRef.current.contains(event.target))
           ) {
            setDropdownShow(false)
        }  
    };
    document.addEventListener('click', handleClickOutsideSecond);
    return () => {
            document.removeEventListener('click', handleClickOutsideSecond);
    };
}, []);
  return (
    <div ref={panelRef}   className="col-lg-3 col-md-3 col-sm-6 col-6">
    <div className={style.inputArea}>
        <div className={`w-100 ${style.inputSelect}`}>
            <label>Class</label>
            <Link href={"javascript:void(0)"}  onClick={()=>{
              setDropdownShow(prev=>!prev)
    }}>
                {selectClassTextValue} <FaAngleDown />
            </Link>
            {dropdownShow && <div className={style.inputDropDown}>
                <div className={style.radioArea}>
                    <div className="form-check d-flex justify-content-between ps-0">
                        <label className="form-check-label" htmlFor="rd-6">
                            Economy
                        </label>
                        <input className="form-check-input" onClick={()=>setClassValue('ECONOMY')} type="radio" defaultChecked={classValue === 'ECONOMY' ? true : false} name="radio" id="rd-6" />
                    </div>
                </div>
                <div className={style.radioArea}>
                    <div className="form-check d-flex justify-content-between ps-0">
                        <label className="form-check-label" htmlFor="rd-7">
                            Premium Economy
                        </label>
                        <input className="form-check-input" onClick={()=>setClassValue('PREMIUM_ECONOMY')} defaultChecked={classValue === 'PREMIUM_ECONOMY' ? true : false} type="radio" name="radio" id="rd-7" />
                    </div>
                </div>
                <div className={style.radioArea}>
                    <div className="form-check d-flex justify-content-between ps-0">
                        <label className="form-check-label" htmlFor="rd-8">
                            Buisness class
                        </label>
                        <input className="form-check-input" onClick={()=>setClassValue('BUSINESS')} defaultChecked={classValue === 'BUSINESS' ? true : false} type="radio" name="radio" id="rd-8" />
                    </div>
                </div>
                <div className={style.radioArea}>
                    <div className="form-check d-flex justify-content-between ps-0">
                        <label className="form-check-label" htmlFor="rd-8">
                            First Class
                        </label>
                        <input className="form-check-input" onClick={()=>setClassValue('FIRST')} defaultChecked={classValue === 'FIRST' ? true : false} type="radio" name="radio" id="rd-8" />
                    </div>
                </div>
            </div> }
            
        </div>
    </div>
</div>
  );
}
