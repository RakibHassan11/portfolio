import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group rounded-xl overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <div className="relative aspect-video overflow-hidden bg-muted">
                {/* Replace with actual Image component when ready */}
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    {project.title} Image
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">+{project.technologies.length - 3}</span>
                    )}
                </div>

                <div className="flex gap-3 mt-auto">
                    <Button asChild variant="default" size="sm" className="flex-1">
                        <Link href={`/projects/${project.id}`}>
                            Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href={project.github} target="_blank" aria-label="GitHub">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href={project.link} target="_blank" aria-label="Live Demo">
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
