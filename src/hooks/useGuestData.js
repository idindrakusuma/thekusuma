import { useState, useEffect } from 'react';

function useGuestData(code) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    setLoading(true);

    try {
      const rawResult = await fetch(`https://qr-wedding-app.firebaseio.com/guest.json`);
      const result = await rawResult.json();

      setData(result || []);
      setLoading(false);
    } catch {
      console.error('ERR_WHEN_HIT_DATA');
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { data, loading, refetch: handleFetch };
}

export default useGuestData;
