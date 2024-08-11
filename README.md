# Gumroad App Next.js Template

This project provides a boilerplate for implementing Gumroad OAuth sign-in functionality using Next.js. It includes the necessary components and API routes to handle the OAuth flow with Gumroad.

## Components

### `app/page.tsx`

The home page component that renders a "Sign in with Gumroad" link. It uses environment variables to construct the OAuth authorization URL.

### `pages/auth.tsx`

Handles the OAuth callback, exchanges the authorization code for an access token, and displays the result.

### `pages/api/authorize.ts`

An API route that securely exchanges the authorization code for an access token using the Gumroad API.

## Getting Started

1. Fork this template
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your Gumroad OAuth application:
4. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_GUMROAD_APP_CLIENT_ID=your_client_id
   NEXT_PUBLIC_GUMROAD_APP_REDIRECT_URI=your_redirect_uri
   GUMROAD_APP_CLIENT_ID=your_client_id
   GUMROAD_APP_CLIENT_SECRET=your_client_secret
   GUMROAD_APP_REDIRECT_URI=your_redirect_uri
   ```
   Replace `your_client_id`, `your_client_secret`, and `your_redirect_uri` with the values from your Gumroad application
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Click the "Sign in with Gumroad" link on the home page
2. Authorize the application on Gumroad
3. You will be redirected back to the `/auth` page, which will display the access token or any errors
