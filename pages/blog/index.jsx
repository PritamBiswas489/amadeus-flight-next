if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

import React from "react";

import Layout from "@/components/front/include/Layout";
import style from "./index.module.scss";

import Background from "@/assets/front/images/blog.jpg";

import sloganIcon from "@/assets/front/images/slogan-icon.jpg";
import chat from "@/assets/front/images/chat.svg";
import BoxOne from "@/components/front/blog/BoxOne";
import BoxTwo from "@/components/front/blog/BoxTwo";
import BoxThree from "@/components/front/blog/BoxThree";
import BoxFour from "@/components/front/blog/BoxFour";

import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
// import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const blog = () => {
    const options = {
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        animateOut: "fadeOut",
        loop: true,
        margin: 0,
        stagePadding: 0,
        nav: true,
        dots: false,
        navElement: "div",
        items: 1,
    };
    return (
        <>
            <Layout>
                <section>
                    <OwlCarousel className="owl-theme" {...options}>
                        <div class="item">
                            <div className={style.blogBanner} style={{ background: `url(${Background.src})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className={style.slogan}>
                                                <h2>Lorem Ipsum is simply dummy text of Lorem Ipsum is</h2>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                    survived not only five centuries, but also the leap into electronic
                                                </p>
                                                <div className={style.sloganBtm}>
                                                    <div className={style.sloganBtmImg}>
                                                        <span>
                                                            <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={54} height={54} />
                                                        </span>
                                                    </div>
                                                    <div className={style.sloganBtmDesc}>
                                                        <h6>Lorem Ipsum</h6>
                                                        <p>
                                                            <Image alt="" src={chat} placeholder="sloganIcon" width={17} height={17} /> 8 comments
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div className={style.blogBanner} style={{ background: `url(${Background.src})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className={style.slogan}>
                                                <h2>Lorem Ipsum is simply dummy text of Lorem Ipsum is</h2>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                                    survived not only five centuries, but also the leap into electronic
                                                </p>
                                                <div className={style.sloganBtm}>
                                                    <div className={style.sloganBtmImg}>
                                                        <span>
                                                            <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={54} height={54} />
                                                        </span>
                                                    </div>
                                                    <div className={style.sloganBtmDesc}>
                                                        <h6>Lorem Ipsum</h6>
                                                        <p>8 comments</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
                <section className={style.blogBody}>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-8 col-md-8 col-sm-6 col-6">
                                <BoxOne />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <BoxTwo />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <BoxThree />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <BoxTwo />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <BoxFour />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <BoxTwo />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-6 col-6">
                                <BoxOne />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default blog;
