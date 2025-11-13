/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Genera un sitio estático (requerido por GitHub Pages)
  images: {
    unoptimized: true, // <-- Evita errores con el sistema de optimización de imágenes
  },
  basePath: '/BeauDev', // <-- el nombre de tu repositorio
  assetPrefix: '/BeauDev/',
};

export default nextConfig;
