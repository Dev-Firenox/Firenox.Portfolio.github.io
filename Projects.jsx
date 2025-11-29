export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "React and Tailwind portfolio", link: "#" },
    { title: "E-commerce App", desc: "MERN stack store", link: "#" },
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
