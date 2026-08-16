export const profile = {
  name: 'Beeresh Muragannavar',
  role: 'Software Engineer',
  tagline:
    'Passionate Computer Science Engineering student with hands-on experience in C++, Python, web development, and AI/ML. I enjoy building practical AI-driven solutions and solving real-world problems through technology.',
  email: 'beereshmuragannavar2005@gmail.com',
  phone: '9741207665',
  github: 'https://github.com/Beeresh01/',
  linkedin: 'https://www.linkedin.com/in/beeresh-muragannavar?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  resumeUrl: '/resume/Beeresh_Muragannavar_Resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science & Engineering student who likes turning ambiguous problems into working software. My focus sits at the intersection of AI/ML and practical, deployable systems — not just notebooks, but tools people can actually use.",
    "Most of what I know, I picked up by building: shipping projects under hackathon deadlines, debugging models that refuse to converge at 2 a.m., and learning new stacks because a project demanded it. I care about code that is readable six months later, not just code that runs today.",
  ],
  highlights: [
    {
      title: 'Problem-Solving Mindset',
      desc: 'I break unclear problems into smaller, testable pieces before writing a single line of code.',
    },
    {
      title: 'AI/ML Focus',
      desc: 'Comfortable across the pipeline — from data and model training to deployment on constrained hardware.',
    },
    {
      title: 'Software Development',
      desc: 'Full-stack fundamentals: clean APIs, sensible data models, and interfaces people don\u2019t have to think about.',
    },
    {
      title: 'Hands-on Project Experience',
      desc: 'I learn fastest by shipping — every project below is a real, working system, not a tutorial clone.',
    },
    {
      title: 'Hackathon Experience',
      desc: 'Built and demoed a full offline AI system in 24 hours at CodeClipse — thrive under real constraints.',
    },
    {
      title: 'Continuous Learning',
      desc: 'Currently going deeper on computer vision and retrieval-augmented systems, one project at a time.',
    },
  ],
}

export const education = [
  {
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    institution: 'S G Balekundri Institute Of Technology',
    university: 'VTU University',
    metric: 'CGPA: 8.16',
    period: 'Sep 2023 – Present',
    location: 'Belagavi, India',
  },
  {
    degree: '12th / PUC — Science',
    institution: 'Govt. PU College',
    university: null,
    metric: 'Percentage: 93.5%',
    period: 'Jul 2021 – Apr 2023',
    location: 'Nargund, India',
  },
  {
    degree: '10th / Secondary School',
    institution: 'Lions English Medium School',
    university: null,
    metric: 'Percentage: 87%',
    period: 'Jun 2020 – Mar 2021',
    location: 'Nargund, India',
  },
]

export const experience = [
  {
    role: 'Python Intern',
    company: 'Besant Technologies',
    period: 'Dec 2025 – Jan 2026',
    description:
      'Completed a Python internship at Besant Technologies, gaining practical knowledge of Python programming and strengthening problem-solving skills through hands-on learning and real-world applications.',
    tags: ['Python', 'Problem Solving'],
  },
]

export const projects = [
  {
    title: 'AI-Based Offline Navigation & Obstacle Alert App',
    period: 'Apr 2026 – Aug 2026',
    badge: null,
    description:
      'AI-powered mobile application designed to assist visually impaired users with real-time obstacle detection.',
    features: [
      'Real-time obstacle detection',
      'Computer vision pipeline',
      'YOLO-based object identification',
      'Voice-based alerts',
      'Fully offline functionality',
    ],
    tech: ['Python', 'YOLO', 'Computer Vision', 'AI/ML'],
    github: 'https://github.com/Beeresh01/',
    demo: null,
  },
  {
    title: 'VISURA — Offline Clinical AI Assistant',
    period: 'CodeClipse 24-Hour Hackathon · Apr 2026',
    badge: '24-Hour Hackathon Project',
    description:
      'Offline clinical AI system using VLM + RAG on Raspberry Pi for image-based condition identification and protocol retrieval.',
    features: [
      'Fully offline AI inference',
      'Image-based condition identification',
      'RAG-based knowledge retrieval',
      'Voice interaction',
      'PWA interface',
      'FastAPI backend',
      'WHO-verified medical knowledge base',
    ],
    tech: ['Raspberry Pi', 'VLM', 'RAG', 'FastAPI', 'React', 'FAISS', 'Whisper'],
    github: 'https://github.com/Beeresh0l/',
    demo: null,
  },
  {
    title: 'Phishing Website Detection System',
    period: 'Aug 2025 – Sep 2025',
    badge: null,
    description:
      'Machine learning system that detects and classifies phishing websites using URL and website features.',
    features: [
      'Phishing website classification',
      'URL and website feature analysis',
      'Real-time detection',
      'Flask web application',
    ],
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Flask'],
    github: 'https://github.com/Beeresh01/',
    demo: null,
  },
]

export const skills = [
  {
    category: 'Programming',
    items: ['C++', 'Python', 'JavaScript', 'Kotlin'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'React.js', 'Flask', 'PHP', 'REST APIs'],
  },
  {
    category: 'AI / Machine Learning',
    items: ['Machine Learning', 'Scikit-learn', 'YOLO', 'Computer Vision', 'AI/ML'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

export const interests = [
  { title: 'Software Engineering', desc: 'Designing systems that stay maintainable as they grow.' },
  { title: 'Artificial Intelligence', desc: 'Exploring how models can make practical decisions in the real world.' },
  { title: 'Machine Learning', desc: 'Training, evaluating, and deploying models beyond the notebook.' },
  { title: 'Computer Vision', desc: 'Teaching systems to perceive and act on visual information.' },
  { title: 'Web Development', desc: 'Building fast, accessible interfaces backed by solid APIs.' },
  { title: 'AI-Powered Applications', desc: 'Shipping AI features that solve one real problem well.' },
]
