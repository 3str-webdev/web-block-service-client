/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Решаем проблему с CORS. Настраиваем редиректы с BFF на сервер
  rewrites() {
    return [
      {
        source: "/api/:path",
        destination: "http://localhost:3000/:path",
      },
    ];
  },
};

module.exports = nextConfig;
