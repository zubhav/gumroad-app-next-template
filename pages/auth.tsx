import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Auth() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { code } = router.query;

    if (code && typeof code === 'string') {
      const getAccessToken = async () => {
        try {
          const response = await axios.post('/api/authorize', { code });
          setAccessToken(response.data.access_token);
        } catch (err) {
          setError('Failed to get access token');
          console.error(err);
        }
      };

      getAccessToken();
    }
  }, [router.query]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (accessToken) {
    return <div>Access Token: {accessToken}</div>;
  }

  return <div>Processing...</div>;

}
