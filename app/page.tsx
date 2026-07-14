'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Code2, Zap, Target, User, Menu, X, ImageOff } from 'lucide-react';

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative bg-muted/30">
      <div className="relative aspect-video w-full">
        {!failed[index] ? (
          <Image
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            fill
            onError={() => setFailed((f) => ({ ...f, [index]: true }))}
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-muted-foreground">
            <ImageOff className="w-8 h-8" strokeWidth={1.5} />
            <p className="text-xs tracking-wide">Image coming soon</p>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          {images.length <= 6 ? (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === index ? 'bg-primary w-4' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-background/80 border border-border text-xs font-medium text-muted-foreground">
              {index + 1} / {images.length}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 'systems-automation',
      title: 'InstallTrack',
      subtitle: 'Installation, RMA &amp; Renewal Scheduler with Route Mapping — Mustard Seed Cebu',
      period: '2025 - 2026',
      images: Array.from({ length: 8 }, (_, i) => `/mssc/${i + 1}.png`),
      description: 'A web-based (later desktop) system built for Mustard Seed Cebu to manage installation scheduling, RMA cases, product uploads, and renewals in one place — with integrated route mapping that automatically plots and calculates the distance from the Mabolo office to each customer\u2019s installation site.',
      highlights: [
        'Centralized scheduling for installations, RMA cases, product uploads, and renewals',
        'Integrated map routing that plots the path from Mustard Seed Cebu (Mabolo) to the installation location',
        'Automatic distance (kilometer) calculation for every route, generated the moment a location is provided',
        'Converted into a desktop application for improved usability',
        'Implemented workflow automation to reduce manual encoding and reporting tasks'
      ]
    },
    {
      id: 'ai-test-builder',
      title: 'AI-Powered Test Builder System',
      subtitle: 'Capstone Project',
      period: '2025',
      images: Array.from({ length: 16 }, (_, i) => `/test-builder/${i + 1}.png`),
      description: 'Developed an AI-assisted system for automated test and assessment generation, applying AI integration, database management, and system design principles.',
      highlights: [
        'Applied AI integration, database management, and system design principles',
        'Implemented workflow automation and user-focused features',
        'Strengthened experience in AI-assisted development and software engineering'
      ]
    },
    {
      id: 'solar-services',
      title: 'Technical Support and Solar Services',
      subtitle: 'Operational Support',
      period: '2021 - 2022',
      images: [] as string[],
      description: 'Provided technical support for solar installation, maintenance, and troubleshooting, alongside field technical operations.',
      highlights: [
        'Provided technical support for solar installation, maintenance, and troubleshooting',
        'Assisted in CCTV systems backup and field technical operations'
      ]
    },
    {
      id: 'community-project',
      title: 'Community Project',
      subtitle: 'Disaster Relief Initiative',
      period: '2020 - 2021',
      images: [] as string[],
      description: 'Participated in constructing and distributing solar bottle bulbs for disaster-affected communities.',
      highlights: [
        'Constructed solar bottle bulbs using low-cost, sustainable materials',
        'Distributed completed units directly to disaster-affected communities'
      ]
    }
  ];

  const skills = [
    { category: 'Development', icon: Code2, items: ['System Development (Web & Desktop Applications)', 'Database Management & System Design', 'Full Stack Web Development'] },
    { category: 'Automation & AI', icon: Zap, items: ['Workflow Automation & AI Integration', 'n8n', 'Make', 'Zapier (free tiers)', 'No-code / low-code platforms'] },
    { category: 'Technical Skills', icon: Target, items: ['Technical Troubleshooting & Problem Solving', 'Strong Analytical Thinking', 'Adaptability'] },
    { category: 'Professional', icon: Sparkles, items: ['Team Collaboration', 'Communication', 'Continuous Learning'] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-lg font-bold tracking-tight text-primary">VFB</div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm font-medium text-muted-foreground">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Signature motif: connected-node network, evoking automation/workflow graphs */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="nodeGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="var(--primary)" />
              <line x1="10" y1="10" x2="70" y2="60" stroke="var(--primary)" strokeWidth="0.5" />
              <line x1="70" y1="60" x2="10" y2="110" stroke="var(--primary)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodeGrid)" />
        </svg>

        <div className="relative max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-xs font-semibold tracking-wide uppercase">IT Professional • Automation &amp; AI Integration</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                  Vince Froilan{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Briones
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-balance">
                I apply my skills in{' '}
                <span className="text-foreground font-semibold">software development, system automation, and AI integration</span> — continuously learning and contributing to organizational efficiency and digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_8px_30px_-4px_var(--primary)] transition-all duration-300 group"
                >
                  Start a Conversation
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Explore My Work
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl opacity-20 scale-75"></div>
                {!imgError ? (
                  <div
                    className="relative w-full h-full"
                    style={{
                      maskImage: 'radial-gradient(circle at center, black 52%, transparent 76%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, black 52%, transparent 76%)',
                    }}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Vince Froilan Briones"
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 768px) 320px, 384px"
                      onError={() => setImgError(true)}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
                      <User className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-muted-foreground tracking-wide">Photo coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
          }
        `}</style>

        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-5 text-muted-foreground animate-bounce" aria-hidden="true" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-28 px-6 border-t border-border bg-gradient-to-b from-card/40 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground/90">
              I&apos;m an IT professional seeking to apply my skills in{' '}
              <span className="text-primary font-semibold">software development, system automation, and AI integration</span>, while continuously learning and contributing to organizational efficiency and digital transformation.
            </p>
            <p>
              I&apos;m currently completing my{' '}
              <span className="text-primary font-semibold">Bachelor of Science in Information Technology</span> at Cebu Technological University – Tuburan Campus, with an expected graduation of{' '}
              <span className="text-accent font-semibold">June 2026</span>. Alongside my studies, I&apos;ve been building hands-on experience with{' '}
              <span className="text-primary font-semibold">n8n, Make, and Zapier</span> to explore how no-code and low-code platforms can automate real business processes.
            </p>
            <p>
              My background spans web and desktop application development, database management, and system design — with practical experience developing automation systems for technical operations, as well as an AI-assisted test and assessment builder.
            </p>
            <p>
              Outside of formal training, I&apos;ve also gained real-world technical experience supporting solar installation and maintenance, CCTV backup systems, and field operations — and contributed to a community initiative building and distributing solar bottle bulbs for disaster-affected areas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-28 px-6 border-t border-border bg-gradient-to-b from-background to-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Training &amp; Experience</h2>
            <p className="text-muted-foreground text-lg">Real-world projects and hands-on training I&apos;ve completed</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col"
              >
                {project.images && project.images.length > 0 && (
                  <ProjectCarousel images={project.images} title={project.title} />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4">{project.period}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <ul className="space-y-2.5 mt-auto">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground text-sm">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-28 px-6 border-t border-border bg-gradient-to-b from-card/40 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Skills &amp; Expertise</h2>
            <p className="text-muted-foreground text-lg">Technical capabilities and specializations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, sidx) => (
                      <li key={sidx} className="flex items-center gap-3 text-muted-foreground group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-125 transition-transform" />
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
      <section className="py-24 md:py-28 px-6 border-t border-border bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Currently Practicing &amp; Learning</h2>
            <p className="text-muted-foreground text-lg">Expanding my toolkit with cutting-edge automation platforms</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-primary/20 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">n8n Workflows</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building hands-on experience with n8n, learning to connect multiple APIs, create conditional logic, and design automation solutions that reduce manual, repetitive work.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-accent/20 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-accent/10 rounded-lg flex-shrink-0">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Make &amp; Zapier</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Practicing with Make and Zapier&apos;s free tiers to explore no-code and low-code automation platforms, connecting everyday tools into streamlined workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 md:py-28 px-6 border-t border-border bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Education</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl md:text-2xl font-bold mb-1">Bachelor of Science in Information Technology</h3>
              <p className="text-primary font-medium mb-1">Cebu Technological University – Tuburan Campus (CTU-TC)</p>
              <p className="text-muted-foreground text-sm">Expected Graduation: June 2026 • Tuburan, Cebu</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-xl md:text-2xl font-bold mb-1">Senior High School – ICT, Technical-Vocational-Livelihood (TVL)</h3>
              <p className="text-primary font-medium mb-1">Argao National High School</p>
              <p className="text-muted-foreground text-sm">Graduated – 2018 • Argao, Cebu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-28 px-6 border-t border-border bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let&apos;s Create Something Remarkable</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m excited to discuss opportunities where I can contribute to meaningful projects. Whether you need automation expertise, a technical collaborator, or just want to chat about automation—reach out!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:brionesvincefroilan@gmail.com"
              className="group relative bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-lg hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Send me an email</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">brionesvincefroilan@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="tel:+639935830219"
              className="group relative bg-card border border-border rounded-xl p-7 shadow-sm hover:shadow-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-0.5">Give me a call</p>
                  <p className="font-semibold group-hover:text-accent transition-colors">+63 993 583 0219</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
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