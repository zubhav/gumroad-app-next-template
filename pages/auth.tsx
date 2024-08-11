'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Auth() {
  const router = useRouter();
  const [_accessToken, setAccessToken] = useLocalStorage<string | null>('accessToken', null);

  useEffect(() => {
    const { code } = router.query;

    if (code && typeof code === 'string') {
      const getAccessToken = async () => {
        try {
          const response = await axios.post('/api/authorize', { code });
          setAccessToken(response.data.access_token);
          router.push('/');
        } catch (err) {
          console.error(err);
        }
      };

      getAccessToken();
    }
  }, [router, setAccessToken]);

  return <div>Authenticating...</div>;
}
