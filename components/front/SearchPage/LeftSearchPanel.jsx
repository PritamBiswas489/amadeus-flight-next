import React from 'react';
import style from "@/pages/flight/search/index.module.scss";
import { AiFillCheckSquare } from "react-icons/ai";
import Image from "next/image";
import bag from "@/assets/front/images/bag.svg";
import bag2 from "@/assets/front/images/bag-2.svg";
import Link from "next/link";
import MultiRangeSlider from "@/components/common/MultiRangeSlider";
import sun from "@/assets/front/images/sun.svg";
import sun2 from "@/assets/front/images/sun-2.svg";
import sun3 from "@/assets/front/images/sun-3.svg";
import mun from "@/assets/front/images/mun.svg";


export default function LeftSearchPanel({count}) {
  return (
    <div className={style.leftFilter}>
                                <div className={style.leftFilterInner}>
                                    <div className={style.leftFilterRadio}>
                                        <ul>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                <label className="form-check-label" htmlFor="rd-4">
                                                    All Tickets{" "}
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-5" />
                                                <label className="form-check-label" htmlFor="rd-5">
                                                    Best Tickets
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.leftFilterInnerBox}>
                                        <div className={style.lfibHeader}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>Stops</li>
                                                <li>From</li>
                                            </ul>
                                        </div>
                                        <div className={style.lfibBody}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li className={style.checked}>
                                                    <span>
                                                        <AiFillCheckSquare />
                                                    </span>{" "}
                                                    Direct (1)333
                                                </li>
                                                <li>₹ 12,845</li>
                                            </ul>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li className={style.checked}>
                                                    <span>
                                                        <AiFillCheckSquare />
                                                    </span>{" "}
                                                    One Stop (3)
                                                </li>
                                                <li>₹ 12,845</li>
                                            </ul>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li className={style.checked}>
                                                    <span>
                                                        <AiFillCheckSquare />
                                                    </span>{" "}
                                                    2+ stops (1)
                                                </li>
                                                <li>₹ 12,845</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`leftFilterInnerBox`}>
                                        <div className="accordion" id="accordionPanelsStayOpenExample">
                                            <div className="accordion-item">
                                                <h6 className="accordion-header" id="panelsStayOpen-headingOne">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="panelsStayOpen-collapseOne"
                                                    >
                                                        Fee Assistant
                                                    </button>
                                                </h6>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className={`accordion-body  ${style.feeAssistant}`}>
                                                        <ul className="d-flex justify-content-between align-items-center">
                                                            <li>
                                                                <Image alt="" src={bag} placeholder="logo" width={9} height={12} sizes="100vw" /> Carry-on bag
                                                            </li>
                                                            <li>
                                                                <div className={`d-flex align-items-center  ${style.numberCount}`}>
                                                                    <button
                                                                        onClick={() => {
                                                                            setCount(count + 1);
                                                                        }}
                                                                    >
                                                                        +
                                                                    </button>
                                                                    <div className={style.numberInput}>{count}</div>
                                                                    <button
                                                                        onClick={() => {
                                                                            if (count > 0) setCount(count - 1);
                                                                        }}
                                                                    >
                                                                        -
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex justify-content-between align-items-center">
                                                            <li>
                                                                <Image alt="" src={bag2} placeholder="logo" width={9} height={12} sizes="100vw" /> Carry-on bag
                                                            </li>
                                                            <li>
                                                                <div className={`d-flex align-items-center  ${style.numberCount}`}>
                                                                    <button
                                                                        onClick={() => {
                                                                            setCount(count + 1);
                                                                        }}
                                                                    >
                                                                        +
                                                                    </button>
                                                                    <div className={style.numberInput}>{count}</div>
                                                                    <button
                                                                        onClick={() => {
                                                                            if (count > 0) setCount(count - 1);
                                                                        }}
                                                                    >
                                                                        -
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h6 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseTwo"
                                                    >
                                                        Times of Flight
                                                    </button>
                                                </h6>
                                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                    <div className={`accordion-body  ${style.timesFlight}`}>
                                                        <ul className="row g-2">
                                                            <li className="col">
                                                                <Link href={"#"} className={style.active}>
                                                                    Take off
                                                                </Link>
                                                            </li>
                                                            <li className="col">
                                                                <Link href={"#"}>Landing</Link>
                                                            </li>
                                                        </ul>
                                                        <div className={style.sliderArea}>
                                                            <p>
                                                                Take of from YVR
                                                                <br />
                                                                Mon 12:30am to 11:00am
                                                            </p>
                                                            <MultiRangeSlider
                                                                min={1}
                                                                max={100}
                                                                onChange={(min, max) => {
                                                                    ////console.log("min", min);
                                                                }}
                                                            />
                                                        </div>
                                                        <div className={style.sliderArea}>
                                                            <p>
                                                                Take of from MNL
                                                                <br />
                                                                Mon 12:30am to 11:00am
                                                            </p>
                                                            <MultiRangeSlider
                                                                min={1}
                                                                max={100}
                                                                onChange={(min, max) => {
                                                                    ////console.log("min", min);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h6 className="accordion-header" id="panelsStayOpen-headingThree">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseThree"
                                                    >
                                                        Airports
                                                    </button>
                                                </h6>
                                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                    <div className="accordion-body">
                                                        <div className={style.airports}>
                                                            <ul>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> Departure / Return same
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className={style.airports}>
                                                            <h6>Vancouver</h6>
                                                            <ul>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> YVR: Vancouver Intl <span>$1,882</span>
                                                                    </label>
                                                                </li>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> Bus stop
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className={style.airports}>
                                                            <h6>Manila</h6>
                                                            <ul>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> MNL: Ninoy Aquino Intl <span>$1,882</span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h6 className="accordion-header" id="panelsStayOpen-headingFour">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseFour"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseFour"
                                                    >
                                                        Duration
                                                    </button>
                                                </h6>
                                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                                    <div className={`accordion-body  ${style.timesFlight}`}>
                                                        <div className={style.sliderArea}>
                                                            <h5>Flight Leg</h5>
                                                            <p>14h 25m - 64h 51m</p>
                                                            <MultiRangeSlider
                                                                min={1}
                                                                max={100}
                                                                onChange={(min, max) => {
                                                                    //console.log("min", min);
                                                                }}
                                                            />
                                                        </div>
                                                        <div className={style.sliderArea}>
                                                            <h5>Layover</h5>
                                                            <p>0h 25m - 25h 51m</p>
                                                            <MultiRangeSlider
                                                                min={1}
                                                                max={100}
                                                                onChange={(min, max) => {
                                                                    //console.log("min", min);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h6 className="accordion-header" id="panelsStayOpen-headingFive">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseFive"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseFive"
                                                    >
                                                        Flight quality
                                                    </button>
                                                </h6>
                                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                                    <div className="accordion-body">
                                                        <div className={style.airports}>
                                                            <ul>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> Economy <span>$1,882</span>
                                                                    </label>
                                                                </li>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> Business <span>$1,882</span>
                                                                    </label>
                                                                </li>
                                                                <li className="checkbox custom-2">
                                                                    <label>
                                                                        <input type="checkbox" /> Mixed <span>$1,882</span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h6 className="accordion-header" id="panelsStayOpen-headingSix">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseSix"
                                                        aria-expanded="false"
                                                        aria-controls="panelsStayOpen-collapseSix"
                                                    >
                                                        Price
                                                    </button>
                                                </h6>
                                                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                                                    <div className={`accordion-body  ${style.timesFlight}`}>
                                                        <div className={style.sliderArea}>
                                                            <p>$1,882 - $2,882</p>
                                                            <MultiRangeSlider
                                                                min={1}
                                                                max={100}
                                                                onChange={(min, max) => {
                                                                    //console.log("min", min);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.radioInnerWrap}>
                                        <div className={style.radioInnerBox}>
                                            <h6>Layover City</h6>
                                            <ul>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-6" />
                                                    <label className="form-check-label" htmlFor="rd-6">
                                                        Aberdeen (ABZ)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-7" />
                                                    <label className="form-check-label" htmlFor="rd-7">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-8" />
                                                    <label className="form-check-label" htmlFor="rd-8">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-9" />
                                                    <label className="form-check-label" htmlFor="rd-9">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-10" />
                                                    <label className="form-check-label" htmlFor="rd-10">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-11" />
                                                    <label className="form-check-label" htmlFor="rd-11">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-12" />
                                                    <label className="form-check-label" htmlFor="rd-12">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-13" />
                                                    <label className="form-check-label" htmlFor="rd-13">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={style.radioInnerBox}>
                                            <h6>Arrival Airport</h6>
                                            <ul>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-6" />
                                                    <label className="form-check-label" htmlFor="rd-6">
                                                        Aberdeen (ABZ)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-7" />
                                                    <label className="form-check-label" htmlFor="rd-7">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-8" />
                                                    <label className="form-check-label" htmlFor="rd-8">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-9" />
                                                    <label className="form-check-label" htmlFor="rd-9">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-10" />
                                                    <label className="form-check-label" htmlFor="rd-10">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-11" />
                                                    <label className="form-check-label" htmlFor="rd-11">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-12" />
                                                    <label className="form-check-label" htmlFor="rd-12">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                                <li className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-13" />
                                                    <label className="form-check-label" htmlFor="rd-13">
                                                        Asterdam (AMS)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.departureTime}>
                                        <h6>Departure Time in New York</h6>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className={`d-flex  ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={sun} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Early Morning</p>
                                                        <span>(12.00am - 04:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className={`d-flex  ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={sun2} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Morning</p>
                                                        <span>((05.00am - 11:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className={`d-flex  ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={sun3} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Morning</p>
                                                        <span>((05.00am - 11:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className={`d-flex  ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={mun} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Morning</p>
                                                        <span>((05.00am - 11:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.departureTime}>
                                        <h6>Arrival time in London</h6>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className={`d-flex ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={sun} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Early Morning</p>
                                                        <span>(12.00am - 04:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className={`d-flex ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={sun2} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Morning</p>
                                                        <span>((05.00am - 11:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className={`d-flex ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={sun3} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Morning</p>
                                                        <span>((05.00am - 11:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className={`d-flex ${style.dtBox}`}>
                                                    <div className={style.dtBoxLeft}>
                                                        <Image alt="" src={mun} placeholder="logo" width={21} height={14} />
                                                    </div>
                                                    <div className={style.dtBoxRight}>
                                                        <p>Morning</p>
                                                        <span>((05.00am - 11:59am)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  )
}
