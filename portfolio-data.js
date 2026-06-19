// portfolio-data.js
const PortfolioData = {
  personal: {
    name: "Rasamsetti Jishnu Tej",
    title: "Computer Science Student ",
    intro: "Highly motivated second-year Computer Engineering student seeking to leverage strong academic performance and a passion for cloud, networking, automation and cybersecurity. Eager to apply learned skills in real-world projects and collaborative environments",
    // ADD THIS NEW LINE BELOW:
    aboutText: "I am a Computer Science Engineering student at Pragati Engineering College. My focus is on building software that is useful, well-structured, and maintainable. I actively practice Data Structures and Algorithms to sharpen my problem-solving instincts and apply that logic when architecting real-world projects."
  },

  metrics: {
    cgpa: "8.0",
    projects: 4,
    internships: 2,
    certifications: 4
  },

  skills: {
    programming: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript"],
    librariesFrameworks: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "React"],
    toolsPlatforms: ["GitHub", "VSCode"]
  },

  projects: [
    {
      title: "Cyberbullying Detection",
      description: "ML project to detect harmful online content.",
      tech: ["Python", "TensorFlow", "NLP"],
      github: "https://github.com/jishnutej1804/Cyberbullying-Detection"
    },
    {
      title: "Process Scheduler Simulator-",
      description: "Simulator demonstrating FCFS, SJF (non-preemptive & preemptive), Round Robin, and Priority scheduling with metrics and Gantt chart visualization",
      tech: ["Python", "numpy","pandas", "matplotlib"],
      github: "https://github.com/jishnutej1804/Visitor-Gate-Pass-Generator"
    },
    {
      title: "QR Code Generator",
      description: "Designed and implemented a QR Code Generator in Python with focus on accuracy and reliability.",
      tech: ["Python", "qrcode lib"],
      github: "https://github.com/jishnutej1804/QR_code_generator"
    },
    {
      title: "Visitor Gate Pass Generator",
      description: "Generates passes automatically for visitors",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://jishnutej1804.github.io/Visitor-Gate-Pass-Generator/",
      github: "https://github.com/jishnutej1804/Visitor-Gate-Pass-Generator"
    }
  ],

  experience: [
    {
      role: "1M1B Green Intern(Batch 7)",
      company: "1M1B partnership with AICTE and supported by Salesforce",
      duration: "Feb 2026 to Mar 2026",
      details: "The internship included 30 learning hours focused on Developing a Sustainable Mindset and 30 hours of Live Project Work."
    },
    {
      role: "Quantum Computing Intern",
      company: "Council for Skills and Competencies (CSC India) under AICTE and APSCHE",
      duration: "May 2026 to July 2026",
      details: "Completed a two-month virtual internship focused on Quantum Computing, gaining exposure to advanced computational concepts and practical applications under CSC Indias ISO certified program."
    }
  ],

  achievements: [
    "Participated in multiple college hackathons",
    "Completed multiple certifications",
    "Lead a student project team",
    "Built some student-level projects"
  ],

  certifications: [
    {
      name: "1M1B Green Internship Global Certification (Batch 7)",
      issuer: "1M1B partnership with AICTE and supported by Salesforce",
      link: "https://drive.google.com/file/d/1QF1l5n6XGtQ3hObl-qnSD9x3HuitVRD6/view" // Replace with your actual credential URL
    },
    {
      name: "Google Android Developer",
      issuer: "Google",
      link: "https://drive.google.com/file/d/1B4dCnpVKQlCaE5c89Ni2uESSiRJz-jh3/view" // Replace with your actual credential URL
    },
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      link: "https://drive.google.com/file/d/1We5bF8iYHhVKlV2YO-mmF6RNxCrO3eoA/view" // Replace with your actual credential URL
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      link: "https://drive.google.com/file/d/1yI3MFQq3nKtBR6_nYdX4akKCa1c15F6i/view" // Replace with your actual credential URL
    },
    {
      name: "Microsoft Azure Cognitive Services",
      issuer: "Microsoft",
      link: "https://drive.google.com/file/d/1i-KknVD2nStPEu5MkAz2GsLbNcGO5YIZ/view?usp=drivesdk" // Replace with your actual credential URL
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Pragati Engineering College",
      timeline: "2024 - 2028",
      score: "CGPA: 8.0",
      details: "Focusing on core computer science subjects, algorithms, and full-stack web development frameworks.",
      icon: "fas fa-graduation-cap"
    },
    {
      degree: "Intermediate / Higher Secondary (MPC)",
      institution: "Sahasra Junior College", // Replace with your actual college name
      timeline: "2022 - 2024",
      score: "85.3%",
      details: "Specialized in Mathematics, Physics, and Chemistry.",
      icon: "fas fa-school"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Aditya Public HS", // Replace with your actual school name
      timeline: "Until 2022",
      score: "91.6%",
      details: "Completed secondary education with a strong academic foundation.",
      icon: "fas fa-book"
    }
  ],
  contact: {
    email: "rasamsettijishnutej@gmail.com",
    location: "Kakinada, Andhra Pradesh, India",
    github: "https://github.com/jishnutej1804",   // Replace with your actual link
    linkedin: "https://www.linkedin.com/in/rasamsetti-jishnu-tej-78026b357/" // Replace with your actual link
  },

  theme: {
    default: "midnight-glass"
  }
};
