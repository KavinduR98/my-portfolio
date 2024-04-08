import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    flutter,
    java,
    sql,
    angular,
    spring,
    nodejs,
    mongodb,
    git,
    fishifox,
    elzian,
    CardDetails,
    HelpingHands,
    ProjectSupreme,
    AdminDashboard,
    Charity,
    Boost,
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
      title: "Flutter Developer",
      icon: mobile,
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
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "SQL",
      icon: sql,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      company_name: "FishiFox",
      icon: fishifox,
      iconBg: "#383E56",
      date: "August 2022 - Februay 2023",
      points: [
        "Developing and maintaining web applications using MERN Stack and other related technologies.",
        "Industrial trainning for collaborating with product managers, and other developers to create high-quality products.",
        "Collaborate as a trainee software engineer for a long term running client project (Mobile Application) using Flutter framework",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mobile Application Developer Intern",
      company_name: "Elzian Agro",
      icon: elzian,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Apr 2023",
      points: [
        "Completed the probationary period including Git- version controlling, DevOps and Flutter basics",
        "Industrial trainning for collaborating with product managers, and other developers to create high-quality products.",
        "Collaborate as a intern mobile application developer for a long term running client project (Mobile Application) using Flutter framework",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of teaching her during their undergraduate studies in software engineering. She stood out as a dedicated and hardworking student who always showed a strong interest in the subject matter",
      name: "Mrs. Devanshi Ganegoda",
      designation:
        "Lecturer,Department of Computer Science and Software Engineering",
      company: "SLIIT | Malabe Campus",
      image:
        "https://www.sliitposon.site/assets/images/resource/Devanshi%20madam.png",
    },
    {
      testimonial:
        "What sets her apart is her humility, willingness to learn and improve, and her dedication to helping others. She has a true passion for making a positive impact in the world through her work.",
      name: "Mr. Ajith Karunarathne.",
      designation: "PhD Associate Professor Department of Chemistry",
      company:
        "Saint Louis University,3501 Laclede Ave., St. Louis, MO 63103, USA",
      image:
        "https://www.ajithlab.org/uploads/1/4/3/8/143892663/published/img-0356.jpg?1669054923",
    },
    {
      testimonial:
        "During this student's undergraduate studies in software engineering, I had the pleasure of teaching them. The student was dedicated and hardworking, consistently demonstrating a strong interest in the subject matter. The student's commitment to learning and passion for software engineering made them stand out among their peers",
      name: "Mr. Nelum Amarasena",
      designation: "Senior Lecturer",
      company: "FOC SLIIT Malabe Campus",
      image:
        "https://i1.rgstatic.net/ii/profile.image/703619242397696-1544767308232_Q512/Nelum-Chathuranga-Amarasena.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project Supreme",
      description:
        "Online research project management tool using MERN stack. Hosted in Heroku and Netlify. This project includes functinalities related to the supervisor.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "MERN Stack",
          color: "pink-text-gradient",
        },
      ],
      image: ProjectSupreme,
      source_code_link: "https://github.com/ProjectSupremeAF/ProSupreme",
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
      name: "Card Details",
      description:
        "This is my first project using ASP .NET Core with Angular. This contains really simple single page CRUD function. This is not much. But, as a begginner, I'm happy. 😊 ",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "ASP .NET Core",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
      ],
      image: CardDetails,
      source_code_link:
        "https://github.com/ChathraNavoda/CardDetails-CRUD-Application",
    },
    {
      name: "Admin Dashboard",
      description:
        "A responsive Admin Dashboard using React Js, Tailwind CSS. This facilitates to change themes also. This is my first project using Tailwind CSS",
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
      image: AdminDashboard,
      source_code_link: "https://github.com/ChathraNavoda/Dashboard-App",
    },
    {
      name: "Helping Hands Mobile",
      description:
        "This is the mobile version of Helping Hands Charity program managemnt system. This project is basically considered about UI/UX. This project is developed using Flutter. ",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "ui/ux",
          color: "pink-text-gradient",
        },
      ],
      image: Charity,
      source_code_link:
        "https://github.com/Helping-Hands-Charity/Helping-Hands-Mobile",
    },
    {
      name: "BoostMe",
      description:
        "This is a fitness application using Flutter, Firebase. This app contains Social media feature, Workout tracker, Yoga tracker, Calorie tracker, BMI Cal and Reminder.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "realtime db",
          color: "pink-text-gradient",
        },
      ],
      image: Boost,
      source_code_link: "https://github.com/BoostMe-Fitness-App/boostMe_mobile",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  