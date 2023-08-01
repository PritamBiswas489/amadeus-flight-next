import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import logo from "@/assets/front/images/logo.svg";
import setting from "@/assets/front/images/setting.svg";
import login from "@/assets/front/images/login.svg";
import flag from "@/assets/front/images/flag.svg";
import trustpilot from "@/assets/front/images/trustpilot.png";
import Link from "next/link";
const Header = () => {
    return (
        <>
            <header className={style.mainHeader}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className={style.logo}>
                                <Link href={"/"}>
                                    <Image alt="" src={logo} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            {/* <ul className=d-flex suppLog> */}
                            <ul className={`d-flex ${style.suppLog}`}>
                                <li>
                                    <Link href="#">
                                        <Image src={setting} width={28} height={28} alt="" /> Manage Booking
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src={trustpilot} width={250} height={"auto"} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src={flag} width={28} height={28} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src={setting} width={28} height={28} alt="" /> Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src={login} width={28} height={28} alt="" />
                                        Login | Sign up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
