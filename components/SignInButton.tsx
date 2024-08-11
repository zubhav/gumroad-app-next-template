import Link from "next/link";

export const SignInButton = () => {
	return (
		<Link
			href={`https://gumroad.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GUMROAD_APP_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GUMROAD_APP_REDIRECT_URI}&scope=edit_products`}
			className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
		>
			Sign in with Gumroad
		</Link>
	);
};

