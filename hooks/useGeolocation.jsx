import { useState, useEffect } from "react"

export default function useGeolocation(options) {
  const [geoLoading, setLoading] = useState(true)
  const [geoError, setError] = useState()
  const [geoLocationData, setData] = useState({})

  useEffect(() => {
    const successHandler = e => {
      //console.log(e);
      setLoading(false)
      setError(null)

      setData(e.coords)
    }
    const errorHandler = e => {
      setError(e)
      setLoading(false)
    }
    //alert(options.trigger);
    
     if(options.trigger === true){
        navigator.geolocation.getCurrentPosition(
          successHandler,
          errorHandler,
          options
        );
        const id = navigator.geolocation.watchPosition(
          successHandler,
          errorHandler,
          options
        );
        return () => navigator.geolocation.clearWatch(id);
     }
    
  },[])

  return { geoLoading, geoError, geoLocationData }
}
