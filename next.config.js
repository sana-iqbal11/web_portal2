const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://shwraapidevops.azurewebsites.net/api/Files/DownloadFile?fileName=",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
