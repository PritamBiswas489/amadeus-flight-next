import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/front/font/stylesheet.css';
import '@/assets/front/styles/style.scss';


export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <Component {...pageProps} />;
}
