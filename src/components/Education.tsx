const Education = () => {
  const education = [
    {
      degree: "MSc Management Consultancy",
      school: "UCD Michael Smurfit Graduate Business School, Dublin",
      period: "Sep 2024 – Aug 2025",
      gpa: "3.6",
      coursework: ["Management Consultancy", "Strategy", "Market Analysis", "Process Improvement"],
      logo: "UCD"
    },
    {
      degree: "Bachelor of Business Administration",
      school: "PSG College of Arts & Science, Coimbatore, India",
      period: "Sep 2020 – May 2023",
      coursework: ["Business Administration", "Management", "Operations", "Business Strategy"],
      logo: "PSG"
    },
    {
      degree: "Professional Certifications",
      school: "Asana, Salesforce, HubSpot, Bloomberg, Forage",
      period: "Ongoing",
      coursework: [
        "Certified Administrator, Asana",
        "Platform Administrator, Salesforce - in progress, expected Q3 2026",
        "Revenue Operations & Sales Hub, HubSpot CRM",
        "Market Concepts & ESG, Bloomberg",
        "Financial Modelling & Strategy Consulting, Forage"
      ],
      logo: "CERT"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic training in management consultancy, business administration, revenue operations, and strategy
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-gray-300 font-medium">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-green-400 font-semibold">GPA: {edu.gpa}</p>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  {edu.coursework.length > 1 ? "Relevant Coursework:" : "Achievement:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;