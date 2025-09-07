"use strict";

// Portfolio Data - All content is stored here for easy editing
const portfolioData = {
  // Personal Information
  personalInfo: {
    name: "Mohammed Rilan",
    title: "Full Stack Developer",
    avatar: "./assets/images/rilan-avator.png",
    contacts: [
      {
        icon: "mail-outline",
        title: "Email",
        value: "mohamedrilan.dev@gmail.com",
        link: "mailto:mohamedrilan.dev@gmail.com",
        type: "link",
      },
      {
        icon: "phone-portrait-outline",
        title: "Phone",
        value: "+91 9629534701",
        link: "tel:+919629534701",
        type: "link",
      },
      {
        icon: "calendar-outline",
        title: "Birthday",
        value: "March 03, 2002",
        type: "text",
      },
      {
        icon: "location-outline",
        title: "Location",
        value: "Karaikal, Puducherry, India",
        type: "text",
      },
    ],
    socialLinks: [
      {
        icon: "logo-facebook",
        link: "#",
      },
      {
        icon: "logo-twitter",
        link: "#",
      },
      {
        icon: "logo-instagram",
        link: "https://www.instagram.com/itzz_me_rilu/",
      },
    ],
  },

  // About Section
  about: {
    text: [
      "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
      "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
    ],
    services: [
      {
        icon: "./assets/images/icon-design.svg",
        title: "Web design",
        description:
          "The most modern and high-quality design made at a professional level.",
      },
      {
        icon: "./assets/images/icon-dev.svg",
        title: "Web development",
        description:
          "High-quality development of sites at the professional level.",
      },
      {
        icon: "./assets/images/icon-app.svg",
        title: "Mobile apps",
        description:
          "Professional development of applications for iOS and Android.",
      },
      {
        icon: "./assets/images/icon-photo.svg",
        title: "Photography",
        description:
          "I make high-quality photos of any category at a professional level.",
      },
    ],
    testimonials: [
      {
        avatar: "./assets/images/avatar-1.png",
        name: "Daniel lewis",
        date: "14 June, 2021",
        text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      },
      {
        avatar: "./assets/images/avatar-2.png",
        name: "Jessica miller",
        date: "15 July, 2021",
        text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      },
      {
        avatar: "./assets/images/avatar-3.png",
        name: "Emily evans",
        date: "22 August, 2021",
        text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      },
      {
        avatar: "./assets/images/avatar-4.png",
        name: "Henry william",
        date: "05 September, 2021",
        text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
      },
    ],
    clients: [
      "./assets/images/logo-1-color.png",
      "./assets/images/logo-2-color.png",
      "./assets/images/logo-3-color.png",
      "./assets/images/logo-4-color.png",
      "./assets/images/logo-5-color.png",
      "./assets/images/logo-6-color.png",
    ],
  },

  // Resume Section
  resume: {
    education: [
      {
        institution: "Karaikal Polytechnic College of Engineering, Karaikal",
        period: "2019 — 2022",
        description:
          "Information Technology (IT) – Focused on software development, algorithms, data structures, web development, machine learning, and database management.",
      },
      {
        institution: "Thiruvalluvar Higher Secondary School, Ambagarathur",
        period: "2018",
        description:
          "Higher Secondary Certificate (H.S.C) – Excelled in Mathematics, Physics, and Computer Science.",
      },
      {
        institution: "Sriman Narayanan English School, Thamanagudy",
        period: "2017",
        description:
          "Secondary School Leaving Certificate (S.S.L.C) – Completed with strong performance in science and mathematics.",
      },
    ],
    experience: [
      {
        position: "Mobile & Web Application Developer – Amaze-Tech Clans Ltd",
        period: "April 2023 — Present",
        description:
          "Delivered mobile (Flutter) and web (Next.js + .NET API) solutions, managed full project lifecycle, mentored juniors, integrated AI features, and handled Docker, Jenkins, and Kubernetes deployments.",
      },
      {
        position: "Freelance App Developer",
        period: "June 2022 — December 2023",
        description:
          "Built Android apps (Kotlin & Java) with Firebase/MySQL backends, developed Tamil Matrimonial and Student Management System apps, and managed authentication, API integration, and full-stack setups.",
      },
    ],
    skills: [
      {
        name: "Flutter & Mobile App Development",
        percentage: 85,
      },
      {
        name: "Web Development (Next.js, Laravel, Node.js)",
        percentage: 80,
      },
      {
        name: "Backend & Databases (Firebase, MySQL, PostgreSQL, Supabase)",
        percentage: 75,
      },
      {
        name: "AI & Automation",
        percentage: 65,
      },
    ],
  },

  // Portfolio Section
  portfolio: {
    projects: [
      {
        title: "FVision – (SMTS Contracts) Corporate Web Site (Next.js)",
        category: "web design",
        image: "./assets/images/fvision-logo.png",
        link: "https://fvisionlandscaping.com/",
      },
      {
        title:
          "SMTS Constructions – (SMTS Contracts) Corporate Web Site (Next.js)",
        category: "web design",
        image: "./assets/images/SMTS-logo.svg",
        link: "https://smtscontracting.com/",
      },
      {
        title:
          "Star City Interiors – (SMTS Contracts) Corporate Web Site (Next.js)",
        category: "web design",
        image: "./assets/images/star-city-interiors-logo.png",
        link: "https://twsl.com.sa/",
      },
      {
        title:
          "Urban Nexus Technology L.L.C – (SMTS Contracts) Corporate Web Site (Next.js)",
        category: "web design",
        image: "./assets/images/urban-logo.jpg",
        link: "https://urbannexustech.com/",
      },
      {
        title:
          "Urban Horticulture Trading – (SMTS Contracts) Corporate Web Site (Next.js) (Maintenance)",
        category: "web design",
        image: "./assets/images/urban-hagriculture-logo.png",
        link: "https://urbanhorticulturetrading.com/",
      },

      {
        title:
          "TWSL Admin & Company – (Jiff KSA) Corporate Web App (Next.js & .NET API)",
        category: "web development",
        image: "./assets/images/twsl-logo.png",
        link: "https://twsl.com.sa/",
      },
      {
        title:
          "TWSL Driver – (Jiff KSA) Corporate Mobile App (Flutter & .NET API)",
        category: "applications",
        image: "./assets/images/twsl-logo.png",
        link: "https://twsl.com.sa/",
      },
      {
        title: "CarwaTaxi Admin Panel Web App (Laravel PHP) (Maintenance)",
        category: "web development",
        image: "./assets/images/carwataxi-logo.png",
        link: "#",
      },
      {
        title: "CarwaTaxi – Mobile Apps (Kotlin) (Maintenance)",
        category: "applications",
        image: "./assets/images/carwataxi-logo.png",
        link: "#",
      },
      {
        title: "Nadir – Finance & Property Tracker Web App (Flutter)",
        category: "web development",
        image: "./assets/images/nadir-logo.png",
        link: "#",
      },
      //   {
      //     title: "Fiteet – Sports App",
      //     category: "web development",
      //     image: "./assets/images/project-4.png",
      //     link: "#",
      //   },
      {
        title:
          "Student Management System Admin & Principal Web App (Next.js & Django)",
        category: "web development",
        image: "./assets/images/sm-system-logo.png",
        link: "https://schoolsapp.shop",
      },
      {
        title:
          "Student Management System Teachers/Principal/Student Mobile App (Flutter & Django)",
        category: "applications",
        image: "./assets/images/sm-system-logo.png",
        link: "https://schoolsapp.shop",
      },
      {
        title:
          "Admin Mtton – Hadith Reading & Audio Web App (Full Stack Next.js)",
        category: "web development",
        image: "./assets/images/mtton-logo.png",
        link: "https://dashboard.motoon.app",
      },
      {
        title:
          "Mtton Site – Hadith Reading & Audio Website (Full Stack Next.js)",
        category: "web design",
        image: "./assets/images/mtton-logo.png",
        link: "https://motoon.app",
      },
      {
        title:
          "Mtton Users – Hadith Reading & Audio Website Mobile App(Flutter & Full Stack Next.js)",
        category: "applications",
        image: "./assets/images/mtton-logo.png",
        link: "https://play.google.com/store/apps/details?id=com.unicode.mttonstudent",
      },
      {
        title: "Gif Play – GIF Sharing Entertainment Mobile App (Flutter)",
        category: "applications",
        image: "./assets/images/gifplay-logo.png",
        link: "#",
      },
      {
        title: "Megzy Admin – Laravel PHP Web App (Maintenance)",
        category: "web development",
        image: "./assets/images/megzy-user-logo.png",
        link: "https://admin.megzy.in/",
      },
      {
        title: "Megzy User – Flutter Web App (Maintenance)",
        category: "web design",
        image: "./assets/images/megzy-user-logo.png",
        link: "https://megzy.in/",
      },
      //   {
      //     title: "Odd-System – Laravel PHP Web App (Maintenance)",
      //     category: "web design",
      //     image: "./assets/images/project-10.png",
      //     link: "#",
      //   },
      {
        title: "EStore – Mobile App (Flutter & Django)",
        category: "web development",
        image: "./assets/images/e-store-logo.png",
        link: "#",
      },
      {
        title: "EStore – Web App (Flutter & Django)",
        category: "applications",
        image: "./assets/images/e-store-logo.png",
        link: "#",
      },
      {
        title: "Tamil Matrimonial – Web App (Next.js & Supabase)",
        category: "web development",
        image: "./assets/images/matrimonial-logo.png",
        link: "https://weddingnew.com/",
      },
      {
        title: "Tamil Matrimonial – Mobile App (Flutter & Supabase)",
        category: "applications",
        image: "./assets/images/matrimonial-logo.png",
        link: "#",
      },
      {
        title:
          "AI Rag System & Agentic AI (Next.js & Django & Python Libraries)",
        category: "ai",
        image: "./assets/images/rag-logo.jpg",
        link: "#",
      },
      {
        title:
          "Cyberbullying Prediction (Text & Images) (Next.js & Django & Python Libraries)",
        category: "ai",
        image: "./assets/images/cyberbullying-logo.jpg",
        link: "#",
      },
    ],
  },

  // Blog Section
  blog: {
    posts: [
      {
        title: "Design conferences in 2022",
        category: "Design",
        date: "Feb 23, 2022",
        image: "./assets/images/blog-1.jpg",
        excerpt:
          "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
        link: "#",
      },
      {
        title: "Best fonts every designer",
        category: "Design",
        date: "Feb 23, 2022",
        image: "./assets/images/blog-2.jpg",
        excerpt:
          "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
        link: "#",
      },
      {
        title: "Design digest #80",
        category: "Design",
        date: "Feb 23, 2022",
        image: "./assets/images/blog-3.jpg",
        excerpt:
          "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
        link: "#",
      },
      {
        title: "UI interactions of the week",
        category: "Design",
        date: "Feb 23, 2022",
        image: "./assets/images/blog-4.jpg",
        excerpt:
          "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
        link: "#",
      },
      {
        title: "The forgotten art of spacing",
        category: "Design",
        date: "Feb 23, 2022",
        image: "./assets/images/blog-5.jpg",
        excerpt:
          "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "#",
      },
      {
        title: "Design digest #79",
        category: "Design",
        date: "Feb 23, 2022",
        image: "./assets/images/blog-6.jpg",
        excerpt:
          "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
        link: "#",
      },
    ],
  },
};
