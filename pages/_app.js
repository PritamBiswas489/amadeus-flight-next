import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/front/font/stylesheet.css';
import '@/assets/front/styles/style.scss';

import { SnackbarProvider } from "notistack";


export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <SnackbarProvider
        maxSnack={1}
        preventDuplicate
        variant="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      >
    
          <Component {...pageProps} />
       </SnackbarProvider>
    
    );
}
