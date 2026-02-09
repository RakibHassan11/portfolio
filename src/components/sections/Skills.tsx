import { skillsData } from "@/data/profile";

export function Skills() {
    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="bg-background rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-bold mb-6 text-center border-b pb-2">{category}</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
