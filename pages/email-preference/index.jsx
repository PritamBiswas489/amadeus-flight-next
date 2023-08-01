import React from "react";
import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import Image from "next/image";

import envelope from "@/assets/front/images/envlope.svg";
import Link from "next/link";

const EmailPreference = () => {
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={envelope} placeholder="envelope" width={24} height={16} /> Email Preference
                        </h4>
                    </div>
                    <div className={`${style.emailPreference} ${style.whiteBox}`}>
                        <div className={`position-relative ${style.emailPreferenceBox}`}>
                            <h5>Deals & Promotion</h5>
                            <p>Limited-time discounts on hotels, flights, packages, and more</p>
                        </div>
                        <div className={`position-relative ${style.emailPreferenceBox}`}>
                            <h5>Travel Reviews</h5>
                            <p>Requests for a quick review of your recent travel experience.</p>
                        </div>
                        <div className={`position-relative ${style.emailPreferenceBox}`}>
                            <h5>Surveys</h5>
                            <p>Requests for feedback on how we can improve your shopping experience.</p>
                        </div>
                        <div className={`d-flex flex-flex-wrap align-items-center ${style.languagePreference}`}>
                            <h5>Language Preference</h5>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>English</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className={style.languagePreference}>
                            <div className="checkbox custom-2">
                                <label>
                                    <input type="checkbox" /> Please unsubscribe me from all of the emails listed above. Please note that you will still receive transactional
                                    emails for your bookings, account updates and loyalty programme if you are a member of the programme. Please note that this may take up to 10
                                    business days to be effective.
                                </label>
                            </div>
                        </div>
                        <div className={`${style.languagePreference} ${style.saveCancel}`}>
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

export default EmailPreference;
