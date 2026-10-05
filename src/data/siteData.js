export const siteConfig = {
  brand: {
    name: "JB",
    fullName: "JB — Freelance Development & Design Studio",
    tagline: "Your Idea. Our Code. Your Growth.",
    supportingText: "We build websites, mobile apps, and designs tailored to your needs.",
    browserTitle: "JB | Your Idea. Our Code. Your Growth.",
    foundedYear: 2026,
  },
  
  team: [
    {
      id: "jeevanantham",
      name: "JEEVANANTHAM",
      role: "Developer",
      bio: "Passionate full-stack developer with a strong foundation in modern web frameworks, intuitive UI design, and problem solving.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "UI/UX Design"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790686688/jeeva_oy0yos.jpg",
    },
    {
      id: "boopathi",
      name: "BOOPATHI",
      role: "Developer & Designer",
      bio: "Creative tech enthusiast specializing in mobile app development, frontend engineering, and eye-catching poster graphics.",
      skills: ["React Native", "Next.js", "Figma", "Canva", "Poster Graphics"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1784732590/WhatsApp_Image_2026-03-02_at_3.58.07_PM_seqx5c.jpg",
    },
    {
      id: "ananth",
      name: "ANANTH KISHORE",
      role: "Graphic Designer",
      bio: "Creative graphic designer with a passion for creating eye-catching poster graphics and compelling visual content.",
      skills: [ "Figma", "Canva", "Poster Graphics"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790698438/ananth_hqbsdl.jpg",
    },
    {
      id: "santhoshkumar",
      name: "SANTHOSH KUMAR",
      role: "Developer",
      bio: "Creative developer with a passion for building innovative web and mobile applications.",
      skills: [ "React", "Node.js", "Express.js", "MongoDB","next.js"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790699929/santhosh_v7oakz.jpg",
    },
  ],

  contact: {
    whatsapp: "+91 9994901632", // Replace with real WhatsApp number e.g. "+919876543210"
    whatsappRaw: "9994901632",
    email: "sjeevanantham1509@gmail.com", // Replace with real email address
    github: "https://github.com/jeevananthamS15", // Replace with real GitHub link
    linkedin: "https://www.linkedin.com/in/jeevanantham-s-1987b82b9/", // Replace with real LinkedIn link
    location: " Coimbatore, Tamil Nadu, India",
  },

  services: [
    {
      id: "web-dev",
      title: "Web Development",
      startingPrice: "₹5,000",
      description: "Custom responsive websites engineered for speed, user engagement, and scalability.",
      items: [
        "Business websites",
        "Portfolio websites",
        "E-commerce websites",
        "Landing pages",
        "Full-stack web applications",
      ],
      technologies: ["React", "Node.js", "Express.js", "Next.js", "MongoDB"],
      ctaText: "Discuss a Website",
      popular: true,
      accentColor: "from-blue-500 to-indigo-600",
    },
    {
      id: "app-dev",
      title: "App Development",
      startingPrice: "₹10,000",
      description: "Cross-platform Android & iOS applications delivering smooth native performance.",
      items: [
        "Android / iOS apps",
        "React Native apps",
        "Business apps",
        "E-commerce apps",
        "Custom mobile applications",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js"],
      ctaText: "Discuss an App",
      popular: false,
      accentColor: "from-purple-500 to-pink-600",
    },
    {
      id: "poster-design",
      title: "Poster Design",
      startingPrice: "₹500",
      description: "High-impact visual posters for college events, corporate branding, and social media campaigns.",
      items: [
        "College / event posters",
        "Social media posters",
        "Promotional posters",
        "Festival posters",
        "Business advertisements",
      ],
      technologies: ["Canva", "Figma"],
      ctaText: "Request a Design",
      popular: false,
      accentColor: "from-cyan-500 to-blue-600",
    },
  ],

  pricingNotice: "Starting prices are shown for reference. Final pricing depends on project requirements, features, complexity, and scope.",

  techStack: {
    web: [
      { name: "React", category: "Web", icon: "Code2", color: "#61DAFB" },
      { name: "Node.js", category: "Web", icon: "Server", color: "#339933" },
      { name: "Express.js", category: "Web", icon: "Cpu", color: "#ffffff" },
      { name: "Next.js", category: "Web", icon: "Globe", color: "#ffffff" },
      { name: "MongoDB", category: "Web", icon: "Database", color: "#47A248" },
    ],
    mobile: [
      { name: "React Native", category: "Mobile", icon: "Smartphone", color: "#61DAFB" },
    ],
    design: [
      { name: "Canva", category: "Design", icon: "Palette", color: "#00C4CC" },
      { name: "Figma", category: "Design", icon: "Figma", color: "#F24E1E" },
    ],
  },

  projects: [
    {
      id: "project-ecommerce",
      title: "Modern E-Commerce Platform",
      category: "Web Development",
      description: "A feature-packed multi-category e-commerce platform designed for fashion, electronics, and daily essentials with responsive UI and robust cart management. it is static website for client showcase and it is not connected to any payment gateway.",
      features: [
        "Product listing & category filtering",
        "Interactive Shopping Cart & Checkout",
        "User registration & JWT authentication",
        "Admin dashboard for inventory management",
        "Responsive cross-device design",
        "RESTful API with MongoDB database",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790696254/Screenshot_2026-09-29_210723_jtta9z.png",
      liveDemoUrl: "https://modern-shop-psi.vercel.app/", // Replace with real URL
      caseStudyUrl: "https://example.com/case-study-ecommerce", // Replace with real URL
    },
    {
      id: "project-fitness",
      title: "All-in-One Fitness Platform",
      category: "Web Development",
      description: "A comprehensive health and workout tracking suite combining a web dashboard for on-the-go progress tracking.",
      features: [
        "User authentication & custom profiles",
        "Personalized workout plans & exercise library",
        "Diet & nutrition tracker with BMI calculator",
        "Progress analytics and streak milestones",
        "Web admin panel for managing workouts and nutrition plans",
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790699323/Screenshot_2026-09-29_215829_wep7ac.png",
      liveDemoUrl: "https://modern-shop-6xsg.vercel.app/", // Replace with real URL
      caseStudyUrl: "https://example.com/case-study-fitness", // Replace with real URL
    },
     {
      id: "Mens Wear E-Commerce Platform",
      title: "Mens Wear E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform for men's fashion with a focus on style and quality.",
      features: [
        "Product catalog with detailed descriptions and images",
        "Shopping cart and secure checkout process",
        "User account management and order tracking",
        "Responsive design for seamless experience across devices",
        "Integration with payment gateways for smooth transactions",
      ],
      technologies: ["React"],
      image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1791210693/Screenshot_2026-10-05_200028_b0nvu2.png",
      liveDemoUrl: "https://mensweardemo.vercel.app/", // Replace with real URL
      caseStudyUrl: "https://mensweardemo.vercel.app/", // Replace with real URL
    },
  ],

  posters: [
    { id: 1, title: "Coffe Shop Poster", category: "shop", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593486/Varela_Round_v8yek4.png" },
    { id: 2, title: "Ice Cream Shop Poster", category: "shop", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593497/Spring_bjvaul.png" },
    { id: 3, title: "App Launch Poster", category: "App Launch", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593485/Habsy_App_-_2_yp042x.png" },
    { id: 4, title: "Mens Perfume Poster", category: "Product Launch", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593485/DENVER_nplarc.png" },
    { id: 5, title: "Sun Glasses Poster", category: "Product Launch", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593484/Just_Wear_It_igt3ee.png" },
    { id: 6, title: "Plants Offer Poster", category: "Offer", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593484/Green_Haven_uonqyv.png" },
    { id: 7, title: "Tea Shop Poster", category: "shop", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593482/%E0%AE%A8%E0%AE%AE%E0%AF%8D%E0%AE%AE_z15nvw.png" },
    { id: 8, title: "Mobile Game Promotion Poster", category: "Promotion", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593481/Mobile_App_Game_laanph.png" },
    { id: 9, title: "Pizza Offer Poster", category: "Offer", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593480/Buy_Get_lurgtk.png" },
    { id: 10, title: "Soap Launch Poster", category: "Product Launch", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1774593509/Handmade_SOAP_uj8yfs.png" },
    { id: 11, title: "Juice Launch Poster", category: "Product Launch", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790697288/Mr._B_rq036z.png" },
    { id: 12, title: "Car Launch Poster", category: "Product Launch", image: "https://res.cloudinary.com/dogyqzelc/image/upload/v1790697288/AUDI_CAR_uauxax.png" },
  ],

  workflow: [
    {
      step: "01",
      title: "Understand",
      description: "We discuss your vision, core goals, timeline, and exact requirements through text or video call.",
    },
    {
      step: "02",
      title: "Plan",
      description: "We chart out wireframes, system architecture, tech stack selection, and milestone targets.",
    },
    {
      step: "03",
      title: "Build",
      description: "We write clean, modular code and craft modern UI designs while keeping you constantly in the loop.",
    },
    {
      step: "04",
      title: "Review",
      description: "We share live preview links, collect your feedback, and refine features to perfection.",
    },
    {
      step: "05",
      title: "Deliver",
      description: "We deploy the website/app to production or hand over full design assets with complete documentation.",
    },
  ],

  whyUs: [
    {
      title: "Learning Mindset",
      description: "We continuously learn and implement the latest web standards, framework updates, and design trends.",
      icon: "Sparkles",
    },
    {
      title: "Direct Communication",
      description: "Work directly with JEEVANANTHAM and BOOPATHI — no middlemen or account managers in between.",
      icon: "MessageSquare",
    },
    {
      title: "Custom Solutions",
      description: "We tailor every component from scratch based on project needs rather than forcing a rigid template.",
      icon: "Code",
    },
    {
      title: "Development + Design",
      description: "Seamless integration between technical coding and aesthetic UI/UX poster graphics in one unified studio.",
      icon: "Layers",
    },
    {
      title: "Student-Friendly Approach",
      description: "We offer fair, budget-conscious rates tailored for fellow students, creators, and growing businesses.",
      icon: "HeartHandshake",
    },
    {
      title: "Transparent Starting Prices",
      description: "No hidden charges or surprise costs. Clear baseline quotes with final estimates upfront.",
      icon: "ShieldCheck",
    },
  ],

  faq: [
    {
      question: "How much does a project cost?",
      answer: "Our projects start from ₹5,000 for websites, ₹10,000 for mobile apps, and ₹500 for poster designs. Final pricing depends on your specific requirements, required features, technical complexity, and timeline.",
    },
  ],
};
