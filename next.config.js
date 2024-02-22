/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
		AppName: 'Next LowDB'
	},
	eslint: {
		dirs: ['.']
	},
	poweredByHeader: false,
	trailingSlash: false,
	transpilePackages: [
		'antd'
		// 'rc-util',
		// '@babel/runtime',
		// '@ant-design/icons',
		// '@ant-design/icons-svg',
		// 'rc-pagination',
		// 'rc-picker',
		// 'rc-tree',
		// 'rc-table'
	],
	reactStrictMode: false,
	webpack(config, context) {
		config.module.rules.push(
			{
				test: /\.json$/,
				use: 'raw-loader',
			}
		)
		return config
	}
	// webpack: (config, { isServer }) => {
	// 	if (!isServer) {
	// 		config.resolve.fallback = {
	// 			fs: false
	// 		}
	// 	}
	// 	return config
	// }
}

module.exports = nextConfig
