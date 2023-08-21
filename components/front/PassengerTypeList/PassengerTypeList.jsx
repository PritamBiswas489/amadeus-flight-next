import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export default function PassengerTypeList({ setPassAdult, setPassChild, setPassInfant, adultValue, childrenValue, infantValue }) {
    const [dropdownShow, setDropdownShow] = useState(false);
    const panelRef = useRef(null);

    const [typeText, setTypeText] = useState("Select");

    function setAdultValue(value) {
        setPassAdult(value);
    }
    function setChildrenValue(value) {
        setPassChild(value);
    }
    function setInfantValue(value) {
        setPassInfant(value);
    }

    function addTypeValue(type) {
        if (type === "adult") {
            setAdultValue((prev) => parseInt(prev) + 1);
        }
        if (type === "child") {
            setChildrenValue((prev) => parseInt(prev) + 1);
        }
        if (type === "infant") {
            setInfantValue((prev) => parseInt(prev) + 1);
        }
    }
    function minusTypeValue(type) {
        if (type === "adult") {
            setAdultValue((prev) => {
                let value = 0;
                value = parseInt(prev) - 1;
                if (value === 0) {
                    return 1;
                }
                return value;
            });
        }
        if (type === "child") {
            setChildrenValue((prev) => {
                let value = 0;
                value = parseInt(prev) - 1;
                if (value < 0) {
                    return 0;
                }
                return value;
            });
        }
        if (type === "infant") {
            setInfantValue((prev) => {
                let value = 0;
                value = parseInt(prev) - 1;
                if (value < 0) {
                    return 0;
                }
                return value;
            });
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
        <div ref={panelRef} className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className={style.inputArea}>
                <div className={`w-100 ${style.inputSelect}`}>
                    <label>Passengers</label>
                    <Link
                        href={"javascript:void(0)"}
                        onClick={() => {
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
