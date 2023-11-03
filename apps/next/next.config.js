/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter')
const { withExpo } = require('@expo/next-adapter')
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'solito',
    'moti',
    'react-native-reanimated',
    'lucide-react-native',
  ],
}

module.exports = withExpo(withGluestackUI(nextConfig))
