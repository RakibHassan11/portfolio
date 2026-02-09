export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github: string;
    features: string[];
    overview: string;
}

export const projects: Project[] = [
    {
        id: "shirshoo",
        title: "Shirshoo: AI-Enhanced EdTech Platform",
        description: "A scalable EdTech platform with MCQs, AI discussions, and live exams with real-time leaderboards.",
        image: "/shirsho4.png",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Google Gemini SDK"],
        link: "https://www.shirshoo.com",
        github: "https://github.com/RakibHassan11",
        features: [
            "Admin PDF-to-question extraction",
            "Live exams with real-time leaderboards using WebSockets",
            "AI-driven discussions using Google Gemini SDK",
            "Role-based access control and JWT authentication",
        ],
        overview:
            "Built a scalable EdTech platform designed for competitive exam preparation. It features a clean layered architecture (MVC frontend, Controller–Service–Repository backend) and includes advanced features like KaTeX equation rendering and scheduled jobs.",
    },
    {
        id: "hrm-system",
        title: "HRM System (Orangetoolz)",
        description: "Human Resource Management Platform for attendance, leave management, and role-based access.",
        image: "/hrm.jpg",
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Node.js", "PostgreSQL"],
        link: "https://hrm.orangetoolz.com",
        github: "https://github.com/RakibHassan11",
        features: [
            "Attendance tracking",
            "Leave management system",
            "Role-based access control modules",
            "Responsive UI for SaaS platform",
        ],
        overview:
            "A comprehensive HRM solution built with modern web technologies. Focuses on streamlining HR processes with a user-friendly interface and robust backend security.",
    },
    {
        id: "anirix-3d",
        title: "Anirix 3D Engine",
        description: "Interactive web-based 3D viewer for smooth visualization of complex assets.",
        image: "/3d.png",
        technologies: ["React", "Next.js", "TypeScript", "Three.js", "React Three Fiber", "Zustand"],
        link: "https://anirix-3d-engine.vercel.app/en/workbench",
        github: "https://github.com/RakibHassan11",
        features: [
            "Smooth visualization of complex 3D assets",
            "Progressive asset loading",
            "State-managed rendering with Zustand",
            "Optimized controls for desktop and mobile",
        ],
        overview:
            "An interactive web-based 3D workbench that allows users to view and interact with 3D models. Implements performance optimizations for seamless rendering.",
    },
];
