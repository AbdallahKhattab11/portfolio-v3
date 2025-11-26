import { motion } from "framer-motion";
import { SKILLS } from "../constants";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-0.5 bg-indigo-500"></span>
              About Me
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              With 2 years of hands-on experience in the fast-paced world of web
              development, I’ve built a strong foundation in creating modern,
              responsive, and user-focused applications.{" "}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My journey began with simple HTML and CSS experiments, and quickly
              grew into building real-world projects that balance clean code,
              smooth performance, and thoughtful design. I focus on writing
              maintainable front-end architecture, delivering polished UI/UX,
              and continuously improving my skills with every project I build.{" "}
            </p>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <h3 className="text-white font-semibold mb-2">Current Focus</h3>
              <p className="text-slate-400">
                Currently diving deeper into advanced frontend development
                techniques to strengthen my understanding of modern architecture
                and build more scalable, performant applications.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">
              Technical Proficiency
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-900 rounded-2xl border border-slate-800/50">
                <span className="block text-4xl font-bold text-indigo-500 mb-2">
                  2+
                </span>
                <span className="text-slate-400 text-sm">
                  Years of Experience
                </span>
              </div>
              <div className="text-center p-6 bg-slate-900 rounded-2xl border border-slate-800/50">
                <span className="block text-4xl font-bold text-pink-500 mb-2">
                  10+
                </span>
                <span className="text-slate-400 text-sm">
                  Projects Completed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
