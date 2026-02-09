import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/features/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
    // Get top 3 projects
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary">Featured Projects</h2>
                        <p className="text-muted-foreground mt-2">A selection of my recent work.</p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
