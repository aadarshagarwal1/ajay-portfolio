import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'MSc Management Consultancy',
    school: 'UCD Michael Smurfit Graduate Business School',
    details: 'Dublin, Ireland',
    period: 'Sep 2024 – Aug 2025',
    gpa: '3.6',
    icon: GraduationCap
  },
  {
    degree: 'Bachelor of Business Administration',
    school: 'PSG College of Arts & Science',
    details: 'Coimbatore, India',
    period: 'Sep 2020 – May 2023',
    icon: GraduationCap
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Academic foundation in management consultancy, business administration, strategy, and revenue-focused problem solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift group relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 font-body">
                    {edu.details}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground font-body">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                        <Award className="w-3.5 h-3.5 text-primary" />
                        <span className="font-display font-semibold text-primary">GPA: {edu.gpa}</span>
                      </div>
                    )}
                    {edu.location && (
                      <span className="text-muted-foreground font-body">{edu.location}</span>
                    )}
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

export default Education;
