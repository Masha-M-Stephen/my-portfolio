export const personalInfo = {
  name: "Masha M. Stephen",
  title: "Data Scientist",
  bio: "As a Data Science and AI professional, I have enabled teams to make better data-driven decisions ranging from Branding, Understanding Customer Behavior, and Customer Service Analytics, Ocean Logistic, to Supply Chain Inventory and Labor Planning.",
  tagline: "I solve business' tough questions with AI and Data Science solutions.",
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

export const blogCategories = ["All", "Data Science", "Marketing", "Supply Chain"] as const;
export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts = [
  {
    title: "Understanding Customer Segmentation with ML",
    slug: "customer-segmentation",
    category: "Data Science" as const,
    excerpt: "How machine learning techniques can reveal hidden customer segments and drive targeted strategies.",
    date: "Coming Soon",
    image: "/images/project-placeholder.svg",
    content: `
## Overview

Customer segmentation is one of the most powerful applications of machine learning in business. By grouping customers based on shared characteristics, businesses can tailor their strategies to each segment.

## Approach

This article explores how unsupervised learning techniques like K-Means clustering and hierarchical clustering can reveal hidden customer segments from transaction and behavioral data.

## Key Takeaways

- ML-based segmentation goes beyond traditional demographics
- Behavioral patterns reveal more actionable insights
- Regular re-segmentation ensures strategies stay relevant

*Full article coming soon...*
    `,
  },
  {
    title: "Brand Perception Analytics",
    slug: "brand-perception",
    category: "Marketing" as const,
    excerpt: "Leveraging data to measure and improve brand perception across customer touchpoints.",
    date: "Coming Soon",
    image: "/images/project-placeholder.svg",
    content: `
## Overview

Understanding how customers perceive your brand is critical for strategic marketing decisions.

## Approach

Using sentiment analysis, social media monitoring, and survey data analytics to build a comprehensive picture of brand perception.

## Key Takeaways

- Data-driven brand measurement provides objective insights
- Multi-channel analysis reveals blind spots
- Continuous monitoring enables rapid response

*Full article coming soon...*
    `,
  },
  {
    title: "Optimizing Inventory with Predictive Models",
    slug: "inventory-optimization",
    category: "Supply Chain" as const,
    excerpt: "Using time-series forecasting to reduce overstock and stockout situations.",
    date: "Coming Soon",
    image: "/images/project-placeholder.svg",
    content: `
## Overview

Inventory management is a balancing act. Predictive models can help strike the right balance between overstock and stockout.

## Approach

Time-series forecasting models (ARIMA, Prophet, LSTM) applied to historical demand data to predict future inventory needs.

## Key Takeaways

- Accurate demand forecasting reduces carrying costs
- Seasonal patterns and trends are captured automatically
- Real-time model updates improve accuracy over time

*Full article coming soon...*
    `,
  },
  {
    title: "Customer Behavior Patterns in E-Commerce",
    slug: "customer-behavior-ecommerce",
    category: "Marketing" as const,
    excerpt: "Analyzing click-stream and purchase data to understand buying patterns.",
    date: "Coming Soon",
    image: "/images/project-placeholder.svg",
    content: `
## Overview

E-commerce generates massive amounts of behavioral data that can reveal how customers shop.

## Approach

Analyzing click-stream data, session recordings, and purchase funnels to identify behavioral patterns and optimize the customer journey.

## Key Takeaways

- Funnel analysis reveals drop-off points
- Session pattern analysis identifies power user behaviors
- A/B testing validates optimization hypotheses

*Full article coming soon...*
    `,
  },
  {
    title: "Building Robust Data Pipelines",
    slug: "data-pipelines",
    category: "Data Science" as const,
    excerpt: "Best practices for creating scalable and maintainable data engineering pipelines.",
    date: "Coming Soon",
    image: "/images/project-placeholder.svg",
    content: `
## Overview

Reliable data pipelines are the backbone of any data-driven organization.

## Approach

Covering best practices for ETL/ELT design, error handling, monitoring, and scaling using modern tools.

## Key Takeaways

- Idempotent operations ensure reliability
- Monitoring and alerting catch issues early
- Modular design enables easy maintenance

*Full article coming soon...*
    `,
  },
  {
    title: "Ocean Logistics Optimization",
    slug: "ocean-logistics",
    category: "Supply Chain" as const,
    excerpt: "Data-driven approaches to streamline ocean freight routing and scheduling.",
    date: "Coming Soon",
    image: "/images/project-placeholder.svg",
    content: `
## Overview

Ocean freight is one of the most complex logistics challenges, involving routes, schedules, capacity, and cost optimization.

## Approach

Using optimization algorithms and data analytics to improve routing decisions, reduce transit times, and minimize costs.

## Key Takeaways

- Route optimization reduces fuel costs and transit times
- Demand forecasting improves capacity utilization
- Real-time data integration enables dynamic re-routing

*Full article coming soon...*
    `,
  },
];

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
