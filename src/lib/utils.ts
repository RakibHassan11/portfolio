import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getIconSlug = (skill: string) => {
    const map: Record<string, string> = {
        "React": "react",
        "React.js": "react",
        "Next.js": "nextdotjs",
        "Redux Toolkit": "redux",
        "RTK Query": "redux",
        "Tailwind CSS": "tailwindcss",
        "ShadCN UI": "shadcnui",
        "MaterialUI": "mui",
        "Zustand": "react", // No icon, fallback
        "Framer Motion": "framer",
        "Three.js": "threedotjs",
        "React Three Fiber": "react", // Fallback
        "Node.js": "nodedotjs",
        "Express.js": "express",
        "FastAPI": "fastapi",
        "RESTful APIs": "json", // Generic
        "JWT Authentication": "jsonwebtokens",
        "PostgreSQL": "postgresql",
        "MongoDB": "mongodb",
        "Socket.io": "socketdotio",
        "Google Gemini SDK": "google",
        "Firebase (Auth, Firestore)": "firebase",
        "Git": "git",
        "GitHub": "github",
        "Docker": "docker",
        "Vercel": "vercel",
        "Nginx": "nginx",
        "Hostinger VPS": "hostinger",
        "Postman": "postman",
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "Python": "python",
        "SQL": "mysql",
        "HTML": "html5",
        "CSS": "css3",
    };
    return map[skill] || skill.toLowerCase().replace(/[^a-z0-9]/g, "");
};
