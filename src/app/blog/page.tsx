import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/posts";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Engineering Blog</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Deep dives into software architecture, frontend performance, and full-stack challenges.
                </p>
            </div>

            <div className="grid gap-8 max-w-3xl mx-auto">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-primary/30 bg-background shadow-sm hover:shadow-md hover:border-primary/40 transition-all group"
                    >
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="px-2 py-1 bg-secondary rounded-full font-medium text-secondary-foreground text-xs">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> {post.readTime}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold">
                                <Link href={`/blog/${post.id}`} className="group-hover:text-primary transition-colors">
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
