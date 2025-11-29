export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js"];
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <span className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}
