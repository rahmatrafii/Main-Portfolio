import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
export const identity = {
  name: "Rahmat Rafi Indrayani",
  devision: "Frontend Web Developer",
  description: [
    "Saya seorang Frontend web Developer, Saya selalu mencari kesempatan untuk memperluas wawasan dan mempelajari hal-hal baru, karena saya yakin dengan belajar terus menerus kita bisa menciptakan aplikasi digital yang inovatif dan bermanfaat bagi banyak orang di masa depan.",
  ],
};

export const mySkills = {
  title: "My Skills",
  description:
    "this is the technology I usually use when developing frontend web",
  techStack: [
    {
      title: "HTML",
      src: "/static/image/html.svg",
    },
    {
      title: "CSS",
      src: "/static/image/css.svg",
    },
    {
      title: "JavaScript",
      src: "/static/image/javascript.svg",
    },
    {
      title: "Reactjs",
      src: "/static/image/reactjs.svg",
    },
    {
      title: "Nextjs",
      src: "/static/image/nextjs.svg",
    },
    {
      title: "TypeScript",
      src: "/static/image/typescript.svg",
    },
    {
      title: "TailwindCSS",
      src: "/static/image/tailwindcss.svg",
    },
    {
      title: "SASS",
      src: "/static/image/sass.svg",
    },
  ],
  tools: [
    {
      title: "Git",
      src: "/static/image/git.svg",
    },
    {
      title: "GitHub",
      src: "/static/image/github.svg",
    },
    {
      title: "VS Code",
      src: "/static/image/vscode.svg",
    },
    {
      title: "Figma",
      src: "/static/image/figma.svg",
    },
  ],
};
export const link = [
  {
    title: "Home",
    src: "#home",
  },
  {
    title: "Skills",
    src: "#skills",
  },
  {
    title: "Portfolio",
    src: "#portfolio",
  },
  {
    title: "Contact",
    src: "#contact",
  },
];
export const portfolio = [
  {
    title: "Youtube Clone",
    src: "/static/image/youtube.png",
    techStack: ["Nextjs", "TypeScript", "TailwindCSS"],
    link: "https://rafi-youtube-clone.vercel.app/",
    github: "https://github.com/rahmatrafii/youtube-clone",
    description: "",
  },
  {
    title: "Travel Landing Page",
    src: "/static/image/travel.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://rafi-travel.vercel.app/",
    github: "https://github.com/rahmatrafii/rafi-travel",
    description: "",
  },
  {
    title: "Aplikasi Pencarian Filem",
    src: "/static/image/movie.png",
    techStack: ["Nextjs", "TypeScript", "TailwindCSS"],
    link: "https://rafmovies.vercel.app/",
    github: "https://github.com/rahmatrafii/rafi-travel",
    description: "",
  },
  {
    title: "Aplikasi Pencarian Resep",
    src: "/static/image/recipe.png",
    techStack: ["Reactjs", "TailwindCSS"],
    link: "https://rafi-recipe-app.vercel.app/",
    github: "https://github.com/rahmatrafii/rafi-travel",
    description: "",
  },
];
export const ContactButton = [
  {
    title: "Gmail",
    icon: "/static/image/gmail.svg",
    link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rahmatrafiindrayani@gmail.com&su=&body=",
    body: "rahmatrafiindrayani@gmail.com",
  },
  {
    title: "WhatsApp",
    icon: "/static/image/whatsapp.svg",
    link: "https://wa.me/+62881026908422",
    body: "+62 881026908422",
  },
  {
    title: "Telegram",
    icon: "/static/image/telegram.svg",
    link: "https://t.me/+62881026908422",
    body: "+62 881026908422",
  },
];
export const sosmed = [
  {
    title: "instagram",
    link: "https://www.instagram.com/rahmat_rafi_indrayani",
    icon: <BsInstagram />,
  },
  {
    title: "facebook",
    link: "https://web.facebook.com/profile.php?id=100080953104926",
    icon: <BsFacebook />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rahmat-rafi-37890b23b",
    icon: <BsLinkedin />,
  },
  {
    title: "GitHub",
    link: "https://github.com/rahmatrafii",
    icon: <BsGithub />,
  },
];
