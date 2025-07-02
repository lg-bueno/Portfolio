import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Leandro",
  lastName: "Gabriel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer",
  avatar: "/images/avatar.jpg",
  email: "leandrogabriel@buenodevsec.com.br",
  location: "America/Sao_Paulo", // e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English", "Russian"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
}; 

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lg-bueno",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/leandro--gabriel/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Desenvolvedor Full Stack com foco em Segurança</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Construo soluções seguras, escaláveis e eficientes, unindo desenvolvimento e práticas de cibersegurança.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Desenvolvedor full stack com experiência em segurança ofensiva e defensiva, entusiasta de CTFs e automação de ferramentas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NOX5 Offensive Security",
        timeframe: "2024 - Atualmente",
        role: "Técnico júnior",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "OVG - Organização das Voluntárias de Goiás",
        timeframe: "2022 - 2023",
        role: "Estagiário de Desenvolvimento Back-End",
        achievements: [
          <>
            Colaborei no desenvolvimento e manutenção de sistemas internos utilizando C++ e Python.
          </>,
          <>
            Auxiliei na modernização de aplicações legadas, contribuindo para maior eficiência e estabilidade.
          </>,
        ],
        images: [],
      },
      {
        company: "Assembleia Legislativa do Estado de Goiás",
        timeframe: "2021 - 2022",
        role: "Estagiário de Desenvolvimento Front-End",
        achievements: [
          <>
            Desenvolvi interfaces responsivas com HTML5, CSS3 e JavaScript, focando em acessibilidade e usabilidade.
          </>,
          <>
            Trabalhei com React.js para implementar funcionalidades modernas e otimizadas em projetos institucionais.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "Acadi-TI",
        description: <>Pós-graduação em Cibersegurança.</>,
      },
      {
        name: "Universidade Estácio de Sá",
        description: <>Bacharelado em Ciência da Computação.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Linguagens de Programação",
        description: <>Python, Bash Scripting, C/C++ e JavaScript.</>, 
        images: [],
      },
      {
        title: "Sistemas Operacionais",
        description: <>Kali Linux, Windows, Windows Server, Ubuntu e Ubuntu Server</>,
        images: [],
      },
      {
        title: "Ferramentas de Segurança",
        description: <>Nmap, Subfinder, Burp Suite, SQLMap, Aircrack-ng, Wireshark, Hashcat, entre outros. </>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
