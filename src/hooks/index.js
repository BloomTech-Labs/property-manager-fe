/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export const useDataFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl(url) {
    const res = await fetch(url);
    const json = await res.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);
  return [data, loading];
};
