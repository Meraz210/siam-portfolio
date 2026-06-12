import './App.css'

const navItems = [
  ['Home', 'hero'],
  ['About', 'about'],
  ['Gallery', 'gallery'],
  ['Education', 'education'],
  ['Skills', 'skills'],
  ['Certifications', 'certifications'],
  ['Research', 'research'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
]

const heroBadges = [
  'Lean Manufacturing',
  'Process Optimization',
  'Industrial Engineering',
  'Quality Assurance',
]

const stats = [
  ['B.Sc. in IPE', 'Industrial & Production Engineering'],
  ['JUST Graduate', 'Jashore University of Science and Technology'],
  ['Lean Focus', 'Manufacturing and process improvement'],
  ['Research Publication', 'Applied intelligent systems research'],
]

const galleryImages = [
  {
    src: '/portfolio/siam-professional-portrait.jpeg',
    alt: 'Mahbub Hassan Siam professional portrait in formal suit',
    title: 'Professional Portrait',
  },
  {
    src: '/portfolio/siam-portrait-dark.jpeg',
    alt: 'Mahbub Hassan Siam studio-style professional portrait',
    title: 'Formal Profile',
  },
  {
    src: '/portfolio/siam-campus-portrait-1.jpeg',
    alt: 'Mahbub Hassan Siam standing in an academic corridor',
    title: 'Academic Environment',
  },
  {
    src: '/portfolio/siam-campus-portrait-2.jpeg',
    alt: 'Mahbub Hassan Siam in formal attire on campus',
    title: 'Campus Profile',
  },
]

const education = [
  {
    degree: 'B.Sc. in Industrial & Production Engineering',
    institution: 'Jashore University of Science and Technology',
    period: '2020-2025',
    result: 'CGPA 2.84',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Cantonment Public School and College, Saidpur',
    period: 'Saidpur',
    result: 'GPA 4.83',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Lions School and College, Saidpur',
    period: 'Saidpur',
    result: 'GPA 5.00',
  },
]

const skillGroups = [
  {
    title: 'Core Industrial Skills',
    description: 'Production floor improvement, planning, quality, and lean execution.',
    skills: [
      'Lean Manufacturing',
      'Production System Optimization',
      'Production Planning',
      'Scheduling',
      'Quality Assurance',
      'Statistical Process Control',
      'Time and Motion Study',
      '5S Methodology',
    ],
  },
  {
    title: 'Technical & Analysis',
    description: 'Manufacturing analysis, documentation, and research-oriented tools.',
    skills: [
      'Manufacturing Process Analysis',
      'Garment Technology',
      'Microsoft Excel',
      'Research Methodology',
      'Technical Documentation',
    ],
  },
  {
    title: 'Soft Skills',
    description: 'Professional strengths for teams, presentations, and project work.',
    skills: [
      'Leadership',
      'Team Collaboration',
      'Communication',
      'Presentation',
      'Analytical Thinking',
      'Problem Solving',
      'Adaptability',
      'Time Management',
    ],
  },
]

const certifications = [
  {
    title: 'Industrial Attachment on Garment Technology & Lean Manufacturing',
    issuer: 'BKMEA',
  },
  {
    title: 'Industrial Attachment Program',
    issuer: 'BITAC',
  },
  {
    title: 'Swisscontact Project Training Program',
    issuer: 'Swisscontact',
  },
]

const research = [
  {
    status: 'Published Research Paper',
    title:
      'DVMNet: Detection of Sugarcane Leaf Disease Using Ensemble of Convolutional Neural Network Classifiers',
    detail:
      'Applied deep learning research using ensemble convolutional neural network classifiers for plant disease detection.',
  },
  {
    status: 'Manuscript in Preparation',
    title:
      'Digital Twin-Enabled Explainable Fault Detection and Predictive Maintenance in Industrial Automation',
    detail:
      'Research direction focused on digital twins, explainable AI, fault detection, and predictive maintenance.',
  },
]

const experiences = [
  {
    role: 'Executive Member',
    organization: 'JUST Career Club',
    period: '2023-2024',
    detail: 'Organized workshops, seminars, and student engagement activities.',
  },
  {
    role: 'Project Contributor',
    organization: 'Jashore Light Engineering Standardization & Branding Project',
    period: 'Project Contribution',
    detail: 'Contributed to product standardization and branding activities.',
  },
]

function SectionHeader({ label, title, children }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#hero" aria-label="Mahbub Hassan Siam home">
            <span className="brand-mark">MS</span>
            <span className="brand-text">Mahbub Hassan Siam</span>
          </a>

          <div className="nav-links">
            {navItems.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section section-anchor" id="hero">
          <div className="hero-copy">
            <span className="hero-label">Industrial & Production Engineering Graduate</span>
            <h1>Mahbub Hassan Siam</h1>
            <p className="hero-title">
              Building efficient, measurable, and data-driven production systems.
            </p>
            <p className="hero-summary">
              Motivated Industrial & Production Engineering graduate from Jashore
              University of Science and Technology with a focus on lean manufacturing,
              production systems, process optimization, quality assurance, production
              planning, smart manufacturing, and data-driven industrial decision-making.
            </p>

            <div className="hero-badges" aria-label="Professional focus areas">
              {heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="mailto:cnsiam787@gmail.com"
                aria-label="Contact Mahbub Hassan Siam by email"
              >
                Contact Me
              </a>
              <a
                className="button button-secondary"
                href="/Mahbub_Hassan_Siam_ATS_Final.pdf"
                download
                aria-label="Download CV PDF"
              >
                Download CV
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional profile summary">
            <div className="hero-photo-frame">
              <img
                src="/portfolio/siam-professional-portrait.jpeg"
                alt="Mahbub Hassan Siam professional portrait"
              />
            </div>
            <div className="panel-topline">Professional Profile</div>
            <h2>Industrial & Production Engineering</h2>
            <div className="panel-list">
              <div>
                <span>Education</span>
                <strong>JUST Graduate</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Lean & Process Improvement</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Mirpur-10, Dhaka</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section section-anchor" id="about">
          <SectionHeader label="About" title="A process-minded engineering graduate">
            Mahbub Hassan Siam is an Industrial & Production Engineering graduate
            with academic and practical exposure to lean manufacturing, production
            planning, quality assurance, process analysis, and smart industrial
            systems. His portfolio reflects a strong interest in improving how
            production environments are planned, measured, standardized, and optimized.
          </SectionHeader>

          <div className="stats-grid">
            {stats.map(([value, label]) => (
              <article className="stat-card" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section photo-section section-anchor" id="gallery">
          <SectionHeader label="Gallery" title="Professional profile photos">
            A clean visual set for recruiters, LinkedIn sharing, and professional
            portfolio presentation.
          </SectionHeader>

          <div className="photo-grid">
            {galleryImages.map((image, index) => (
              <figure className={`photo-card photo-card-${index + 1}`} key={image.src}>
                <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section section-muted section-anchor" id="education">
          <SectionHeader label="Education" title="Academic background">
            Formal education in industrial engineering, science, and analytical
            problem-solving.
          </SectionHeader>

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-card" key={item.degree}>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <span>{item.period}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                </div>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-anchor" id="skills">
          <SectionHeader label="Skills" title="Industrial, analytical, and professional skills">
            Categorized strengths for production improvement, quality work,
            technical documentation, and collaborative engineering environments.
          </SectionHeader>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="chip-list">
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted section-anchor" id="certifications">
          <SectionHeader label="Certifications" title="Industry training and attachments">
            Practical training exposure across garment technology, lean manufacturing,
            and industrial attachment programs.
          </SectionHeader>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.title}>
                <span>{cert.issuer}</span>
                <h3>{cert.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section research-section section-anchor" id="research">
          <SectionHeader label="Research & Publications" title="Applied research for intelligent industry">
            Research work connecting machine learning, explainable systems, digital
            twins, and predictive maintenance with practical industrial problems.
          </SectionHeader>

          <div className="research-grid">
            {research.map((item) => (
              <article className="research-card" key={item.title}>
                <span>{item.status}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted section-anchor" id="experience">
          <SectionHeader label="Leadership / Experience" title="Leadership and project contribution">
            Campus leadership and project work with exposure to coordination,
            student engagement, standardization, and branding activities.
          </SectionHeader>

          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-card" key={item.role}>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-anchor" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Available for industrial engineering, production, quality, and process improvement roles.</h2>
            <p>
              For hiring conversations, collaborations, or research discussions,
              contact Mahbub Hassan Siam directly.
            </p>
          </div>

          <address className="contact-card" aria-label="Contact information">
            <a href="mailto:cnsiam787@gmail.com">cnsiam787@gmail.com</a>
            <a href="tel:+8801304681741">+88 01304681741</a>
            <span>Mirpur-10, Dhaka</span>
          </address>
        </section>
      </main>

      <footer className="footer">
        <strong>Mahbub Hassan Siam</strong>
        <span>Industrial & Production Engineering Graduate</span>
        <p>(c) 2026 Mahbub Hassan Siam. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
