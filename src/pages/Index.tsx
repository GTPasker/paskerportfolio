
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreLoader from "@/components/PreLoader";
import SkillCard from "@/components/SkillCard";
import Section from "@/components/Section";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#3A4750] font-lato">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#3A4750] opacity-90 z-0"></div>
        <StarField starCount={150} className="opacity-50" />
        <div className="container relative z-10 text-center px-4 md:px-0">
          <h1 className="font-merriweather text-4xl md:text-6xl text-white mb-6 leading-tight animate-fade-in">
            Building Trustworthy AI, <span className="text-[#F6C90E]">Layer by Layer</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in animation-delay-200">
            Applying real-world empathy and principled rigor to the future of AI Verification.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-[#F6C90E] text-[#3A4750] hover:bg-[#F6C90E]/90 rounded-md py-6 px-8 text-lg animate-fade-in animation-delay-300"
              onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Garden <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/showcase">
              <Button
                className="bg-[#F6C90E] text-[#3A4750] hover:bg-[#F6C90E]/90 rounded-md py-6 px-8 text-lg animate-fade-in animation-delay-400"
              >
                View My Showcase
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <Section 
        id="intro" 
        title="Welcome to My Garden" 
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-6">
            I blend real-world human experience with technical rigor to create AI systems worthy of trust.
            My approach is rooted in Radical Empathetic Interdependence—a framework that recognizes our 
            essential connection with each other and the systems we build.
          </p>
          <p className="text-xl">
            In a rapidly evolving AI landscape, I bring a human-centered perspective that ensures 
            technology serves our collective flourishing.
          </p>
        </div>
      </Section>
      
      {/* Journey Section */}
      <Section 
        id="journey" 
        title="My Roots: Tending Experience into Insight" 
        className="bg-[#F0F0F0]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#F6C90E] mb-10">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#F6C90E]"></div>
            <h3 className="font-merriweather text-2xl mb-3">The Human Connection</h3>
            <p className="text-lg mb-4">
              As a taxi driver, I navigated not just streets, but hundreds of unique human stories daily.
              Each passenger taught me something about trust, communication, and the varied needs of people 
              from all walks of life. This experience cultivated deep empathy and adaptive problem-solving skills.
            </p>
            <p className="text-lg">
              With a 4.99 rating over thousands of rides, I learned that reliability and genuine connection are 
              the foundations of trust—a lesson I bring to every aspect of AI verification.
            </p>
          </div>
          
          <div className="relative pl-8 border-l-2 border-[#F6C90E] mb-10">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#F6C90E]"></div>
            <h3 className="font-merriweather text-2xl mb-3">Leadership & Systems Thinking</h3>
            <p className="text-lg mb-4">
              As a supervisor, I learned to see both forest and trees—managing day-to-day operations 
              while understanding how each element contributes to the whole system. This perspective 
              is crucial when evaluating AI systems, where individual components must work together 
              responsibly.
            </p>
          </div>
          
          <div className="relative pl-8 border-l-2 border-[#F6C90E]">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#F6C90E]"></div>
            <h3 className="font-merriweather text-2xl mb-3">Continuous Growth</h3>
            <p className="text-lg">
              Each role in my journey has been soil for growth, cultivating the unique perspective 
              I bring to AI verification—one that values human experience as much as technical precision.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Philosophy Section */}
      <Section 
        id="philosophy" 
        title="My Philosophy: The Garden of Radical Empathetic Interdependence" 
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-full bg-[#3A4750] relative overflow-hidden">
                <div className="absolute inset-0 bg-opacity-80 bg-[#3A4750] z-10"></div>
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#F6C90E] animate-spin-slow z-20"></div>
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="w-4/5 h-4/5 relative">
                    {/* Garden Root System */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Central golden core representing shared foundation */}
                      <div className="w-10 h-10 bg-[#F6C90E] rounded-full z-40 shadow-lg shadow-[#F6C90E]/30"></div>
                      
                      {/* Interconnected root systems */}
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute w-1 origin-bottom"
                          style={{ 
                            height: `${40 + Math.random() * 20}%`,
                            background: `linear-gradient(to top, #F6C90E, ${i % 3 === 0 ? '#FF4E50' : i % 3 === 1 ? '#F0F0F0' : '#3A4750'}00)`,
                            top: '30%', 
                            left: '50%',
                            transform: `rotate(${i * 30}deg)`,
                            opacity: 0.7,
                            zIndex: 30,
                          }}
                        >
                          {/* Branch offshoots */}
                          {[...Array(2)].map((_, j) => (
                            <div 
                              key={j} 
                              className="absolute w-[1px]"
                              style={{ 
                                height: `${15 + Math.random() * 15}%`,
                                background: `linear-gradient(to top, ${i % 3 === 0 ? '#FF4E50' : '#F0F0F0'}90, transparent)`,
                                top: `${30 + Math.random() * 40}%`, 
                                left: '50%',
                                transform: `rotate(${(j === 0 ? -1 : 1) * (20 + Math.random() * 20)}deg)`,
                                transformOrigin: 'bottom',
                              }}
                            ></div>
                          ))}
                        </div>
                      ))}
                      
                      {/* Interconnected growth points */}
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute rounded-full"
                          style={{ 
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            backgroundColor: i % 4 === 0 ? '#FF4E50' : i % 4 === 1 ? '#F6C90E' : i % 4 === 2 ? '#F0F0F0' : '#3A4750',
                            top: `${10 + Math.random() * 80}%`, 
                            left: `${10 + Math.random() * 80}%`,
                            boxShadow: `0 0 ${5 + Math.random() * 5}px ${i % 4 === 0 ? '#FF4E50' : i % 4 === 1 ? '#F6C90E' : i % 4 === 2 ? '#F0F0F0' : '#3A4750'}50`,
                            opacity: 0.8,
                            zIndex: 35,
                            animation: `pulse ${3 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                      
                      {/* Circular connection paths */}
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute rounded-full border-[1px] opacity-30"
                          style={{ 
                            width: `${55 + i * 20}%`,
                            height: `${55 + i * 20}%`,
                            borderColor: i === 0 ? '#F6C90E' : i === 1 ? '#FF4E50' : '#F0F0F0',
                            animation: `spin ${30 + i * 10}s linear infinite ${i * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-merriweather text-2xl mb-4">Radical Empathetic Interdependence (REI)</h3>
              <p className="text-lg mb-4">
                REI recognizes that we are all interconnected—like plants in a garden sharing the same soil, 
                water, and air. In this view, my wellbeing is inseparable from yours, and our collective flourishing 
                depends on nurturing these connections.
              </p>
              <p className="text-lg mb-4">
                Just as a gardener doesn't "own" but rather "tends" their garden, REI shifts our relationship 
                with AI from control to stewardship—fostering technologies that enhance human connection rather 
                than replacing it.
              </p>
              <p className="text-lg">
                This philosophy grounds my approach to AI verification, ensuring that systems are evaluated not just 
                for accuracy, but for their contribution to our shared garden of existence.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section 
        id="skills" 
        title="My Capabilities: What I Bring to the Garden" 
        className="bg-[#F0F0F0]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-merriweather text-2xl mb-6 text-center border-b-2 border-[#F6C90E] pb-2">
                Cultivated (Transferable) Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <SkillCard 
                  title="Human-Centered Communication" 
                  description="Ability to translate complex technical concepts into accessible language, enabling meaningful dialogue with diverse stakeholders."
                  iconName="flourishing"
                />
                <SkillCard 
                  title="Adaptive Problem-Solving" 
                  description="Experience navigating ambiguous challenges with creativity and resilience, honed through years of real-time decision making."
                  iconName="solution"
                />
                <SkillCard 
                  title="Empathetic Listening" 
                  description="Developed through thousands of human interactions, allowing me to understand underlying needs and concerns beyond what's explicitly stated."
                  iconName="connection"
                />
                <SkillCard 
                  title="Systems Thinking" 
                  description="Ability to see both detailed components and holistic patterns, essential for analyzing complex AI systems and their impacts."
                  iconName="system"
                />
                <SkillCard 
                  title="Trust Building" 
                  description="Proven track record (4.99 rating) of establishing and maintaining trust through reliability, transparency, and genuine care."
                  iconName="trust"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-merriweather text-2xl mb-6 text-center border-b-2 border-[#F6C90E] pb-2">
                Emerging (Technical) Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <SkillCard 
                  title="Prompt Engineering" 
                  description="Developing expertise in crafting effective AI prompts that produce reliable, accurate, and ethical outputs."
                  iconName="code"
                />
                <SkillCard 
                  title="AI Verification Concepts" 
                  description="Studying methodologies for evaluating AI systems for reliability, bias, and ethical considerations."
                  iconName="verify"
                />
                <SkillCard 
                  title="Practical Tool Leveraging" 
                  description="Ability to identify and utilize appropriate technical tools to accomplish objectives, even without traditional coding backgrounds."
                  iconName="tools"
                />
                <SkillCard 
                  title="Ethical Framework Development" 
                  description="Creating structured approaches to evaluate and guide ethical AI development, such as the L.I.F.E. Learning Model."
                  iconName="ethics"
                />
                <SkillCard 
                  title="Continuous Learning" 
                  description="Commitment to ongoing development and adaptation to rapidly evolving AI landscape."
                  iconName="growth"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Showcase Link Section */}
      <Section 
        id="showcase-link" 
        title="The Garden's Blossoms: My Work in Action" 
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8">
            The true test of any philosophy is how it manifests in practical work. 
            Explore examples of how I've applied my principles and skills to create 
            tangible contributions to the AI ethics landscape.
          </p>
          <Link to="/showcase">
            <Button className="bg-[#3A4750] text-white hover:bg-[#3A4750]/90 py-6 px-8 text-lg">
              Explore My Showcase
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* Vision Section */}
      <Section 
        id="vision" 
        title="Tending the Future: My Vision for AI" 
        className="bg-[#3A4750] text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <h3 className="font-merriweather text-2xl mb-4 text-[#F6C90E]">AI as Compassionate Companion</h3>
              <p className="text-lg mb-6">
                I envision AI not as a replacement for human connection, but as a tool that 
                enhances our capacity for compassion, creativity, and collaboration. Like a 
                well-tended garden that provides both beauty and nourishment, AI should 
                contribute to our collective flourishing.
              </p>
              <p className="text-lg">
                This requires systems built with intention, verified with rigor, and guided 
                by ethical frameworks that center human wellbeing and ecological health.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-merriweather text-2xl mb-4 text-[#F6C90E]">My Role in Cultivation</h3>
              <p className="text-lg mb-6">
                I aim to be a bridge between technical expertise and ethical wisdom, ensuring that 
                AI development is guided by the principles of Radical Empathetic Interdependence.
              </p>
              <p className="text-lg">
                By promoting verification practices that assess systems for their broader impacts, 
                I hope to contribute to an AI ecosystem that serves as a faithful gardener of human 
                potential—helping us grow into our best possible future together.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Connect Section */}
      <Section 
        id="connect" 
        title="Join the Garden: Let's Connect" 
        className="bg-[#F0F0F0]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8">
            I believe in the power of connection. If my approach to AI verification resonates with you, 
            I'd love to explore how we might collaborate to cultivate trustworthy AI systems together.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h3 className="font-merriweather text-2xl mb-6">Get In Touch</h3>
            {/* Placeholder for contact information */}
            <p className="mb-4 text-lg">Email: [TODO: Add your email address]</p>
            <p className="mb-4 text-lg">LinkedIn: [TODO: Add your LinkedIn profile URL]</p>
            
            {/* Alternative: Contact Form Placeholder */}
            <Button className="bg-[#3A4750] text-white hover:bg-[#3A4750]/90 w-full py-6">
              Contact Me
            </Button>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Index;
