// app/data/projects.js
const projects = [
  {
    id: "ui-1",
    title: "Barbaros Barbers Davos",
    category: "Web Design",

    //Thumbnail
    thumbnail: "/images/ui-1.jpg",
    // 🔥 Hero banner
    banner: "/images/barbaros-barber-banner.jpg",

    // 🔥 Short intro (use first paragraph)
    summary:
      "A bold and modern landing page for Barbaros Barbers Davos, crafted to reflect strength, masculinity, and premium quality through dark visuals and striking red accents.",

    elementImages: [
      "/images/e-barbaros-01.jpg",
      "/images/e-barbaros-02.jpg", // duplicate or second layout image
    ],

    // 🔥 Tech / tools
    tech: [
      "UI Design",
      "Responsive Design",
      "Interaction Design",
      "Photoshop",
      "Figma",
    ],

    behance:
      "https://www.behance.net/gallery/130100457/Creative-Homepage-Design",
  },
  {
    id: "ui-2",
    title: "Grapevine",
    category: "Web Design",

    //Thumbnail
    thumbnail: "/images/ui-2.jpg",

    // 🔥 Hero banner
    banner: "/images/grapevine-banner.jpg",

    // 🔥 Short intro (use first paragraph)
    summary:
      "This project features a modern, dark-themed SaaS landing page for a data-driven financial platform. The design emphasizes clarity, strong visual hierarchy, and conversion through bold typography, subtle gradients, and immersive dashboard visuals, ensuring a consistent and trustworthy user experience across devices.",

    // 🔥 Elements section
    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful imagery to create a memorable first impression while maintaining usability.",

    elementImages: [
      "/images/e-grapevine-01.webp",
      "/images/e-grapevine-02.webp", // duplicate or second layout image
    ],

    // 🔥 Tech / tools
    tech: ["UI Design", "Web Design", "Figma", "Photoshop", "Illustrator"],

    behance: "https://www.behance.net/gallery/130396259/landing-page-Design",
  },
  {
    id: "ui-3",
    title: "Barbaros Barbers Davos",
    category: "Web Design",

    //Thumbnail
    thumbnail: "/images/ui-1.jpg",

    // 🔥 Hero banner
    banner: "/images/ui-1.jpg",

    // 🔥 Short intro (use first paragraph)
    summary:
      "A bold and modern landing page for Barbaros Barbers Davos, crafted to reflect strength, masculinity, and premium quality through dark visuals and striking red accents.",

    // 🔥 Elements section
    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful imagery to create a memorable first impression while maintaining usability.",

    elementImages: [
      "/images/barber-layout.webp",
      "/images/barber-layout.webp", // duplicate or second layout image
    ],

    // 🔥 Tech / tools
    tech: ["UI Design", "Web Design", "Figma", "Photoshop"],

    behance:
      "https://www.behance.net/gallery/130100457/Creative-Homepage-Design",
  },
  {
    id: "ui-4",
    title: "Barbaros Barbers Davos",
    category: "Web Design",

    //Thumbnail
    thumbnail: "/images/ui-1.jpg",

    // 🔥 Hero banner
    banner: "/images/ui-1.jpg",

    // 🔥 Short intro (use first paragraph)
    summary:
      "A bold and modern landing page for Barbaros Barbers Davos, crafted to reflect strength, masculinity, and premium quality through dark visuals and striking red accents.",

    // 🔥 Elements section
    elementsText:
      "The website elements focus on strong typography, clear hierarchy, and impactful imagery to create a memorable first impression while maintaining usability.",

    elementImages: [
      "/images/e-barbaros-01.jpg",
      "/images/e-barbaros-02.jpg", // duplicate or second layout image
    ],

    // 🔥 Tech / tools
    tech: ["UI Design", "Web Design", "Figma", "Photoshop"],

    behance:
      "https://www.behance.net/gallery/130100457/Creative-Homepage-Design",
  },

  // Social Media Design
  {
    id: "social-1",
    title: "Instagram Campaign",
    category: "Social Media Design",
    image: "/images/social-1.jpg",
    description: "Creative campaign visuals for Instagram.",
    images: ["/images/social-1.jpg", "/images/social-1b.jpg"],
    liveLink: "https://example.com",
    behance: "https://behance.net/example",
  },

  // Mobile App
  {
    id: "mobile-1",
    title: "Task Manager App",
    category: "Mobile App Design",
    image: "/images/mobile-1.jpg",
    description:
      "A task management app designed to help users organize and prioritize their tasks effectively.",
    images: ["/images/mobile-1.jpg"],
    liveLink: "https://medium.com/example",
    behance: "",
  },
];

export default projects;
