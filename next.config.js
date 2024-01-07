/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: 'http',
            hostname: 'editor.gi.org.pl',
            port: '',
            pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'editor.gi.org.pl',
          port: '',
          pathname: '**',
        },
      ],
    },
  }

module.exports = nextConfig
