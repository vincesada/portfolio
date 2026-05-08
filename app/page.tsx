'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'systems-automation',
      title: 'Systems Automation Web Application',
      subtitle: 'Technical Operations Enhancement',
      period: '2025 - Present',
      description: 'Developed a comprehensive web application for technical engineers to automate manual tallying of installations, renewals, RMA cases, and scheduling operations.',
      highlights: [
        'Integrated mapping and route monitoring features from office to installation sites',
        'Enhanced into standalone desktop application for improved accessibility',
        'Automated workflow optimization and process management',
        'Applied AI integration concepts to reduce manual work and improve productivity'
      ]
    },
    {
      id: 'ai-test-builder',
      title: 'AI-Powered Test Builder',
      subtitle: 'Capstone Project',
      period: '2024 - 2025',
      description: 'Developed an intelligent system capable of automating test and assessment generation using AI assistance.',
      highlights: [
        'Applied system analysis and database management concepts',
        'Implemented AI-assisted workflows for test generation',
        'Focused on user-centered system design',
        'Enhanced knowledge in software development and automation'
      ]
    },
    {
      id: 'solar-services',
      title: 'Technical Support & Solar Services',
      subtitle: 'Operational Support',
      period: 'November 2021 - Present',
      description: 'Provided comprehensive technical support for solar installation and maintenance operations.',
      highlights: [
        'Assisted in solar installation, maintenance, and troubleshooting',
        'Supported CCTV backup systems and technical field operations',
        'Contributed to operational efficiency improvements',
        'Developed strong technical troubleshooting capabilities'
      ]
    }
  ];

  const skills = [
    { category: 'Automation & Integration', items: ['System Automation', 'Workflow Automation (n8n)', 'AI Integration', 'Process Optimization'] },
    { category: 'Development', items: ['Full Stack Web Development', 'Desktop Applications', 'Database Management', 'Mapping & Route Monitoring'] },
    { category: 'Technical Skills', items: ['Problem Solving', 'Technical Troubleshooting', 'System Analysis', 'Software Development'] },
    { category: 'Professional', items: ['Team Collaboration', 'Communication', 'Adaptability', 'Integrity & Commitment'] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">VFB</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
        <div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6 inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                IT Professional
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                Vince Froilan <span className="text-primary">Briones</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Building intelligent automation solutions and AI-powered systems. Specializing in workflow optimization, system integration, and technical innovation.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Get In Touch
                </a>
                <a href="#projects" className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  View Work
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-primary shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Vince Froilan Briones"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a recent IT graduate from Cebu Technological University with a passion for system automation and AI integration. My career focuses on developing solutions that streamline workflows, reduce manual processes, and enhance operational efficiency.
            </p>
            <p>
              With hands-on experience in automation workflows, web development, and technical operations, I&apos;m particularly interested in leveraging technology to solve real-world problems. I have practical expertise in n8n for workflow automation and have successfully deployed applications in production environments.
            </p>
            <p>
              Beyond technical skills, I value continuous learning, teamwork, and integrity. I&apos;m committed to contributing meaningfully to organizations focused on innovation and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects & Experience</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full p-6 flex items-start justify-between hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-primary text-sm font-medium mb-2">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{project.period}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                      expandedProject === project.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedProject === project.id && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">◆</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <li key={sidx} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 border-t border-border bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-2xl font-bold mb-1">Bachelor of Science in Information Technology</h3>
              <p className="text-primary font-medium mb-2">Cebu Technological University – Tuburan Campus (CTU-TC)</p>
              <p className="text-muted-foreground">Graduated – 2025 • Tuburan, Cebu</p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-2xl font-bold mb-1">Senior High School - ICT Technical Vocational Livelihood</h3>
              <p className="text-primary font-medium mb-2">Argao National High School</p>
              <p className="text-muted-foreground">Graduated – 2018 • Argao, Cebu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:brionesvincefroilan@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity justify-center"
            >
              <Mail className="w-5 h-5" />
              brionesvincefroilan@gmail.com
            </a>
            <a
              href="tel:+639935830219"
              className="flex items-center gap-3 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors justify-center"
            >
              <Phone className="w-5 h-5" />
              +63 993 583 0219
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-6">
          <p>&copy; 2025 Vince Froilan Briones. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:brionesvincefroilan@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="tel:+639935830219" className="hover:text-primary transition-colors">Phone</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
