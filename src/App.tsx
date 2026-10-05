import { useMemo, useState } from "react";
import logo from "./assets/logo.PNG";
import resume from "./assets/Resume_Annapareddy_2026.pdf";
import "./App.scss";

type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  stack: string[];
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  link: string;
};

const experience: Experience[] = [
  {
    title: "Full Stack Engineer",
    company: "Lockheed Martin",
    period: "Apr 2025 – Present",
    bullets: [
      "Built a dashboard in React with a Go REST API backend for one-click VM deployment with VM monitoring and service health tracking; cut deployment time from ~30 minutes to 15.",
      "Shipped a responsive storefront built in Reactbacked by a Golang and PostgreSQL.",
      "Extended a customer Angular Application with a responsive theme system and AI-compatible theme generator, replacing hardcoded styles with reusable theming components.",
    ],
    stack: [
      "Go",
      "TypeScript",
      "React",
      "Redux",
      "Angular",
      "PostgreSQL",
      "Keycloak",
      "Kubernetes",
      "Helm",
      "GitLab CI/CD",
      "Ansible",
      "Figma",
    ],
  },
  {
    title: "DevSecOps Engineer",
    company: "Lockheed Martin",
    period: "Jan 2024 – Mar 2025",
    bullets: [
      "Prototyped a ServiceNow onboarding flow designed in figma that standardized approvals and reduced onboarding overhead by about a day.",
      "Built Django dashboards for VM status in Openstack",
      "Automated recovery across Jenkins, Gerrit, and Artifactory for a 500+ developer environment via bash scripts.",
      "Managed Rancher deployments across multiple Kubernetes clusters in an offline environment using approved registries and Helm charts.",
    ],
    stack: [
      "Python",
      "Django",
      "Ansible",
      "Bash",
      "OpenStack",
      "Kubernetes",
      "Rancher",
      "Jenkins",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    period: "May 2021 – Oct 2022",
    bullets: [
      "Developed JavaFX utilities for sensor-data annotation and maintenance issue detection used by 50+ team members.",
    ],
    stack: ["Java", "JavaFX"],
  },
];

const projects: Project[] = [
  {
    name: "Guideroom",
    description:
      "Web app that rates room accessibility from iPad LiDAR scans, using point-cloud algorithms to detect floors, count stairs, and analyze surfaces.",
    tags: ["React", "Flask", "Open3D", "Hackathon"],
    link: "https://devpost.com/software/guideroom",
  },
  {
    name: "Study Buddy",
    description:
      "Deployed web app for students to form study groups and schedule meetings.",
    tags: ["Django", "PostgreSQL", "AWS", "Course project"],
    link: "https://github.com/kavyarachita/studdy-buddy-s22",
  },
  {
    name: "Janko Whiteboard",
    description:
      "Real-time collaborative whiteboard with live chat and PNG export, deployed on Heroku.",
    tags: ["Django Channels", "WebSockets", "Redis", "Hackathon"],
    link: "https://devpost.com/software/janko-collaborative-whiteboard",
  },
];

const skills = {
  Languages: [
    "Java",
    "Go",
    "TypeScript",
    "JavaScript",
    "Python",
    "Bash",
    "SQL",
  ],
  Frontend: ["React", "Redux", "Angular", "HTML", "CSS/SCSS"],
  Backend: ["REST APIs", "Django", "PostgreSQL", "Keycloak"],
  Infrastructure: [
    "Kubernetes",
    "Docker",
    "Helm",
    "Ansible",
    "GitLab CI/CD",
    "Rancher",
  ],
  Other: ["Git", "Figma", "AI-assisted development"],
};

const hobbies = [
  {
    title: "Rock climbing",
    detail:
      "Love to boulder with friends. I can only climb up to v4s, for now :)",
    accent: "red",
  },
  {
    title: "Arts & crafts",
    detail:
      "Drawing, sewing, and crafting. Ask me about my cosplays! I made a 6 foot tall hammer this summer :D",
    accent: "blue",
  },
  {
    title: "Tea-lover",
    detail:
      "Love me a matcha latte and new tea leaves. Favorite Tea: Jasmine",
    accent: "yellow",
  },
  {
    title: "Gym",
    detail:
      "Got my first pull up recently and started running to get my 10-minute mile.",
    accent: "red",
  },
  {
    title: "Games",
    detail:
      "Current plays: Celeste (in the final room of Farewell) and Minecraft. Next Plays: Octopath Traveler 2 and Tears of the Kingdom.",
    accent: "blue",
  },
  {
    title: "Local foodie",
    detail:
      "Current Favorites: Mumbai Central Indian Fare (Falls Church, VA) and Seven Tea House (Leesburg, VA)",
    accent: "yellow",
  },
];

const PORTFOLIO_PASSWORD = (import.meta.env.VITE_PORTFOLIO_PASSWORD ?? "").trim();
const PORTFOLIO_LOCKOUT_ENABLED =
  (import.meta.env.VITE_PORTFOLIO_LOCKOUT_ENABLED ?? "false").trim() === "true";
const PORTFOLIO_ACCESS_KEY = "portfolio-access";
const PORTFOLIO_ACCESS_GRANTED = "granted";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    if (!PORTFOLIO_LOCKOUT_ENABLED) {
      return true;
    }

    if (!PORTFOLIO_PASSWORD) {
      return false;
    }

    return (
      window.localStorage.getItem(PORTFOLIO_ACCESS_KEY) ===
      PORTFOLIO_ACCESS_GRANTED
    );
  });

  const lightPalette = {
    bg: "#ffffff",
    panel: "#f7f7f7",
    panelAlt: "#f2f2f2",
    surface: "#ffffff",
    surfaceSoft: "#f6f9ff",
    text: "#1f2937",
    muted: "#586578",
    border: "rgba(15, 23, 42, 0.1)",
    cardRing: "rgba(15, 23, 42, 0.08)",
    red: "#f34e4e",
    yellow: "#fcc32f",
    blue: "#3f8cff",
    black: "#252525",
    redSoft: "#ffd4d4",
    yellowSoft: "#fff0cb",
    blueSoft: "#cce0ff",
    redDeep: "#8d1f1f",
    yellowDeep: "#8b5a12",
    blueDeep: "#1d4f9f",
    redAccent: "#c62828",
    white: "#ffffff",
    grey: "#999999",
    textRed: "#8d1f1f",
    textYellow: "#8b5a12",
    textBlue: "#1d4f9f",
    eyebrowRed: "#c62828",
    badgeBg: "rgba(255, 204, 74, 0.28)",
    badgeText: "#6d3d00",
    heroCardStart: "rgba(255, 244, 190, 0.8)",
    heroCardEnd: "rgba(255, 255, 255, 0.96)",
    heroCardAccent1: "rgba(255, 107, 92, 0.18)",
    heroCardAccent2: "rgba(74, 132, 255, 0.16)",
    cardLinkBg: "rgba(255, 255, 255, 0.72)",
    cardLinkBorder: "rgba(37, 37, 37, 0.08)",
    primaryBg: "#3f8cff",
    primaryText: "#ffffff",
  };

  const darkPalette = {
    bg: "#111827",
    panel: "#1f2937",
    panelAlt: "#0f172a",
    surface: "#111827",
    surfaceSoft: "#1f2937",
    text: "#f8fafc",
    muted: "#d3d6db",
    border: "rgba(255,255,255,0.09)",
    cardRing: "rgba(255,255,255,0.08)",
    red: "#f34e4e",
    yellow: "#fcc32f",
    blue: "#3f8cff",
    black: "#252525",
    redSoft: "#ffd4d4",
    yellowSoft: "#fff0cb",
    blueSoft: "#cce0ff",
    redDeep: "#a71919",
    yellowDeep: "#bb681a",
    blueDeep: "#103771",
    redAccent: "#ff8a80",
    white: "#ffffff",
    grey: "#999999",
    textRed: "#ffd4d4",
    textYellow: "#fff0cb",
    textBlue: "#cce0ff",
    eyebrowRed: "#ff8a80",
    badgeBg: "rgba(255, 180, 71, 0.2)",
    badgeText: "#ffe29a",
    heroCardStart: "rgba(34, 50, 74, 0.96)",
    heroCardEnd: "rgba(17, 24, 39, 0.98)",
    heroCardAccent1: "rgba(255, 107, 92, 0.23)",
    heroCardAccent2: "rgba(74, 132, 255, 0.2)",
    cardLinkBg: "rgba(15, 23, 42, 0.7)",
    cardLinkBorder: "rgba(255,255,255,0.1)",
    primaryBg: "#3f8cff",
    primaryText: "#ffffff",
  };

  const accent = useMemo(() => {
    const palette = darkMode ? darkPalette : lightPalette;

    return {
      "--bg": palette.bg,
      "--panel": palette.panel,
      "--panel-alt": palette.panelAlt,
      "--surface": palette.surface,
      "--surface-soft": palette.surfaceSoft,
      "--text": palette.text,
      "--muted": palette.muted,
      "--border": palette.border,
      "--card-ring": palette.cardRing,
      "--red": palette.red,
      "--yellow": palette.yellow,
      "--blue": palette.blue,
      "--black": palette.black,
      "--light-red": palette.redSoft,
      "--light-yellow": palette.yellowSoft,
      "--light-blue": palette.blueSoft,
      "--dark-red": palette.redDeep,
      "--dark-yellow": palette.yellowDeep,
      "--dark-blue": palette.blueDeep,
      "--white": palette.white,
      "--grey": palette.grey,
      "--text-red": palette.textRed,
      "--text-yellow": palette.textYellow,
      "--text-blue": palette.textBlue,
      "--eyebrow-red": palette.eyebrowRed,
      "--badge-bg": palette.badgeBg,
      "--badge-text": palette.badgeText,
      "--hero-card-bg-start": palette.heroCardStart,
      "--hero-card-bg-end": palette.heroCardEnd,
      "--hero-card-accent-1": palette.heroCardAccent1,
      "--hero-card-accent-2": palette.heroCardAccent2,
      "--card-link-bg": palette.cardLinkBg,
      "--card-link-border": palette.cardLinkBorder,
      "--primary-bg": palette.primaryBg,
      "--primary-text": palette.primaryText,
    };
  }, [darkMode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!PORTFOLIO_LOCKOUT_ENABLED) {
      setIsUnlocked(true);
      setError("");
      return;
    }

    if (!PORTFOLIO_PASSWORD) {
      setError("Portfolio password is not configured.");
      return;
    }

    if (enteredPassword === PORTFOLIO_PASSWORD) {
      window.localStorage.setItem(PORTFOLIO_ACCESS_KEY, PORTFOLIO_ACCESS_GRANTED);
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  const handleLogout = () => {
    window.localStorage.removeItem(PORTFOLIO_ACCESS_KEY);
    setIsUnlocked(false);
    setEnteredPassword("");
    setError("");
  };

  if (!isUnlocked) {
    return (
      <div
        className="portfolio-shell password-shell"
        style={accent as React.CSSProperties}
      >
        <div className="password-card">
          <img
            className="brand-logo password-logo"
            src={logo}
            alt="Kavya Annapareddy logo"
          />
          <h1>Portfolio access</h1>
          <p>
            This portfolio is password protected. Please enter the access code
            to continue.
          </p>
          <form onSubmit={handleSubmit} className="password-form">
            <label htmlFor="portfolio-password" className="sr-only">
              Password
            </label>
            <input
              id="portfolio-password"
              type="password"
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
            />
            {error ? <span className="password-error">{error}</span> : null}
            <button type="submit">Unlock portfolio</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      id="top"
      className={`portfolio-shell ${darkMode ? "dark" : ""}`.trim()}
      style={accent as React.CSSProperties}
    >
      <header className="topbar">
        <div className="brand-wrap">
          <img className="brand-logo" src={logo} alt="Kavya Annapareddy logo" />
          <span>Kavya Annapareddy</span>
        </div>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#hobbies">Hobbies</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <span className="toggle-icon" aria-hidden="true">
              {darkMode ? (
                <svg viewBox="0 0 24 24" className="sun-icon">
                  <circle cx="12" cy="12" r="4.4" />
                  <g>
                    <path d="M12 1.8v2.4M12 19.8v2.4M4.93 4.93l1.7 1.7M17.37 17.37l1.7 1.7M1.8 12h2.4M19.8 12h2.4M4.93 19.07l1.7-1.7M17.37 6.63l1.7-1.7" />
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="moon-icon">
                  <path d="M20.4 14.8A8.7 8.7 0 0 1 9.3 3.7a8.8 8.8 0 1 0 11.1 11.1Z" />
                </svg>
              )}
            </span>
            <span className="toggle-label">{darkMode ? "Light" : "Dark"}</span>
          </button>
          <button className="logout-btn" type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              Full stack engineer • UX-minded builder
            </span>
            <h1>Designing and developing for communities.</h1>
            <p>
              I’m a full stack engineer with a background in UX design, devops,
              and software delivery. I build thoughtful, production-ready
              systems that turn complex workflows into simple, usable
              experiences.
            </p>
            <div className="cta-row">
              <a href="#experience" className="primary-btn">
                View experience
              </a>
              <a href="#projects" className="secondary-btn">
                See projects
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-badge">Let’s connect!</div>
            <div className="profile-block">
              <img
                className="profile-portrait"
                src={logo}
                alt="Kavya Annapareddy logo"
              />
              <div>
                <h2>Kavya Annapareddy</h2>
                <p>Haymarket, VA</p>
              </div>
            </div>
            <div className="contact-list" aria-label="Contact links">
              <a href="mailto:kavyarachita@gmail.com" className="contact-link" aria-label="Email Kavya">
                <span className="contact-icon" aria-hidden="true">✉</span>
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/kavya-annapareddy-0209021b5" target="_blank" rel="noreferrer" className="contact-link" aria-label="LinkedIn profile">
                <span className="contact-icon" aria-hidden="true">in</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/kavyarachita" target="_blank" rel="noreferrer" className="contact-link" aria-label="GitHub profile">
                <span className="contact-icon" aria-hidden="true">gh</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-heading experience-heading">
            <div className="heading-copy">
              <span className="eyebrow">Experience</span>
              <h2>Where I’ve built and shipped.</h2>
            </div>
            <a className="resume-download" href={resume} download>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v10.5m0 0 4-4m-4 4-4-4M4 18.5v1.5h16v-1.5" />
              </svg>
              <span>Resume</span>
            </a>
          </div>

          <div className="timeline">
            {experience.map((job) => (
              <article key={`${job.company}-${job.title}`} className="job-card">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="company-line">{job.company}</p>
                  </div>
                  <span className="period-pill">{job.period}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Selected Work.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-topline">
                  <h3>{project.name}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link" aria-label={`Open ${project.name} project`}>
                    Link
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag muted-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>My tech stack.</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <h3>{category}</h3>
                <div className="tag-row">
                  {items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="hobbies" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Hobbies</span>
            <h2>When I’m AFK</h2>
          </div>

          <div className="hobby-grid">
            {hobbies.map((hobby) => (
              <article
                key={hobby.title}
                className={`hobby-card hobby-card-${hobby.accent}`}
              >
                <div className="hobby-header">
                  <span className="hobby-icon" aria-hidden="true">
                    ✦
                  </span>
                  <h3>{hobby.title}</h3>
                </div>
                <p>{hobby.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block education">
          <div className="section-heading">
            <span className="eyebrow">Education</span>
            <h2>Academic background.</h2>
          </div>
          <div className="education-card">
            <div>
              <h3>M.Eng, Computer Science</h3>
              <p>Virginia Tech</p>
            </div>
            <span>May 2026</span>
          </div>
          <div className="education-card">
            <div>
              <h3>B.S., Computer Science</h3>
              <p>University of Virginia</p>
            </div>
            <span>Dec 2023</span>
          </div>
        </section>

        <div className="back-to-top-wrap">
          <a href="#top" className="back-to-top" aria-label="Back to top">
            <span>Back to top</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
