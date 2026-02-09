import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">DevPortfolio</h3>
                        <p className="text-sm text-muted-foreground">
                            Building digital experiences with modern technologies.
                            Always learning, always creating.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
