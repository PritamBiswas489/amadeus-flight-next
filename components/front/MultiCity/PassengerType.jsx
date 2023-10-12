import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { multicitySearchFieldActions } from '@/store/redux/multicity-search-field-slice';

export default function PassengerType() {
    const [dropdownShow, setDropdownShow] = useState(false);
    const panelRef = useRef(null);
    const dispatch = useDispatch();

    const adultValue = useSelector((state)=>state['multicitySearch'].adultValue);
    const setAdultValue = (adultValue)=> dispatch(multicitySearchFieldActions.setAdultValue({adultValue}));

    const childrenValue = useSelector((state)=>state['multicitySearch'].childrenValue);
    const setChildrenValue = (childrenValue)=> dispatch(multicitySearchFieldActions.setChildrenValue({childrenValue}));
     
    const infantValue = useSelector((state)=>state['multicitySearch'].infantValue);
    const setInfantValue = (infantValue)=> dispatch(multicitySearchFieldActions.setInfantValue({infantValue}));

    const [typeText, setTypeText] = useState("Select");

     

    function addTypeValue(type) {
        if (type === "adult") {
            setAdultValue(adultValue + 1);
        }
        if (type === "child") {
            setChildrenValue(childrenValue + 1);
        }
        if (type === "infant") {
            setInfantValue(infantValue + 1);
        }
    }
    function minusTypeValue(type) {
        if (type === "adult") {
            let value = 0;
            value = adultValue - 1;
            if (value === 0) {
                value =  1;
            }
            setAdultValue(value);
        }
        if (type === "child") {
            let value = 0;
            value = childrenValue - 1;
            if (value === 0) {
                value =  1;
            }
            setChildrenValue(value);
        }
        if (type === "infant") {
            let value = 0;
            value = infantValue - 1;
            if (value === 0) {
                value =  1;
            }
            setInfantValue(value);
        }
    }
    useEffect(() => {
        let typeTextValue = "";
        if (parseInt(adultValue) > 0) {
            typeTextValue += `${adultValue} Adult, `;
        }
        if (parseInt(childrenValue) > 0) {
            typeTextValue += `${childrenValue} Child, `;
        }
        if (parseInt(infantValue) > 0) {
            typeTextValue += `${infantValue} Infant, `;
        }
        typeTextValue = typeTextValue.trimEnd();
        if (typeTextValue.endsWith(",")) {
            typeTextValue = typeTextValue.slice(0, -1); // Remove the last character
        }
        setTypeText(typeTextValue);
    }, [adultValue, childrenValue, infantValue]);
    useEffect(() => {
        const handleClickOutsideSecond = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                setDropdownShow(false);
            }
        };
        document.addEventListener("click", handleClickOutsideSecond);
        return () => {
            document.removeEventListener("click", handleClickOutsideSecond);
        };
    }, []);

    return (
        <div ref={panelRef}>

<div className={style.inputArea}>
                <div className={`w-100 ${style.inputSelect}`}>
                    <label>Passengers</label>
                    <Link
                        href={""}
                        onClick={(e) => {
                            e.preventDefault();
                            setDropdownShow((prev) => !prev);
                        }}
                    >
                        {typeText} <FaAngleDown />
                    </Link>
                    {dropdownShow && (
                        <div className={style.inputDropDown}>
                            <div className={style.inputDropDownInside}>
                                <div className={`d-flex justify-content-between align-align-items-center ${style.numberArea}`}>
                                    <div className={style.numberLeft}>
                                        <h6>Adults</h6>
                                    </div>
                                    <div className={style.numberRight}>
                                        <div className={`d-flex align-items-center ${style.number}`}>
                                            <span onClick={() => minusTypeValue("adult")} className={style.minus}>
                                                -
                                            </span>
                                            <input className={style.valueInput} value={adultValue} readOnly type="text" defaultValue={adultValue} />
                                            <span onClick={() => addTypeValue("adult")} className={style.plus}>
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`d-flex justify-content-between align-align-items-center ${style.numberArea}`}>
                                    <div className={style.numberLeft}>
                                        <h6>
                                            Children
                                            <small>Ages 2- 17</small>
                                        </h6>
                                    </div>
                                    <div className={style.numberRight}>
                                        <div className={`d-flex align-items-center ${style.number}`}>
                                            <span onClick={() => minusTypeValue("child")} className={style.minus}>
                                                -
                                            </span>
                                            <input className={style.valueInput} type="text" value={childrenValue} defaultValue={childrenValue} />
                                            <span onClick={() => addTypeValue("child")} className={style.plus}>
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`d-flex justify-content-between align-align-items-center ${style.numberArea}`}>
                                    <div className={style.numberLeft}>
                                        <h6>
                                            Infant
                                            {/* <small>less or eu al to 2</small> */}
                                        </h6>
                                    </div>
                                    <div className={style.numberRight}>
                                        <div className={`d-flex align-items-center ${style.number}`}>
                                            <span onClick={() => minusTypeValue("infant")} className={style.minus}>
                                                -
                                            </span>
                                            <input className={style.valueInput} type="text" value={infantValue} defaultValue={infantValue} />
                                            <span onClick={() => addTypeValue("infant")} className={style.plus}>
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.inputDropDownInside}>
                                <div className="">
                                    <p>Enter the age at last day of the trip</p>
                                    {/* <div className={`d-flex justify-content-between align-align-items-center ${style.numberArea}`}>
                                        <div className={style.numberLeft}>
                                            <h6>Adults</h6>
                                        </div>
                                        <div className={style.numberRight}>
                                            <div className={`d-flex align-items-center ${style.number}`}>
                                                <span onClick={() => minusTypeValue("adult")} className={style.minus}>
                                                    -
                                                </span>
                                                <input className={style.valueInput} value={adultValue} readOnly type="text" defaultValue={adultValue} />
                                                <span onClick={() => addTypeValue("adult")} className={style.plus}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className={`d-flex justify-content-between align-align-items-center ${style.numberArea}`}>
                                        <div className={style.numberLeft}>
                                            <h6>Age Child 1</h6>
                                        </div>
                                        <div className={style.numberRight}>
                                            <div className={`d-flex align-items-center ${style.number}`}>
                                                <span onClick={() => minusTypeValue("child")} className={style.minus}>
                                                    -
                                                </span>
                                                <input className={style.valueInput} type="text" value={childrenValue} defaultValue={childrenValue} />
                                                <span onClick={() => addTypeValue("child")} className={style.plus}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex justify-content-between align-align-items-center ${style.numberArea}`}>
                                        <div className={style.numberLeft}>
                                            <h6>Age Infant 1</h6>
                                        </div>
                                        <div className={style.numberRight}>
                                            <div className={`d-flex align-items-center ${style.number}`}>
                                                <span onClick={() => minusTypeValue("infant")} className={style.minus}>
                                                    -
                                                </span>
                                                <input className={style.valueInput} type="text" value={infantValue} defaultValue={infantValue} />
                                                <span onClick={() => addTypeValue("infant")} className={style.plus}>
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
           
       
    );
}
