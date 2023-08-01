import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import RightBar from "@/components/front/RightBar";

import ti1 from "@/assets/front/images/ti1.png";
import ti2 from "@/assets/front/images/ti2.png";
import ti3 from "@/assets/front/images/ti3.png";
import ti4 from "@/assets/front/images/ti4.png";
import ti5 from "@/assets/front/images/ti5.png";
import ti6 from "@/assets/front/images/ti6.png";
import ti7 from "@/assets/front/images/ti7.png";

import tick2 from "@/assets/front/images/tick2.svg";
import Link from "next/link";

const TravelInfo = () => {
    return (
        <>
            <div className={style.travelInfoSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-8 col-12">
                            <div className="">
                                <h3>Extra Services</h3>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Travel Insurance</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti1} placeholder="ti1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Airline Insolvency Protection</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti2} placeholder="ti2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Airhelp plus Flight Delay Compensation</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti3} placeholder="ti3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <Image alt="" src={tick2} placeholder="tick2.svg" width={12} height={12} />
                                                            </span>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Lost Bagage Service</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row align-items-center">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti4} placeholder="ti4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Flight updates by SMS</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row align-items-center ">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti5} placeholder="ti5" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Check In</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row align-items-center">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti6} placeholder="ti6" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.extraServicesBox}>
                                <h5>Booking number by sMS</h5>
                                <div className={style.extraServicesBoxInner}>
                                    <div className="row align-items-center">
                                        <div className="col-5">
                                            <div className={style.extraServicesImg}>
                                                <Image alt="" src={ti7} placeholder="ti7" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className={style.extraServicesDesc}>
                                                <div className={style.esdTop}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
                                                    <Link href={"#"}>Read more......</Link>
                                                </div>
                                                <div className={style.esdBtm}>
                                                    <ul className="d-flex align-items-center">
                                                        <li>
                                                            Only <span>US$35.58</span>
                                                        </li>
                                                        <li className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                            <label className="form-check-label" htmlFor="rd-4">
                                                                All Tickets
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
                                            </div>
                                        </div>
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
                            <RightBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelInfo;
