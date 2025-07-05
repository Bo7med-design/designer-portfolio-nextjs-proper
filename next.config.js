/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// GitHub Pages configuration
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'designer-portfolio-nextjs-proper';

const nextConfig = {
  // GitHub Pages specific settings
  ...(isGithubPages && {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    assetPrefix: `/${repoName}/`,
    basePath: `/${repoName}`,
  }),

  // Enable turbopack for faster builds (disabled for GitHub Pages)
  ...((!isGithubPages) && { turbopack: {} }),

  // Image optimization (modified for GitHub Pages)
  images: {
    ...(isGithubPages ? {
      unoptimized: true, // GitHub Pages doesn't support Next.js Image optimization
    } : {
      formats: ["image/webp", "image/avif"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 31536000,
    }),
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for performance (disabled for GitHub Pages)
  experimental: {
    ...((!isGithubPages) && {
      optimizePackageImports: ['framer-motion'],
      webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
      optimizeCss: true,
      scrollRestoration: true,
    }),
  },

  // Webpack optimizations for bundle size
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Aggressive bundle splitting
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000, // Keep chunks under 244KB for better loading
        cacheGroups: {
          default: false,
          vendors: false,
          
          // React core - critical
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 40,
            enforce: true,
          },
          
          // Next.js core - critical
          nextjs: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: "nextjs", 
            chunks: "all",
            priority: 35,
            enforce: true,
          },
          
          // Framer Motion - lazy load
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "async", // Load asynchronously
            priority: 30,
          },
          
          // Other vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 20,
            minChunks: 2,
          },
        },
      };

      // Tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Minimize bundle size
      config.optimization.minimize = true;
    }

    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Image optimization
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/images/",
          outputPath: "static/images/",
        },
      },
    });

    return config;
  },

  // Headers for performance (disabled for GitHub Pages)
  ...(!isGithubPages && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin'
            }
          ]
        },
        {
          source: '/fonts/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable'
            }
          ]
        },
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable'
            }
          ]
        }
      ];
    },
  }),

  // On-demand entries optimization
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = withBundleAnalyzer(nextConfig);