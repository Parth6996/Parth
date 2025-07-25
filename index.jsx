import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Calendar, MapPin, ChevronDown, Star, Sparkles, Code, Eye, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Progress } from './components/ui/progress';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function App() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    "Strategic Communication": { 
      skills: ["Public Relations", "Media Relations", "Strategic Planning"],
      level: 90,
      color: "from-purple-500 to-pink-500"
    },
    "Social Media Strategy": { 
      skills: ["Event Planning", "Community Engagement", "Content Marketing"],
      level: 85,
      color: "from-cyan-500 to-blue-500"
    },
    "Leadership": { 
      skills: ["Problem Solving", "Performance Analysis", "Critical Thinking"],
      level: 88,
      color: "from-green-500 to-teal-500"
    },
    "Technology": { 
      skills: ["Active Learning", "Performance Metrics"],
      level: 82,
      color: "from-orange-500 to-red-500"
    }
  };

  const projects = [
    {
      title: "College Event Management",
      description: "Spearheaded comprehensive event management initiatives across Anchorage and Spade Shivaji societies, orchestrating large-scale college events with strategic planning, seamless execution, and exceptional stakeholder coordination that engaged over 5,000 students.",
      technologies: ["Strategic Planning", "Event Coordination", "Public Relations", "Digital Marketing"],
      category: "Leadership Project",
      status: "Completed",
      impact: "5,000+ Students Engaged",
      highlights: [
        "Led planning and execution for Anchorage (3,000 students) and Spade (2,000 students)",
        "Implemented strategic communication protocols across multiple stakeholder groups",
        "Coordinated seamlessly with faculty, administration, and student bodies",
        "Achieved 95% event success rate with exceptional participant satisfaction"
      ],
      liveDemo: "https://www.instagram.com/shivaji_cultural/?igsh=OGhiMmU3eHhsOWhp#",
      secondaryDemo: "https://www.instagram.com/spade.shivaji/?igsh=MWpiY2hhd3N1dGg5cQ%3D%3D#",
      sourceCode: "#",
      year: "2024-2025"
    },
    {
      title: "Recruitment Marketing Campaign",
      description: "Revolutionized digital marketing strategy for Talent Wing Consultants through masterful Canva design excellence, creating visually stunning templates and content strategies that transformed brand communication and candidate acquisition processes.",
      technologies: ["Canva Excellence", "Content Marketing", "Social Media Strategy", "Brand Communication", "Template Design"],
      category: "Marketing Project",
      status: "Completed",
      impact: "200% Engagement Increase",
      highlights: [
        "Mastered Canva to create exceptional visual templates and marketing materials",
        "Designed targeted social media strategies with superior visual storytelling",
        "Created content perfectly tailored to hiring trends and audience behavior",
        "Enhanced brand visibility and client engagement through design excellence"
      ],
      liveDemo: "https://www.canva.com/design/DAGtf67YOa8/uCk9kiUe7NQWSX4gMPIp9A/edit?utm_content=DAGtf67YOa8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      sourceCode: "#",
      year: "2025"
    },
    {
      title: "Audit Process Optimization",
      description: "Streamlined audit procedures for various trading and manufacturing concerns, implementing systematic approaches to financial analysis and compliance checking with remarkable efficiency and precision.",
      technologies: ["Financial Analysis", "Process Optimization", "Compliance", "Documentation"],
      category: "Professional Project",
      status: "Completed",
      impact: "30% Time Reduction",
      highlights: [
        "Conducted comprehensive financial audits with exceptional attention to detail",
        "Identified and resolved critical discrepancies saving clients significant resources",
        "Streamlined financial processes through innovative systematic approaches",
        "Improved compliance procedures with industry-leading methodologies"
      ],
      liveDemo: "#",
      sourceCode: "#",
      year: "2024-2025"
    },
    {
      title: "Strategic Communication & Analytics Framework",
      description: "Developed and implemented a comprehensive communication strategy integrated with advanced performance analytics, creating a unified framework for multi-stakeholder environments that drives measurable outcomes and strategic decision-making.",
      technologies: ["Strategic Planning", "Stakeholder Management", "Performance Analytics", "Data-Driven Communication", "Metrics Tracking"],
      category: "Strategy & Analytics Project",
      status: "Completed",
      impact: "Enhanced Decision-Making & Relations",
      highlights: [
        "Built robust internal and external networks through strategic relationship management",
        "Implemented comprehensive analytics framework for tracking strategic outcomes",
        "Enhanced multicultural event marketing with data-driven insights",
        "Created performance tracking systems that improved operational efficiency by 40%"
      ],
      liveDemo: null,
      sourceCode: "#",
      year: "2024"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Arts - Economics Major and English (Minor)",
      school: "Shivaji College, University of Delhi",
      period: "Aug 2023 - June 2026",
      status: "Current"
    },
    {
      degree: "Senior Secondary - Commerce without Maths",
      school: "Jodhamal Public School, Jammu (CBSE)",
      period: "April 2021 - May 2023",
      status: "Completed"
    },
    {
      degree: "Secondary",
      school: "Jodhamal Public School, Jammu (CBSE)",
      period: "April 2010 - March 2021",
      status: "Completed"
    }
  ];

  const experience = [
    {
      title: "General Secretary",
      company: "Spade Shivaji",
      period: "July 2024 - July 2025",
      type: "Leadership Role",
      responsibilities: [
        "General Secretary leading all internal planning and execution of major college events and initiatives.",
        "Worked with students, faculty and administration with a visible commitment and attention to detail.",
        "Built strong internal and external networks through strategic public relations.",
        "Key decision maker on multicultural, sponsored, and event marketing.",
        "The go-to problem solver and driving force behind every successful outcome."
      ]
    },
    {
      title: "Recruitment Marketing Manager",
      company: "Talent Wing Consultants LLP",
      period: "Jan 2025 - March 2025",
      type: "Strategic Role",
      responsibilities: [
        "Content Creator & Strategist at Talent Wing Consultants, leading brand communication for a fast-growing consultancy firm.",
        "Designed social media strategies to attract top per cent candidates and corporate clients.",
        "Implementing innovative recruitment strategies including content tailored to hiring trends and audience behavior.",
        "Collaborated with the recruitment team to align content strategies and streamline operations."
      ]
    },
    {
      title: "Auditing",
      company: "Gupta Gupta & Associates LLP",
      period: "Jan 2024 - August 2024",
      type: "Professional Experience"
    },
    {
      title: "Public Relations Executive - Anchorage",
      company: "Spade Shivaji",
      period: "October 2024 - February 2025",
      type: "Executive Role"
    }
  ];

  const certifications = [
    {
      title: "Auditing",
      issuer: "Gupta Gupta & Associates LLP",
      date: "June 2024",
      verified: true
    },
    {
      title: "Recruitment Marketing Manager",
      issuer: "Talent Wing Consultants LLP",
      date: "May 2025",
      verified: true
    },
    {
      title: "General Secretary",
      issuer: "Spade Shivaji",
      date: "Jan 2025",
      verified: true
    },
    {
      title: "Public Relations Executive - Anchorage",
      issuer: "Spade Shivaji",
      date: "Dec 2024",
      verified: true
    }
  ];

  const internships = [
    {
      title: "Auditing",
      company: "Gupta Gupta & Associates LLP",
      period: "May 2024 - August 2024 | Jan 2025 - Feb 2025",
      impact: "High",
      responsibilities: [
        "Conducted Audit of various trading and manufacturing concerns.",
        "Assisted in various Audit procedures and TDS returns.",
        "Played a key role in identifying discrepancies and streamlining financial processes for clients."
      ]
    },
    {
      title: "Recruitment Marketing Manager",
      company: "Talent Wing Consultants LLP",
      period: "Jan 2025 - March 2025",
      impact: "High",
      responsibilities: [
        "Led content strategy and recruitment marketing efforts to enhance Talent Wing Consultant's brand presence and client engagement.",
        "Developed targeted communication to attract top-tier candidates while serving diverse industries.",
        "Developed employer branding campaigns to position clients as preferred workplaces.",
        "Bridged gap between recruitment teams through social media engagement in various industries."
      ]
    },
    {
      title: "Technical Head",
      company: "Democratic Shivaji College",
      period: "October 2024 - May 2025",
      impact: "Medium",
      responsibilities: [
        "Served as Technical Head, leading the design and visual communication for all major events.",
        "Designed impactful event posters and digital creatives using Canva, enhancing event branding and engagement.",
        "Managed technical coordination and ensured smooth execution of event branding and promotions."
      ]
    }
  ];

  // Particle component
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full animate-particle opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative">
      <Particles />
      
      {/* Mouse follower */}
      <div 
        className="fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(0.8)',
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"
          style={{ y: backgroundY }}
        />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full border border-purple-500/30 backdrop-blur"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
              <Sparkles className="w-4 h-4 text-purple-500" />
            </motion.div>
            
            <motion.h1 
              className="text-7xl font-light tracking-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              PARTH <span className="font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">MAHAJAN</span>
            </motion.h1>
            
            <motion.div 
              className="flex items-center justify-center gap-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>New Delhi, India</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-6 pt-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { href: "tel:+919541012236", icon: Phone, text: "+91 9541012236" },
                { href: "mailto:mahajanparth6996@gmail.com", icon: Mail, text: "mahajanparth6996@gmail.com" },
                { href: "https://www.linkedin.com/in/parth-mahajan-3aa20a233/", icon: Linkedin, text: "LinkedIn" },
                { href: "https://parth6996.github.io/Parth-Portfolio/", icon: ExternalLink, text: "Portfolio" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-purple-400 transition-all duration-300 hover:scale-110 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  {link.text}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-auto w-6 h-6 text-purple-500"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-20 pb-20">
        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border border-purple-500/20 shadow-2xl bg-gradient-to-br from-card/80 to-purple-900/10 backdrop-blur-xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/40">
            <CardHeader>
              <CardTitle className="text-3xl font-light tracking-wide bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed text-lg">
              An accomplished strategic leader and visionary communicator who has successfully transformed organizational landscapes through exceptional leadership excellence. Having recently concluded a highly impactful tenure as General Secretary of Spade Shivaji Society, where I orchestrated initiatives reaching over 5,000 students, I now leverage my proven track record in recruitment marketing, financial auditing, and strategic communication to drive unprecedented results. As a former Recruitment Marketing Manager at Talent Wing Consultants, I revolutionized brand narratives and market positioning through innovative digital strategies and design mastery. With an elite combination of analytical precision, creative brilliance, and strategic foresight, I consistently deliver transformational outcomes that set new industry benchmarks and redefine what's possible in leadership and communication excellence.
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide mb-12 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillData], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-card/80 to-purple-900/10 backdrop-blur-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-medium">{category}</CardTitle>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-purple-400">{skillData.level}%</span>
                        <Star className="w-4 h-4 text-yellow-500" />
                      </div>
                    </div>
                    <Progress 
                      value={skillData.level} 
                      className="h-2 bg-muted/50"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillData.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`px-3 py-1 bg-gradient-to-r ${skillData.color} text-white border-0 hover:scale-110 transition-transform cursor-pointer`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide mb-12 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-card/80 to-orange-900/10 backdrop-blur-xl hover:shadow-orange-500/20 transition-all duration-500 group h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{project.year}</span>
                          <span>•</span>
                          <span className={`${project.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {project.status}
                          </span>
                          <span>•</span>
                          <span className="text-orange-400">{project.impact}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-300 hover:bg-orange-500/10 transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <AnimatePresence>
                      {hoveredProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <h4 className="font-medium text-orange-300 mb-2">Key Highlights:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.liveDemo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                            onClick={() => window.open(project.liveDemo, '_blank')}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            {project.title === "College Event Management" ? "Anchorage" : "View Project"}
                          </Button>
                        </motion.div>
                      )}
                      {project.secondaryDemo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                            onClick={() => window.open(project.secondaryDemo, '_blank')}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Spade
                          </Button>
                        </motion.div>
                      )}
                      {project.sourceCode !== "#" && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                            onClick={() => window.open(project.sourceCode, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide mb-12 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-card/80 to-green-900/10 backdrop-blur-xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-102 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{edu.degree}</h3>
                        <p className="text-green-400 group-hover:text-green-300 transition-colors">{edu.school}</p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-sm text-muted-foreground">Status: {edu.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-green-500" />
                        {edu.period}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide mb-12 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Work &amp; Leadership Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-card/80 to-blue-900/10 backdrop-blur-xl hover:shadow-blue-500/20 transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                            {exp.type}
                          </Badge>
                        </div>
                        <p className="text-blue-400 group-hover:text-blue-300 transition-colors">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  {exp.responsibilities && (
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: expandedCard === index ? 1 : 0.7,
                          height: expandedCard === index ? 'auto' : '60px'
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 text-muted-foreground">
                          {exp.responsibilities.map((resp, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="mt-3 text-blue-400 hover:text-blue-300"
                      >
                        {expandedCard === index ? 'Show Less' : 'Show More'}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expandedCard === index ? 'rotate-180' : ''}`} />
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide mb-12 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-card/80 to-yellow-900/10 backdrop-blur-xl hover:shadow-yellow-500/20 transition-all duration-500">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-lg">{cert.title}</h3>
                        {cert.verified && (
                          <div className="flex items-center gap-1 text-green-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-xs">Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-yellow-400">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Internships */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-wide mb-12 bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Internships
          </h2>
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-card/80 to-pink-900/10 backdrop-blur-xl hover:shadow-pink-500/20 transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{internship.title}</CardTitle>
                          <Badge 
                            className={`border-0 text-white ${
                              internship.impact === 'High' 
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                : 'bg-gradient-to-r from-orange-500 to-yellow-500'
                            }`}
                          >
                            {internship.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-pink-400 group-hover:text-pink-300 transition-colors">{internship.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        {internship.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {internship.responsibilities.map((resp, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer 
        className="border-t border-purple-500/20 bg-gradient-to-r from-card/50 to-purple-900/10 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <motion.div
              className="flex justify-center space-x-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { href: "tel:+919541012236", icon: Phone },
                { href: "mailto:mahajanparth6996@gmail.com", icon: Mail },
                { href: "https://www.linkedin.com/in/parth-mahajan-3aa20a233/", icon: Linkedin },
                { href: "https://parth6996.github.io/Parth-Portfolio/", icon: ExternalLink }
              ].map(({ href, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:text-purple-400 hover:bg-purple-500/10"
                    onClick={() => window.open(href, '_blank')}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-muted-foreground">
              &copy; 2025 Parth Mahajan. All rights reserved.
            </p>
            <p className="text-sm text-purple-400">
             
           </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
