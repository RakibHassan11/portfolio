"use client";

import { skillsData } from "@/data/profile";
import Image from "next/image";

// Helper for mapping skill names to Simple Icons slugs
const getIconSlug = (skill: string) => {
    const map: Record<string, string> = {
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
        "SQL": "mysql", // Generic SQL icon
        "HTML": "html5",
        "CSS": "css3",
    };
    return map[skill] || skill.toLowerCase().replace(/[^a-z0-9]/g, "");
};

export function Skills() {
    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="bg-background rounded-xl p-6 shadow-sm border hover:border-primary/20 transition-colors">
                            <h3 className="text-xl font-bold mb-6 border-b pb-2">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {skills.map((skill) => {
                                    const slug = getIconSlug(skill);
                                    // Using simpleicons.org CDN. Color is handled by current text color via generic or specific color requested?
                                    // User asked for "show icon".
                                    return (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                                        >
                                            <div className="h-5 w-5 relative shrink-0">
                                                {/* Simple Icons CDN - Defaulting to black/white for now, can be colored */}
                                                <img
                                                    src={`https://cdn.simpleicons.org/${slug}`}
                                                    alt=""
                                                    className="w-full h-full dark:invert"
                                                    onError={(e) => {
                                                        // Fallback if image fails - hide image and just show text
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs font-medium truncate" title={skill}>{skill}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
