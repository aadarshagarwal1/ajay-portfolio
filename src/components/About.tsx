import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Sales & Revenue Ops",
      skills: ["Inbound Prospecting", "Outbound Prospecting", "BANT", "SQL Generation", "Pipeline Management", "Objection Handling"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Strategy & Consulting",
      skills: ["Market Entry", "Competitive Landscape", "Barrier Analysis", "Process Re-engineering", "Automation"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "CRM & Project Tools",
      skills: ["Salesforce", "HubSpot Sales Hub", "LinkedIn Sales Navigator", "Asana", "Jira", "monday.com"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Analysis",
      skills: ["Advanced Excel", "Revenue Projections", "ESG Analysis", "Market Evaluation", "Financial Modelling"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a sales development and management consultancy professional focused on building 
            qualified pipeline, improving revenue workflows, and supporting strategic growth for 
            SaaS and technology teams in Dublin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sales Development Representative and MSc Management Consultancy candidate at 
                  UCD Michael Smurfit Graduate Business School, bringing a GPA of 3.6 and hands-on 
                  experience in BANT qualification, CRM pipeline management, and sales-qualified lead handoff.
                </p>
                <p>
                  Surpassed SQL generation and meeting-booking targets for <span className="text-primary font-semibold">4 consecutive quarters</span> at 
                  Earlyseed Ventures through high-volume omnichannel prospecting across phone, LinkedIn, and email.
                </p>
                <p>
                  Experienced with Salesforce, HubSpot CRM, and LinkedIn Sales Navigator, with a focus on 
                  Dublin-based SaaS and technology sales roles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["English", "Hindi", "Tamil", "Telugu", "Malayalam"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;