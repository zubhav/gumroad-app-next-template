import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type ResponseData = {
  access_token: string
  token_type: string
  refresh_token: string
  scope: string
  created_at: number
} | {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { code } = req.body

    if (!code) {
      return res.status(400).json({ error: 'Authorization code is missing' })
    }

    const clientId = process.env.GUMROAD_CLIENT_ID
    const clientSecret = process.env.GUMROAD_CLIENT_SECRET
    const redirectUri = process.env.GUMROAD_APP_REDIRECT_URI

    if (!clientId || !clientSecret) {
      return res.status(500).json({ error: 'Gumroad client credentials are not configured' })
    }

    try {
      const response = await axios.post('https://api.gumroad.com/oauth/token', {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri
      })

      const { access_token, token_type, refresh_token, scope, created_at } = response.data
      res.status(200).json({ access_token, token_type, refresh_token, scope, created_at })
    } catch (error) {
      console.error('Error exchanging code for token:', error)
      res.status(500).json({ error: 'Failed to exchange code for token' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
