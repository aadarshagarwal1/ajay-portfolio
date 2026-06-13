import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Sales & Revenue Ops',
    color: 'from-purple-500 to-purple-600',
    skills: [
      'Inbound Prospecting',
      'Outbound Prospecting',
      'BANT Qualification',
      'SQL Generation',
      'Pipeline Management',
      'Objection Handling',
      'Sales-Qualified Lead Handoff'
    ]
  },
  {
    title: 'Strategy & Consulting',
    color: 'from-purple-600 to-purple-700',
    skills: [
      'Market Entry Strategy',
      'Competitive Landscape Analysis',
      'Barrier Analysis',
      'Process Re-engineering',
      'Automation Strategy',
      'Revenue Projections',
      'ESG Analysis'
    ]
  },
  {
    title: 'CRM & Project Tools',
    color: 'from-purple-500 to-violet-600',
    skills: [
      'Salesforce',
      'HubSpot Sales Hub',
      'LinkedIn Sales Navigator',
      'Advanced Excel',
      'Asana',
      'Jira',
      'monday.com'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Sales development, consulting, CRM, and analytical skills used to source qualified pipeline, improve revenue workflows, and support SaaS growth teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group">
                {/* Gradient header bar */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 pt-2">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
