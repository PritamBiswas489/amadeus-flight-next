import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import style from "./index.module.scss";
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <section className={style.dashboard}>
                <Sidebar />
                {children}
            </section>
            <Footer />
        </>
    );
};

export default Layout;
