/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      // Enable source maps in development mode
      if (dev && !isServer) {
        config.devtool = 'eval-source-map';
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  
  
