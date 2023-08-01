import React, { useState } from "react";
import Image from "next/image";

import plain from "@/assets/front/images/plain.svg";
import searchIcon from "@/assets/front/images/search-icon.svg";
import rtIcon from "@/assets/front/images/rtIcon.svg";
import plain2 from "@/assets/front/images/plain-3.svg";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import style from "./index.module.scss";

const HomeFlightSearch = () => {
    const [value, onChange] = useState(new Date());
    const [valueTwo, onChangeTwo] = useState(new Date());
    const [valueThree, onChangeThree] = useState(new Date());

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={style.bookFlight}>
                            <h4>Book Your Flight2</h4>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className={style.radio}>
                                        <ul className="d-flex">
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-1" />
                                                <label className="form-check-label" htmlFor="rd-1">
                                                    Return
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                <label className="form-check-label" htmlFor="rd-2">
                                                    One way
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                <label className="form-check-label" htmlFor="rd-3">
                                                    Multy City
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <div className="row g-3">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={style.inputArea}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label>From</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                    <span className={style.roundTripIcon}>
                                                        <Image src={rtIcon} width={36} height={36} alt="" />
                                                    </span>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <input type="text" placeholder="New York" className={style.formInput} readOnly={true} />
                                                    <div className={style.srcDropdown}>
                                                        <div className={style.dropdownSearch}>
                                                            <input type="text" placeholder="" className={style.srcInput} />
                                                        </div>
                                                        <div className={style.dropdownSearchList}>
                                                            <div className={style.recentSearch}>
                                                                <h3>Recent Search</h3>
                                                                <div className={`d-flex align-items-center justify-content-between ${style.srcBox}`}>
                                                                    <div className={style.srcBoxLeft}>
                                                                        <Image src={plain2} width={26} height={26} alt="" />
                                                                    </div>
                                                                    <div className={style.srcBoxMid}>
                                                                        <h5>Dhaka , Bangladesh</h5>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum.</p>
                                                                    </div>
                                                                    <div className={style.srcBoxRight}>
                                                                        <h3>DAC</h3>
                                                                    </div>
                                                                </div>
                                                                <div className={`d-flex align-items-center justify-content-between ${style.srcBox}`}>
                                                                    <div className={style.srcBoxLeft}>
                                                                        <Image src={plain2} width={26} height={26} alt="" />
                                                                    </div>
                                                                    <div className={style.srcBoxMid}>
                                                                        <h5>Dhaka , Bangladesh</h5>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum.</p>
                                                                    </div>
                                                                    <div className={style.srcBoxRight}>
                                                                        <h3>DAC</h3>
                                                                    </div>
                                                                </div>
                                                                <div className={`d-flex align-items-center justify-content-between ${style.srcBox}`}>
                                                                    <div className={style.srcBoxLeft}>
                                                                        <Image src={plain2} width={26} height={26} alt="" />
                                                                    </div>
                                                                    <div className={style.srcBoxMid}>
                                                                        <h5>Dhaka , Bangladesh</h5>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum.</p>
                                                                    </div>
                                                                    <div className={style.srcBoxRight}>
                                                                        <h3>DAC</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={style.recentSearch}>
                                                                <h3>Popular Cities</h3>
                                                                <div className={`d-flex align-items-center justify-content-between ${style.srcBox}`}>
                                                                    <div className={style.srcBoxLeft}>
                                                                        <Image src={plain2} width={26} height={26} alt="" />
                                                                    </div>
                                                                    <div className={style.srcBoxMid}>
                                                                        <h5>Dhaka , Bangladesh</h5>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum.</p>
                                                                    </div>
                                                                    <div className={style.srcBoxRight}>
                                                                        <h3>DAC</h3>
                                                                    </div>
                                                                </div>
                                                                <div className={`d-flex align-items-center justify-content-between ${style.srcBox}`}>
                                                                    <div className={style.srcBoxLeft}>
                                                                        <Image src={plain2} width={26} height={26} alt="" />
                                                                    </div>
                                                                    <div className={style.srcBoxMid}>
                                                                        <h5>Dhaka , Bangladesh</h5>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum.</p>
                                                                    </div>
                                                                    <div className={style.srcBoxRight}>
                                                                        <h3>DAC</h3>
                                                                    </div>
                                                                </div>
                                                                <div className={`d-flex align-items-center justify-content-between ${style.srcBox}`}>
                                                                    <div className={style.srcBoxLeft}>
                                                                        <Image src={plain2} width={26} height={26} alt="" />
                                                                    </div>
                                                                    <div className={style.srcBoxMid}>
                                                                        <h5>Dhaka , Bangladesh</h5>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum.</p>
                                                                    </div>
                                                                    <div className={style.srcBoxRight}>
                                                                        <h3>DAC</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={style.inputArea}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label>To</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <input type="text" placeholder="London" className={style.formInput} readOnly={true} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Departure</label>
                                                </div>
                                                <DatePicker onChange={onChange} value={value} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Returne</label>
                                                </div>
                                                <DatePicker onChange={onChangeTwo} value={valueTwo} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Passengers</label>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <select>
                                                        <option value="">1 Adult</option>
                                                        <option value="">2 Adult</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Class</label>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <select>
                                                        <option value="">Business</option>
                                                        <option value="">2 Adult</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <button className={style.findFlight}>find your flight</button>
                                    </div>
                                    <div className="checkbox custom text-center mb-2">
                                        <label>
                                            <input type="checkbox" defaultChecked /> Non Stop FlightOnly
                                        </label>
                                    </div>
                                    <div className={style.bannSearch}>
                                        <input type="text" placeholder="Search prefer airlines " className={style["input-1"]} />
                                        <button type="button" className={style["srcButton"]}>
                                            <Image src={searchIcon} width={24} height={24} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFlightSearch;
