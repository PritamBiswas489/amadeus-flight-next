import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({isHome, children }) => {
    let headerClass = '';
    if(typeof isHome ==='undefined'){
               headerClass = 'innerHeader';      
    } 
    return (
        <>
            <Header headerClass={headerClass} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
