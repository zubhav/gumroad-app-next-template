'use client';

import {MyProducts} from "@/components/MyProducts";
import {SignIn} from "@/components/SignIn";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  const [accessToken] = useLocalStorage<string | null>('accessToken', null);

  return (
    <main className="h-screen bg-black flex items-center justify-center">
      {!accessToken ? (
        <SignIn />
      ) : (
        <MyProducts />
      )}
    </main>
  );
}
