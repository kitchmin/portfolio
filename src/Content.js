// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import divi from "./assets/images/Skills/divi.png";
import elementor from "./assets/images/Skills/elementor.png";
import ps from "./assets/images/Skills/ps.png";
import aem from "./assets/images/Skills/aem.png";
import reactjs from "./assets/images/Skills/react.png";
import wordpress from "./assets/images/Skills/wordpress.png";
import git from "./assets/images/Skills/git.png";
import sass from "./assets/images/Skills/sass.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    slogan: "Making my client's vision come to life.",
    firstName: "KEITH",
    LastName: "SUNIEGA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Wordpress",
        para: "Lorem ipsum text  dummy",
        logo: wordpress,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Adobe Experience Manager",
        para: "Lorem ipsum text  dummy",
        logo: aem,
      },
      {
        name: "Divi",
        para: "Lorem ipsum text  dummy",
        logo: divi,
      },
      {
        name: "Elementor",
        para: "Lorem ipsum text  dummy",
        logo: elementor,
      },
      {
        name: "Sass",
        para: "Lorem ipsum text  dummy",
        logo: sass,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Wordpress and Web Development",
        para: "With over 3 years of experience in Wordpress and Custom Website Development, I can help you with creating, visualizing and producing your own stunning Website to showcase to the world and to also exponentially boost your Digital Presence!",
        logo: services_logo1,
      },
      {
        title: "UI/UX Designing",
        para: "Branding is one of the most important aspect of promoting your business. Let me help you express your creativity by designing your website centered on your own unique quirky, off-brand, and personal style! I'll help you every step of the way to let out the artist in you!",
        logo: services_logo2,
      },
      {
        title: "Custom System Development",
        para: "Do you have an explosive and potentially successful App idea in mind? Well, I can help you bring that to life by designing and creating the Application or System that you want!",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "GALLERY",
    image: person_project,
    warning: "UNDER CONSTRUCTION",
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "With over 3 years in developing and designing websites from clients all over the globe, I can assure you that with every interaction from starting of the project to Go Live will be met with utmost satisfaction! Let's get to work!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET A QUOTE",
    social_media: [
      {
        text: "keithsuniega@gmail.com",
        icon: GrMail,
        link: "mailto:keithsuniega@gmail.com",
      },
      {
        text: "+63 906 261 7431",
        icon: MdCall,
        link: "https://wa.me/09062617431",
      },
      {
        text: "Keith Suniega",
        icon: BsFacebook,
        link: "https://www.instagram.com/Kitchupoy/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
