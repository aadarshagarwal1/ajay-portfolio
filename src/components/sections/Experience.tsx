import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Business Development Associate',
    company: 'Earlyseed Ventures',
    period: 'Aug 2023 – Aug 2024',
    highlights: [
      'Exceeded SQL and meeting-booking targets for 4 consecutive quarters by sourcing and qualifying 40+ startup and investor accounts via high-volume omnichannel prospecting',
      'Executed 40+ weekly cold touchpoints across phone, LinkedIn, and email, using BANT criteria to prioritize high-intent accounts and accelerate the sales cycle',
      'Coordinated discovery meetings between portfolio startups and investors, achieving a 25% meeting-to-SQL conversion rate before qualified lead handoff to senior partners',
      'Managed a Salesforce CRM pipeline of 50+ active accounts, maintaining data hygiene and accurate lead-stage tracking for reporting and quarterly forecasting',
      'Launched a targeted LinkedIn Sales Navigator campaign that grew the firm’s audience by 40% in 3 months, generated 15+ inbound inquiries, and reduced cold outreach dependency by 20%',
      'Optimized lead qualification and research workflows, reducing prospect assessment turnaround from 8 to 6 days and increasing quarterly account processing capacity by 25%'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-12 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Building qualified sales pipeline through structured prospecting, BANT qualification, CRM discipline, and reliable sales-qualified handoff.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift relative overflow-hidden" style={{ background: 'hsl(var(--card) / 0.98)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent" />
                
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-body">{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 flex-grow mt-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground font-body text-sm sm:text-base">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
