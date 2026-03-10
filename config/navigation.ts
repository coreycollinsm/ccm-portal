import { BsFillPersonFill, BsGraphUp } from "react-icons/bs";

export const protectedNavigationLinks = [
  {
    text: "Visitor Journey",
    href: "/dashboard",
    icon: BsFillPersonFill,
  },
  {
    text: "Site Metrics",
    href: "/metrics",
    icon: BsGraphUp,
  },
];

export const publicNavigationLinks = {
  links: [
    {
      text: "Terms of Service",
      href: "/terms-of-service",
    },
  ],
  cta: {
    text: "Contact",
    href: "/contact",
  },
};
