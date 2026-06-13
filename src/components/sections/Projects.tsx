import { motion } from 'framer-motion';
import { Rocket, Users, Brain } from 'lucide-react';

const projects = [
  {
    title: 'PwC Ireland - AI Adoption Strategy',
    subtitle: 'Consulting Engagement',
    period: '2025',
    description:
      'Researched AI adoption barriers across Irish organizations and translated findings into strategic recommendations for a PwC stakeholder panel.',
    highlights: [
      'Spearheaded research across 12+ Irish organizations using a custom barrier-analysis framework',
      'Identified organizational, operational, and technology adoption barriers',
      'Presented actionable recommendations to a PwC stakeholder panel'
    ],
    tags: ['AI Adoption', 'Barrier Analysis', 'Research', 'Strategy'],
    icon: Brain
  },
  {
    title: 'Ivy Capital - Market Entry Strategy',
    subtitle: 'US Self-Storage Operator, UK Expansion',
    period: '2025',
    description:
      'Developed a phased UK market entry roadmap by evaluating regional competition, regulatory requirements, and revenue potential.',
    highlights: [
      'Executed competitive landscape analysis across 6 UK regional markets',
      'Assessed regulatory requirements and operating constraints',
      'Built a phased market entry roadmap with revenue projections'
    ],
    tags: ['Market Entry', 'Competitive Analysis', 'Revenue Projections', 'Regulatory Review'],
    icon: Rocket
  },
  {
    title: 'AudioBrand - Automation Strategy',
    subtitle: 'Process Redesign',
    period: '2025',
    description:
      'Mapped operational workflows and identified automation opportunities to improve efficiency and reduce manual effort.',
    highlights: [
      'Mapped 3 core operational workflows using Asana and process re-engineering methodologies',
      'Prioritized automation opportunities based on operational impact and implementation effort',
      'Produced an implementation roadmap projected to reduce manual effort by 30%'
    ],
    tags: ['Automation', 'Asana', 'Process Mapping', 'Workflow Redesign'],
    icon: Users
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Consulting and strategy engagements spanning AI adoption, market entry, automation, process redesign, and revenue-focused analysis.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group w-full max-w-3xl"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift flex flex-col relative overflow-hidden">
                {/* Top glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground font-body">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 font-body flex-grow">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-body">
                        <span className="text-primary shrink-0">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
