"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/app/(landing)/components/ui/button";
import { login } from "@/app/services/auth.service";

const AdminLoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { push } = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			push("/admin/products");
		}
	}, [push]);

	const handleLogin = async () => {
		setIsLoading(true);
		if (!email || !password) {
			setErrorMessage("Email or password is required");
			return;
		}
		try {
			const data = await login({ email, password });

			if (data.token) push("/admin/products");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setErrorMessage(
				error.message ?? "Something went wrong, please try again later.",
			);

			console.error("Login error", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="bg-[#f7f9fa] w-full h-screen flex justify-center items-center">
			<div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-18">
				<Image
					src="/images/logo-admin.svg"
					alt="logo admin"
					width={304}
					height={51}
					className="mx-auto mb-4"
				/>
				<p className="opacity-50 text-sm text-center mb-9">
					Enter your credentials to access the dashboard
				</p>

				{errorMessage && (
					<div className="px-3 py-2 bg-primary-light border border-primary rounded-md text-primary text-sm text-center w-full mb-2">
						{errorMessage}
					</div>
				)}

				<div className="input-group-admin mb-5">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="admin@store.com"
						className="rounded-lg!"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="input-group-admin mb-12">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="••••••••••••••••••••"
						className="rounded-lg!"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<Button className="w-full rounded-lg! mb-8" onClick={handleLogin}>
					{isLoading ? "Signing in ..." : "Sign In"}
				</Button>
			</div>
		</main>
	);
};

export default AdminLoginPage;
