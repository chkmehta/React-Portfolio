import { useState, useEffect } from 'react';
import React from 'react';

import { Github, Linkedin, Twitter, Mail, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A responsive dashboard for online stores featuring real-time analytics, inventory management, and order processing.",
      tech: ["React", "Redux", "Chart.js", "Tailwind CSS"],
      image: "public/Ecom.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task manager with drag-and-drop functionality, custom workflows, and real-time updates.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "public/Tman.jpg"
    },
    {
      id: 3,
      title: "Weather Forecast Application",
      description: "An interactive weather application showing current conditions and 5-day forecasts with responsive design for all devices.",
      tech: ["React", "Context API", "Axios", "CSS Modules"],
      image: "public/Forecast.jpg" 
    }
  ];

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-sm z-50 border-b border-neutral-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white hover:text-pink-700">Chandan</a>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-10">
            <a 
              href="#home" 
              className={`hover:text-white transition ${activeSection === 'home' ? 'text-white' : 'text-neutral-400'}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`hover:text-stroke-pink-700 transition ${activeSection === 'about' ? 'text-stroke-pink-700' : 'text-stroke-pink-700'}`}
            >
              About
            </a>
            <a 
              href="#projects" 
              className={`hover:text-white transition ${activeSection === 'projects' ? 'text-white' : 'text-neutral-400'}`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`hover:text-white transition ${activeSection === 'contact' ? 'text-white' : 'text-neutral-400'}`}
            >
              Contact
            </a>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-neutral-900 z-40 pt-20">
            <nav className="flex flex-col items-center space-y-8 text-2xl p-8">
              <a 
                href="#home" 
                className={`hover:text-white transition ${activeSection === 'home' ? 'text-white' : 'text-neutral-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`hover:text-white transition ${activeSection === 'about' ? 'text-white' : 'text-neutral-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className={`hover:text-white transition ${activeSection === 'projects' ? 'text-white' : 'text-neutral-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`hover:text-white transition ${activeSection === 'contact' ? 'text-white' : 'text-neutral-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                  <Twitter size={24} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero/Intro Section */}
        <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <p className="text-emerald-400 mb-4 font-medium">Frontend Developer</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hello, I'm <span className="text-emerald-400 hover:text-emerald-400">Chandan</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl">
                I build exceptional and accessible digital experiences for the web.
              </p>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="#projects" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-neutral-900 px-8 py-3 rounded-md font-medium transition"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="border border-neutral-700 hover:border-neutral-500 px-8 py-3 rounded-md font-medium transition"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex space-x-6 mt-16">
                <a href="https://github.com/chkmehta" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/chandan-mehta-60a5a2195/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://x.com/chkmehta" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-neutral-800">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <span className="text-emerald-400 font-medium">About Me</span>
              {/* <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Who I am</h2> */}
              
              <div className="grid md:grid-cols-2 gap-16">
                <div className="flex justify-center items-center">
                  <img src="public/c27.jpg" alt="Chandan's image" className="rounded-full shadow-lg w-80 h-80 object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Background</h3>
                  <p className="text-neutral-300 mb-6">
                    I'm a passionate frontend developer with 5 years of experience building modern web applications. 
                    I specialize in creating intuitive, responsive user interfaces that provide excellent user experiences.
                  </p>
                  <p className="text-neutral-300 mb-8">
                    My approach combines clean code, performance optimization, and thoughtful design to create 
                    applications that are both powerful and easy to use.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4">My Skills</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">React</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">JavaScript</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">TypeScript</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">HTML5</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">CSS3</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">Tailwind CSS</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">Node</span>
                    <span className="bg-neutral-700 px-4 py-2 rounded-md">Next.js</span>
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-neutral-900 px-6 py-3 rounded-md font-medium transition"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <span className="text-emerald-400 font-medium">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Featured Projects</h2>
              
              <div className="space-y-24">
                {projects.map((project, index) => (
                  <div key={project.id} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="rounded-lg shadow-lg w-full hover:opacity-80 transition duration-300" 
                      />
                    </div>
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-neutral-300 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-neutral-800 px-3 py-1 rounded text-sm">{tech}</span>
                        ))}
                      </div>
                      <div className="flex space-x-6">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium"
                        >
                          Demo <ExternalLink size={16} className="ml-1" />
                        </a>
                        <a 
                          href="#" 
                          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium"
                        >
                          Code <Github size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-neutral-800">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <span className="text-emerald-400 font-medium">Contact</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Get In Touch</h2>
              <p className="text-neutral-300 mb-10">
                I'm currently available for freelance work and open to new opportunities.
                Feel free to reach out if you'd like to connect!
              </p>
              
              <div className="grid gap-6 mb-12">
                <div className="bg-neutral-700 p-6 rounded-lg">
                  <Mail size={24} className="mx-auto mb-4 text-emerald-400" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:chandanmehta0101@gmail.com" className="text-neutral-300 hover:text-emerald-400 transition">
                  chandanmehta0101@gmail.com
                  </a>
                </div>
              </div>
              
              <a 
                href="mailto:chandan@example.com" 
                className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-neutral-900 px-8 py-3 rounded-md font-medium transition"
              >
                Send me an email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <p className="mb-4 md:mb-0 text-neutral-400">© 2025 Chandan. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://x.com/chkmehta" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chandan-mehta-60a5a2195/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/chkmehta" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

