'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronDown, Terminal, Code, TestTube, Rocket, Award, Briefcase, Calendar, Building2 } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [animatedCircleStyles, setAnimatedCircleStyles] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mdkqdgaa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Generate animated circle styles only on the client
    const styles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setAnimatedCircleStyles(styles);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'JavaScript', 'Python', 'TypeScript', 'SQL'],
    frameworks: ['Selenium', 'TestNG', 'Cypress', 'Jest', 'Playwright'],
    tools: ['TestRail', 'Jira', 'Git', 'Postman', 'Charles Proxy'],
    methodologies: ['Agile/Scrum', 'CI/CD', 'Release Management', 'Performance Testing', 'Cross-team Collaboration']
  };

  const experience = [
    {
      role: 'Founder',
      company: 'Testify Labs',
      period: 'September 2024 - Present',
      location: 'Burbank, CA',
      achievements: [
        'Founded QA consulting and testing solutions company',
        'Leading engineering team specializing in automated testing and quality assurance',
        'Developed custom testing frameworks and solutions for diverse clients',
        'Building scalable test automation infrastructure for modern applications'
      ]
    },
    {
      role: 'Software QA Engineer',
      company: 'Meta',
      period: 'September 2022 - September 2024',
      location: 'Los Angeles, CA',
      achievements: [
        'Performed manual and automated testing for web and mobile applications',
        'Managed release cycles as de-facto release manager, controlling code flow between environments',
        'Developed comprehensive test automation frameworks using Selenium and Java',
        'Facilitated cross-team collaboration in Agile methodology-driven environment',
        'Tracked performance metrics and implemented quality improvements'
      ]
    },
    {
      role: 'Software QA Engineer',
      company: 'Altruist',
      period: 'August 2021 - December 2023',
      location: 'Los Angeles, CA',
      achievements: [
        'Implemented test automation scripts using Java, JavaScript, and Python',
        'Organized and managed Test Suites using TestRail for functional and regression testing',
        'Researched and evaluated testing frameworks and tools to optimize SDLC',
        'Conducted manual testing for web and mobile applications'
      ]
    }
  ];

  const projects = [
    {
      title: 'Selenium Test Automation Framework',
      description: 'Enterprise-grade test automation framework with page object model, data-driven testing capabilities, and parallel execution for fast and reliable test case implementation.',
      tags: ['Java', 'Selenium', 'TestNG', 'Maven'],
      category: 'automation',
      link: '#',
      github: 'https://github.com/JustAnotherDevFromLA'
    },
    {
      title: 'TestRail Integration Suite',
      description: 'Comprehensive test management solution integrating TestRail with automated testing pipelines for organized functional and regression testing.',
      tags: ['TestRail', 'Python', 'API Integration'],
      category: 'tools',
      link: '#',
      github: 'https://github.com/JustAnotherDevFromLA'
    },
    {
      title: 'Mobile App Testing Framework',
      description: 'Cross-platform mobile testing solution for iOS and Android applications with automated test execution and detailed reporting.',
      tags: ['Python', 'Appium', 'JavaScript'],
      category: 'mobile',
      link: '#',
      github: 'https://github.com/JustAnotherDevFromLA'
    },
    {
      title: 'Release Management Dashboard',
      description: 'Custom dashboard for tracking code flow between environments, managing deployments, and monitoring release cycles across multiple products.',
      tags: ['React', 'Node.js', 'CI/CD'],
      category: 'tools',
      link: '#',
      github: 'https://github.com/JustAnotherDevFromLA'
    },
    {
      title: 'Performance Testing Suite',
      description: 'Automated performance testing and monitoring solution with real-time metrics tracking and threshold alerting.',
      tags: ['JMeter', 'Python', 'Grafana'],
      category: 'automation',
      link: '#',
      github: 'https://github.com/JustAnotherDevFromLA'
    },
    {
      title: 'API Testing Framework',
      description: 'RESTful API testing framework with automated validation, contract testing, and integration with CI/CD pipelines.',
      tags: ['JavaScript', 'Postman', 'Newman', 'Jenkins'],
      category: 'automation',
      link: '#',
      github: 'https://github.com/JustAnotherDevFromLA'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md ${darkMode ? 'bg-gray-950/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            AK
          </motion.div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-blue-700/10" />
        <div className="absolute inset-0">
          {animatedCircleStyles.map((style, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={style}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Artashes Kocharyan
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Founder @ Testify Labs | Ex-Meta QA Engineer
            </p>
            <p className={`text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-500' : 'text-gray-700'}`}>
              Building robust test automation frameworks and ensuring exceptional software quality through modern QA methodologies
            </p>
            
            <div className="flex flex-col items-center">
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-semibold border-2 ${darkMode ? 'border-gray-700 hover:border-cyan-500' : 'border-gray-300 hover:border-cyan-500'} transition-colors`}
                >
                  View Work
                </motion.a>
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-12"
              >
                <ChevronDown className="text-cyan-400" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`p-8 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                <Terminal className="text-cyan-400 mb-4" size={32} />
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a Software Quality Assurance Engineer based in Los Angeles with a B.S. in Computer Science from California State Polytechnic University, Pomona. 
                  I have a deep and thorough understanding of modern QA methodologies, which I use regularly to support and improve software quality within Agile teams.
                </p>
              </div>
              
              <div className={`p-8 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                <Rocket className="text-blue-400 mb-4" size={32} />
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My expertise includes manual and automated testing for web and mobile applications. I'm also experienced in release management, acting as a de-facto release manager 
                  by controlling code flow between various environments. I have extensive experience writing automation scripts using Java, JavaScript, and Python, with Selenium as my 
                  go-to framework for fast and reliable test case implementation.
                </p>
              </div>
            </div>

            <div className={`mt-12 p-8 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
              <Building2 className="text-blue-600 mb-4" size={32} />
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I make it a priority to research the best available frameworks and tools on a consistent basis. I use TestRail for organizing and managing various Test Suites 
                used for functional and regression testing. I love learning new technologies and constantly aim to expand the depth of my knowledge of relevant tools and frameworks 
                to optimize the SDLC for my team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`p-8 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'} hover:border-cyan-500 transition-colors`}
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                      <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{exp.location}</p>
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Award className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-32 ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'} hover:border-cyan-500 transition-colors`}
                >
                  <h3 className="text-lg font-bold mb-4 capitalize text-cyan-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className={`text-center mb-12 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A small sample of my best work. These projects illustrate my dedication and love for software quality and development.
            </p>
            
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {['all', 'automation', 'mobile', 'tools'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 rounded-lg capitalize transition-all ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className={`group p-6 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'} hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Code className="text-cyan-400" size={32} />
                      <div className="flex gap-2">
                        <a href={project.link} className="p-2 rounded-lg hover:bg-gray-700 transition-colors" aria-label={`View live demo of ${project.title}`}>
                          <ExternalLink size={18} />
                        </a>
                        <a href={project.github} className="p-2 rounded-lg hover:bg-gray-700 transition-colors" aria-label={`View ${project.title} on GitHub`}>
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700/50 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Get <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">In Touch</span>
            </h2>
            <p className={`text-center mb-12 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Feel free to reach out with any inquiries. I look forward to helping you build efficient, safe, and resilient software!
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
              <motion.a
                href="https://github.com/JustAnotherDevFromLA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/artashes-kocharyan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:artashes@testifylabs.com"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                aria-label="Email Me"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            
            <form onSubmit={handleFormSubmit} className={`p-8 rounded-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:border-cyan-500 focus:outline-none transition-colors resize-none`}
                />
                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </motion.button>
                {formStatus === 'success' && <p className="text-center text-green-500">Message sent successfully!</p>}
                {formStatus === 'error' && <p className="text-center text-red-500">An error occurred. Please try again.</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
            © 2025 Artashes Kocharyan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;