import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Metadata } from 'next';

interface ProjectPageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.id === params.id);
    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }
    return {
        title: `${project.title} - Project Details`,
        description: project.description,
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <Link
                href="/projects"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden flex items-center justify-center text-muted-foreground bg-zinc-200 dark:bg-zinc-800">
                        {/* Replace with Image component */}
                        <span className="text-lg font-medium">{project.title} Preview</span>
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">{project.title}</h1>
                    <p className="text-xl text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button asChild size="lg">
                            <Link href={project.link} target="_blank">
                                Visit Live <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href={project.github} target="_blank">
                                View Code <Github className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                        {project.overview}
                    </p>

                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
