// ========================================================
// 1. Core Application Engine Architecture
// ========================================================
const App = {
  init() {
    this.ui.renderNav();
    this.ui.renderHome();
    this.ui.renderAbout();
    this.ui.renderSkills();
    this.ui.renderProjects();
    this.ui.renderExperience();
    this.ui.renderAchievements();
    this.ui.renderCertifications();
    this.ui.renderEducation();
    this.ui.renderContact();
    this.ui.renderFooter();
    
    this.animations.init();
    this.animations.startTerminalSimulation();
  },
  ui: {
    renderNav() {
      const nav = document.getElementById("nav");
      const routes = [
        "home","about","skills","projects","experience","achievements","certifications","education","contact"
      ];
      nav.innerHTML = `
        <nav class="glass-nav">
          <div class="logo">JISHNU TEJ</div>
          <div class="links">
            ${routes.map(r => 
              `<a href="#${r}" id="nav-${r}">${r.charAt(0).toUpperCase() + r.slice(1)}</a>`
            ).join("")}
          </div>
        </nav>
      `;

      document.querySelectorAll("nav.glass-nav .links a").forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          const container = document.getElementById("scroll-container");
          if (targetSection && container) {
            container.scrollTo({
              top: targetSection.offsetTop,
              behavior: "smooth"
            });
          }
        });
      });
    },
    renderHome() {
      const p = PortfolioData.personal;
      document.getElementById("home").innerHTML = `
        <div class="card">
          <div class="hero-split-layout">
            <div class="hero-left">
              <h3 class="subtitle">WELCOME TO MY PORTFOLIO</h3>
              <div class="name-stack">
                <span class="name-top">Rasamsetti</span>
                <span class="name-bottom">Jishnu Tej</span>
              </div>
              <p class="title">${p.title}</p>
              <p class="intro">${p.intro}</p>
              
              <div class="hero-action-row">
                <a href="#contact" class="cta-primary"><i class="fas fa-paper-plane"></i> Get In Touch</a>
                <div class="hero-socials">
                  <a href="${PortfolioData.contact.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                  <a href="${PortfolioData.contact.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                  <a href="https://leetcode.com" target="_blank" title="LeetCode"><i class="fas fa-code"></i></a>
                  <a href="https://hackerrank.com" target="_blank" title="HackerRank"><i class="fab fa-hackerrank"></i></a>
                </div>
              </div>
            </div>
            
            <div class="hero-right">
              <div class="terminal-window">
                <div class="terminal-header">
                  <div class="terminal-buttons">
                    <span class="t-btn t-close"></span>
                    <span class="t-btn t-minimize"></span>
                    <span class="t-btn t-maximize"></span>
                  </div>
                  <div class="terminal-title">zsh — jishnu@macbook</div>
                </div>
                <div class="terminal-body" id="terminal-log"></div>
              </div>
            </div>
          </div>
          <div class="scroll-message">⬇ Scroll Grid</div>
        </div>
      `;
      
      const cta = document.querySelector(".hero-left .cta-primary");
      if (cta) {
        cta.addEventListener("click", e => {
          e.preventDefault();
          const target = document.getElementById("contact");
          const container = document.getElementById("scroll-container");
          if (target && container) {
            container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
          }
        });
      }
    },
    renderAbout() {
      const about = PortfolioData.personal;
      const metrics = PortfolioData.metrics;
      document.getElementById("about").innerHTML = `
        <div class="card about-container" style="justify-content: space-between; gap: 1.5rem; height: auto; min-height: 85%;">
          <h2>About Me</h2>
          
          <div class="about-split-frame">
            
            <div class="about-narrative-panel">
              <p class="about-core-text">
                I am a Computer Science Engineering student at Pragati Engineering College. 
                My focus is on building software that is useful, well-structured, and maintainable. 
                I actively practice Data Structures and Algorithms to sharpen my problem-solving instincts and apply that logical thinking when architecting real-world projects.
              </p>
              <p class="about-sub-text">
                I love exploring system level logic, cloud engineering infrastructure, and building responsive dynamic systems that solve daily engineering constraints.
              </p>
            </div>
            
            <div class="about-pillars-panel">
              <div class="about-pillar-item">
                <div class="pillar-icon"><i class="fas fa-brain"></i></div>
                <div class="pillar-info">
                  <h4>Problem Solving & DSA</h4>
                  <p>Sharpening continuous logic and technical troubleshooting patterns daily.</p>
                </div>
              </div>
              
              <div class="about-pillar-item">
                <div class="pillar-icon"><i class="fas fa-cloud"></i></div>
                <div class="pillar-info">
                  <h4>Cloud Architecture</h4>
                  <p>Certified practitioner knowledge across AWS, Azure, and Google platforms.</p>
                </div>
              </div>
              
              <div class="about-pillar-item">
                <div class="pillar-icon"><i class="fas fa-leaf"></i></div>
                <div class="pillar-info">
                  <h4>Sustainable Engineering</h4>
                  <p>Integrating eco-conscious tech and automated efficiency constraints via green skills.</p>
                </div>
              </div>
            </div>

          </div>
          
          <div class="about-stat-dock">
            <div class="stat-pill">
              <i class="fas fa-graduation-cap"></i>
              <span>CGPA: <strong>${metrics.cgpa}</strong></span>
            </div>
            <div class="stat-pill">
              <i class="fas fa-laptop-code"></i>
              <span><strong>${metrics.projects}</strong> Projects</span>
            </div>
            <div class="stat-pill">
              <i class="fas fa-briefcase"></i>
              <span><strong>${metrics.internships}</strong> Internships</span>
            </div>
            <div class="stat-pill">
              <i class="fas fa-certificate"></i>
              <span><strong>${metrics.certifications}</strong> Certifications</span>
            </div>
          </div>

        </div>
      `;
    },
    renderSkills() {
      const s = PortfolioData.skills;
      document.getElementById("skills").innerHTML = `
        <div class="card">
          <h2>Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Programming Languages</h3>
              <ul>${s.programming.map(lang => `<li><i class="fas fa-code"></i> ${lang}</li>`).join("")}</ul>
            </div>
            <div class="skill-category">
              <h3>Libraries / Frameworks</h3>
              <ul>${s.librariesFrameworks.map(lib => `<li><i class="fas fa-layer-group"></i> ${lib}</li>`).join("")}</ul>
            </div>
            <div class="skill-category">
              <h3>Tools / Platforms</h3>
              <ul>${s.toolsPlatforms.map(tool => `<li><i class="fas fa-wrench"></i> ${tool}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      `;
    },
    renderProjects() {
      const projects = PortfolioData.projects;
      document.getElementById("projects").innerHTML = `
        <div class="card projects-fixed-card">
          <h2>Featured Projects</h2>
          <div class="project-scroll-grid">
            ${projects.map(p => `
              <div class="clean-project-item">
                <div class="project-upper-block">
                  <div class="project-top-row">
                    <i class="fas fa-folder-open project-icon-glow"></i>
                    <div class="project-mini-socials">
                      ${p.demo ? `<a href="${p.demo}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ""}
                      ${p.github ? `<a href="${p.github}" target="_blank" title="View Code"><i class="fab fa-github"></i></a>` : ""}
                    </div>
                  </div>
                  <h3 class="project-block-title">${p.title}</h3>
                  <p class="project-block-desc">${p.description}</p>
                </div>
                
                <div class="project-lower-block">
                  <div class="project-tech-pills">
                    ${p.tech.map(t => `<span class="tech-pill-item">${t}</span>`).join("")}
                  </div>
                  <div class="project-action-row-buttons">
                    ${p.demo ? `<a href="${p.demo}" target="_blank" class="p-action-btn btn-cyan-glow"><i class="fas fa-play-circle"></i> Live Demo</a>` : ""}
                    ${p.github ? `<a href="${p.github}" target="_blank" class="p-action-btn btn-purple-glow"><i class="fas fa-code"></i> Codebase</a>` : ""}
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    },
    renderExperience() {
      const experiences = PortfolioData.experience;
      document.getElementById("experience").innerHTML = `
        <div class="card experience-master-card">
          <h2>Professional Experience</h2>
          <div class="experience-scroll-grid">
            ${experiences.map(exp => `
              <div class="modern-experience-box">
                
                <div class="exp-header-main">
                  <div class="exp-title-block">
                    <span class="exp-accent-tag"><i class="fas fa-briefcase"></i> Experience</span>
                    <h3 class="exp-role-title">${exp.role || exp.title || "Intern"}</h3>
                    <div class="exp-company-row">
                      <span class="exp-company-name">${exp.company || exp.institution || "Professional Organization"}</span>
                    </div>
                  </div>
                  <div class="exp-date-badge">
                    <i class="far fa-calendar-alt"></i> ${exp.period || exp.duration || "Present"}
                  </div>
                </div>

                <div class="exp-body-content">
                  <p class="exp-description-text">
                    ${exp.description || exp.desc || exp.details || exp.summary || "Technical contribution and project milestone execution."}
                  </p>
                </div>
                
                <div class="exp-footer-matrix">
                  <div class="exp-skill-tags">
                    ${exp.skills ? exp.skills.map(s => `<span class="exp-single-pill">${s}</span>`).join("") : `
                      <span class="exp-single-pill">Core Execution</span>
                      <span class="exp-single-pill">Technical Strategy</span>
                    `}
                  </div>
                </div>

              </div>
            `).join("")}
          </div>
        </div>
      `;
    },
    renderAchievements() {
      // Pulls cleanly from your real portfolio-data.js array of strings
      const achievements = PortfolioData.achievements || [];
      
      // Elegant icons corresponding to your default list order
      const icons = [
        "fas fa-trophy",      // Hackathons
        "fas fa-award",       // Certifications
        "fas fa-users",       // Team Lead
        "fas fa-cubes"        // Projects
      ];

      document.getElementById("achievements").innerHTML = `
        <div class="card achievements-master-card">
          <h2>Milestones & Achievements</h2>
          
          <div class="achievements-dashboard-header">
            <div class="progress-meta-text">
              <span class="meta-label"><i class="fas fa-flag-checkered"></i> Milestone Tracker</span>
              <span class="meta-count">${achievements.length} Core Milestones Reached</span>
            </div>
            <div class="premium-progress-track">
              <div class="premium-progress-bar" style="width: 75%;"></div>
            </div>
          </div>

          <div class="achievements-bento-grid">
            ${achievements.map((milestoneText, index) => `
              <div class="milestone-bento-box">
                <div class="milestone-icon-frame">
                  <i class="${icons[index] || 'fas fa-star'}"></i>
                </div>
                <div class="milestone-info-frame">
                  <p class="milestone-text">${milestoneText}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="achievements-future-note">
            <i class="fas fa-plus-circle"></i> More in future!
          </div>

        </div>
      `;
    },
    renderCertifications() {
      const certs = PortfolioData.certifications;
      document.getElementById("certifications").innerHTML = `
        <div class="card certifications-master-card">
          <h2>Certifications</h2>
          <div class="cert-scroll-grid">
            ${certs.map(c => `
              <div class="cert-card">
                <div class="cert-icon-frame">
                  <i class="fas fa-certificate"></i>
                </div>
                <div class="cert-info">
                  <h3>${c.name}</h3>
                  <p class="cert-issuer">${c.issuer}</p>
                </div>
                <div class="cert-action">
                  <a href="${c.link}" target="_blank" class="cert-btn">
                    <i class="fas fa-external-link-alt"></i> View Certificate
                  </a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    },
    renderEducation() {
      const eduList = PortfolioData.education;
      document.getElementById("education").innerHTML = `
        <div class="card education-master-card">
          <h2>Education Timeline</h2>
          <div class="timeline-container">
            ${eduList.map(edu => `
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i class="${edu.icon}"></i>
                </div>
                <div class="timeline-content">
                  <div class="timeline-meta-row">
                    <span class="timeline-date"><i class="far fa-calendar-alt"></i> ${edu.timeline}</span>
                    ${edu.score ? `<span class="timeline-score"><i class="fas fa-star"></i> ${edu.score}</span>` : ""}
                  </div>
                  <h3>${edu.degree}</h3>
                  <h4>${edu.institution}</h4>
                  <p>${edu.details}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    },
    renderContact() {
      const info = PortfolioData.contact;
      document.getElementById("contact").innerHTML = `
        <div class="card contact-master-card">
          <h2>Get In Touch</h2>
          <div class="contact-split-container">
            
            <div class="contact-info-side">
              <a href="mailto:${info.email}" class="info-card">
                <div class="info-icon"><i class="fas fa-envelope"></i></div>
                <div class="info-text">
                  <span>Email Me</span>
                  <p>${info.email}</p>
                </div>
              </a>
              
              <a href="${info.github}" target="_blank" class="info-card">
                <div class="info-icon"><i class="fab fa-github"></i></div>
                <div class="info-text">
                  <span>GitHub</span>
                  <p>View My Projects</p>
                </div>
              </a>
              
              <a href="${info.linkedin}" target="_blank" class="info-card">
                <div class="info-icon"><i class="fab fa-linkedin-in"></i></div>
                <div class="info-text">
                  <span>LinkedIn</span>
                  <p>Let's Connect</p>
                </div>
              </a>
              
              <div class="info-card static-card">
                <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="info-text">
                  <span>Location</span>
                  <p>${info.location}</p>
                </div>
              </div>
            </div>

            <div class="contact-form-side">
              <form id="portfolio-contact-form" onsubmit="event.preventDefault();">
                <div class="form-group">
                  <input type="text" id="form-name" required placeholder=" ">
                  <label for="form-name">Your Name</label>
                </div>
                <div class="form-group">
                  <input type="email" id="form-email" required placeholder=" ">
                  <label for="form-email">Your Email</label>
                </div>
                <div class="form-group">
                  <textarea id="form-message" required rows="5" placeholder=" "></textarea>
                  <label for="form-message">Your Message</label>
                </div>
                
                <button type="button" class="send-message-btn" onclick="App.ui.handleDirectSubmit()">
                  <span>Send Message</span> <i class="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      `;
    },
    renderFooter() {
      // 1. Clear any duplicate footer if it already exists
      const existingFooter = document.getElementById("portfolio-footer");
      if (existingFooter) existingFooter.remove();

      // 2. Find your primary layout grid wrapper
      // (This is the parent element holding all section cards)
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;
      const mainWrapper = contactSection.parentElement;

      // 3. Create a clean, separate footer block
      const footer = document.createElement("footer");
      footer.id = "portfolio-footer";
      footer.style.cssText = `
        grid-column: 1 / -1;
        width: 100%;
        text-align: center;
        padding: 2.5rem 0 1.5rem 0;
        margin-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        clear: both;
      `;

      footer.innerHTML = `
        <div class="footer-content">
          <p style="margin: 0; font-size: 0.9rem; color: rgba(255, 255, 255, 0.6); font-weight: 500;">
            Rasamsetti Jishnu Tej &copy; 2026
          </p>
          <span style="display: block; font-size: 0.7rem; color: var(--accent, #61DAFB); letter-spacing: 1.5px; text-transform: uppercase; margin-top: 0.4rem; opacity: 0.6;">
            Built with Passion & Code
          </span>
        </div>
      `;

      // 4. Inject it right AFTER the contact section element ends
      contactSection.insertAdjacentElement('afterend', footer);
    },

    async handleDirectSubmit() {
      const nameEl = document.getElementById("form-name");
      const emailEl = document.getElementById("form-email");
      const messageEl = document.getElementById("form-message");
      const button = document.querySelector(".send-message-btn");
      const buttonText = button.querySelector("span");

      if (!nameEl.value || !emailEl.value || !messageEl.value) {
        alert("Please fill out all fields before sending.");
        return;
      }

      const formData = {
        name: nameEl.value,
        email: emailEl.value,
        message: messageEl.value
      };

      try {
        buttonText.textContent = "Sending...";
        button.style.opacity = "0.7";
        const response = await fetch("https://formspree.io/f/xdavqdap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          buttonText.textContent = "Message Sent! ✓";
          nameEl.value = "";
          emailEl.value = "";
          messageEl.value = "";
          
          setTimeout(() => {
            buttonText.textContent = "Send Message";
            button.style.opacity = "1";
          }, 4000);
        } else {
          throw new Error("Formspree response error");
        }
      } catch (error) {
        buttonText.textContent = "Error, try again!";
        setTimeout(() => {
          buttonText.textContent = "Send Message";
          button.style.opacity = "1";
        }, 4000);
      }
    },

    async handleDirectSubmit() {
      const nameEl = document.getElementById("form-name");
      const emailEl = document.getElementById("form-email");
      const messageEl = document.getElementById("form-message");
      const button = document.querySelector(".send-message-btn");
      const buttonText = button.querySelector("span");

      if (!nameEl.value || !emailEl.value || !messageEl.value) {
        alert("Please fill out all fields before sending.");
        return;
      }

      const formData = {
        name: nameEl.value,
        email: emailEl.value,
        message: messageEl.value
      };

      try {
        buttonText.textContent = "Sending...";
        button.style.opacity = "0.7";
        const response = await fetch("https://formspree.io/f/xdavqdap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          buttonText.textContent = "Message Sent! ✓";
          nameEl.value = "";
          emailEl.value = "";
          messageEl.value = "";
          
          setTimeout(() => {
            buttonText.textContent = "Send Message";
            button.style.opacity = "1";
          }, 4000);
        } else {
          throw new Error("Submission Error");
        }
      } catch (error) {
        buttonText.textContent = "Error, try again!";
        setTimeout(() => {
          buttonText.textContent = "Send Message";
          button.style.opacity = "1";
        }, 4000);
      }
      
    },
    async handleDirectSubmit() {
      const nameEl = document.getElementById("form-name");
      const emailEl = document.getElementById("form-email");
      const messageEl = document.getElementById("form-message");
      const button = document.querySelector(".send-message-btn");
      const buttonText = button.querySelector("span");

      // Stop submission if form validation fails
      if (!nameEl.value || !emailEl.value || !messageEl.value) {
        alert("Please fill out all fields before sending.");
        return;
      }

      const formData = {
        name: nameEl.value,
        email: emailEl.value,
        message: messageEl.value
      };

      try {
        buttonText.textContent = "Sending...";
        button.style.opacity = "0.7";
        const response = await fetch("https://formspree.io/f/xdavqdap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          buttonText.textContent = "Message Sent! ✓";
          
          // Clear text input controls safely
          nameEl.value = "";
          emailEl.value = "";
          messageEl.value = "";
          
          setTimeout(() => {
            buttonText.textContent = "Send Message";
            button.style.opacity = "1";
          }, 4000);
        } else {
          throw new Error("Formspree response not OK");
        }
      } catch (error) {
        buttonText.textContent = "Error, try again!";
        setTimeout(() => {
          buttonText.textContent = "Send Message";
          button.style.opacity = "1";
        }, 4000);
      }
    },
    setupFormSubmission() {
      const form = document.getElementById("portfolio-contact-form");
      if (!form) return;

      form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Stop native redirect

        const button = form.querySelector(".send-message-btn");
        const buttonText = button.querySelector("span");
        const originalText = buttonText.textContent;

        // Collect inputs into a clean valid JSON object
        const formData = {
          name: document.getElementById("form-name").value,
          email: document.getElementById("form-email").value,
          message: document.getElementById("form-message").value
        };

        try {
          buttonText.textContent = "Sending...";
          button.style.opacity = "0.7";

          // Send data as application/json to Formspree
          const response = await fetch("https://formspree.io/f/xdavqdap", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData) // Convert to valid JSON string
          });

          if (response.ok) {
            buttonText.textContent = "Message Sent! ✓";
            form.reset(); // Clear input boxes
            
            // Revert button back after 4 seconds
            setTimeout(() => {
              buttonText.textContent = originalText;
              button.style.opacity = "1";
            }, 4000);
          } else {
            throw new Error("Form submission failed");
          }
        } catch (error) {
          buttonText.textContent = "Error, try again!";
          setTimeout(() => {
            buttonText.textContent = originalText;
            button.style.opacity = "1";
          }, 4000);
        }
      });
    }
  },
  animations: {
    init() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.querySelectorAll(".route").forEach(r => r.classList.remove("active"));
            entry.target.classList.add("active");
            
            App.ui.highlightNav("#" + entry.target.id);

            if (entry.target.id === "projects") {
              document.documentElement.style.setProperty('--accent', '#b645f8');
              document.documentElement.style.setProperty('--accent2', '#7416c1');
            } 
            else if (entry.target.id === "experience") {
              document.documentElement.style.setProperty('--accent', '#ff3c3c');
              document.documentElement.style.setProperty('--accent2', '#e84393');
            }else if (entry.target.id === "achievements") {
              document.documentElement.style.setProperty('--accent', '#00ff9d');
              document.documentElement.style.setProperty('--accent2', '#e84393');
            }else if (entry.target.id === "certifications") {
              document.documentElement.style.setProperty('--accent', '#4da6ff');
              document.documentElement.style.setProperty('--accent2', '#cc66ff');
            }else if (entry.target.id === "education") {
              document.documentElement.style.setProperty('--accent', '#bd6dec');
              document.documentElement.style.setProperty('--accent2', '#3336f4');
            }else if (entry.target.id === "contact") {
              document.documentElement.style.setProperty('--accent', '#4da6ff');
              document.documentElement.style.setProperty('--accent2', '#cc66ff');
            } else if (entry.target.id === "skills") {
              document.documentElement.style.setProperty('--accent', '#ffeaa7');
              document.documentElement.style.setProperty('--accent2', '#fdcb6e');
            } else if (entry.target.id === "about") {
              document.documentElement.style.setProperty('--accent', '#5468ff');
              document.documentElement.style.setProperty('--accent2', '#00ffcc');
            } else {
              document.documentElement.style.setProperty('--accent', '#4da6ff');
              document.documentElement.style.setProperty('--accent2', '#cc66ff');
            }

            if (entry.target.id === "achievements") {
              const progressFill = entry.target.querySelector(".achievement-progress-fill");
              if (progressFill) {
                progressFill.style.width = progressFill.getAttribute("data-width");
              }
            }
          }
        });
      }, { threshold: 0.2 });

      document.querySelectorAll(".route").forEach(sec => observer.observe(sec));
    },
    
    startTerminalSimulation() {
      const log = document.getElementById("terminal-log");
      if (!log) return;

      const terminalSteps = [
        { type: "cmd", text: "cat student_info.json" },
        { type: "output", text: JSON.stringify({ name: "R. Jishnu Tej", status: "3rd Year CSE", cgpa: "8.0" }, null, 2) },
        { type: "cmd", text: "git check-certifications" },
        { type: "output", text: "✔ AWS Cloud Certified\n✔ Google TensorFlow Certified\n✔ Microsoft Azure Fundamentals" },
        { type: "cmd", text: "npm test --dsa-readiness" },
        { type: "output", text: "🚀 All logical problem-solving test cases passed successfully." }
      ];

      let stepIndex = 0;

      function renderNextStep() {
        if (stepIndex >= terminalSteps.length) {
          setTimeout(() => {
            log.innerHTML = "";
            stepIndex = 0;
            renderNextStep();
          }, 5000);
          return;
        }

        const current = terminalSteps[stepIndex];
        const line = document.createElement("div");

        if (current.type === "cmd") {
          line.innerHTML = `<span class="t-prompt">~ $</span> <span class="t-cmd"></span>`;
          log.appendChild(line);
          
          let charIdx = 0;
          const cmdSpan = line.querySelector(".t-cmd");
          const typer = setInterval(() => {
            if (charIdx < current.text.length) {
              cmdSpan.textContent += current.text.charAt(charIdx);
              charIdx++;
            } else {
              clearInterval(typer);
              stepIndex++;
              setTimeout(renderNextStep, 700);
            }
          }, 40);
        } else {
          line.className = "t-output";
          line.style.whiteSpace = "pre-wrap";
          line.textContent = current.text;
          log.appendChild(line);
          stepIndex++;
          setTimeout(renderNextStep, 1600);
        }
      }

      renderNextStep();
    }
  }
};

App.ui.highlightNav = function(route) {
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  const navLink = document.querySelector(`#nav-${route.replace("#", "")}`);
  if (navLink) navLink.classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();

  const btn = document.getElementById("backToTop");
  const container = document.getElementById("scroll-container");

  if (btn && container) {
    btn.addEventListener("click", () => {
      container.scrollTo({ top: 0, behavior: "smooth" });
    });

    container.addEventListener("scroll", () => {
      if (container.scrollTop > window.innerHeight * 0.5) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    });
  }
});
