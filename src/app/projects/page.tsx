import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/features/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">My Projects</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A showcase of my recent work, side projects, and experiments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
