import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function TiltCard({ children, className = "" }) {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 15;
    const rotateX = ((y / rect.height) - 0.5) * -15;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
  };

  return (
    <div
      className={`tilt-card ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built using React.",
      tech: ["React", "CSS", "Framer Motion"],
      github: "#",
    },
     {
      title: "Blog platform",
      description:
        "A responsive blog platform built using HTML, CSS, Javascript, React.",
      tech: ["HTML", "CSS", "Javascript", "React"],
      github: "#",
    },
    {
      title: "Resturant Website",
      description:
        "A responsive restaurant website featuring  a food menu, online booking, and  contact section.",
      tech: ["HTML", "CSS", "Javascript", "React"],
      github: "#",
    },
    
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Git & GitHub",
    "Responsive Design",
    
  ];

  const education = [
    {
      year: "2026",
      degree: "Master of Computer Applications",
      college: "S.B jain Institute of Technology, Management and Research,Nagpur",
      description:
        "Currently pursuing MCA with interest in Web Development and Software Development.",
    },
    {
      year: "2025",
      degree: "Bachelor of Computer Applications",
      college: "St. Francis De Sales College Nagpur",
      description:
        "Completed BCA with a strong foundation in programming and web technologies.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    e.target.reset();
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* -------- NAVBAR -------- */}
      <header className="navbar">
        <div className="logo">
          Vishakha<span>.</span>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("education")}>
            Education
          </button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>
      </header>

      {/* ================= HOME ================= */}
      <section id="home" className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hello">Hello, I'm</p>

          <h1>
            Vishakha <span>Rahangdale</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="hero-text">
            I create modern, responsive and interactive websites
            using React.js and modern web technologies.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-card-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TiltCard className="profile-card">
            <div className="profile-circle">
              VR
            </div>

            <h3>Frontend Developer</h3>
            <p>React.js • JavaScript • CSS</p>
          </TiltCard>
        </motion.div>
      </section>

      {/* -------- ABOUT -------*/}
      <section id="about" className="section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </motion.div>

        <div className="about-container">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Hi, I'm Vishakha </h3>

            <p>
              I am a passionate developer interested in building
              beautiful and user-friendly web applications.
            </p>

            <p>
              I enjoy working with React.js, JavaScript, HTML and CSS.
              My goal is to create responsive websites with clean
              design and smooth user interactions.
            </p>

            <p>
              I am continuously learning new technologies and
              improving my development skills through projects.
            </p>
          </motion.div>

          <TiltCard className="about-box">
            <h3>My Focus</h3>
            <p>💻 Web Development</p>
            <p>⚛️ React.js</p>
            <p>🎨 UI/UX Design</p>
            <p>🚀 Modern Web Applications</p>
          </TiltCard>
        </div>
      </section>

      {/* --------- EDUCATION --------*/}
      <section id="education" className="section education-section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>My Academic Journey</p>
          <h2>Education</h2>
        </motion.div>

        <div className="education-container">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="education-year">
                {item.year}
              </div>

              <div>
                <h3>{item.degree}</h3>
                <h4>{item.college}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------- SKILLS -------- */}
      <section id="skills" className="section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Technologies I Use</p>
          <h2>My Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
            >
              <span>◆</span>
              <h3>{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>My Recent Work</p>
          <h2>Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <TiltCard className="project-card">
                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href={project.github}>
                  View Project →
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --------CONTACT -------*/}
      <section id="contact" className="section contact-section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Let's Work Together</p>
          <h2>Contact Me</h2>
        </motion.div>

        <div className="contact-container">

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk!</h3>

            <p>
              Have a project or opportunity? Feel free to
              contact me.
            </p>

            <div className="contact-item">
              📧
              <span>vishakhar144@gmail.com</span>
            </div>

            <div className="contact-item">
              📱
              <span>+91 7517984576</span>
            </div>

            <div className="contact-item">
              📍
              <span>Nagpur, Maharashtra</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>
          © 2026 Vishakha Rahangdale. All Rights Reserved.
        </p>

        <p>
          Built with React.js ⚛️
        </p>
      </footer>
    </div>
  );
}

export default App;