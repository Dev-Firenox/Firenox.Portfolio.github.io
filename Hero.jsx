import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <h1>Hi, I'm Your Name</h1>
      <p>Full Stack Developer | Designer | Freelancer</p>
    </motion.section>
  );
}
