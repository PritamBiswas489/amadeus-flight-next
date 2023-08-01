import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

import profile from "@/assets/front/images/profile.jpg";

const Sidebar = () => {
    return (
        <>
            <div className={style.dashboardLeft}>
                <div className={style.dashboardLeftInner}>
                    <div className={style.proBoxTop}>
                        <span>
                            <Image alt="" src={profile} placeholder="profile" width={144} height={144} />
                        </span>
                        <h5>Welcome</h5>
                        <p>Alexander Gomes</p>
                    </div>
                    <div className={style.proBoxBtm}>
                        {/* <ul>
                            <li>
                                <Link href={"#"}>
                                    personal Details<span>Update your information and find out how its work</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    Preference<span>Change your language, currency</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    Security<span>Adjust your security settings and set up two-factor authentication</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    Preference<span>Update your information and find out how its work</span>
                                </Link>
                            </li>
                        </ul> */}
                        <ul id="menu">
                            <li>
                                <Link href="#" className={`nav-link ${style.active}`}>
                                    Dashboard<span>Update your information and find out how its work</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#submenu1" data-bs-toggle="collapse">
                                    personal Details<span>Update your information and find out how its work</span>
                                </Link>
                                <ul className="collapse nav flex-column" id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <Link href={"#"}>Personal Information</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>Email & Password</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="#submenu2" data-bs-toggle="collapse">
                                    traveler<span>Change your language, currency</span>
                                </Link>
                                <ul className="collapse nav flex-column" id="submenu2" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <Link href={"#"}>List</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>Add</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#submenu3" data-bs-toggle="collapse">
                                    My trip<span>Adjust your security settings and set up </span>
                                </Link>
                                {/* <ul className="collapse nav flex-column" id="submenu3" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <Link href="#">
                                            <span className="d-none d-sm-inline">Product</span> 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span className="d-none d-sm-inline">Product</span> 2
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                        </ul>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
