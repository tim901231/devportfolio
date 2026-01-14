export const siteConfig = {
  name: "Chung-Ting Tsai",
  title: "CMU MSCV Student",
  description: "Portfolio website of Chung-Ting Tsai",
  accentColor: "#1d4ed8",
  social: {
    email: "b09901020@ntu.edu.tw",
    linkedin: "https://www.linkedin.com/in/chungtingt/",
    resume: "https://drive.google.com/file/d/1K_oTrlgalP4BiAz6HAdXTjdCDI7SpO2i/view?usp=sharing",
    github: "https://github.com/tim901231",
  },
  aboutMe:
    "I’m 蔡仲廷, a passionate AI engineer and a current Master of Science student in Computer Vision at Carnegie Mellon University. I graduated from National Taiwan University with a Bachelor of Science in Electrical Engineering. I also have a strong background in optimization for the semiconductor industry, including RTL design and electronic design automation (EDA), as well as experience with quantum computing technologies.",  
  skills: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "Vision-Language Models", "Diffusion Models"],
  projects: [
    {
      name: "ManipulateGaussian : 3D Gaussian Manipulation from Observed Vibrations",
      description:
        "Developed a novel framework that learns and visualizes physically plausible vibration behaviors directly from monocular video, enabling the creation of re-animatable 3D Gaussians",
      link: "https://github.com/astonishingwolf/Gaussian-Manipulation",
      skills: ["3D Gaussian Splatting", "Discrete Fourier Transform", "Harmonic motion analysis"],
    },
    {
      name: "Understanding and Improving Training-Free AI-Generated Image Detections with Vision Foundation Models",
      description:
        "Analyzed statistical properties of embeddings from AI-generated images under perturbations, providing deeper insight for leveraging foundation vision model in detection tasks",
      link: "https://arxiv.org/abs/2411.19117",
      skills: ["Vision foundation models", "Robustness analysis", "Deepfake detection"],
    },
    {
      name: "Receler: Reliable Concept Erasing of Text-to-Image Diffusion Models via Lightweight Erasers",
      description:
        "Pioneered a robust machine unlearning algorithm using LoRA for diffusion model, improving accuracy by 2.2% and robustness by 24.8%",
      link: "https://github.com/jasper0314-huang/Receler",
      skills: ["Diffusion Models", "Machine Unlearning", "LoRA"],
    },
    {
      name: "Clearance-Constrained PCB Global Placement with Heterogeneous Components",
      description:
        "Evaluated PCB routing performance by integrating lab’s algorithm with commercial tool Allegro and adapting it to open-source tool KiCad for routing feasibility testing",
      link: "https://ieeexplore.ieee.org/document/11133056",
      skills: ["VLSI", "C++", "Routing"],
    },
  ],
  experience: [
    {
      company: "IBM Research",
      title: "Machine Learning Research Intern",
      dateRange: "Jun 2024 - Sep 2024",
      bullets: [
        "Analyzed statistical properties of embeddings from AI-generated images under perturbations, providing deeper insight for leveraging foundation vision model in detection tasks",
        "Developed a training-free detection method based on embedding responses to Gaussian Blur, achieving a 15.3% AUROC improvement over prior state-of-the-art training-free methods; preprint available on arXiv",
      ],
    },
    {
      company: "National Taiwan University",
      title: "Teaching Assistant",
      dateRange: "Feb 2023 – Jun 2023 & Sep 2024 – Dec 2024",
      bullets: [
        "Assisted grading Signal Systems assignments and exams for 200+ students and hosted office hours to deliver timely feedback",
        "Formulated homework and final project for Deep Learning for Computer Vision, preparing students for research",
      ],
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "Master of Science in Computer Vision",
      dateRange: "2025 - 2026",
      achievements: [
        "Current GPA: 4.33/4.0",
        "Relevant Coursework: Advanced Computer Vision, Learning for 3D Vision, Introduction to Machine Learning",
      ],
    },
    {
      school: "National Taiwan University",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2020 - 2024",
      achievements: [
        "Fu-Bell Scholarship (4 among 200+ students)",
        "GPA: 4.18/4.3, 2 times Dean's List",
        "Quantum Computation and Quantum Information Program"
      ],
    },
  ],
};
