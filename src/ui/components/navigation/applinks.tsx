import { Applinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: Applinks[] = [
  {
    label: "Acceuill",
    baseUrl: "/design-system",
    type: "internal",
  },
  {
    label: "Produits",
    baseUrl: "/blogs",
    type: "internal",
  },
  {
    label: "Formation",
    baseUrl: "#/",
    type: "internal",
  },
  {
    label: "Contacts",
    baseUrl: "#/",
    type: "internal",
  },
];
export const footerUsersLinks: Applinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/login",
    type: "internal",
  },
  {
    label: "Mot de passe oublié ",
    baseUrl: "/connexion/forget_password",
    type: "internal",
  },
];
export const footerInformationLinks: Applinks[] = [
  {
    label: "Conditions Générales",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialités",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contacts",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerSocialNetwordLinks: Applinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Slack",
    baseUrl: "https://coders-monkeys.slack.com",
    type: "external",
    icon: RiSlackFill,
  },
];
export const FooterContactsLinks: Applinks[] = [
  {
    label: "Contacts",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Email",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Téléphone",
    baseUrl: "/#",
    type: "internal",
  },
];
export const FooterContactLinks: Applinks[] = [
  {
    label: "Startup",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Entreprise",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Marketplace",
    baseUrl: "/#",
    type: "internal",
  },
];

export const FooterLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetwordLinks,
  },
  {
    label: "Sociaux",
    links: FooterContactsLinks,
  },
  {
    label: "Contact",
    links: FooterContactLinks,
  },
];
