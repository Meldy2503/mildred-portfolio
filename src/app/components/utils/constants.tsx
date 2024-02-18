import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FiEdit } from "react-icons/fi";
import { RiAdvertisementLine } from "react-icons/ri";
import { AiTwotoneMail } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

export const heroData = [
  {
    icon: <FaYoutube />,
    iconColor: "#ff2149",
    title: "YouTube",
    text: "Please subscribe to my official channel for updated contents.",
    subscribersNo: "5K+",
    subText: "SubScribers",
    btnText: "SubScribe",
    href: "https://www.youtube.com/@mildredken7981",
  },
  {
    icon: <AiFillInstagram />,
    iconColor: "#1e2434",
    title: "Instagram",
    text: "Don't forget to follow my Instagram account for short videos",
    subscribersNo: "1K+",
    subText: "Followers",
    btnText: "Follow",
    href: "https://www.instagram.com/ekwensimildred?igsh=MTI2ZXlvMTltYnkzZQ%3D%3D&utm_source=qr",
  },
];

export const menuData = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About me",
    id: "#about",
  },
  {
    name: "Services",
    id: "#services",
  },

  {
    name: "Contact me",
    id: "#contact",
  },
];

export const serviceData = [
  {
    id: "1",
    icon: <RiAdvertisementLine />,
    title: "Promotional Ads",
    text: "Boost your brand with compelling ads that captivate your audience. Our creative solutions ensure maximum visibility and impact, helping your business stand out.",
  },
  {
    id: "2",
    icon: <FiEdit />,
    title: "Product Review",
    text: "We delve into the features and benefits of your products, providing authentic and informative reviews that resonate effectively with your target audience's preferences and needs.",
  },
  {
    id: "3",
    icon: <TfiWrite />,
    title: "Content Creation",
    text: "Ignite your online presence with our dynamic services. From engaging articles to visually appealing multimedia contents, we tailor our creations to suit your brand.",
  },
];

export const videoData = [
  {
    id: "1",
    text: "#1WhatAfricanMumSees",
    href: "https://www.youtube.com/embed/o6J3Cuc8nm4",
  },
  {
    id: "2",
    text: "#2OutsmartAfricanMums",
    href: "https://www.youtube.com/embed/RQdxw9Tv6AY",
  },
  {
    id: "3",
    text: "#3MeBeforeCreditAlert",
    href: "https://www.youtube.com/embed/Sm9HGRj5ZiQ",
  },
  {
    id: "4",
    text: "#4WhenAngryWithYourMan",
    href: "https://www.youtube.com/embed/yuvYRvOgHPQ",
  },
];

export const contactData = [
  {
    icon: BsFillPersonFill,
    placeholder: "Full name",
    type: "text",
    name: "fullName",
  },
  {
    icon: AiTwotoneMail,
    placeholder: "Email",
    type: "email",
    name: "email",
  },
  {
    icon: BiMessageDots,
    placeholder: "Message",
    type: "textarea",
    name: "message",
  },
];
