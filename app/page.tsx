'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, ExternalLink, ChevronDown, Sparkles, Code2, Zap, Target } from 'lucide-react';

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
    { category: 'Automation & Workflows', icon: Zap, items: ['n8n Workflow Automation', 'GoHighLevel Integration', 'System Automation', 'Process Optimization', 'API Integration'] },
    { category: 'Development', icon: Code2, items: ['Full Stack Web Development', 'Desktop Applications', 'Database Management', 'Mapping & Route Monitoring', 'AI Integration'] },
    { category: 'Technical Skills', icon: Target, items: ['Problem Solving', 'System Analysis', 'Technical Troubleshooting', 'Software Architecture', 'Solution Design'] },
    { category: 'Professional', icon: Sparkles, items: ['Team Collaboration', 'Communication', 'Adaptability', 'Integrity & Commitment', 'Continuous Learning'] }
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
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold">Automation & AI Integration Specialist</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
                  Vince Froilan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Briones</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-lg">
                I turn complex workflows into <span className="text-primary font-semibold">intelligent automated systems</span>. Specializing in n8n, GoHighLevel, and custom integrations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group">
                  Start a Conversation
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Explore My Work
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-72 h-96 rounded-3xl overflow-hidden border-2 border-primary shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Vince Froilan Briones"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-border bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl">
              I&apos;m a driven IT professional passionate about <span className="text-primary font-semibold">transforming manual processes into intelligent, automated solutions</span>. Fresh out of Cebu Technological University, I&apos;m actively building expertise in modern automation platforms and AI-powered systems.
            </p>
            <p>
              My mission is simple: <span className="text-accent font-semibold">reduce complexity, eliminate manual work, and create systems that scale</span>. Currently, I&apos;m deepening my skills in <span className="text-primary font-semibold">n8n workflows</span> and <span className="text-primary font-semibold">GoHighLevel integration</span>, exploring how these powerful platforms can automate business processes and unlock new possibilities for growth.
            </p>
            <p>
              With hands-on experience deploying production applications, managing complex databases, and integrating APIs, I understand the full lifecycle of solution development. I&apos;m equally comfortable building web applications with mapping features, creating desktop tools for operations teams, or architecting workflow automations that save hours of manual work.
            </p>
            <p>
              What drives me is the <span className="text-primary font-semibold">intersection of technology and problem-solving</span>. I believe the best solutions are built by staying curious, learning continuously, and never settling for the status quo. I&apos;m looking to join a team where I can apply my technical foundation while growing into a strategic technology partner.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 border-t border-border bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects & Experience</h2>
            <p className="text-muted-foreground text-lg">Real-world solutions I&apos;ve built and lessons I&apos;ve learned along the way</p>
          </div>
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
      <section id="skills" className="py-20 px-4 border-t border-border bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg">Technical capabilities and specializations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, sidx) => (
                      <li key={sidx} className="flex items-center gap-3 text-muted-foreground group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:w-2 group-hover/item:h-2 transition-all"></div>
                        <span className="group-hover/item:text-foreground transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-20 px-4 border-t border-border bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Currently Practicing & Learning</h2>
            <p className="text-muted-foreground text-lg">Expanding my toolkit with cutting-edge automation platforms</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-8 hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">n8n Workflows</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building sophisticated workflow automations using n8n. Learning to connect multiple APIs, create conditional logic, and design scalable automation solutions that save teams hours of manual work.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border-2 border-accent/30 rounded-xl p-8 hover:border-accent/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">GoHighLevel Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Exploring GoHighLevel&apos;s powerful CRM and automation capabilities. Implementing custom integrations, automating client workflows, and leveraging automation to scale business operations.
                  </p>
                </div>
              </div>
            </div>
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
      <section id="contact" className="py-20 px-4 border-t border-border bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Create Something Remarkable</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I&apos;m excited to discuss opportunities where I can contribute to meaningful projects. Whether you need automation expertise, a technical collaborator, or just want to chat about automation—reach out!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:brionesvincefroilan@gmail.com"
              className="group relative bg-card border border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Send me an email</p>
                  <p className="text-lg font-semibold group-hover:text-primary transition-colors">brionesvincefroilan@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="tel:+639935830219"
              className="group relative bg-card border border-accent/30 rounded-xl p-8 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative flex items-center gap-4">
                <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Give me a call</p>
                  <p className="text-lg font-semibold group-hover:text-accent transition-colors">+63 993 583 0219</p>
                </div>
              </div>
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
