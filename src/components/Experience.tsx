import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Earlyseed Ventures",
      position: "Business Development Associate",
      location: "India",
      duration: "Aug 2023 – Aug 2024",
      logo: "E",
      achievements: [
        {
          impact: "4 consecutive quarters above target",
          description: "Exceeded SQL and meeting-booking targets by sourcing and qualifying 40+ startup and investor accounts through high-volume omnichannel prospecting."
        },
        {
          impact: "40+ weekly cold touchpoints",
          description: "Executed phone, LinkedIn, and email outreach while applying BANT criteria to prioritize high-intent accounts and accelerate the sales cycle."
        },
        {
          impact: "25% meeting-to-SQL conversion",
          description: "Coordinated discovery meetings between portfolio startups and investors before handing qualified leads to senior partners for early-stage funding conversations."
        },
        {
          impact: "50+ active CRM accounts",
          description: "Managed Salesforce pipeline hygiene, lead-stage tracking, and senior management reporting to support accurate quarterly revenue forecasting."
        },
        {
          impact: "40% audience growth",
          description: "Launched a targeted LinkedIn Sales Navigator campaign that generated 15+ inbound inquiries and reduced cold outreach dependency by 20%."
        },
        {
          impact: "25% capacity increase",
          description: "Optimized lead qualification and research workflows, reducing prospect assessment turnaround from 8 to 6 days without additional headcount."
        }
      ],
      technologies: ["Salesforce", "HubSpot CRM", "LinkedIn Sales Navigator", "BANT", "Cold Outreach", "Pipeline Reporting"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building qualified sales pipeline and delivering measurable revenue operations impact 
            through targeted prospecting, structured qualification, and CRM discipline.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div className="relative">
                  {/* Desktop: Normal stacked layout */}
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">
                            {achievement.impact}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Carousel layout */}
                  <div className="md:hidden">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem key={achIndex} className="pl-2 basis-full">
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-primary" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">
                                  {achievement.impact}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                    
                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      {exp.achievements.map((_, achIndex) => (
                        <div
                          key={achIndex}
                          className="w-2 h-2 rounded-full bg-muted-foreground/30"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Tools & Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;