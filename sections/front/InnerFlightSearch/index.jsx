"use client";
import React, { useState } from "react";
import Image from "next/image";

import plain from "@/assets/front/images/plain.svg";
import searchIcon from "@/assets/front/images/search-icon.svg";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import style from "./index.module.scss";

const InnerFlightSearch = () => {
    const [value, onChange] = useState(new Date());
    const [valueTwo, onChangeTwo] = useState(new Date());
    const [valueThree, onChangeThree] = useState(new Date());

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={style.bookFlight}>
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

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className={style.inputArea}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <label>From</label>
                                            <span>
                                                <Image src={plain} width={16} height={14} alt="" />
                                            </span>
                                        </div>
                                        <div className={style.inputBox}>
                                            <input type="text" placeholder="New York" className={style.formInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className={style.inputArea}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <label>To</label>
                                            <span>
                                                <Image src={plain} width={16} height={14} alt="" />
                                            </span>
                                        </div>
                                        <div className={style.inputBox}>
                                            <input type="text" placeholder="London" className={style.formInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                                    <div className={style.inputArea}>
                                        <div className="w-100">
                                            <label>Departure</label>
                                        </div>
                                        <DatePicker onChange={onChange} value={value} />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                                    <div className={style.inputArea}>
                                        <div className="w-100">
                                            <label>Departure</label>
                                        </div>
                                        <DatePicker onChange={onChangeTwo} value={valueTwo} />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                                    <div className={style.inputArea}>
                                        <div className="w-100">
                                            <label>Passengers & Class</label>
                                        </div>
                                        <div className={style.inputBox}>
                                            <select>
                                                <option value="">1 Adult</option>
                                                <option value="">2 Adult</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between align-items-center mt-4">
                                <div className="col d-flex align-items-center">
                                    <div className="checkbox custom">
                                        <label>
                                            <input type="checkbox" defaultChecked /> Non Stop FlightOnly
                                        </label>
                                    </div>
                                    <div className={style.bannSearch}>
                                        <input type="text" placeholder="Search prefer airlines " className={style["input-1"]} />
                                        <button type="button" className={style["srcButton"]}>
                                            <Image src={searchIcon} width={18} height={18} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div>
                                        <button className={style.findFlight}>find your flight</button>
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

export default InnerFlightSearch;
