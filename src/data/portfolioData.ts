/**
 * Portfolio Data for P Chaanakya Chowhan Reddy
 * Cricket Themed Developer Portfolio
 */

export interface PlayerBio {
  fullName: string;
  shortName: string;
  jerseyNumber: string;
  professionalTitle: string;
  university: string;
  academicLevel: string;
  tagline: string;
  shortIntro: string;
  heroIntro: string;
  aboutDescription: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  interests: string[];
}

export const PLAYER_DATA: PlayerBio = {
  fullName: "P Chaanakya Chowhan Reddy",
  shortName: "Chaanakya Reddy",
  jerseyNumber: "07",
  professionalTitle: "B.Tech Artificial Intelligence and Machine Learning Student",
  university: "REVA University",
  academicLevel: "3rd Semester",
  tagline: "Building Ideas. Developing Skills. Creating Technology.",
  shortIntro:
    "I am a passionate B.Tech Artificial Intelligence and Machine Learning student at REVA University. I enjoy programming, exploring emerging technologies, and developing practical technology solutions. I continuously improve my technical knowledge through academic projects, hands-on learning, and collaborative activities.",
  heroIntro:
    "Welcome to my digital arena! I'm a 3rd-semester Artificial Intelligence and Machine Learning student passionate about programming, technology, and building real-world solutions.",
  aboutDescription:
    "I am a 3rd-semester B.Tech student specializing in Artificial Intelligence and Machine Learning at REVA University. I am passionate about programming, AI, and developing practical technology solutions. I am continuously improving my technical skills through academic projects, hands-on learning, and collaborative activities.",
  email: "petachaanakyareddy07@gmail.com",
  githubUrl: "https://github.com/chaanakya-reddy",
  linkedinUrl: "https://linkedin.com/in/chaanakyareddy",
  location: "Bengaluru, India",
  role: "All-Rounder (AI/ML & Software Developer)",
  battingStyle: "Right-Hand Code Architect",
  bowlingStyle: "Precision Logic & Rapid Prototyping",
  interests: [
    "Programming",
    "Artificial Intelligence",
    "Web Development",
    "Technology Projects",
  ],
};

export interface SkillCategory {
  id: string;
  title: string;
  cricketRole: string;
  iconName: string;
  badge: string;
  skills: {
    name: string;
    tag: string;
    description: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "PROGRAMMING LANGUAGES",
    cricketRole: "Core Strokeplay & Batting Arsenal",
    iconName: "Code2",
    badge: "PRIMARY STROKES",
    skills: [
      {
        name: "C Programming",
        tag: "System Logic",
        description: "Low-level memory awareness, pointers, data structures & computational efficiency.",
      },
      {
        name: "Python",
        tag: "AI & Scripting",
        description: "Versatile language for AI/ML algorithms, data modeling, and automated pipelines.",
      },
      {
        name: "JavaScript",
        tag: "Web Dynamic",
        description: "Modern ES6+ syntax, asynchronous programming, and interactive web client architecture.",
      },
    ],
  },
  {
    id: "webdev",
    title: "WEB DEVELOPMENT",
    cricketRole: "Pitch Crafting & UI Architecture",
    iconName: "Layout",
    badge: "ALL-ROUND CAPABILITY",
    skills: [
      {
        name: "HTML",
        tag: "Structure",
        description: "Semantic markup, accessibility foundations, and SEO-compliant document structures.",
      },
      {
        name: "CSS",
        tag: "Styling",
        description: "Responsive layouts, Flexbox, Grid, transitions, and contemporary design systems.",
      },
      {
        name: "React",
        tag: "Component HUD",
        description: "Component-driven architecture, hooks, state management, and high-performance UI rendering.",
      },
      {
        name: "Supabase",
        tag: "Backend & Auth",
        description: "Realtime databases, authentication flows, and automated backend infrastructure.",
      },
    ],
  },
  {
    id: "aiml",
    title: "AI AND DATA SCIENCE",
    cricketRole: "Match Strategy & Predictive Intelligence",
    iconName: "BrainCircuit",
    badge: "SPECIALIST ATTRIBUTES",
    skills: [
      {
        name: "Artificial Intelligence Fundamentals",
        tag: "Core AI",
        description: "Understanding search algorithms, machine learning paradigms, and neural networks.",
      },
      {
        name: "NumPy",
        tag: "Array Computation",
        description: "High-performance vector operations, matrix manipulation, and numerical processing.",
      },
      {
        name: "Pandas",
        tag: "Data Ingestion",
        description: "Dataframe manipulation, dataset sanitization, exploratory analysis, and data wrangling.",
      },
      {
        name: "Matplotlib",
        tag: "Telemetry Visuals",
        description: "Static and interactive data plotting, distribution graphs, and feature visualizations.",
      },
      {
        name: "Seaborn",
        tag: "Statistical Charts",
        description: "Aesthetic statistical data visualization, correlation heatmaps, and trend charts.",
      },
    ],
  },
  {
    id: "database",
    title: "DATABASE MANAGEMENT",
    cricketRole: "Scorebook & Persistent Records",
    iconName: "Database",
    badge: "PERSISTENCE TIER",
    skills: [
      {
        name: "SQL",
        tag: "Relational Queries",
        description: "Structured querying, multi-table joins, aggregations, and constraint management.",
      },
      {
        name: "Database Design Fundamentals",
        tag: "Architecture",
        description: "Schema normalization, entity-relationship modeling, and indexing fundamentals.",
      },
      {
        name: "Supabase Database Integration",
        tag: "Realtime Cloud",
        description: "Postgres cloud integration, row-level security policies, and client synchronization.",
      },
    ],
  },
];

export interface ProjectItem {
  id: string;
  projectNumber: string;
  matchNumber: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  viewLink: string;
  githubLink: string;
  badge: string;
  themeColor: string;
  accentColor: string;
  icon: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ipl-booking",
    projectNumber: "PROJECT 01",
    matchNumber: "MATCH HIGHLIGHT #01",
    title: "IPL MATCH BOOKING WEB APPLICATION",
    description:
      "Developed a web application for viewing IPL matches and managing ticket bookings.",
    technologies: ["React", "Supabase", "JavaScript"],
    features: [
      "Real-time IPL match fixture calendar with venue and team matchups",
      "Interactive stadium tier seat selector with live availability status",
      "Ticket checkout workflow with simulated booking confirmation pass",
      "Supabase backend synchronization for real-time seat reservation lock",
    ],
    viewLink: "#project-ipl",
    githubLink: "https://github.com/chaanakya-reddy/IPL",
    badge: "CRICKET STADIUM HUD",
    themeColor: "from-blue-600/20 to-cyan-500/10",
    accentColor: "#3B82F6",
    icon: "Ticket",
  },
  {
    id: "smart-parking",
    projectNumber: "PROJECT 02",
    matchNumber: "MATCH HIGHLIGHT #02",
    title: "SMART PARKING SYSTEM",
    description:
      "Designed a smart parking prototype using an ESP32, IR sensors, an LCD, and a servo motor.",
    technologies: ["ESP32", "Embedded Systems", "IR Sensors", "Electronics"],
    features: [
      "Hardware-level slot occupancy tracking via multi-channel IR sensors",
      "Automated servo gate barrier triggered upon detection and clearance",
      "16x2 LCD telemetry screen presenting vacant slot counters in real-time",
      "ESP32 micro-controller logic programmed for rapid response edge control",
    ],
    viewLink: "#project-parking",
    githubLink: "https://github.com/chaanakya-reddy/esp32-smart-parking-system",
    badge: "EMBEDDED HARDWARE",
    themeColor: "from-cyan-600/20 to-emerald-500/10",
    accentColor: "#06B6D4",
    icon: "Cpu",
  },
  {
    id: "solar-tracker",
    projectNumber: "PROJECT 03",
    matchNumber: "MATCH HIGHLIGHT #03",
    title: "SOLAR PV TRACKER",
    description:
      "Developed a prototype to track sunlight using an Arduino UNO, LDR sensors, and a servo motor.",
    technologies: ["Arduino UNO", "C/C++", "LDR Sensors", "Servo Motor"],
    features: [
      "Differential light sensing with calibrated dual LDR photoresistors",
      "Closed-loop azimuth servo alignment tracking continuous peak solar irradiance",
      "Optimized embedded C/C++ firmware running algorithmic threshold deadbands",
      "Demonstrated significant energy generation efficiency over stationary PV mounts",
    ],
    viewLink: "#project-solar",
    githubLink: "https://github.com/chaanakya-reddy/solar-pv-tracker-arduino",
    badge: "CLEAN TECH & EMBEDDED",
    themeColor: "from-amber-600/20 to-orange-500/10",
    accentColor: "#F59E0B",
    icon: "SunMedium",
  },
];

export interface HackathonRecord {
  heading: string;
  projectName: string;
  description: string;
  projectFocus: string[];
  tournamentSeries: string;
  seasonDate: string;
  squadMembers: string;
  technologiesUsed: string[];
  finalResult: string;
  isEditableNote: string;
}

export const HACKATHON_DATA: HackathonRecord = {
  heading: "HACKATHONS & INNOVATION",
  projectName: "TEAM COLLABORATION PLATFORM",
  description:
    "Worked on a hackathon project concept focused on helping distributed teams communicate, share files, and collaborate effectively.",
  projectFocus: [
    "Team Communication",
    "File Sharing",
    "Collaborative Productivity",
  ],
  tournamentSeries: "Collegiate Innovation League / Hackathon Sprint",
  seasonDate: "Academic Tournament Season 2024 - 2025",
  squadMembers: "P Chaanakya Chowhan Reddy & Collaboration Team",
  technologiesUsed: ["React", "Cloud Realtime", "JavaScript", "File Transfer API"],
  finalResult: "Prototype Showcase & Innovation Pitch Presented",
  isEditableNote: "Editable placeholders configured for upcoming tournament records.",
};

export interface EducationData {
  degree: string;
  specialization: string;
  institution: string;
  currentStatus: string;
  innings: {
    number: string;
    title: string;
    summary: string;
    focusAreas: string[];
    statusBadge: string;
  }[];
}

export const EDUCATION_DATA: EducationData = {
  degree: "B.Tech",
  specialization: "Artificial Intelligence and Machine Learning",
  institution: "REVA University",
  currentStatus: "Currently Pursuing – 3rd Semester",
  innings: [
    {
      number: "INNINGS 01",
      title: "1st Semester – Engineering Foundations",
      summary: "Built grounding in core engineering mathematics, computational logic, and physical sciences.",
      focusAreas: ["Calculus & Linear Algebra", "Computational Thinking", "Engineering Physics"],
      statusBadge: "COMPLETED INNINGS",
    },
    {
      number: "INNINGS 02",
      title: "2nd Semester – Core Programming & Systems",
      summary: "Mastered algorithmic fundamentals, C programming syntax, and basic electronic systems.",
      focusAreas: ["C Programming Language", "Problem Solving with Algorithms", "Basic Electronics"],
      statusBadge: "COMPLETED INNINGS",
    },
    {
      number: "INNINGS 03",
      title: "3rd Semester – AI, Data Science & Machine Learning",
      summary: "Active semester focusing on core AI algorithms, data pipelines, scientific Python, and software engineering.",
      focusAreas: ["AI & Machine Learning Fundamentals", "Data Structures & Algorithms", "Python Data Science (NumPy, Pandas)"],
      statusBadge: "CURRENTLY AT THE CREASE (ACTIVE)",
    },
  ],
};
