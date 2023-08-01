import React from "react";
import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import Image from "next/image";
import sms from "@/assets/front/images/sms.svg";
import Link from "next/link";

const SmsPreference = () => {
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={sms} placeholder="sms" width={20} height={20} /> SMS Preference
                        </h4>
                    </div>
                    <div className={`${style.smsPreference} ${style.whiteBox}`}>
                        <p>Please add your phone number in the Personal Info section to control your SMS preferences.</p>
                        <Link href={"#"} className="smsPreferenceBtn">
                            + Add phone number
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SmsPreference;
