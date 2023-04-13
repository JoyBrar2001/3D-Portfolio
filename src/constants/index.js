import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    meta,
    photoshop,
    premiere,
    aftereffects,
    illustrator,
    figma,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    weatherapp,
    loginform,
    portfolio
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
      title: "Aspiring Web Developer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "illustrator",
      icon: illustrator,
    },
    {
      name: "premiere",
      icon: premiere,
    },
    {
      name: "aftereffects",
      icon: aftereffects,
    },
  ];
  
  const experiences = [
    {
      title: "Graphic Designer",
      company_name: "Adobe Photoshop, Illustrator",
      icon: photoshop,
      iconBg: "#383E56",
      date: "Since 2016",
      points: [
        "Have been using Photoshop for the past 4-5 years, and have a good hold over Photo Manipulation",
        "Made several projects, such as posters, flexes, ID cards for College fests, that too while being on a time crunch",
        "Starting to learn Illustrator to develop my own Graphics"
      ],
    },
    {
      title: "Video Editor",
      company_name: "Meta",
      icon: premiere,
      iconBg: "#E6DEDD",
      date: "Since 2018",
      points: [
        "Well versed in softwares, such as Adobe Premiere Pro, After Effects, for the last 4 years",
        "Made multiple video edits, that are on my YouTube channel, and trying to get into CGI as well",
        "Dipped my feet in freelancing as well"
      ],
    },
    {
      title: "Aspiring Web Developer",
      company_name: "",
      icon: javascript,
      iconBg: "#383E56",
      date: "Since 2020",
      points: [
        "Familiar with HTML, CSS, and Javascript up to a intermediate level",
        "Learning several frameworks and libraries, such as React, Tailwind, SCSS, Bootstrap, Three.js etc.",
        "Made several projects, including a weather app, personal portfolios, UI Designs, etc"
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "As of recently",
      points: [
        "Starting to get into the field of UI/UX as well",
        "Know how to operate Figma, and Photoshop, in order to make User Interfaces",
        "Being a graphic designer, I have a very good sense of color schemes, and positioning, to make the UI more catchy and immersive for the user"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather App Using API",
      description:
        "Web-based platform that allows users to check the weather of their current location, or any location they enter.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "weatherAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/JoyBrar2001/Weather-App-with-API.git",
    },
    {
      name: "Animated Form",
      description:
        "A login as well as Sign in form, which allows the users to switch between login and sign up, on the click of a single button, with a cool animation",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: loginform,
      source_code_link: "https://github.com/JoyBrar2001/Login-and-Sign-in-Animated-Form.git",
    },
    {
      name: "First Portfolio",
      description:
        "My first portfolio made using only Vanilla HTML, CSS, and Javascript",
      tags: [
        {
          name: "vanilla",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "intersection observer",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/JoyBrar2001/JoyBrar2001.github.io.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };