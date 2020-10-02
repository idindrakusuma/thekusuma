import { useState, useEffect } from 'react';
import offlineConfigData from '../../api/shift.json';

function useConfigData() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleFetch = async () => {
    setLoading(true);

    try {
      setData(offlineConfigData || {});
      setLoading(false);
    } catch {
      console.error('ERR_WHEN_HIT_DATA');
      setData({});
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { data, loading, refetch: handleFetch };
}

export default useConfigData;
