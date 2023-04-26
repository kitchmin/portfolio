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

import proj_tsu1 from "./assets/images/projects/TSU1.png";
import proj_tsu2 from "./assets/images/projects/TSU2.png";
import proj_tsu3 from "./assets/images/projects/TSU3.png";
import proj_magicezy1 from "./assets/images/projects/magicezy1.png";
import proj_magicezy2 from "./assets/images/projects/magicezy2.png";
import proj_magicezy3 from "./assets/images/projects/magicezy3.png";
import proj_ramen1 from "./assets/images/projects/ramen1.png";
import proj_ramen2 from "./assets/images/projects/ramen2.png";
import proj_ramen3 from "./assets/images/projects/ramen3.png";
import proj_football1 from "./assets/images/projects/football1.png";
import proj_football2 from "./assets/images/projects/football2.png";
import proj_football3 from "./assets/images/projects/football3.png";
import proj_custom1 from "./assets/images/projects/custom1.png";
import proj_custom2 from "./assets/images/projects/custom2.png";
import proj_custom3 from "./assets/images/projects/custom3.png";
import arrow from "./assets/images/projects/arrow.svg";

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
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

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
        para: "For designing and creating visually stunning websites.",
        logo: figma,
      },
      {
        name: "Wordpress",
        para: "After designing, Wordpress can help to develop the home of your brand.",
        logo: wordpress,
      },
      {
        name: "Adobe Photoshop",
        para: "Creating eye-catching visuals for marketing and branding purposes.",
        logo: ps,
      },
      {
        name: "React",
        para: "For more complex websites, coding effort is a must!",
        logo: reactjs,
      },
      {
        name: "Adobe Experience Manager",
        para: "A Content Management System used to house your application.",
        logo: aem,
      },
      {
        name: "Divi",
        para: "A plugin for Wordpress to create your website.",
        logo: divi,
      },
      {
        name: "Elementor",
        para: "Much like Divi, Elementor is used to build your branding.",
        logo: elementor,
      },
      {
        name: "Sass",
        para: "Advanced and cleaner form of writing CSS",
        logo: sass,
      },
      {
        name: "Git",
        para: "A tool to house codes and other applications.",
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
    toolsTitle: "Tools Used:",
    buttonTitle: "Take A Look",
    privateTitle: "Private Project",
    buttonIcon: FaLongArrowAltRight,
    project_content: [
      {
        title: "The Speed Up Co.",
        content: "Tellus et maecenas egestas elit cras eu sed. Tempus ut eu sapien tristique amet risus. Aliquam tempor elementum enim erat nibh. In lobortis augue neque sed ac integer faucibus. Neque cursus malesuada enim ipsum faucibus.",
        proj_link: "https://thespeedupco.com/",
        tools: [
          {
            image: wordpress
          },
          {
            image: figma
          },
          {
            image: divi
          },
          {
            image: sass
          },
          {
            image: ps
          },
        ],
        project_image: [
          {
            image: proj_tsu1
          },
          {
            image: proj_tsu2
          },
          {
            image: proj_tsu3
          },
        ],
      },
      {
        title: "Aspire Football Academy PH",
        content: "Tellus et maecenas egestas elit cras eu sed. Tempus ut eu sapien tristique amet risus. Aliquam tempor elementum enim erat nibh. In lobortis augue neque sed ac integer faucibus. Neque cursus malesuada enim ipsum faucibus.",
        proj_link: "https://www.aspirefootballph.com/",
        tools: [
          {
            image: wordpress
          },
          {
            image: elementor
          },
          {
            image: ps
          },
        ],
        project_image: [
          {
            image: proj_football1
          },
          {
            image: proj_football2
          },
          {
            image: proj_football3
          },
        ],
      },
      {
        title: "Ramen Naijiro",
        content: "Tellus et maecenas egestas elit cras eu sed. Tempus ut eu sapien tristique amet risus. Aliquam tempor elementum enim erat nibh. In lobortis augue neque sed ac integer faucibus. Neque cursus malesuada enim ipsum faucibus.",
        proj_link: "https://www.figma.com/proto/VmJmJpzvOslzPgtRZRRU4z/Ramen-Naijiro?node-id=1-2&scaling=min-zoom&page-id=0%3A1",
        tools: [
          {
            image: figma
          },
          {
            image: ps
          },
        ],
        project_image: [
          {
            image: proj_ramen1
          },
          {
            image: proj_ramen2
          },
          {
            image: proj_ramen3
          },
        ],
      },
      {
        title: "MagicEzy",
        content: "Tellus et maecenas egestas elit cras eu sed. Tempus ut eu sapien tristique amet risus. Aliquam tempor elementum enim erat nibh. In lobortis augue neque sed ac integer faucibus. Neque cursus malesuada enim ipsum faucibus.",
        proj_link: "https://www.figma.com/proto/DKliEnOnjKml5DLE9ACrpW/MagicEzy.com?node-id=0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
        tools: [
          {
            image: figma
          },
          {
            image: wordpress
          },
          {
            image: divi
          },
          {
            image: ps
          },
        ],
        project_image: [
          {
            image: proj_magicezy1
          },
          {
            image: proj_magicezy2
          },
          {
            image: proj_magicezy3
          },
        ],
      },
      {
        title: "Tratek Asia, Inc.",
        content: "Tellus et maecenas egestas elit cras eu sed. Tempus ut eu sapien tristique amet risus. Aliquam tempor elementum enim erat nibh. In lobortis augue neque sed ac integer faucibus. Neque cursus malesuada enim ipsum faucibus.",
        proj_link: "",
        tools: [
          {
            image: reactjs
          },
          {
            image: sass
          },
          {
            image: figma
          },
          {
            image: git
          },
        ],
        project_image: [
          {
            image: proj_custom1
          },
          {
            image: proj_custom2
          },
          {
            image: proj_custom3
          },
        ],
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
        link: "https://www.facebook.com/Kitchupoy/",
      },
      {
        text: "Keith Suniega",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/keith-mitchell-suniega-a488801b6/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
