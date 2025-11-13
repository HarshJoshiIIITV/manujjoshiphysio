/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://www.google-analytics.com https://www.googletagmanager.com https://res.cloudinary.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
  frame-src 'self' https://www.youtube.com https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`;


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,           // fastest JS minifier (SWC)
  compress: true,            // gzip compression for next dev/server (hosting usually handles this)
  poweredByHeader: false,    // remove X-Powered-By header

  images: {
    // Serve AVIF/WebP when available; Next will automatically negotiate formats with browsers
    formats: ['image/avif', 'image/webp'],
    // Optional: remotePatterns to allow external domains for next/image
    // remotePatterns: [{ protocol: 'https', hostname: 'img1.wsimg.com' }]
  },

  // HTTP headers for security + caching
  async headers() {
    return [
      // Security headers for all routes — tune CSP to your site (see comment below)
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
            {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          // Content-Security-Policy: KEEP this strict and test extensively.
          // Replace the example with only the sources you trust (fonts, images, scripts, analytics).
        ]
      },

      // Aggressive caching for static assets under /_next/static and assets in /public
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        // Cache images, fonts, css, js, avif, webp in public (1 year immutable)
        source: '/(.*).(png|jpg|jpeg|webp|avif|svg|js|css|woff2|woff|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },

      // Short cache for HTML pages (index & dynamic pages) to allow faster invalidation via ISR
      {
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=2592000' }
        ]
      },
      {
        source: '/(.*)',
        // general fallback for html responses - keep short so updates are fast
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=2592000' }
        ]
      }
    ];
  },

  // Optional: redirects + rewrites examples
  async redirects() {
    return [
      // redirect non-www to www (or vice-versa); choose the pattern you want
      // { source: '/', destination: 'https://www.yourdomain.com', permanent: true }
    ];
  },

  // Optional: enable production source maps only when you need them (commented out)
  // productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
