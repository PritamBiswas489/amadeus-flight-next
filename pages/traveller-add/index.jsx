import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import React from "react";
import Image from "next/image";
import traveler from "@/assets/front/images/traveler.svg";
import Link from "next/link";

const TravellerAdd = () => {
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
                            <h5>Personal Info</h5>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                First Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row g-3 align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
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
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Date of Birth
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Alternate Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.personalInfoBox}>
                            <h5>EMERGENCY CONTACT</h5>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                First Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row g-3 align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
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
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Date of Birth
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="row align-items-center">
                                        <div className={style.val}>
                                            <label htmlFor="inputPassword6" className="col-form-label">
                                                Alternate Phone Number
                                            </label>
                                        </div>
                                        <div className="col">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
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
