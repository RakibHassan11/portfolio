import { blogPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    // Basic markdown-like rendering (converting newlines to paragraphs and code blocks)
    // In a real app, use 'react-markdown' or similar
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('* ')) {
                return <li key={index} className="ml-6 list-disc mb-2 text-muted-foreground">{line.replace('* ', '')}</li>;
            }
            if (line.startsWith('1. ')) {
                return <li key={index} className="ml-6 list-decimal mb-2 text-muted-foreground">{line.replace('1. ', '')}</li>;
            }
            if (line.startsWith('```')) {
                // Simplified code block handling - just hiding the marker lines for this custom renderer
                // Real implementation would collect lines between markers
                if (line.length > 3) return null; // Opening block
                return null; // Closing block
            }
            // Very basic code block content detection (indented or wrapped in logic in a real parser)
            // For this simple custom renderer, we'll just return standard p tags for text
            // and style code-like lines differently if we wanted, but let's keep it simple.

            if (line.trim() === '') return <br key={index} />;

            return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>;
        });
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
            </Button>

            <article className="max-w-3xl mx-auto">
                <div className="space-y-6 mb-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md text-secondary-foreground font-medium">
                            <Tag className="h-3 w-3" /> {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border mb-12 bg-muted">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <div className="whitespace-pre-wrap font-sans">
                        {/* 
                           Note: For production, use a library like 'react-markdown'.
                           This is a simplified render for demonstration.
                        */}
                        <div className="space-y-4">
                            {post.content.split('\n').map((line, i) => {
                                // Headings
                                if (line.trim().startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
                                if (line.trim().startsWith('### ')) return <h3 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>;

                                // Code blocks (simple simulation)
                                if (line.trim().startsWith('```')) return null;

                                // List items
                                if (line.trim().startsWith('* ')) return <ul key={i} className="list-disc ml-6"><li className="text-muted-foreground">{line.replace('* ', '')}</li></ul>;
                                if (line.trim().match(/^\d+\. /)) return <ol key={i} className="list-decimal ml-6"><li className="text-muted-foreground">{line.replace(/^\d+\. /, '')}</li></ol>;

                                // Empty lines
                                if (line.trim() === '') return <div key={i} className="h-2"></div>;

                                // Standard paragraph
                                return <p key={i} className="text-muted-foreground leading-7">{line}</p>;
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
