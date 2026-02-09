import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/profile";

export function Education() {
    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary">Education</h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {educationData.map((item, index) => (
                        <div key={index} className="flex gap-4 md:gap-6 items-start p-6 rounded-lg bg-background border shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{item.degree}</h3>
                                <p className="text-muted-foreground font-medium">{item.institution}</p>
                                <p className="text-sm text-muted-foreground mt-1">{item.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
