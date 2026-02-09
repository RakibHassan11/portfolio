import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Metadata } from 'next';

// Correct type definition for Next.js 15+ params
type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Project Details`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Visuals Column */}
                <div className="space-y-8">
                    {/* Main Project Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border bg-muted">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Live Preview Iframe */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Live Preview</h3>
                        <div className="relative aspect-video rounded-xl overflow-hidden border bg-background shadow-sm">
                            <iframe
                                src={project.link}
                                className="w-full h-full border-0"
                                title={`${project.title} Live Preview`}
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            Note: Some websites may not allow embedding.
                            <Link href={project.link} target="_blank" className="underline ml-1 hover:text-primary">
                                Open in new tab
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Details Column */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg">
                            <Link href={project.link} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href={project.github} target="_blank">
                                <Github className="mr-2 h-4 w-4" /> View Source
                            </Link>
                        </Button>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <h3 className="text-2xl font-semibold mb-4">Overview</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {project.overview}
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                        <ul className="grid grid-cols-1 gap-2 mb-8">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
