import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Hi, I'm <span className="text-primary">Rakibul Hassan Rakib</span>
                        <br />
                        Software Engineer
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
                        Adaptable Software Engineer with experience in full-stack development using MERN stack, Next.js, and PostgreSQL.
                        Skilled in JavaScript frameworks, RESTful APIs, responsive design, and UI/UX. Passionate about clean, maintainable
                        code and collaboration in agile teams. Committed to driving innovation in remote and onsite environments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button asChild size="lg">
                            <Link href="/projects">
                                View My Work <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/resume.pdf" target="_blank">
                                Download Resume <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 animate-pulse" />
                        <Image
                            src="/profile.jpeg"
                            alt="Rakibul Hassan Rakib"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
