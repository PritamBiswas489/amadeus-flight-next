import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        setError(responseData);
      } else {
        setData(responseData);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;