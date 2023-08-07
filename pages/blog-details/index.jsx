if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import Background from "@/assets/front/images/blog-details.jpg";
import sloganIcon from "@/assets/front/images/slogan-icon.jpg";
import chat from "@/assets/front/images/chat.svg";
import calender from "@/assets/front/images/calender.svg";
import time from "@/assets/front/images/time.svg";
import link from "@/assets/front/images/link.svg";
import facebook from "@/assets/front/images/facebook-2.svg";
import twitter from "@/assets/front/images/twitter-2.svg";
import circleArrow from "@/assets/front/images/circle-arrow.svg";
import post1 from "@/assets/front/images/post-1.jpg";
import post2 from "@/assets/front/images/post-2.jpg";
import post3 from "@/assets/front/images/post-3.jpg";
import post4 from "@/assets/front/images/post-4.jpg";
import postImg from "@/assets/front/images/post-img.png";
import add1 from "@/assets/front/images/add-1.jpg";
import BoxOne from "@/components/front/blog/BoxOne";

import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
// import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BlogDetails = () => {
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
                <section className={style.blogBanner} style={{ background: `url(${Background.src})` }}></section>
                <section className={style.blogdtlsBody}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-8 col-12-2">
                                <div className={style.blogDetailsLeft}>
                                    <div className={style.blogDetailsLeftInner}>
                                        <h6>Lorem Ipsum </h6>
                                        <h5>
                                            Lorem Ipsum is simply dummy text of Lorem Ipsum is Lorem Ipsum is simply Lorem Ipsum is simply dummy text of Lorem Ipsum is Lorem Ipsum
                                            is simply{" "}
                                        </h5>
                                        <div className={style.postInfo}>
                                            <ul className="d-flex flex-wrap align-items-center">
                                                <li>
                                                    <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={30} height={30} /> Lorem Ipsum{" "}
                                                </li>
                                                <li>
                                                    <Image alt="" src={chat} placeholder="chat" width={17} height={17} /> Add comment
                                                </li>
                                                <li>
                                                    <Image alt="" src={calender} placeholder="calender" width={12} height={12} /> 3 days ago
                                                </li>
                                                <li>
                                                    <Image alt="" src={time} placeholder="time" width={12} height={12} /> 3 min read
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            <strong>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                                not only five centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a
                                                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                                electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </strong>
                                        </p>
                                        <p>
                                            Lorem Ipsum has been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic Lorem Ipsum is
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since. Lorem
                                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
                                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                                        </p>
                                        <p className={style.innerParagraph}>
                                            “industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry.”
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                            five centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic Lorem Ipsum is simply dummy text
                                            of the printing and typesetting industry.{" "}
                                        </p>
                                        <p>
                                            Lorem Ipsum has been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic Lorem Ipsum is
                                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since. Lorem
                                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
                                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                            been the industry standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <p>
                                            the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                            standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also .
                                        </p>
                                    </div>
                                    <div className={`d-flex align-items-top ${style.allPost}`}>
                                        <div className={style.allPostLeft}>
                                            <span>
                                                <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={50} height={50} />
                                            </span>
                                        </div>
                                        <div className={style.allPostRight}>
                                            <div className={style.allPostRightInner}>
                                                <h6>Lorem Ipsum</h6>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                </p>
                                                <ul className="d-flex">
                                                    <li>
                                                        <Link href={"#"} className={style.viewAllPosts}>
                                                            View all posts
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>
                                                            <Image alt="" src={link} placeholder="link" width={30} height={30} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>
                                                            <Image alt="" src={facebook} placeholder="facebook" width={30} height={30} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>
                                                            <Image alt="" src={twitter} placeholder="twitter" width={30} height={30} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex justify-content-end ${style.featureImage}`}>
                                        <Link href={"#"}>
                                            Does a blog post look better with a feature image <Image alt="" src={circleArrow} placeholder="circleArrow" width={30} height={30} />
                                        </Link>
                                    </div>
                                </div>
                                <div className={style.blogDetailsLeftAd}>
                                    <Image alt="" src={add1} placeholder="add1" sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.addComment}>
                                    <h5>Add Comment</h5>
                                    <form action="get">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Comment
                                                    </label>
                                                    <textarea className="form-control" id="" rows={3} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Name
                                                    </label>
                                                    <input type="text" className="form-control" id="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Email
                                                    </label>
                                                    <input type="text" className="form-control" id="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Website
                                                    </label>
                                                    <input type="text" className="form-control" id="" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Save my name, email, and website in this browser for the next time I comment
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-info ps-5 pe-5">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className={style.alsoLike}>
                                    <div className={style.alsoLikeInner}>
                                        <BoxOne />
                                    </div>
                                    <div className={style.alsoLikeInner}>
                                        <BoxOne />
                                    </div>
                                    <div className={style.alsoLikeInner}>
                                        <BoxOne />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <div className={style.blogDetailsRight}>
                                    <div className={`${style.topic} ${style.whiteBdrBox}`}>
                                        <h5>Topic</h5>
                                        <ul>
                                            <li>
                                                <Link href={"#"} className={`d-flex align-items-center justify-content-between ${style.color1}`}>
                                                    <span>Travel</span> <span className={style.round}>15</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"} className={`d-flex align-items-center justify-content-between ${style.color2}`}>
                                                    <span>Technology</span> <span className={style.round}>15</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"} className={`d-flex align-items-center justify-content-between ${style.color3}`}>
                                                    <span>Food</span> <span className={style.round}>15</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"} className={`d-flex align-items-center justify-content-between ${style.color4}`}>
                                                    <span>Lifestyle</span> <span className={style.round}>15</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"} className={`d-flex align-items-center justify-content-between ${style.color5}`}>
                                                    <span>Entiretainment</span> <span className={style.round}>15</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.whiteBdrBox}>
                                        <h5>Recent Post</h5>
                                        <div className="recentPostSlider">
                                            <OwlCarousel className="owl-theme" {...options}>
                                                <div className="item">
                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post1} placeholder="post1" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>
                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post2} placeholder="post2" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>
                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post3} placeholder="post3" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>
                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post4} placeholder="post4" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post4} placeholder="post4" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>
                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post1} placeholder="post1" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>

                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post3} placeholder="post3" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>

                                                    <div className={style.recentPost}>
                                                        <div className={style.recentPostImg}>
                                                            <span>
                                                                <Image alt="" src={post2} placeholder="post2" width={56} height={56} />
                                                            </span>
                                                        </div>
                                                        <div className={style.recentPostDesc}>
                                                            <p>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className={style.postImgAd}>
                                        <Link href={"#"}>
                                            <Image alt="" src={postImg} placeholder="postImg" sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default BlogDetails;
