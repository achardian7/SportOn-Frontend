import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "sporton-backend-production-dacd.up.railway.app",
			},
		],
	},
};

export default nextConfig;
