export const portfolioData = {
  name: 'Swastik Aryal',
  title: 'Front-End Developer & UI/UX Designer',
  email: 'aryalswastik744@gmail.com',
  location: 'Kathmandu, Nepal',
  bio: 'I’m a Frontend Developer focused on building modern, responsive, and user-friendly web applications. I work primarily with React, JavaScript, and Tailwind CSS, while currently expanding my backend skills with Node.js to grow into a well-rounded full-stack developer.',

  social: [
    { name: 'GitHub', href: 'https://github.com/SwastikAryal', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/swastik-aryal/', icon: 'linkedin' },
    { name: 'Email', href: 'mailto:aryalswastik744@gmail.com', icon: 'email' },
  ],

  resume: '/Swastik_Aryal_Resume.pdf',

  skills: [
    {
      category: 'Frontend',
      description: 'Building responsive, interactive, and user-friendly interfaces.',
      items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      category: 'Backend',
      description: 'Developing application logic and connecting frontend systems.',
      items: ['Node.js', 'Express', 'PHP', 'JSON'],
    },
    {
      category: 'Database',
      description: 'Designing and managing structured data for web applications.',
      items: ['MySQL', 'SQL Queries', 'MongoDB'],
    },
    {
      category: 'Tools',
      description: 'Using modern tools to build, manage, and deploy projects.',
      items: ['Git', 'GitHub', 'Vite', 'Vercel', 'Render', 'Prisma'],
    },
  ],

  projects: [
    {
      title: 'ShopSwift',
      description: 'Full-stack e-commerce platform featuring product browsing, cart management, checkout flows, user authentication, and payment integration. Built with a React + Vite frontend and a Node.js/Express REST API backed by Sequelize ORM.',
      tech: ['React 19', 'Vite', 'Node.js', 'Vitest'],
      image: 'shopswift.svg',
      links: {
        live: 'https://shopswift-oycj.onrender.com/',
        github: 'https://github.com/SwastikAryal/ShopSwift',
      },
    },

    {
      title: 'FootyKit',
      description: 'Responsive football kit e-commerce website showcasing club merchandise with product listings, a cart system, and an auth flow. Built with vanilla HTML, CSS, and JavaScript plus PHP for server-side authentication and cart handling.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Vercel'],
      image: 'footykit.svg',
      links: {
        live: 'https://footy-kit.vercel.app/',
        github: 'https://github.com/SwastikAryal/FootyKit',
      },
    },

    {
      title: 'CoFound',
      description: 'AI-powered co-founder matching platform that connects entrepreneurs using a 7-dimensional compatibility scoring algorithm. Includes JWT-based auth with NextAuth.js, role-specific onboarding, public profiles, and a professional matching dashboard.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NextAuth.js', 'Prisma', 'MongoDB Atlas'],
      image: 'cofound.svg',
      links: {
        live: 'https://hal-82-quads.vercel.app/',
        github: 'https://github.com/SwastikAryal/CoFound',
      },
    },
  ],
}