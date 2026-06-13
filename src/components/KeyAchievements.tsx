import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Clock, Users, Zap, Target, BarChart3 } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "4 Quarters Above Target",
      description: "Exceeded SQL generation and meeting-booking targets for 4 consecutive quarters through high-volume account sourcing and structured qualification.",
      icon: <Target className="w-8 h-8" />,
      company: "Earlyseed Ventures",
      category: "Sales Performance",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["4 Quarters", "SQL Generation", "Meeting Booking"]
    },
    {
      title: "40+ Weekly Touchpoints",
      description: "Executed weekly outreach across phone, LinkedIn, and email while using BANT criteria to identify and prioritize high-intent accounts.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Earlyseed Ventures",
      category: "Prospecting",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["Phone", "LinkedIn", "Email"]
    },
    {
      title: "25% Meeting-to-SQL Conversion",
      description: "Coordinated discovery meetings between startups and investors before handing sales-qualified opportunities to senior partners.",
      icon: <Zap className="w-8 h-8" />,
      company: "Earlyseed Ventures",
      category: "Lead Qualification",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["25% Conversion", "Discovery Meetings", "Qualified Handoff"]
    },
    {
      title: "50+ Active CRM Accounts",
      description: "Maintained Salesforce data hygiene, lead-stage tracking, and senior management reporting to support revenue forecasting accuracy.",
      icon: <BarChart3 className="w-8 h-8" />,
      company: "Earlyseed Ventures",
      category: "CRM Management",
      gradient: "from-orange-500 to-red-500",
      metrics: ["50+ Accounts", "Salesforce", "Forecasting"]
    },
    {
      title: "40% Audience Growth",
      description: "Launched a LinkedIn Sales Navigator campaign that generated 15+ inbound inquiries and reduced cold outreach dependency by 20%.",
      icon: <Users className="w-8 h-8" />,
      company: "Earlyseed Ventures",
      category: "Inbound Growth",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["40% Growth", "15+ Inquiries", "20% Less Cold Outreach"]
    },
    {
      title: "8 to 6 Day Turnaround",
      description: "Optimized lead qualification and research workflows, increasing quarterly account processing capacity by 25% without adding headcount.",
      icon: <Clock className="w-8 h-8" />,
      gradient: "from-teal-500 to-green-500",
      metrics: ["8 to 6 Days", "25% Capacity", "Workflow Optimization"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable sales, pipeline, and workflow impact delivered through disciplined prospecting, 
            qualification, CRM management, and revenue operations execution.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(achievement.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Quarters Above Target</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Meeting-to-SQL Conversion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Audience Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">CRM Accounts Managed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
