/**
 * Portfolio Data Configuration
 * Central place to customize all personal details, skills, projects, and links.
 */

// Helper to fetch SVG logos from Devicon CDN
const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`

export const personalInfo = {
  name: 'VIKAS S M',
  shortName: 'VS.',
  tagline: 'FROM COMMIT TO CLOUD, AUTOMATED.',
  roles: [
    'DevOps Engineer',
    'AWS Cloud Enthusiast',
    'Java Full Stack Developer'
  ],
  heroDescription:
    'I build, containerize and automate deployments on AWS using Docker, Kubernetes and Jenkins, turning ideas into reliable, running systems.',
  aboutHeading: 'Curious mind. Automation mindset.',
  aboutBio: [
    "I'm a final-year Computer Science and Engineering student and a DevOps Engineer in the making, with hands-on experience in Linux, AWS, Docker, Kubernetes, Jenkins, Ansible and CI/CD automation.",
    'During my internship at JSpiders Bengaluru, I built CI/CD pipelines with Jenkins, GitHub and Maven, deployed containerized Spring Boot applications on AWS EC2, and wrote Ansible playbooks for configuration management and automated deployment.',
    "I also have a Java Full Stack background (Spring Boot, MySQL, REST APIs), so I understand the applications I deploy, not just the pipelines around them. I'm looking for a fresher DevOps / Cloud role where I can keep learning and ship reliable infrastructure."
  ],
  contactHeading: 'Looking for a DevOps fresher?',
  contactDescription:
    "I'm open to DevOps and cloud opportunities, collaboration, and connecting with people in technology.",
  contactDetails: {
    phone: '+91 6360266090',
    email: 'vikas.sm732@gmail.com',
    linkedin: 'https://linkedin.com/in/vikas-sm63',
    github: 'https://github.com/Vikas6360',
    location: 'Bangalore, Karnataka',
    resumeUrl: '/Vikas_Devops_resume.pdf'
  }
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export const stats = [
  { value: '50%', label: 'Fewer manual deployment steps' },
  { value: '<5 min', label: 'Automated deploy time' },
  { value: '3', label: 'DevOps projects built' }
]

export const timeline = [
  {
    type: 'EDUCATION',
    title: 'B.E. – Computer Science and Engineering',
    place: 'Vivekananda Institute of Technology, VTU',
    duration: '2022 – 2026'
  },
  {
    type: 'EXPERIENCE',
    title: 'DevOps and Full-Stack Java Intern',
    place: 'JSpiders Bengaluru',
    duration: 'Feb 2026 – Present'
  },
  {
    type: 'PRE-UNIVERSITY',
    title: 'Poorna Prajna PU College',
    place: 'Bengaluru',
    duration: '2020 – 2022'
  }
]

export const certifications = [
  'Java Full Stack with DevOps – JSpiders',
  'Linux Unhatched – Cisco Networking Academy',
  'Networking Basics – Cisco Networking Academy',
  'IBM Cloud Computing Fundamentals',
  'IBM Artificial Intelligence Fundamentals'
]

export const skillGroups = [
  {
    title: 'Cloud & DevOps',
    note: 'AWS: EC2 · IAM · S3 · VPC · RDS · Auto Scaling · Load Balancing · CloudWatch',
    items: [
      { name: 'AWS', logo: devicon('amazonwebservices') },
      { name: 'Docker', logo: devicon('docker') },
      { name: 'Kubernetes', logo: devicon('kubernetes', 'plain') },
      { name: 'Jenkins', logo: devicon('jenkins') },
      { name: 'Ansible', logo: devicon('ansible') },
      { name: 'Terraform', logo: devicon('terraform') },
      { name: 'Git', logo: devicon('git') },
      { name: 'GitHub', logo: devicon('github') },
      { name: 'Maven', logo: devicon('maven') }
    ]
  },
  {
    title: 'Linux & Scripting',
    items: [
      { name: 'Linux', logo: devicon('linux') },
      { name: 'Ubuntu', logo: devicon('ubuntu', 'plain') },
      { name: 'Bash', logo: devicon('bash') }
    ]
  },
  {
    title: 'Backend & Web',
    items: [
      { name: 'Java', logo: devicon('java') },
      { name: 'Spring Boot', logo: devicon('spring') },
      { name: 'MySQL', logo: devicon('mysql') },
      { name: 'Redis', logo: devicon('redis') },
      { name: 'Nginx', logo: devicon('nginx') },
      { name: 'Tomcat', logo: devicon('tomcat') },
      { name: 'JavaScript', logo: devicon('javascript') },
      { name: 'React', logo: devicon('react') },
      { name: 'Node.js', logo: devicon('nodejs') },
      { name: 'HTML', logo: devicon('html5') },
      { name: 'CSS', logo: devicon('css3') }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'VS Code', logo: devicon('vscode') },
      { name: 'Eclipse', logo: devicon('eclipse') },
      { name: 'Postman', logo: devicon('postman') }
    ]
  }
]

export const projects = [
  {
    type: 'FULL-STACK + DEVOPS',
    title: 'Student Management System',
    description:
      'A full-stack web application for managing student records, containerized and deployed automatically through a Jenkins CI/CD pipeline on AWS.',
    points: [
      'Built with Spring Boot, MySQL, Thymeleaf, HTML and CSS',
      'REST APIs and CRUD operations using Hibernate/JPA',
      'Containerized with Docker and deployed via Jenkins on AWS'
    ],
    tech: ['Spring Boot', 'MySQL', 'Docker', 'Jenkins', 'Kubernetes'],
    flow: [
      { label: 'Spring Boot App', sub: 'Thymeleaf + REST APIs', logo: devicon('spring') },
      { label: 'MySQL', sub: 'Hibernate / JPA', logo: devicon('mysql') },
      { label: 'Docker Image', sub: 'Containerized app', logo: devicon('docker') },
      { label: 'Jenkins Pipeline', sub: 'Automated build & deploy', logo: devicon('jenkins') },
      { label: 'AWS', sub: 'Hosted on EC2', logo: devicon('amazonwebservices') }
    ]
  },
  {
    type: 'CI/CD AUTOMATION',
    title: 'CI/CD Pipeline using Jenkins',
    description:
      'An end-to-end pipeline that takes code from GitHub to a running container behind Nginx with no manual steps.',
    points: [
      'Automated source checkout, Maven build and Docker image creation',
      'Automated deployment behind Nginx',
      'Cut deployment time from 30 min (manual) to under 5 min'
    ],
    tech: ['Jenkins', 'GitHub', 'Maven', 'Docker', 'Nginx'],
    flow: [
      { label: 'GitHub', sub: 'Source checkout', logo: devicon('github') },
      { label: 'Jenkins', sub: 'Pipeline trigger', logo: devicon('jenkins') },
      { label: 'Maven', sub: 'Build & package', logo: devicon('maven') },
      { label: 'Docker', sub: 'Image creation', logo: devicon('docker') },
      { label: 'Nginx', sub: 'Deployment', logo: devicon('nginx') }
    ]
  },
  {
    type: 'CONTAINER ORCHESTRATION',
    title: 'Kubernetes Deployment',
    description:
      'Containerized Spring Boot applications deployed on Kubernetes using declarative YAML manifests, with rolling updates for zero-downtime releases.',
    points: [
      'Deployment, Service, ConfigMap and Ingress manifests',
      'Managed applications with kubectl',
      'Performed rolling updates'
    ],
    tech: ['Docker', 'Kubernetes', 'YAML', 'kubectl'],
    flow: [
      { label: 'Docker Image', sub: 'Container image', logo: devicon('docker') },
      { label: 'Deployment', sub: 'Rolling updates', logo: devicon('kubernetes', 'plain') },
      { label: 'Service', sub: 'Internal networking', logo: devicon('kubernetes', 'plain') },
      { label: 'ConfigMap', sub: 'App configuration', logo: devicon('kubernetes', 'plain') },
      { label: 'Ingress', sub: 'External access', logo: devicon('kubernetes', 'plain') }
    ]
  }
]
