"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
	const { user, isSignedIn } = useUser();

	return (
		<main className="">
			{isSignedIn && user ? (
				<div>
					<p>こんにちは、{user.firstName}さん</p>
					<SignOutButton>
						<button
							type="button"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							ログアウト
						</button>
					</SignOutButton>
				</div>
			) : (
				<SignInButton mode="modal">
					<button
						type="button"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						ログイン
					</button>
				</SignInButton>
			)}
		</main>
	);
}
