import './App.css'

const navItems = [
  ['Home', 'hero'],
  ['About', 'about'],
  ['Education', 'education'],
  ['Skills', 'skills'],
  ['Certifications', 'certifications'],
  ['Research', 'research'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
]

const heroBadges = [
  'Lean Manufacturing',
  'Quality Assurance',
  'Production Planning',
  'Process Optimization',
]

const profileHighlights = [
  ['JUST Graduate', 'Jashore University of Science and Technology'],
  ['IPE', 'Industrial & Production Engineering'],
  ['Lean & Process Improvement', 'Production-focused improvement mindset'],
]

const aboutStats = [
  ['B.Sc. in IPE', 'Industrial & Production Engineering graduate'],
  ['JUST Graduate', 'Jashore University of Science and Technology'],
  ['Lean Manufacturing Focus', '5S, process analysis, and improvement methods'],
  ['Research Publication', 'Applied AI and intelligent industrial systems'],
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
    title: 'Industrial Engineering',
    description: 'Methods and systems for improving production flow and efficiency.',
    skills: [
      'Lean Manufacturing',
      'Production System Optimization',
      'Time and Motion Study',
      '5S Methodology',
      'Manufacturing Process Analysis',
      'Continuous Process Improvement',
    ],
  },
  {
    title: 'Quality & Production',
    description: 'Planning, scheduling, and quality control for production environments.',
    skills: [
      'Production Planning',
      'Scheduling',
      'Quality Assurance',
      'Statistical Process Control',
      'Garment Technology',
    ],
  },
  {
    title: 'Technical & Soft Skills',
    description: 'Analytical, documentation, and collaboration skills for engineering teams.',
    skills: [
      'Microsoft Excel',
      'Research Methodology',
      'Technical Documentation',
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
    type: 'Industrial Attachment',
    title: 'Garment Technology & Lean Manufacturing',
    issuer: 'BKMEA',
  },
  {
    type: 'Training Program',
    title: 'Industrial Attachment Program',
    issuer: 'BITAC',
  },
  {
    type: 'Project Training',
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
      'Research focused on applied computer vision and ensemble CNN classifiers for reliable agricultural disease detection.',
    tags: ['AI', 'CNN', 'Computer Vision', 'Research'],
  },
  {
    status: 'Manuscript in Preparation',
    title:
      'Digital Twin-Enabled Explainable Fault Detection and Predictive Maintenance in Industrial Automation',
    detail:
      'Academic work exploring digital twins, explainable fault detection, and predictive maintenance for industrial automation.',
    tags: ['Digital Twin', 'Predictive Maintenance', 'Industrial Automation', 'XAI'],
  },
]

const experiences = [
  {
    category: 'Leadership',
    role: 'Executive Member',
    organization: 'JUST Career Club',
    period: '2023-2024',
    detail:
      'Coordinated workshops, seminars, and student engagement activities focused on professional development and career readiness.',
  },
  {
    category: 'Project Work',
    role: 'Project Contributor',
    organization: 'Jashore Light Engineering Standardization & Branding Project',
    period: 'Project Contribution',
    detail:
      'Contributed to product standardization and branding activities for light engineering development initiatives.',
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
            <span className="brand-copy">
              <strong>Mahbub Hassan Siam</strong>
              <small>Industrial Engineering Portfolio</small>
            </span>
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
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-badge">Industrial & Production Engineering Graduate</span>
              <h1>Mahbub Hassan Siam</h1>
              <p className="hero-subtitle">
                Lean manufacturing, process optimization, production systems,
                quality assurance, and data-driven industrial decision-making.
              </p>
              <p className="hero-summary">
                A motivated IPE graduate focused on improving production
                performance through practical engineering methods, structured
                analysis, and smart manufacturing concepts.
              </p>

              <div className="hero-tags" aria-label="Professional focus areas">
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
                  aria-label="Download Mahbub Hassan Siam CV"
                >
                  Download CV
                </a>
              </div>
            </div>

            <aside className="profile-card" aria-label="Professional profile summary">
              <div className="profile-image">
                <img
                  src="/portfolio/siam-professional-portrait.jpeg"
                  alt="Mahbub Hassan Siam professional portrait"
                />
              </div>
              <div className="profile-info-grid">
                {profileHighlights.map(([title, detail]) => (
                  <div className="profile-info" key={title}>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-anchor" id="about">
          <div className="container">
            <SectionHeader label="About" title="A process-minded engineering graduate">
              Mahbub Hassan Siam is an Industrial & Production Engineering graduate
              from Jashore University of Science and Technology with knowledge in
              lean manufacturing, production systems, process optimization, quality
              assurance, and data-driven decision-making.
            </SectionHeader>

            <div className="about-panel">
              <p>
                His professional interests center on making production operations
                more measurable, reliable, and efficient through structured
                improvement methods, production planning, quality tools, technical
                documentation, and smart manufacturing ideas.
              </p>
              <div className="stats-grid">
                {aboutStats.map(([title, detail]) => (
                  <article className="stat-card" key={title}>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted section-anchor" id="education">
          <div className="container">
            <SectionHeader label="Education" title="Academic background">
              A structured academic foundation in industrial engineering, science,
              and analytical problem-solving.
            </SectionHeader>

            <div className="education-timeline">
              {education.map((item) => (
                <article className="education-card" key={item.degree}>
                  <div className="timeline-dot" aria-hidden="true"></div>
                  <div>
                    <span>{item.period}</span>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                  </div>
                  <strong>{item.result}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-anchor" id="skills">
          <div className="container">
            <SectionHeader label="Skills" title="Skills for production and process improvement">
              Organized capabilities across industrial engineering, production
              quality, analysis, documentation, and team collaboration.
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
          </div>
        </section>

        <section className="section section-muted section-anchor" id="certifications">
          <div className="container">
            <SectionHeader label="Certifications" title="Industry training and attachments">
              Training exposure connected to garment technology, lean manufacturing,
              industrial attachment, and project-based learning.
            </SectionHeader>

            <div className="cert-grid">
              {certifications.map((cert) => (
                <article className="cert-card" key={`${cert.issuer}-${cert.title}`}>
                  <span>{cert.type}</span>
                  <h3>{cert.title}</h3>
                  <strong>{cert.issuer}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-anchor research-section" id="research">
          <div className="container">
            <SectionHeader label="Research & Publications" title="Applied research for intelligent industry">
              Academic work connecting machine learning, computer vision, digital
              twins, and predictive maintenance with practical industrial problems.
            </SectionHeader>

            <div className="research-grid">
              {research.map((item) => (
                <article className="research-card" key={item.title}>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <div className="research-tags">
                    {item.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted section-anchor" id="experience">
          <div className="container">
            <SectionHeader label="Leadership / Experience" title="Professional development and project work">
              Leadership and project contribution experience with student
              engagement, coordination, standardization, and branding activities.
            </SectionHeader>

            <div className="experience-grid">
              {experiences.map((item) => (
                <article className="experience-card" key={item.role}>
                  <div className="experience-meta">
                    <span>{item.category}</span>
                    <small>{item.period}</small>
                  </div>
                  <h3>{item.role}</h3>
                  <strong>{item.organization}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-anchor" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">Contact</span>
              <h2>Available for industrial engineering, production, quality, and process improvement roles.</h2>
              <p>
                For hiring conversations, research discussions, or professional
                opportunities, reach out directly by email or phone.
              </p>
              <div className="contact-tags" aria-label="Open to role categories">
                <span>Production Engineering</span>
                <span>Quality Assurance</span>
                <span>Process Improvement</span>
              </div>
            </div>

            <address className="contact-card" aria-label="Contact information">
              <div className="contact-card-header">
                <span>Let's Connect</span>
                <strong>Response-ready contact</strong>
              </div>
              <a className="contact-item" href="mailto:cnsiam787@gmail.com">
                <span>Email</span>
                <strong>cnsiam787@gmail.com</strong>
              </a>
              <a className="contact-item" href="tel:+8801304681741">
                <span>Phone</span>
                <strong>+88 01304681741</strong>
              </a>
              <div className="contact-item">
                <span>Location</span>
                <strong>Mirpur-10, Dhaka</strong>
              </div>
              <a className="contact-cta" href="mailto:cnsiam787@gmail.com">
                Send Email
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>Mahbub Hassan Siam</strong>
            <span>Industrial & Production Engineering Graduate</span>
          </div>
          <p>(c) 2026 Mahbub Hassan Siam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
