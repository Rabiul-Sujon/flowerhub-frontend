import { useEffect, useState, useCallback } from 'react';
import api from '../services/api';

export function useFetch(url, { skip = false } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {
    if (skip || !url) return;
    setLoading(true);
    api
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.response?.data?.message || err.message))
      .finally(() => setLoading(false));
  }, [url, skip]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
