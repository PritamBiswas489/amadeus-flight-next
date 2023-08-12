import React, { useCallback, useEffect, useState , useMemo} from "react";
import Layout from "@/components/front/include/Layout";
 

import useFetch from "@/hooks/useFetch";
import SearchPanel from "@/components/front/SearchPage/SearchPanel";
import SearchField from "@/components/front/SearchPage/SearchField";
import Loader from "@/components/front/include/Loader";
import { isValidDate } from "@/service/Helpers";
import ResultLoader from "@/components/front/ResultLoader/ResultLoader";
import ErrorMessage from "@/components/front/ErrorMessage/ErrorMessage";

 
 


 

const RoundTrip = ({querySearchField}) => {
    const [count, setCount] = useState(0);
    const [loadingFlightOffer,setLoaderFlightOffer]   = useState(true);
    const [dataOffers,setDataOffers]   = useState([]);
    const [error, setError] = useState(true);
    const [searchValue,setSearchValue] = useState('');
    const {
        data: responseOfferData,
        fetchData: flightOfferFetch,
        loading:flightOfferLoading,
        error:flightOfferError
      } = useFetch();

      useEffect(()=>{
        let  timer = '';
        if(searchValue!==''){
            const queryString = new URLSearchParams(searchValue).toString();
           timer = setTimeout(()=>{
            flightOfferFetch(`${process.env.NEXT_PUBLIC_APP_HOST_API}flight/offer/search?${queryString}`, { method: 'GET' });
           },1000);
        }
        return  ()=>clearTimeout(timer);
      },[searchValue]);

      useEffect(()=>{
        setDataOffers(responseOfferData);
      },[responseOfferData]);

      useEffect(()=>{
        setLoaderFlightOffer(flightOfferLoading);
      },[flightOfferLoading])

      useEffect(()=>{
        setError(flightOfferError);
      },[flightOfferError])


    const executeSearchProcess = useCallback((searchData)=>{
          setSearchValue(searchData);
    }, []);
    

     
  const memoizedChildValue = useMemo(() => ({ triggerFunction: executeSearchProcess }), [executeSearchProcess]);
   
    return (
        <>
            <Layout>
                <SearchField disablebtn={loadingFlightOffer} querySearchField={querySearchField}   {...memoizedChildValue}></SearchField>
                {!dataOffers && !error && <ResultLoader/> }
                {!loadingFlightOffer && error && !dataOffers &&  <ErrorMessage error={error}/> }    
                {(!loadingFlightOffer && !error  && dataOffers) &&  <SearchPanel dataOffers={dataOffers}  count={count}/> }
            </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
     const { query } = context;
     let  departureAirport = '';
     let  arrivalAirport = '';
     let  departureDate = '';
     let  arrivalDate = '';
     let tripType = 'ONEWAY';
     let cabinClass = 'ECONOMY';
     let adult = 1;
     let child = 0;
     let infant = 0;
     let nonstopflight = false;

     let fromAirportObject = {};
     let toAirportObject = {};
     
    
    if(typeof query.itinerary!=='undefined'){
        const splitIti = query.itinerary.split('-');
         departureAirport = typeof splitIti[0]!=='undefined' && splitIti[0];
         arrivalAirport = typeof splitIti[1]!=='undefined' && splitIti[1];
        if(typeof splitIti[2]!=='undefined'){
            departureDate = splitIti[2]; 
        }
       if(typeof splitIti[3]!=='undefined' && typeof query.tripType!=='undefined'){
            if(isValidDate(splitIti[3]) && query.tripType === 'R'){
                arrivalDate = splitIti[3];
            }
        }
    } 
    if(departureAirport!=''){
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${departureAirport}`, { method: 'GET' });
        const data = await response.json();
        if(typeof data.response!=='undefined' && typeof data.response[0]!=='undefined'){
            fromAirportObject = data.response[0];
        }
     }
     if(arrivalAirport!=''){
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${arrivalAirport}`, { method: 'GET' });
        const data = await response.json();
        if(typeof data.response!=='undefined' && typeof data.response[0]!=='undefined'){
            toAirportObject = data.response[0];
        }
        
     }
    if(typeof query.tripType!=='undefined'){
        if(query.tripType === 'R'){
            tripType = 'RETURN';  
        }else if(query.tripType === 'M'){
            tripType = 'MULTI_CITY';  
        }
    }
    if(typeof query.cabinClass!=='undefined'){
        if(query.cabinClass === 'P'){
            cabinClass = 'PREMIUM_ECONOMY';
        }
        if(query.cabinClass === 'B'){
            cabinClass = 'BUSINESS';
        }
        if(query.cabinClass === 'F'){
            cabinClass = 'FIRST';
        }
    }
    if(typeof query.paxType!=='undefined'){
          const splitPax = query.paxType.split('_');
          adult = typeof splitPax[0]!=='undefined' ?  parseInt(splitPax[0].replace('A-','')) : 1; 
          child = typeof splitPax[1]!=='undefined' ?  parseInt(splitPax[1].replace('C-','')) : 0; 
          infant = typeof splitPax[2]!=='undefined' ?  parseInt(splitPax[2].replace('I-','')) : 0;
    }
    if(typeof query.ns!=='undefined'){
        if(parseInt(query.ns) === 1){
            nonstopflight =  true;
        }
    }
    return {
        props: {
            querySearchField:{
                fromAirportObject,
                toAirportObject,
                departureDate,
                arrivalDate,
                tripType,
                cabinClass,
                adult,
                child,
                infant,
                nonstopflight
            }     
        },
      };
}

export default RoundTrip;
