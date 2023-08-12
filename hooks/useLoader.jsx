import { useEffect, useState } from "react";
import Router from "next/router";

const useLoader = () => {
    let timer;
    let state;
    let activeRequests = 0;
    const [isLoading, setIsLoading] = useState(false);
    const delay = 250;
    function load() {
        if (state === "loading") {
            return;
        }
        state = "loading";
        timer = setTimeout(function () {
            setIsLoading(true);
        }, delay); //only show progress bar if it takes longer than the delay
    }
    function stop() {
        if (activeRequests > 0) {
            return;
        }
        state = "stop";
        clearTimeout(timer);
        setIsLoading(false);
    }
    Router.events.on("routeChangeStart", load);
    Router.events.on("routeChangeComplete", stop);
    Router.events.on("routeChangeError", stop);

    // useEffect(()=>{
    //     const originalFetch = window.fetch;
    //     window.fetch = async function (...args) {
    //         if (activeRequests === 0) {
    //             load();
    //         }
    //         activeRequests++;
    //         try {
    //             const response = await originalFetch(...args);
    //             return response;
    //         } catch (error) {
    //             return Promise.reject(error);
    //         } finally {
    //             activeRequests -= 1;
    //             if (activeRequests === 0) {
    //                 stop();
    //             }
    //         }
    //     };

    // })
    
    return {isLoading};

}
export default useLoader;