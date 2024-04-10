/** @type {import('next').NextConfig} */
// next.config.js
export default {
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'res.cloudinary.com' },
        { protocol: 'https', hostname: 'images.unsplash.com' },
        { protocol: 'https', hostname: 'i.ibb.co' },
        { protocol: 'https', hostname: 'imgbb.com' },
        { protocol: 'https', hostname: 'img.freepik.com' },
      ],
    },
  }





