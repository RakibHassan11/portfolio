import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: "1",
        title: "Getting Started with Next.js App Router",
        excerpt: "A comprehensive guide to understanding the new App Router in Next.js 13+.",
        date: "February 8, 2026",
        category: "Development",
    },
    {
        id: "2",
        title: "Why I Use Tailwind CSS for Every Project",
        excerpt: "Exploring the benefits of utility-first CSS and how it speeds up development.",
        date: "January 25, 2026",
        category: "Styling",
    },
    {
        id: "3",
        title: "Building Accessible Web Applications",
        excerpt: "Key principles and practices for creating inclusive digital experiences.",
        date: "January 10, 2026",
        category: "Accessibility",
    },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights on web development and design.
                </p>
            </div>

            <div className="grid gap-8 max-w-3xl mx-auto">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border bg-background shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="px-2 py-1 bg-secondary rounded-full font-medium text-secondary-foreground">
                                    {post.category}
                                </span>
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold">
                                <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground">{post.excerpt}</p>
                            <div className="pt-2">
                                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-medium hover:underline">
                                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
