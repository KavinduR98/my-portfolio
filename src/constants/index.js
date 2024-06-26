import {
  freelancer,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  laravel,
  java,
  sql,
  angular,
  spring,
  nodejs,
  mongodb,
  git,
  iphonik,
  rbs,
  CarLand,
  CustomerSupport,
  DigitalBlog,
  HelpingHands,
  RealEstate,
  TravelWebsite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Freelance Developer",
    icon: freelancer,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Trainee Software Engineer",
    company_name: "iPhonik (Pvt) Ltd",
    icon: iphonik,
    iconBg: "#383E56",
    date: "April 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using Laravel framework and other related technologies.",
      "Industrial trainning for collaborating with product managers, and other developers to create high-quality products.",
      "Collaborate as a trainee software engineer for a long term running client project (Next-Connect) using Laravel framework",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Creating user documents and conducting user trainings.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "Rapidventure Business Solutions (Pvt) Ltd",
    icon: rbs,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Designing and implementing new features in HRM systems.",
      "Industrial trainning for collaborating with product managers, and other developers to create high-quality products.",
      "Maintaining and optimizing existing codebase.",
      "Contributing to the adoption of agile methodology.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As a trainee software engineer was truly inspiring. His dedication, quick learning, and innovative problem-solving skills greatly contributed to our team's success at iPhonik Pvt Ltd. He consistently demonstrated a strong passion for software development and a willingness to go above and beyond to achieve exceptional results. I highly recommend him for any future endeavors in the field.",
    name: "Mr. Charith Dilanka",
    designation: "Software Engineer",
    company:
      "iPhonik Pvt Ltd, Sri Lanka",
    image:
      "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/329534765_496575255986731_8106749111960338795_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGoa5UIw5GdskfQPI3xOJwEMG-OGvsq7IAwb44a-yrsgPUT6_jdaiW2U85u3g4jHZWMgi5U-bpRRya5Ca7Dz-JD&_nc_ohc=_JTcbFgahDEAb46wuu5&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfAdlpzU0_0B3QuArm1Rz9ylJXAyd4R_nZm0rAcxNZPh3w&oe=661B53A7",
  },
  {
    testimonial:
      "I had the pleasure of teaching him during their undergraduate studies in software engineering. He stood out as a dedicated and hardworking student who always showed a strong interest in the subject matter.",
    name: "Mr. Nelum Amarasena",
    designation: "Senior Lecturer",
    company: "FOC SLIIT Malabe Campus",
    image:
      "https://i1.rgstatic.net/ii/profile.image/703619242397696-1544767308232_Q512/Nelum-Chathuranga-Amarasena.jpg",
  },
  {
    testimonial:
      "Working that time with him was an absolute pleasure because his dedication, attention to detail, and passion for coding are truly commendable. His strong problem-solving skills and collaborative nature made him an invaluable team member. Undoubtedly, he will continue to excel in his career and make significant contributions wherever he goes.",
    name: "Mr. Sampath Perera",
    designation:
      "Senior Software Engineer",
    company: "Rapidventure Business Solutions Pvt Ltd, Sri Lanka",
    image:
      "https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.18169-9/20840680_1787145578244314_3897655469733886265_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3atWhyzPVX9lfky5Si3tnKB6FjaYPfgcoHoWNpg9-B-_uWyBc-5JipttUR-DIbViLEcFbEUzwIUqjqMoxJBZf&_nc_ohc=2aRdUQX3rnMAb6BJBBD&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfCyBVsk9fCpjDSG3LPKllN-ZFiMraXlP2YwhftD68HJng&oe=663CECD5",
  },
];

const projects = [
  {
    name: "Real-Estate-Marketplace",
    description:
      "PrimeEstate is a dynamic web application built on the powerful MERN stack, seamlessly integrating MongoDB, Express.js, React, and Node.js. With sleek design elements crafted using Tailwind CSS, this Real Estate App offers a user-friendly experience for browsing properties.",
    tags: [
      {
        name: "MERN Stack",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "gray-text-gradient",
      },
      
    ],
    image: RealEstate,
    source_code_link: "https://github.com/KavinduR98/Real-Estate-Marketplace",
  },
  {
    name: "Car Land Rentals",
    description:
      "Discover the ultimate car destination! Our website, powered by Next.js, Tailwind CSS, and Framer Motion, brings you the latest in automotive excitement. Explore seamlessly with sleek design and captivating animations.🚗💨",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: CarLand,
    source_code_link:
      "https://github.com/KavinduR98/Car-Land-Website",
  },
  {
    name: "Beaches-travel-website",
    description:
      "Introducing BEACHES: Your gateway to the world of travel, built with ReactJS. Explore stunning destinations and plan your next adventure effortlessly. Dive into a seamless user experience with our static website.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: TravelWebsite,
    source_code_link: "https://github.com/KavinduR98/travel-website",
  },
  {
    name: "Customer Supprt Desk ",
    description:
      "Online Support System is a web application which helps service providers and sellers to provide after-sales support for their customers. Customers are allowed to open a ticket when they need assistance on something related to the product or service they purchased. Support agents get in contact with the ticket owner to help resolve their issues.",
    tags: [
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: CustomerSupport,
    source_code_link:
      "https://github.com/KavinduR98/customer_support_desk",
  },

  {
    name: "Helping Hands",
    description:
      "Charity program management system using MERN Stack. There are four major components Donor, Benificiary, Volunteer and Donation management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "MERN Stack",
        color: "pink-text-gradient",
      },
    ],
    image: HelpingHands,
    source_code_link: "https://github.com/Helping-Hands-Charity/Helping-Hands",
  },
  {
    name: "Digital Blog",
    description:
      "DigitalBlog is a web application built using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. It allows users to create and publish blog posts with rich text formatting, images, and tags. Users can also browse and search for other posts, like and comment on posts.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
    ],
    image: DigitalBlog,
    source_code_link: "https://github.com/KavinduR98/DigitalBlog",
  },
];

export { services, technologies, experiences, testimonials, projects };
