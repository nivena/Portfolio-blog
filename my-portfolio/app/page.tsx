import ProjectCard from "@/components/ProjectCard";
export default function Home() {
  return (
    <main className="container mx-auto p-6">
      {/* Projects Section */}
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="My Portfolio"
            description="A personal portfolio website built with Next.js and Tailwind CSS."
          />
          <ProjectCard
            title="Weather App"
            description="A weather forecasting app using React and an external API."
          />
        </div>
      </section>
    </main>
  );
}
