const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')

const nextConfig = {
    pwa: {
        dest: 'public',
        runtimeCaching,
        disable: process.env.NODE_ENV === 'development',
    },
    reactStrictMode: true,
}

module.exports = withPWA(nextConfig)
