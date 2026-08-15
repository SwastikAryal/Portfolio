# Portfolio - Swastik Aryal

A modern single-page portfolio website built with **React and Vite**. The project showcases a clean interface for presenting projects, technical skills, an about section, resume, and a functional contact form.

🌐 **Live Demo:** https://aryalswastikcom.np

---

## Overview

This repository contains the source code for a personal developer portfolio.

The application is built as a single-page website with reusable React components and separate sections for the homepage, about information, skills, projects, and contact.

The project also includes theme support, interactive UI elements, EmailJS integration for the contact form, and Vercel deployment.

---

## Features

* Single-page portfolio layout
* React component-based architecture
* Vite development and build setup
* Light and dark theme support
* Interactive skills section
* Project showcase
* About section
* Contact form with EmailJS
* Resume download
* Smooth UI transitions and animations
* Reusable components
* Vercel deployment
* Environment variable support

---

## Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React        | UI development                |
| JavaScript   | Application logic             |
| Vite         | Development and build tooling |
| Tailwind CSS | Styling                       |
| EmailJS      | Contact form email delivery   |
| Git          | Version control               |
| GitHub       | Source code management        |
| Vercel       | Deployment                    |

---

## Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   ├── Swastik_Aryal_Resume.pdf
│   └── ...
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── sections/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   └── Contact/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/SwastikAryal/portfolio.git
```

Navigate to the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

---

## Development

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Environment Variables

The contact form uses EmailJS for sending messages.

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These variables are required for the contact form to function correctly.

### Important

Do not commit `.env` files containing sensitive configuration to the repository.

For Vercel deployment, add the same environment variables through:

**Vercel → Project → Settings → Environment Variables**

---

## Contact Form

The contact section uses EmailJS to send messages submitted through the website.

The form collects:

* Name
* Email
* Subject
* Message

The submitted information is passed to the configured EmailJS template and delivered to the configured email address.

---

## Deployment

The project is configured for deployment on **Vercel**.

### Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Vercel detects the Vite project automatically.
4. Add the required environment variables.
5. Deploy the project.

### Build Configuration

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

---

## Customization

The portfolio can be customized by modifying:

* Project information
* Skills
* About content
* Images and assets
* Theme colors
* Contact information
* Resume
* Navigation items

Most content and UI sections are organized into reusable React components for easier maintenance.

---

## License

This project is a personal portfolio website.

The source code is available for reference and learning purposes. Please avoid directly copying personal content, images, branding, or other original assets.

---

## Credits

Built with:

* React
* Vite
* Tailwind CSS
* EmailJS
* Vercel
