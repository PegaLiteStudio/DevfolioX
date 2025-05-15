import {IconType} from "react-icons";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {
    SiAmazon,
    SiAndroid,
    SiDocker,
    SiGraphql,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiReact,
    SiTypescript
} from "react-icons/si";

export interface Skill {
    name: string;
    level: number;
    icon: IconType;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    tags: string[];
    imageUrl: string;
    demoLink: string;
    githubLink: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: IconType;
}

export interface PortfolioData {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    longBio: string;
    profileImage: string;
    workspaceImage: string;
    githubUrl: string;
    skills: Skill[];
    additionalSkills: string[];
    experience: Experience[];
    projects: Project[];
    socialLinks: SocialLink[];
    resumeUrl: string;
    contactFormUrl: string;
}

const portfolioData: PortfolioData = {
    name: "Sahil Hossain",
    title: "Full Stack Developer",
    location: "Agartala, Tripura",
    email: "sahilthegeek999@gmail.com",
    phone: "+91 6033017709",
    bio: "I'm a passionate full-stack developer with 5+ years of experience crafting responsive web applications and intuitive user interfaces. Specializing in JavaScript ecosystems with expertise in React, Node.js, and modern web technologies.",
    longBio: "I transform ideas into elegant, functional digital experiences. With a strong foundation in both front-end and back-end development, I bridge the gap between design and functionality. I'm constantly exploring new technologies and methodologies to enhance my skill set and deliver cutting-edge solutions. When I'm not coding, you'll find me contributing to open-source projects or mentoring upcoming developers.",
    profileImage: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    workspaceImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    githubUrl: "https://github.com/PegaLiteStudio",
    skills: [
        {name: "JavaScript", level: 95, icon: SiJavascript},
        {name: "React.js", level: 90, icon: SiReact},
        {name: "Node.js", level: 85, icon: SiNodedotjs},
        {name: "TypeScript", level: 80, icon: SiTypescript},
        {name: "GraphQL", level: 75, icon: SiGraphql},
        {name: "MongoDB", level: 85, icon: SiMongodb},
        {name: "Docker", level: 70, icon: SiDocker},
        {name: "AWS", level: 75, icon: SiAmazon},
        {name: "Android", level: 95, icon: SiAndroid},
    ],
    additionalSkills: [
        "HTML5/CSS3", "SASS", "TailwindCSS", "Redux", "Express.js",
        "PostgreSQL", "Git", "RESTful APIs", "Jest", "CI/CD"
    ],
    experience: [
        {
            title: "Senior Frontend Developer",
            company: "TechInnovate Solutions",
            period: "2021 - Present",
            description: "Lead development of customer-facing web applications using React.js, Next.js, and TypeScript. Implemented state management with Redux and integrated RESTful APIs."
        },
        {
            title: "Full Stack Developer",
            company: "Digital Frontiers",
            period: "2018 - 2021",
            description: "Developed and maintained full-stack applications using the MERN stack. Designed and implemented database schemas and RESTful APIs."
        },
        {
            title: "Junior Web Developer",
            company: "WebCraft Studios",
            period: "2016 - 2018",
            description: "Built responsive websites and web applications for clients across various industries. Worked closely with designers to implement pixel-perfect UIs."
        }
    ],
    projects: [
        {
            id: 1,
            title: "Taskify",
            shortDescription: "Task management & productivity app",
            description: "A productivity application with task management, time tracking, and team collaboration features.",
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            demoLink: "https://taskify.example.com",
            githubLink: "https://github.com/devfoliox/taskify",
        },
        {
            id: 2,
            title: "CryptoTracker",
            shortDescription: "Cryptocurrency tracking dashboard",
            description: "Real-time cryptocurrency tracking dashboard with price alerts and portfolio management.",
            tags: ["React", "Redux", "Chart.js", "Cryptocurrency API"],
            imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            demoLink: "https://cryptotracker.example.com",
            githubLink: "https://github.com/devfoliox/cryptotracker",
        },
        {
            id: 3,
            title: "HealthHub",
            shortDescription: "Healthcare platform for telehealth",
            description: "Healthcare platform connecting patients with doctors for virtual consultations and appointment scheduling.",
            tags: ["Next.js", "Firebase", "Tailwind CSS", "WebRTC"],
            imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            demoLink: "https://healthhub.example.com",
            githubLink: "https://github.com/devfoliox/healthhub",
        },
        {
            id: 4,
            title: "EcoSmart",
            shortDescription: "Smart home energy management",
            description: "IoT-based smart home solution for monitoring and optimizing energy consumption.",
            tags: ["React", "Node.js", "MQTT", "IoT", "AWS"],
            imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
            demoLink: "https://ecosmart.example.com",
            githubLink: "https://github.com/devfoliox/ecosmart",
        }
    ],
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/PegaLiteStudio",
            icon: FaGithub,
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/sahilthegeek",
            icon: FaLinkedinIn,
        },
        {
            platform: "Instagram",
            url: "https://instagram.com/sahilthegeek",
            icon: FaInstagram,
        }
    ],
    resumeUrl: "https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg",
    contactFormUrl: "/api/form",
};

export default portfolioData;
