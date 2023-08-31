import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({isHome, children }) => {
    let innerHeaderClass = false;
    if(typeof isHome ==='undefined'){
        innerHeaderClass = true;      
    } 
    return (
        <>
            <Header innerHeaderClass={innerHeaderClass} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
