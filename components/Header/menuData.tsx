import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Premium Tips",
    path: "https://futnance-new.vercel.app/",
    newTab: true,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "How to Pay",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Uganda",
        path: "/uganda",
        newTab: false,
      },
      {
        id: 2,
        title: "Nigeria",
        path: "/nigeria",
        newTab: false,
      },
      {
        id: 1,
        title: "Ghana",
        path: "/ghana",
        newTab: false,
      },
      {
        id: 1,
        title: "Zambia",
        path: "/zambia",
        newTab: false,
      },
      {
        id: 1,
        title: "Others",
        path: "/general",
        newTab: false,
      },
    ]
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  }
];
export default menuData;
