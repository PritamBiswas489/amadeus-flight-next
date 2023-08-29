import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import logo from "@/assets/front/images/logo.svg";
import setting from "@/assets/front/images/setting.svg";
import manageBooking from "@/assets/front/images/manage-booking.svg";
import login from "@/assets/front/images/login.svg";
import flag from "@/assets/front/images/flag.svg";
import email from "@/assets/front/images/email.svg";
import b from "@/assets/front/images/b.svg";
import google from "@/assets/front/images/google.svg";
import fb from "@/assets/front/images/fb.svg";
import apple from "@/assets/front/images/apple.svg";

import trustpilot from "@/assets/front/images/trustpilot.png";
import loginBg from "@/assets/front/images/login.jpg";

import Link from "next/link";
const Header = () => {
    const [state, setstate] = useState(false);
    // const changevalueonScroll = () => {
    //     alert("dfgdgdf");
    //     const scrollvalue = document.documentElement.scrollTop;
    //     if (scrollvalue > 100) {
    //         setstate(true);
    //     } else {
    //         setstate(false);
    //     }
    // };
    // function handleScroll() {
    //     alert("asasas");
    // }

    useEffect(() => {
        const container = document.querySelector("body");

        const handleScroll = ({ target }) => {
            const scrollvalue = target.scrollTop;
            if (scrollvalue > 100) {
                setstate(true);
            } else {
                setstate(false);
            }
        };

        container.addEventListener("scroll", handleScroll, false);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    // const [scrolltopdata, setscrolltopdata] = useState("");
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY < 15) {
    //             setscrolltopdata("");
    //         } else {
    //             setscrolltopdata("scrolled");
    //         }
    //     });
    // }, []);
    return (
        <>
            <header className={`${style.mainHeader} ${state ? style.fixHeader : ""}`}>
                {/* <header className={`${style.mainHeader} ${style.fixHeader}`}> */}
                <div className={`container-fluid ${style.ph50}`}>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className={style.logo}>
                                <Link href={"/"}>
                                    <Image alt="" src={logo} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto d-flex flex-wrap">
                            {/* <ul className='d-flex suppLog'> */}
                            <div className={style.manageBooking}>
                                <ul className={`d-flex ${style.suppLog}`}>
                                    <li>
                                        <Link href="#">
                                            <Image src={manageBooking} width={28} height={24} alt="" /> Manage Booking
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
                                </ul>
                            </div>
                            <div className={style.logRegArea}>
                                <ul className={`d-flex ${style.logReg}`}>
                                    <li>
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <Image src={login} width={28} height={28} alt="" />
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            {/* <Image src={login} width={28} height={28} alt="" /> */}
                                            Sign up
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="modal fade loginModal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={true}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                        <div className="modal-body">
                            <div className={style.loginImg}>
                                <Image alt="" src={loginBg} placeholder="loginBg" sizes="100vw" style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className={style.fullExperience}>
                                <div className={style.fullExperienceTop}>
                                    <h3>Get the full experience</h3>
                                    <p>Get better deals, save your details for easy booking, and see all your trips in one place.</p>
                                </div>
                                <div className={style.fullExperienceBtm}>
                                    <h6>Continue with one of these:</h6>
                                    <ul>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={email} placeholder="email" width={26} height={26} /> E-mail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={b} placeholder="b" width={23} height={23} /> Booking.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={google} placeholder="google" width={23} height={23} /> Google
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={fb} placeholder="fb" width={23} height={23} /> Facebook
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={apple} placeholder="apple" width={23} height={23} /> Apple
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={style.bookedIncorrect}>
                                    <p>Booked with an incorrect email address?</p>
                                </div>
                                <div className={style.bookedIncorrectBtm}>
                                    <p>
                                        The use of your account is governed by these Terms of Use. Your Personal Data will be processed according to our{" "}
                                        <Link href={"#"}>Privacy Policy.</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
