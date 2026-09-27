import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink, Code2, Database, Trophy, Dumbbell, Brain, Layers3, Send, CheckCircle2 } from 'lucide-react';
import { projects } from './data/projects';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import SectionHeading from './components/SectionHeading';
import img12ththumbnail from "./assets/certificates/12thmarksheetThumbnail.png"
import imgbcathumbnail from "./assets/certificates/bcadegreethumbnail.png"
import imgtechwarthumbnail from "./assets/certificates/techwarthumbnail.png"
import img12thmarksheet from "./assets/certificates/12thMarksheet.jpeg"
import imgbcadegree from "./assets/certificates/bcadegree.jpeg"
import imgtechwar from "./assets/certificates/Techwar-2026.jpg"


const skills = {
  "Frontend Development": ["JavaScript (ES6+)", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  "Backend & Databases": ["Node.js", "Express.js", "PHP", "Laravel"],
  "Languages & Core CS": ["C", "C++"],
  "State & Tools": ["Redux", "Git", "GitHub", "REST APIs"]
};


const traits = [
  [Brain, "Deep Focus", "Quiet focus translates into deep-work sessions, clean architecture, and meticulous attention to detail."],
  [Dumbbell, "Physical Discipline", "Gym training reinforces consistency, continuous growth, discipline, and mental clarity."],
  [Trophy, "Pressure Handler", "Cricket captaincy experience built strong leadership, fast decision-making, and composure under high pressure."],
  [Layers3, "Full Stack Craftsmanship", "End-to-end development mindset focused on scalable backend logic and intuitive frontend UI."]
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .65, delay, ease: "easeOut" }}>{children}</motion.div>;
}

export default function App() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) document.querySelectorAll('[data-nav]').forEach(x => x.classList.toggle('active', x.dataset.nav === e.target.id));
    }), { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); setTimeout(() => setSent(false), 5000); };

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return <div className="min-h-screen bg-ink text-white selection:bg-accent/30">
    <CursorGlow />
    <Navbar />

    <main>
      <section id="home" className="hero section-shell">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="relative z-10 max-w-5xl">
          <div className="status-pill"><span className="pulse-dot" /> Available for opportunities</div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} className="hero-kicker">FULL STACK DEVELOPER / CREATIVE ENGINEER</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .8 }} className="hero-name">theonlypawar</motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7 }} className="hero-title">Dhruv Rakesh Pawar<span>.</span></motion.h2>
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-copy">Architecting high-performance web applications with clean code, modern stacks, and structured discipline.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#works" className="btn btn-primary">Explore Works <ArrowUpRight size={17} /></a>
            <a href="#contact" className="btn btn-ghost">Get in Touch <Mail size={16} /></a>
          </div>
          <div className="hero-meta"><span>React</span><i /> <span>Node.js</span><i /> <span>Redux</span><i /> <span>Tailwind</span></div>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section id="about" className="section section-shell">
        <SectionHeading eyebrow="01 / WHO I AM" title="Built on discipline. Driven by craft." text="A developer mindset shaped by deep focus, consistency, leadership and an obsession with building things that feel as good as they work." />
        <div className="grid md:grid-cols-2 gap-4">
          {traits.map(([Icon, title, text], i) => <Reveal key={title} delay={i * .06}>
            <article className="glass-card trait-card"><div className="icon-box"><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p></div><span className="card-index">0{i + 1}</span></article>
          </Reveal>)}
        </div>
      </section>

      <section id="skills" className="section section-shell">
        <SectionHeading eyebrow="02 / CAPABILITIES" title="A stack built to ship." text="Modern frontend, dependable backend logic, clean APIs and practical engineering fundamentals." />
        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([group, items], i) => <Reveal key={group} delay={i * .08}>
            <article className="glass-card p-7">
              <div className="flex items-center gap-3 mb-6"><div className="icon-box"><Code2 size={18} /></div><h3 className="font-semibold text-lg">{group}</h3></div>
              <div className="flex flex-wrap gap-2">{items.map(s => <span className="skill-tag" key={s}>{s}</span>)}</div>
            </article>
          </Reveal>)}
        </div>
      </section>

      <section id="journey" className="section section-shell">
        <SectionHeading eyebrow="03 / JOURNEY" title="Learning by building." text="An evolving path from business fundamentals to full-stack engineering." />
        <div className="timeline">
          {[
            ["12th Grade", "Commerce Stream", "Built a foundation in analytical thinking, business flow and logical reasoning."],
            ["Bachelor of Computer Applications", "BCA Degree", "Mastered computer science fundamentals, database systems and software lifecycle principles."],
            ["Full Stack Web Development", "Certification — Pursuing", "Deep-diving into modern full-stack development, cloud readiness and scalable architecture."]
          ].map(([year, title, text], i) => <Reveal key={title} delay={i * .1}><div className="timeline-item"><div className="timeline-dot" /><div className="timeline-year">{year}</div><div className="glass-card p-6"><h3>{title}</h3><p>{text}</p></div></div></Reveal>)}
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="section">
        <div className="section-shell">

          <div className="eyebrow">CERTIFICATES</div>

          <h2 className="section-title">
            Learning <span>in progress.</span>
          </h2>

          <p className="section-copy">
            Certificates and courses I have completed while improving my
            development skills.
          </p>

          <div className="certificates-grid">

            {/* Certificate 1 */}
            <motion.div
              className="certificate-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -7 }}
              onClick={() =>
                setSelectedCertificate({
                  image: img12thmarksheet,
                  name: "12th Higher Secondary certificate",
                  file: img12thmarksheet
                })
              }
            >
              <div className="certificate-image">
                <img
                  src= {img12ththumbnail}
                  alt="12th Higher Secondary certificate"
                />
              </div>

              <div className="certificate-content">
                <span className="certificate-number">01</span>
                <h3>Higher Secondary (12th)</h3>
                <p>GSEB Board Certificate</p>
              </div>
            </motion.div>


            {/* Certificate 2 */}
            <motion.div
              className="certificate-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -7 }}
              onClick={() =>
                setSelectedCertificate({
                  image: imgbcadegree,
                  name: "Bachelor of Computer Application",
                  file: imgbcadegree
                })
              }
            >
              <div className="certificate-image">
                <img
                  src={imgbcathumbnail}
                  alt="BCA Degree Certificate"
                />
              </div>

              <div className="certificate-content">
                <span className="certificate-number">02</span>
                <h3>Bachelor of Computer Application</h3>
                <p>Graduation Degree</p>
              </div>
            </motion.div>


            {/* Certificate 3 */}
            <motion.div
              className="certificate-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -7 }}
              onClick={() =>
                setSelectedCertificate({
                  image: imgtechwar,
                  name: "TechWar 2026 - C Tsunami",
                  file: imgtechwar
                })
              }
            >
              <div className="certificate-image">
                <img
                  src={imgtechwarthumbnail}
                  alt="Techwar 2026 Certificate of Participation"
                />
              </div>

              <div className="certificate-content">
                <span className="certificate-number">03</span>
                <h3>TechWar 2026 - C Tsunami</h3>
                <p>Coding Competition Certificate By Red & White Skill Education</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="works" className="section section-shell">
        <SectionHeading eyebrow="04 / SELECTED WORK" title="Things I've built." text="A flexible project grid — replace demo links, screenshots and descriptions as your portfolio grows." />
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => <Reveal key={p.title} delay={i * .06}><article className="project-card">
            <div className="project-image"><img src={p.image} alt={p.title} /><div className="project-overlay"><a href={p.live} className="round-btn" aria-label="Live demo"><ExternalLink size={17} /></a><a href={p.github} className="round-btn" aria-label="GitHub"><Github size={17} /></a></div></div>
            <div className="p-6"><div className="flex items-start justify-between gap-4"><h3>{p.title}</h3><ArrowUpRight size={18} className="text-white/30" /></div><p>{p.description}</p><div className="flex flex-wrap gap-2 mt-5">{p.stack.map(s => <span className="mini-tag" key={s}>{s}</span>)}</div></div>
          </article></Reveal>)}
        </div>
      </section>

      <section id="contact" className="section section-shell pb-28">
        <div className="contact-panel">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 p-7 sm:p-10 lg:p-14">
            <div><div className="eyebrow">05 / CONTACT</div><h2 className="section-title">Let's build something <span>remarkable.</span></h2><p className="section-copy">Have an idea, a product to ship, or a problem worth solving? Send a message and let's talk.</p>
              <div className="contact-links">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvpawarff@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={17} /> Send Email
                </a>
                <a href="https://linkedin.com/in/pawardhruv-0a0329405" target="_blank"><Linkedin size={17} /> LinkedIn Profile</a>
                <a href="https://github.com/pawardhruv" target="_blank"><Github size={17} /> GitHub / pawardhruv</a>
              </div>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4"><input required placeholder="Name" name="name" /><input required type="email" placeholder="Email" name="email" /></div>
              <input required placeholder="Subject" name="subject" />
              <textarea required placeholder="Tell me about your project..." rows="6" name="message" />
              <button className="btn btn-primary w-full sm:w-auto" type="submit">{sent ? <><CheckCircle2 size={17} /> Message ready</> : <><Send size={17} /> Send Message</>}</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-white/5">
      <div className="section-shell py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
        <span>© {new Date().getFullYear()} Dhruv Rakesh Pawar</span><span>Crafted with Passion & Precision</span>
        <button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} className="back-top">Back to top <ArrowUpRight size={13} /></button>
      </div>
    </footer>

    {selectedCertificate && (
      <motion.div
        className="certificate-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedCertificate(null)}
      >
        <motion.div
          className="certificate-modal-box"
          initial={{
            opacity: 0,
            scale: 0.65,
            rotateX: 12,
            rotateY: -12
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18
          }}
          onClick={(e) => e.stopPropagation()}
        >

          <button
            className="certificate-close"
            onClick={() => setSelectedCertificate(null)}
          >
            ×
          </button>

          <div className="certificate-large">
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
            />
          </div>

          <div className="certificate-modal-footer">
            <div>
              <span className="certificate-modal-label">
                CERTIFICATE
              </span>

              <h3>{selectedCertificate.name}</h3>
            </div>

            <a
              href={selectedCertificate.file}
              download
              className="btn btn-primary"
            >
              Download
            </a>
          </div>

        </motion.div>
      </motion.div>
    )}

  </div>;
}