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
		'antd',
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
}

module.exports = nextConfig
