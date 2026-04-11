export const personalInfo = {
  name: "Masha M. Stephen",
  title: "Data Scientist",
  bio: "As a Data Science and AI professional, I have enabled teams to make better data-driven decisions ranging from Branding, Understanding Customer Behavior, and Customer Service Analytics, Ocean Logistic, to Supply Chain Inventory and Labor Planning.",
  tagline: "I solve business problems and improve processes with AI and Data Science solutions.",
  profileImage: "/images/profile-placeholder.jpeg", // ✅ FIXED
};

export const socials = {
  github: "https://github.com/Masha-M-Stephen",
  linkedin: "https://www.linkedin.com/in/masha-m-stephen1/",
  email: "stephenmasha@rocketmail.com",
  instagram: "https://www.instagram.com/masha.m.armani/",
};
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Hobbies", href: "#hobbies" },
];

export const portfolioCategories = ["All", "Apps", "Analytics", "Websites"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export const techs = [
  // Languages & Core
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  // ML / AI Frameworks
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },

  // Data Libraries
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },

  // Databases
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Neo4j", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg" },

  // BI & Visualization
  { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
  { name: "Power BI", icon: "https://img.icons8.com/color/48/power-bi.png" },

  // Big Data & Cloud
  { name: "Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },

  // Tools
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
  { name: "Mapbox", icon: "https://img.icons8.com/color/48/mapbox.png" },
];

export const services = [
  {
    title: "Data Science Consulting",
    description: "Transforming raw data into actionable insights that drive strategic business decisions.",
    icon: "📊",
  },
  {
    title: "Deep Learning & Machine Learning Solutions",
    description: "Building and deploying DL & ML models that automate processes and predict outcomes.",
    icon: "🤖",
  },
  {
    title: "Analytics & Visualization",
    description: "Creating dashboards and visual stories that make complex data easy to understand.",
    icon: "📈",
  },
  {
    title: "AI Strategy",
    description: "Helping organizations develop and implement AI roadmaps for long-term growth.",
    icon: "🧠",
  },
];

export const portfolioItems = [
  {
    title: "Supply Chain Optimizer",
    category: "Apps" as const,
    description: "A predictive analytics app for supply chain optimization.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Customer Insights Dashboard",
    category: "Analytics" as const,
    description: "Interactive visualization dashboard for customer behavior analysis.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Brand Analytics Platform",
    category: "Analytics" as const,
    description: "Data visualization suite for branding and marketing performance.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    category: "Websites" as const,
    description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Inventory Forecasting App",
    category: "Apps" as const,
    description: "ML-powered app for inventory demand forecasting.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
  {
    title: "Marketing Dashboard",
    category: "Websites" as const,
    description: "Web-based dashboard for marketing campaign tracking.",
    image: "/images/project-placeholder.svg",
    link: "#",
  },
];

// Blog categories and types — actual blog data is loaded dynamically from src/content/blog/*.md
// See src/lib/blog.ts for the loading logic
export type BlogCategory = string;

export const hobbies = [
  {
    title: "Photography",
    image: "/images/hobby-placeholder.svg",
    description: "Capturing moments and perspectives through the lens.",
  },
  {
    title: "Data Art",
    image: "/images/hobby-placeholder.svg",
    description: "Creating beautiful infographics from complex datasets.",
  },
  {
    title: "Travel",
    image: "/images/hobby-placeholder.svg",
    description: "Exploring new places and cultures around the world.",
  },
  {
    title: "Infographics",
    image: "/images/hobby-placeholder.svg",
    description: "Designing visual stories that communicate ideas clearly.",
  },
  {
    title: "Reading",
    image: "/images/hobby-placeholder.svg",
    description: "Diving into books on science, technology, and innovation.",
  },
  {
    title: "Creative Design",
    image: "/images/hobby-placeholder.svg",
    description: "Experimenting with visual design and digital art.",
  },
];
