import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <Link href={`https://gumroad.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GUMROAD_APP_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GUMROAD_APP_REDIRECT_URI}&scope=edit_products`}>Sign in with Gumroad</Link>
      </div>
    </main>
  );
}
