import Link from "next/link";

export const SignIn = () => {
	return (
		<div className="flex flex-col items-center justify-center p-12 bg-gray-800 rounded-lg shadow-md">
				<Link
					href={`https://gumroad.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GUMROAD_APP_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GUMROAD_APP_REDIRECT_URI}&scope=edit_products`}
					className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold"
				>
					Sign in with Gumroad
				</Link>
		</div>
	);
};
