import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

import RightBar from "@/components/front/RightBar";

import { IoCheckboxSharp } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

import handBag from "@/assets/front/images/hand-bag-2.svg";
import handBag3 from "@/assets/front/images/bag-3.svg";
import handBag4 from "@/assets/front/images/bag-4.svg";
import Link from "next/link";

import tick from "@/assets/front/images/tick.svg";
import cross from "@/assets/front/images/cross.svg";
import tick2 from "@/assets/front/images/tick-2.svg";
import airAsia from "@/assets/front/images/air-asia.svg";
import alarm from "@/assets/front/images/alarm-clock.svg";

const FlightSelection = ({dt}) => {
    return (
        <>
            <div className={style.stepDtlsSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-8 col-12">
                            <div className={style.whiteBdrBox}>
                                <div className={style.ContactInformation}>
                                    <h6>Contact Information of all passangers</h6>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-12 d-flex flex-wrap align-items-center">
                                            <label htmlFor="E-mail" className={`col-auto ${style.boldLable}`}>
                                                E-mail
                                            </label>
                                            <input type="text" name="" id="" placeholder="email@email.com" className="form-control col ms-3" />
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-12 d-flex flex-wrap align-items-center">
                                            <label htmlFor="E-mail" className={`col-auto ${style.boldLable}`}>
                                                Mobile Number
                                            </label>
                                            <div className="position-relative col ms-3">
                                                <input type="number" name="" id="" placeholder="+91 | 0000 0000 00" className={`form-control ${style.inputNumber}`} />
                                                <small className={style.enterNumber}>Please enter your number</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.exclusiveDeals}>
                                        <p>
                                            <IoCheckboxSharp />
                                            No, I don’t want to receive emails about cheap flights or other exclusive deals
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.whiteBdrBox}>
                                <div className={style.PassengerAdult}>
                                    <h6>
                                        Passenger 1, adult<small>*Field required</small>
                                    </h6>
                                    <div className={style.formNotification}>
                                        <p>
                                            <span>
                                                <AiFillInfoCircle />
                                            </span>
                                            Please enter your first name, middle names and last name exactly as they appear on your passport/ID to avoid issue at the airport. If
                                            there is a middle name, please enter it in the name field.
                                        </p>
                                    </div>
                                    <div className={style.gender}>
                                        <ul className="d-flex genderRadio">
                                            <li className="">
                                                <strong>Gender</strong>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                <label className="form-check-label" htmlFor="rd-2">
                                                    Male
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                <label className="form-check-label" htmlFor="rd-3">
                                                    Female
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={`mb-3 ${style.genderForm}`}>
                                                <label htmlFor="" className="form-label">
                                                    Last Name
                                                </label>
                                                <input type="email" className="form-control" id="" placeholder="e.g. Peter Gomes" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={`mb-3 ${style.genderForm}`}>
                                                <label htmlFor="" className="form-label">
                                                    Last Name
                                                </label>
                                                <input type="email" className="form-control" id="" placeholder="e.g. Brown" />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center mb-3 mt-2">
                                            <Link href={"#"} className={style.frequentFlyer}>
                                                Add Frequent flyer Program <FaAngleDown />
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={`mb-3 ${style.genderForm}`}>
                                                <label htmlFor="" className="form-label">
                                                    Card Type
                                                </label>
                                                <select className="form-label form-select">
                                                    <option value="">Agena Airlines</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={`mb-3 ${style.genderForm}`}>
                                                <label htmlFor="" className="form-label">
                                                    Frequent flyer number
                                                </label>
                                                <input type="email" className="form-control" id="" placeholder="e.g. Brown" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.baggage}>
                                        <h5>Select Baggage</h5>
                                        <div className={style.baggageInner}>
                                            <h6>Personal Item</h6>
                                            <p>A bag that must fit under the seat in front of you.</p>
                                            <ul className="d-flex align-items-center">
                                                <li>
                                                    <Image alt="" src={handBag} placeholder="handBag" width={42} height={38} />
                                                </li>
                                                <li>
                                                    <span>Included</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={style.baggage}>
                                        <h5>Hand Baggage</h5>
                                        <div className={style.baggageInner}>
                                            <h6>Personal Item</h6>
                                            <p>A bag that must fit under the seat in front of you.</p>
                                            <ul className="d-flex align-items-center">
                                                <li>
                                                    <Image alt="" src={handBag4} placeholder="logo" width={42} height={38} />
                                                </li>
                                                <li>
                                                    <span>Included</span>
                                                </li>
                                                <li>1 X 6 kg</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={style.baggage}>
                                        <h5>Hand Baggage</h5>
                                        <div className={style.baggageInner}>
                                            <h6>Personal Item</h6>
                                            <p>A bag that must fit under the seat in front of you.</p>
                                            <ul className="d-flex align-items-center">
                                                <li>
                                                    <Image alt="" src={handBag3} placeholder="handBag4" width={42} height={38} />
                                                </li>
                                                <li>
                                                    <span>Included</span>
                                                </li>
                                                <li>1 X 6 kg</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.configureTrip}>
                                <h5>Configure Your trip</h5>
                                <div className={`${style.whiteBdrBox} ${style.configureTripInner}`}>
                                    <div className={style.pricingAreaTop}>
                                        <h6>Choose your own bundle </h6>
                                        <p>Save 20% with the offer, compared to a single product purchase</p>
                                    </div>
                                    <div className={style.pricingArea}>
                                        <div className="row g-0">
                                            <div className="col-3">
                                                <div className="accordion accordion-flush priceAcordion" id="accordionFlushExample">
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingOne">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseOne"
                                                            >
                                                                Premium Support
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseOne"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion.</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingTwo">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseTwo"
                                                            >
                                                                Flight updates by SMS
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseTwo"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion.</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingThree">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree"
                                                            >
                                                                Check in
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseThree"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion,</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingFour">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseFour"
                                                            >
                                                                Booking Number by SMS
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseFour"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingfour"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion,</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingFive">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseFive"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseFive"
                                                            >
                                                                Airhelp plus flight delay compensation
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseFive"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingFive"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion,</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="row g-0">
                                                    <div className="col-4">
                                                        <div className={style.priceInner}>
                                                            <h5>
                                                                Standard<span></span>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Image alt="" src={tick} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                            </ul>
                                                            <div className={style.priceInnerAmmount}>
                                                                <p>
                                                                    <del>US$16.39</del>
                                                                </p>
                                                                <h6>US$14.00 </h6>
                                                                <p>Price per person</p>
                                                            </div>
                                                            <div className={style.priceRadio}>
                                                                <div className="form-radio">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-1" />
                                                                    <label className="form-check-label" htmlFor="rd-1">
                                                                        Standard
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className={`${style.priceInner} ${style.premium}`}>
                                                            <h5>
                                                                Premium<span></span>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Image alt="" src={tick} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                            </ul>
                                                            <div className={style.priceInnerAmmount}>
                                                                <p>
                                                                    <del>US$16.39</del>
                                                                </p>
                                                                <h6>US$14.00 </h6>
                                                                <p>Price per person</p>
                                                            </div>
                                                            <div className={style.priceRadio}>
                                                                <div className="form-radio">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                                    <label className="form-check-label" htmlFor="rd-2">
                                                                        Premium
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className={style.priceInner}>
                                                            <h5>
                                                                Premium+<span></span>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Image alt="" src={tick} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                            </ul>
                                                            <div className={style.priceInnerAmmount}>
                                                                <p>
                                                                    <del>US$16.39</del>
                                                                </p>
                                                                <h6>US$14.00 </h6>
                                                                <p>Price per person</p>
                                                            </div>
                                                            <div className={style.priceRadio}>
                                                                <div className="form-radio">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                                    <label className="form-check-label" htmlFor="rd-3">
                                                                        Premium+
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex justify-content-end ${style.willWithout}`}>
                                        <h6>
                                            I will go without
                                            <Image alt="" src={tick2} placeholder="tick2" width={20} height={20} />
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="protectData">
                                <h6>By booking you confirm that the names on the booking match those on the passports of those travelling</h6>
                                <h5>We protect your personal data</h5>
                                <ul className="d-flex justify-content-center">
                                    <li>
                                        <Image alt="" src={tick2} placeholder="tick2" width={20} height={20} /> 24/7 customer service
                                    </li>
                                    <li>
                                        <Image alt="" src={tick2} placeholder="tick2" width={20} height={20} /> 100% secure payment
                                    </li>
                                </ul>
                                <Link href={"#"}>Continue</Link>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                            <RightBar dt={dt} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightSelection;
