'use client';

import {ProductList} from "@/components/ProductList";
import {SignInButton} from "@/components/SignInButton";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  const [accessToken] = useLocalStorage<string | null>('accessToken', null);

  return (
    <main>
      {!accessToken ? (
        <SignInButton />
      ) : (
        <ProductList />
      )}
    </main>
  );
}
