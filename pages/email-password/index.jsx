import React from "react";
import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import envelope from "@/assets/front/images/envlope.svg";
import Image from "next/image";
// import { Button } from "bootstrap";
import Link from "next/link";

const EmailPassword = () => {
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={envelope} placeholder="envelope" width={24} height={16} /> Email & Password
                        </h4>
                    </div>
                    <div className={`${style.emailPassword} ${style.whiteBox}`}>
                        <div className={style.emailPasswordInner}>
                            <form action="">
                                <ul className="d-flex flex-wrap">
                                    <li className={style.info}>Email</li>
                                    <li className={style.value}>
                                        <div className="w-100">
                                            <input type="email" className="form-control" id="" placeholder="email@email.com" />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="d-flex flex-wrap">
                                    <li className={style.info}>Re-type Email</li>
                                    <li className={style.value}>
                                        <div className="w-100">
                                            <input type="email" className="form-control" id="" placeholder="Re-type Email" />
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
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className={style.emailPasswordInner}>
                            <form action="">
                                <ul className="d-flex flex-wrap">
                                    <li className={style.info}>Current password</li>
                                    <li className={style.value}>
                                        <div className="w-100">
                                            <input type="password" className="form-control" id="" placeholder="********" />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="d-flex flex-wrap">
                                    <li className={style.info}>New password</li>
                                    <li className={style.value}>
                                        <div className="w-100">
                                            <input type="password" className="form-control" id="" placeholder="********" />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="d-flex flex-wrap">
                                    <li className={style.info}>Re-type password</li>
                                    <li className={style.value}>
                                        <div className="w-100">
                                            <input type="password" className="form-control" id="" placeholder="********" />
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
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className={`d-flex justify-content-center ${style.deleteAccount} ${style.emailPasswordInner}`}>
                            <Link href={"#"} className={style.deleteAccountBtn}>
                                Delete Account
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default EmailPassword;
