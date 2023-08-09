import React from "react";
import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import Image from "next/image";
import traveler from "@/assets/front/images/traveler.svg";
import Link from "next/link";

const TravellerList = () => {
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={traveler} placeholder="traveler" width={20} height={20} /> Traveler List
                        </h4>
                    </div>
                    <div className={`${style.smsPreference} ${style.whiteBox}`}>
                        <div className="accordion listAccordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Alexander Gomes
                                    </button>
                                    <ul className="d-flex">
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-solid fa-trash-can"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className={style.listArea}>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Gender</li>
                                                <li className={style.value}>Female</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Date of Birth</li>
                                                <li className={style.value}>15/08/2008</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Alternate Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Alexander Gomes
                                    </button>
                                    <ul className="d-flex">
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-solid fa-trash-can"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className={style.listArea}>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Gender</li>
                                                <li className={style.value}>Female</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Date of Birth</li>
                                                <li className={style.value}>15/08/2008</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Alternate Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Alexander Gomes
                                    </button>
                                    <ul className="d-flex">
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-solid fa-trash-can"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className={style.listArea}>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.Info}>Gender</li>
                                                <li className={style.value}>Female</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.Info}>Date of Birth</li>
                                                <li className={style.value}>15/08/2008</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.Info}>Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.Info}>Alternate Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Alexander Gomes
                                    </button>
                                    <ul className="d-flex">
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-solid fa-trash-can"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className={style.listArea}>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Gender</li>
                                                <li className={style.value}>Female</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Date of Birth</li>
                                                <li className={style.value}>15/08/2008</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li className={style.info}>Alternate Phone Number</li>
                                                <li className={style.value}>+91 1234 5678 90</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default TravellerList;
