import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites() {
		return [
			{ source: "/blogs", destination: "/blogs/index.html" },
			{ source: "/blogs/:path*", destination: "/blogs/index.html" },
		]
	},
}

export default withNextIntl(nextConfig)
