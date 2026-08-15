export const portfolioData = {
  name: 'Swastik Aryal',
  title: 'Front-End Developer & UI Engineer',
  email: 'aryalswastik744@gmail.com',
  location: 'Kathmandu, Nepal',
  bio: 'I’m a full-stack developer passionate about building practical, user-focused solutions to real-world problems. I work with React, JavaScript, Node.js, PHP, and cloud platforms, and I enjoy creating clean, responsive web applications while continuously learning and collaborating on challenging projects.',

  social: [
    { name: 'GitHub', href: 'https://github.com/SwastikAryal', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/swastik-aryal/', icon: 'linkedin' },
    { name: 'Email', href: 'mailto:aryalswastik744@gmail.com', icon: 'email' },
  ],

  skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'PHP', 'Tailwind CSS', 'HTML', 'CSS', 'React Router', 'Vite'],

  projects: [
    {
      title: 'ShopSwift',
      description: 'Full-stack e-commerce platform featuring product browsing, cart management, checkout flows, user authentication, and payment integration. Built with a React + Vite frontend and a Node.js/Express REST API backed by Sequelize ORM.',
      tech: ['React 19', 'Vite', 'Node.js', 'Vitest'],
      image: '/placeholder-project.svg',
      links: {
        live: 'https://shopswift-oycj.onrender.com/',
        github: 'https://github.com/SwastikAryal/ShopSwift',
      },
    },

    {
      title: 'FootyKit',
      description: 'Responsive football kit e-commerce website showcasing club merchandise with product listings, a cart system, and an auth flow. Built with vanilla HTML, CSS, and JavaScript plus PHP for server-side authentication and cart handling.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Vercel'],
      image: '/placeholder-project.svg',
      links: {
        live: 'https://footy-kit.vercel.app/',
        github: 'https://github.com/SwastikAryal/FootyKit',
      },
    },

    {
      title: 'CoFound',
      description: 'AI-powered co-founder matching platform that connects entrepreneurs using a 7-dimensional compatibility scoring algorithm. Includes JWT-based auth with NextAuth.js, role-specific onboarding, public profiles, Cloudinary image uploads, and a professional matching dashboard.',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'NextAuth.js', 'Prisma', 'MongoDB Atlas'],
      image: '/placeholder-project.svg',
      links: {
        live: 'https://hal-82-quads.vercel.app/',
        github: 'https://github.com/SwastikAryal/CoFound',
      },
    },
  ],
}