import { Code, Rocket, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time with agile methodologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Excellent communication and teamwork skills across departments",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate Full Stack Web Developer with 2+ years of experience
            building web applications. I love turning complex problems into simple,
            beautiful, and intuitive designs.
          </p>
          <p className="text-lg text-gray-700">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge through
            technical blog posts and mentoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <highlight.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
