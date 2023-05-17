import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "In today's digital age, more and more documentation work is being done online. This can be a challenge for people who are not familiar with using computers or who do not have the time or resources to learn how to do it themselves."

  ,
  "We use process design to create digital .That's why we have created NeedUp. We are a platform that provides online documentation services. You can either do the work yourself, or you can hire our operators to do it for you.",
];

export const workExp = [
  {
    place: "Self-Employed, Brisbane",
    tenure: "Aug 2014 - Sep 2016",
    role: "Visual Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "New Man Services",
    tenure: "Aug 2014 - Sep 2016",
    role: "UI/UX Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2014 - Sep 2016",
    role: "Sr. Product Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "I was so stressed about completing my  updating Aadhar Card, but NEEDUP made the process so easy. Their team was very helpful and knowledgeable, and they were always available to answer my questions. I would highly recommend NEEDUP to anyone who needs help with their documentation work",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "I was really struggling to fill out my tax forms, but NEEDUP made it so simple. Their team walked me through the process step-by-step, and they were always patient and understanding. I would definitely use NEEDUP again in the future.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "I used to spend hours doing my documentation work. But with NEEDUP, I can get it done in minutes. I'm so glad I found this service!",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "I was so stressed about my documentation work. But NEEDUP took care of everything for me. I couldn't be happier!",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
 
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
