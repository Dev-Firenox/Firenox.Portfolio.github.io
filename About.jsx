import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <h2>About Me</h2>
      <p>I am a passionate developer with expertise in modern web technologies.</p>
    </motion.section>
  );
}
