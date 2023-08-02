import React, { useState } from "react";
import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import Image from "next/image";
import traveler from "@/assets/front/images/traveler.svg";
import Link from "next/link";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TravellerAdd = () => {
    const [value, onChange] = useState(new Date());
    const [valueTwo, onChangeTwo] = useState(new Date());
    // const [valueThree, onChangeThree] = useState(new Date());
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={traveler} placeholder="traveler" width={20} height={20} /> Traveler Add
                        </h4>
                    </div>
                    <div className={`personalInfoForm ${style.personalInfo} ${style.whiteBox}`}>
                        <div className={style.personalInfoBox}>
                            <h5 className="mb-4">Personal Info</h5>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                First Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="text" id="" className="form-control" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row g-3 align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="text" id="" className="form-control" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Gender
                                            </label>
                                        </div>
                                        <div className="col">
                                            <div className={style.radio}>
                                                <ul className="d-flex">
                                                    <li className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-1" />
                                                        <label className="form-check-label" htmlFor="rd-1">
                                                            Male
                                                        </label>
                                                    </li>
                                                    <li className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                        <label className="form-check-label" htmlFor="rd-2">
                                                            Female
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Date of Birth
                                            </label>
                                        </div>
                                        <div className="col">
                                            {/* <input type="text" id="" className="form-control" aria-describedby="" /> */}
                                            <div className={style.datePickerInput}>
                                                <DatePicker onChange={onChangeTwo} value={valueTwo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            {/* <input type="text" id="" className="form-control" aria-describedby="" /> */}
                                            {/* <PhoneInput
                                                inputProps={{
                                                    name: "phone",
                                                    required: true,
                                                    autoFocus: true,
                                                }}
                                            /> */}

                                            <PhoneInput country={"us"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Alternate Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="text" id="" className="form-control" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.personalInfoBox}>
                            <h5 className="mb-4">EMERGENCY CONTACT</h5>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                First Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="text" id="" className="form-control" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row g-3 align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="text" id="" className="form-control" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Gender
                                            </label>
                                        </div>
                                        <div className="col">
                                            <div className={style.radio}>
                                                <ul className="d-flex">
                                                    <li className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                        <label className="form-check-label" htmlFor="rd-3">
                                                            Male
                                                        </label>
                                                    </li>
                                                    <li className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-4" />
                                                        <label className="form-check-label" htmlFor="rd-4">
                                                            Female
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Date of Birth
                                            </label>
                                        </div>
                                        <div className="col">
                                            {/* <input type="text" id="" className="form-control" aria-describedby="" /> */}
                                            <div className={style.datePickerInput}>
                                                <DatePicker onChange={onChange} value={value} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            {/* <input type="text" id="" className="form-control" aria-describedby="" /> */}
                                            <PhoneInput country={"us"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="" className="col-form-label">
                                                Alternate Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="text" id="" className="form-control" aria-describedby="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.saveCancel}>
                            <ul className="d-flex align-items-center">
                                <li>
                                    <button className={style.saveBtn}>Save</button>
                                </li>
                                <li>
                                    <Link href={"#"} className={style.cancelBtn}>
                                        Cancel
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default TravellerAdd;
