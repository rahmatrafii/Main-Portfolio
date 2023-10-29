export interface ProjectsType {
  title: string;
  src: string;
  techStack: string[];
  link: string;
  github: string;
  description: string;
}
export interface CardPortfolioType extends ProjectsType {
  theme: string;
  title: string;
  index: number;
}
export interface ModalType extends ProjectsType {
  showModal: boolean;
  setShowModal: Function;
}
export interface InputType {
  id: string;
  label: string;
  placeholder: string;
  delay: number;
  value: string;
  onChange: React.ChangeEventHandler;
  validate: {
    invalid: boolean;
    name: string;
    message: string;
  };
}
export interface MobileNav {
  active: activeLinkType;
  sidebar: boolean;
  setSidebar: Function;
}
export interface SkillsIconType {
  src: string;
  title: string;
  theme: string;
  index: number;
}
export interface ThemeButtonType {
  theme: string;
  onClick: React.ReactEventHandler;
}
export interface contextThemeType {
  theme: string;
  toggleTheme: () => void;
  navActive: NavActiveType;
  setNavActive: React.Dispatch<React.SetStateAction<NavActiveType>>;
}
export interface NavActiveType {
  skills: number;
  about: number;
  portfolio: number;
  contact: number;
}
export type activeLinkType =
  | "Home"
  | "About"
  | "Skills"
  | "Portfolio"
  | "Contact";
