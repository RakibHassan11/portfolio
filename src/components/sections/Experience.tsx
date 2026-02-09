import { Briefcase } from "lucide-react";
import { experienceData } from "@/data/profile";

export function Experience() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary">Experience</h2>
                <div className="max-w-3xl mx-auto relative border-l-2 border-primary/20 ml-4 md:ml-auto pl-8 space-y-12">
                    {experienceData.map((item, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-background" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{item.role}</h3>
                                <div className="flex items-center gap-2 text-primary font-medium">
                                    <Briefcase className="h-4 w-4" />
                                    <span>{item.company}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.period}</p>
                                <p className="text-muted-foreground leading-relaxed mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
