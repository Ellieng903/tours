import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.png";
import tour3 from "./images/tour-3.jpg";
import tour4 from "./images/tour-4.png";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const iconLinks = [
  { id: 1, href: "https://facebook.com", icon: "fa-brands fa-facebook" },
  { id: 2, href: "https://twitte.com", icon: "fa-brands fa-twitter" },
  { id: 3, href: "https://whatsapp.com", icon: "fa-brands fa-whatsapp" },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "Aug 26th,2024",
    title: "Tibet Adventure",
    info: " dolor sit amet consectetur adipisicing elit. Nulla, magni?",
    location: "China",
    duration: "12",
    cost: "1000",
  },

  {
    id: 2,
    image: tour2,
    date: "Aug 22th,2024",
    title: "Tibet Adventure",
    info: " dolor sit amet consectetur adipisicing elit. Nulla, magni?",
    location: "Thailand",
    duration: "6",
    cost: "4600",
  },
  {
    id: 3,
    image: tour3,
    date: "Aug 14th,2024",
    title: "Tibet Adventure",
    info: " dolor sit amet consectetur adipisicing elit. Nulla, magni?",
    location: "Japan",
    duration: "5",
    cost: "3100",
  },
  {
    id: 4,
    image: tour4,
    date: "Aug 18th,2024",
    title: "Tibet Adventure",
    info: " dolor sit amet consectetur adipisicing elit. Nulla, magni?",
    location: "Hong Kong",
    duration: "4",
    cost: "2500",
  },
];

export const services = [
  {
    id: 1,
    icon: "fa-solid fa-wallet",
    title: "saving money",
    text: "dolor sit amet consectetur adipisicing elit. Nulla, magni?",
  },
  {
    id: 2,
    icon: "fa-solid fa-tree",
    title: "Endless Hiking",
    text: "dolor sit amet consectetur adipisicing elit. Nulla, magni?",
  },
  {
    id: 3,
    icon: "fa-solid fa-socks",
    title: "amazing comfort",
    text: "dolor sit amet consectetur adipisicing elit. Nulla, magni?",
  },
];
