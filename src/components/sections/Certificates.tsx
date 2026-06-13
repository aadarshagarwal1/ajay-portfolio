import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: 'Certified Administrator',
    description: 'Asana platform certification for project and workflow management.',
  },
  {
    title: 'Platform Administrator',
    description: 'Salesforce certification in progress, expected Q3 2026.',
  },
  {
    title: 'Revenue Operations & Sales Hub',
    description: 'HubSpot CRM certification covering revenue operations and Sales Hub workflows.',
  },
  {
    title: 'Market Concepts & ESG',
    description: 'Bloomberg certification in market concepts and ESG fundamentals.',
  },
  {
    title: 'Financial Modelling & Strategy Consulting',
    description: 'Forage program covering financial modelling and consulting strategy fundamentals.',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Certifications and professional learning across CRM administration, revenue operations, ESG, financial modelling, and consulting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-lift flex flex-col relative overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-display font-semibold text-foreground leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body mt-2">
                      {cert.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-xs text-primary font-display font-semibold">
                    Professional Certification
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
