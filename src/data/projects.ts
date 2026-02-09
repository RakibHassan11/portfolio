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
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and admin dashboard.",
        image: "/projects/ecommerce.jpg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        link: "https://example.com/ecommerce",
        github: "https://github.com/example/ecommerce",
        features: [
            "User authentication and profile management",
            "Product search and filtering",
            "Shopping cart and secure checkout",
            "Admin dashboard for product management",
        ],
        overview:
            "This e-commerce platform was built to provide a seamless shopping experience. It features a modern UI, fast page loads, and secure payment processing.",
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and team workspaces.",
        image: "/projects/taskmanager.jpg",
        technologies: ["React", "Firebase", "Redux", "Material UI"],
        link: "https://example.com/taskmanager",
        github: "https://github.com/example/taskmanager",
        features: [
            "Real-time task updates",
            "Team workspaces and roles",
            "Drag-and-drop kanban board",
            "Email notifications",
        ],
        overview:
            "A productivity tool designed for remote teams. It allows users to create tasks, assign them to team members, and track progress in real-time.",
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Real-time weather data visualization with location tracking.",
        image: "/projects/weather.jpg",
        technologies: ["Vue.js", "Chart.js", "OpenWeatherMap API"],
        link: "https://example.com/weather",
        github: "https://github.com/example/weather",
        features: [
            "Current weather and 5-day forecast",
            "Interactive temperature charts",
            "Location-based weather detection",
            "Dark mode support",
        ],
        overview:
            "Provides detailed weather information for any location. Users can view current conditions, humidity, wind speed, and a visual forecast.",
    },
];
