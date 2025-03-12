// Set any item to undefined to remove it from the site or to use the default value

import { defineScriptVars } from "astro/compiler-runtime";
import { start } from "node:repl";
import { describe } from "node:test";

export const GLOBAL = {
  // Site metadata
  username: "Camilo Sarmiento",
  rootUrl: "http://camilosar.site",
  shortDescription: "Software Developer | Automation & DevOps Fan | Tech Lover",
  longDescription:
    "I enjoy providing software solutions and bring ideas to life and solve real-world problems.",

  // Social media links
  githubProfile: "https://github.com/camilo-845",
  twitterProfile: "https://twitter.com/",

  // Common text names used throughout the site
  articlesName: "Blog Posts",
  projectsName: "Projects",
  aboutName: "About Me",
  educationName: "Education",
  certificationsName: "Certifications",
  viewAll: "View All",

  // Common descriptions used throughout the site
  noArticles: "No featured post yet.",
  noProjects: "No featured projects yet.",
  noEducation: "No education information yet.",
  noCertifications: "No certifications yet.",

  // Active links on Secitions
  activeLinksEducation: false,
  activeLinksCertifications: false,

  // Blog metadata
  blogTitle: "My Thoughts & Takes",
  blogShortDescription: "Practical wisdom, unfiltered thoughts, and hot takes.",
  blogLongDescription:
    "Web development, tech trends, and the occasional programming mishap.",

  // Project metadata
  projectTitle: "Projects and Code",
  projectShortDescription:
    "A list of my web development projects and developer tools.",
  projectLongDescription:
    "All of my projects, including both frontend and full-stack applications.",

  // Profile image
  profileImage: "my-notion-face-transparent.webp",

  // Menu items
  menu: {
    home: "/",
    projects: "/projects",
    blog: "/blog",
  },

  // About content
  aboutmeDescription:
    "I'm a software developer with a passion for automation and DevOps. I enjoy providing software solutions and bring ideas to life and solve real-world problems. I'm always looking for new challenges and opportunities to learn and grow.",

  // Education content
  education: [
    {
      institution: "Universisdad del Magdalena",
      degree: "Systems Engineer",
      start_date: "2022-01-02T00:00:01Z",
      end_date: "2026-12-02T00:00:01Z",
      degree_url:
        "https://universidadmag-my.sharepoint.com/:b:/g/personal/cesarmiento_unimagdalena_edu_co/Edv_QMg5-P5OlA3uCrUibvkBDJgj60VypWafogekFcB7fg?e=QloFhs",
      description:
        "Accredited program of high quality, Ability to identify, formulate, and solve complex engineering problems applying engineering, science, and mathematics principles",
    },
    {
      institution: "Universidad Sergio Arboleda",
      degree: "Bootcamp Cloud Architecture - Exploler level",
      end_date: "2024-07-02T00:00:01Z",
      description:
        "Modeling and implementation of cloud services with AWS and Azure",
      degree_url:
        "https://talentotech.usergioarboleda.edu.co/ver-certificado/1051064869",
    },
    {
      institution: "Universidad Nacional de Colombia - MinTic",
      degree: "Intensive Programming Skills Training",
      start_date: "2021-05-02T00:00:01Z",
      end_date: "2021-12-02T00:00:01Z",
      degree_url:
        " https://drive.google.com/file/d/1HcTIGcWLIY1OpYuv39zp8wdculHRrN7G/view?usp=sharing",
      description: "Training in web application development",
    },
    {
      institution: "Henry Bootcamp",
      degree: "Full Stack Web Developer",
      end_date: "2022-12-02T00:00:01Z",
      degree_url:
        "https://drive.google.com/file/d/1h5aG0n-ncfnaCtOcryliwCWk5kbUSvP8/view?usp=sharing",
      description: "Bootcamp with over 800 hours of intensive learning",
    },
  ],

  // Certification content
  certificates: [
    {
      name: "Automation in the AWS Cloud",
      institution: "AWS",
      date: "2024-11-28T00:00:01Z",
      url:
        "https://www.coursera.org/account/accomplishments/verify/CMEF4Z9NXDGH",
    },
    {
      name: "DevOps on AWS and Project Management",
      institution: "AWS",
      date: "2024-11-28T00:00:01Z",
      url:
        "https://www.coursera.org/account/accomplishments/verify/EODEXKJELQQ2",
    },
    {
      name: "How to solve problems and make decisions effectively",
      institution: "Coursera",
      date: "2024-12-07T00:00:01Z",
      url:
        "https://www.coursera.org/account/accomplishments/verify/EA0Q9UKQQ2YC",
    },
    {
      name: "Curso Profesional de Git y GitHub",
      institution: "Platzi",
      date: "2023-10-12T00:00:01Z",
      url:
        "https://platzi.com/p/camilo.sarmiento.amado/",
    },
  ],
};
