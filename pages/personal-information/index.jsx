import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import React from "react";
import traveler from "@/assets/front/images/traveler.svg";
import edit from "@/assets/front/images/edit.svg";
import Image from "next/image";
import Link from "next/link";

const PersolalInformation = () => {
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={traveler} placeholder="traveler" width={20} height={20} /> Add Traveler
                        </h4>
                    </div>
                    <div className={`d-flex justify-content-between  ${style.personalInfoBox} ${style.whiteBox}`}>
                        <div className={style.personalInfoLeft}>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Name</li>
                                <li className={style.value}>Let us know what to call you</li>
                                <li className={style.personalInfoEdit}>
                                    <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>

                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Display Name</li>
                                <li className={style.value}>Choose display name</li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Email Address</li>
                                <li className={style.value}>
                                    email1234@email.com<span>this email address isn’t verified yet, so you can’t use all your account’s feature.</span>
                                    <Link href={"#"}>Resend the verification email?</Link>
                                </li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Phone number</li>
                                <li className={style.value}>
                                    Add your phone number<span>o edit your phone number, please add and/or verify your email address</span>
                                </li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Date of Birth</li>
                                <li className={style.value}>Enter your Date of Birth</li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Nationality</li>
                                <li className={style.value}>Select your country/region you’re from </li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Gender</li>
                                <li className={style.value}>Select your gender</li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                            <ul className="d-flex flex-wrap">
                                <li className={style.info}>Address</li>
                                <li className={style.value}>add your address</li>
                                <li className={style.personalInfoEdit}>
                                    <span>
                                        <Image alt="" src={edit} placeholder="edit" width={16} height={14} />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalLabel">
                                    Edit Name
                                </h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default PersolalInformation;
