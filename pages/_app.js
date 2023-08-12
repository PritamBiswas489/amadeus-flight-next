import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/front/font/stylesheet.css';
import '@/assets/front/styles/style.scss';


import Loader from "@/components/front/include/Loader";

import { SnackbarProvider } from "notistack";
import useLoader from '@/hooks/useLoader';


export default function App({ Component, pageProps }) {
    const {isLoading} = useLoader();
    const [loading,setloading] = useState(false);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    useEffect(() => {
        setloading(isLoading);
    }, [loading]);



    
     
    return (
        <SnackbarProvider
        maxSnack={1}
        preventDuplicate
        variant="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      >
        {isLoading  && <Loader/> }
        {!isLoading  &&  <Component {...pageProps} /> }
         
       </SnackbarProvider>
    
    );
}
